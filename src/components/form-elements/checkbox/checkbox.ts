/**
 * Sunrise UI - Checkbox
 */
import { css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import styles from './checkbox.scss';

/**
 *  @slot default - Checkbox Label Content
 */
@customElement('srui-checkbox')

export class Checkbox extends LitElement {
  /**
	 * Disable checkbox
	 * @attr
	 */
  @property({type: Boolean}) disabled: boolean = false;

  /**
	 * Check state
	 * @attr
	 */
  @property({type: Boolean, reflect: true}) checked: boolean = false;

  /**
	 * Round checkbox
	 * @attr
	 */
  @property({type: Boolean}) round: boolean = false;

  /**
	 * Medium size checkbox
	 * @attr
	 */
  @property({type: Boolean}) medium: boolean = false;

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  constructor() {
    super();
  }

  render(): TemplateResult {
    const checkBoxClasses: {
      'sr-checkbox--round': boolean;
      'sr-checkbox--medium': boolean;
      'sr-checkbox--disabled': boolean;
      'sr-checkbox--checked': boolean } = {
        'sr-checkbox--round': this.round,
        'sr-checkbox--medium': this.medium,
        'sr-checkbox--disabled': this.disabled,
        'sr-checkbox--checked': this.checked
    };

    return html`
      <div
        class="sr-checkbox ${classMap(checkBoxClasses)}"
        @click="${this.handleClick}">
          <div class="sr-checkbox__box"></div>
          <span class="sr-checkbox__text"><slot /></span>
      </div>
    `;
  }

  handleClick(): void {
    if (!this.disabled) {
      this.checked = !this.checked;

      /**
       * Dispatched when the checked property changes due to a user interaction.
       * @event srui-change
       */
      this.dispatchEvent(new CustomEvent('srui-change', {
        composed: true,
        bubbles: true,
        detail: this.checked
      }));
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-checkbox': Checkbox;
  }
}
