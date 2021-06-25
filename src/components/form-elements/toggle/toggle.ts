/**
 * Sunrise UI - Toggle
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import styles from './toggle.scss';

/**
 * This component can be used but eventually using the Angular Material equivalent is preferred,
 * at least in a form context.
 *
 * @slot default - Toggle label content
 */
@customElement ('srui-toggle')

export class Toggle extends LitElement {
  /**
   * Toggle label
   * @attr
   */
  @property({type: String}) label: string = '';
  /**
   * Disable toggle
   * @attr
   */
  @property({type: Boolean}) disabled: boolean = false;

  /**
   * Toggle state
   * @attr
   */
  @property({type: Boolean, reflect: true}) checked: boolean = false;

  /**
   * Size of the checkbox (small, medium, large)
   */
  @property({type: String}) size: string = 'medium';

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  constructor() {
    super();
  }

  render(): TemplateResult {
    const sizeClass: string = `sr-toggle--${this.size}`;
    const toggleClasses: any = {
      'sr-toggle--disabled': this.disabled,
      'sr-toggle--checked': this.checked,
      [sizeClass]: true,
    };
    return html`
      <div
        class='sr-toggle ${classMap(toggleClasses)}'
        @click='${this.handleClick}'>
        <div class='sr-toggle__box'><div class='sr-toggle__knob'></div></div>
        ${this.label !== '' ? html`<span class='sr-toggle__text'>${this.label}</span>` : html``}
      </div>
    `;
  }

  handleClick(): void {
    if (!this.disabled) {
      this.checked = !this.checked;
      /**
       * Triggers a change event when clicked and state changes. Event detail has the new state
       * @event srui-change
       */
      this.dispatchEvent(new CustomEvent('srui-change', {
        detail: this.checked
      }));
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-toggle': Toggle;
  }
}
