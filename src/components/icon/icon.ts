/**
 * Sunrise UI - Modal Widget
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import styles from './icon.scss';

/**
 * Icon component that offers two different usages: font icon name and image src
 * Supports multiple standard sizes and colors (colors just for font icons)
 */
@customElement('srui-icon')

export class Icon extends LitElement {
  /**
   * Icon size ['tiny', 'small', 'medium', 'large', 'inherit']
   * inherit size only works with icon fonts and the icon will inherit the ancestor element font size
   * @attr
   */
  @property({type: String}) size: string = 'medium';

  /**
   * Location of the image for image based icons - This attribute is ignored if icon attribute is given
   * @attr
   */
  @property({type: String}) iconSrc: string = '';

  /**
   * Icon name: must match an existent UI font name
   */
  @property({type: String}) icon: string = '';

  /**
   * Icon color: must match one of the themes css colors:
   * [primary-color, primary-color-dark, secondary-color, secondary-color-light,
   * promo-color, valid-color, invalid-color, dark-color, grey-color, white-color, alpha-color, inherit]
   */
  @property({type: String}) color: string = 'primary-color';

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  constructor() {
    super();
  }

  render(): TemplateResult {
    if (this.icon) {
      return html`
        <div
          class="sr-icon srui-icon__icon--${this.icon} sr-icon--${this.size}"
          style="color: var(${'--srui-' + this.color})">
        </div>
      `;
    }
    return html`
      <div class="sr-icon sr-icon--${this.size}">
        <img src="${this.iconSrc}">
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-icon': Icon;
  }
}
