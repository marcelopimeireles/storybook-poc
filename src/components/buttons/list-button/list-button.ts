/**
 * Sunrise UI - Icon Button
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import '../../icon/icon.ts';
import styles from './list-button.scss';

/**
 * List Button component with an icon
 *
 * @slot titlte - List button title
 * @slot sub-title - List button sub-title
 */
@customElement('srui-list-button')

export class ListButton extends LitElement {
  /**
   * Disables button
   * @attr
   */
  @property({type: Boolean}) disabled: boolean = false;

  /**
   * Icon name (for font icons)
   * @attr
   */
  @property({type: String}) icon: string = '';

  /**
   * Icon src (for image icons)
   * @attr
   */
  @property({type: String}) iconSrc: string = '';

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  constructor() {
    super();
    this.addEventListener('click', this.clickHandler);
  }

  render(): TemplateResult {
    const classes: any = {
      'sr-list-button': true,
    };
    return html`
      <button
        class="${classMap(classes)}"
        ?disabled="${this.disabled}">
        <div class="sr-list-button__icon">
          ${this.iconSrc || this.icon ? html`
            <srui-icon
              class="sr-list-button__main-icon"
              icon="${this.icon}"
              iconsrc="${this.iconSrc}"
              size="normal"
            ></srui-icon>
          ` : ''}
        </div>
        <div class="sr-list-button__text-holder">
          <span class="sr-list-button__title"><slot name="title"></span>
          <span class="sr-list-button__sub-title"><slot name="sub-title"></span>
        </div>
        <srui-icon class="sr-list-button__arrow" icon="arrow-right-m" size="normal" color="gray2-color"></srui-icon>
      </button>
    `;
  }

  clickHandler(event: Event): void {
    if (this.disabled) {
      event.stopImmediatePropagation();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-list-button': ListButton;
  }
}
