/**
 * Sunrise UI - SBC - Menu item
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import styles from './menu-item.scss';
import '../../../icon/icon.ts';

@customElement('srui-menu-item')

export class MenuItem extends LitElement {
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
  /**
   * Item label
   * @attr
   */
  @property({type: String}) label: string = '';

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  constructor() {
    super();
  }

  render(): TemplateResult {
    const classes: any = {
      'sr-menu-item': true
    };
    return html`
      <div class="${classMap(classes)}">
        ${this.icon !== '' || this.iconSrc !== '' ? html`
            <srui-icon icon="${this.icon ? this.icon : ''}" iconsrc="${this.iconSrc}" size="small" color="gray4-color"></srui-icon>
        ` : html``}
        <div class="sr-menu-item__label">${this.label}</div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-menu-item': MenuItem;
  }
}
