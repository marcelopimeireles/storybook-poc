/**
 * Sunrise UI - SBC - Bucket item
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import styles from './bucket-item.scss';
import '../../../icon/icon.ts';

@customElement('srui-bucket-item')

export class BucketItem extends LitElement {
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
   * Bucket item type
   * @attr
   */
  @property({type: String}) type: string = '';

  /**
   * Bucket item description
   * @attr
   */
  @property({type: String}) description: string = '';

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  constructor() {
    super();
  }

  render(): TemplateResult {
    const classes: any = {
      'sr-bucket-item': true
    };
    return html`
      <div class="${classMap(classes)}">
        <srui-icon icon="${this.icon ? this.icon : ''}" iconsrc="${this.iconSrc} "size="small" color="gray4-color"></srui-icon>
        <div class="sr-bucket-item__type">${this.type}:</div>
        <div class="sr-bucket-item__description">${this.description}</div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-bucket-item': BucketItem;
  }
}
