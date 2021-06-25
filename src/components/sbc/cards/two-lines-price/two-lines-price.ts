/**
 * Sunrise UI - SBC - Two lines price element
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import styles from './two-lines-price.scss';

@customElement('srui-two-lines-price')

export class TwoLinesPrice extends LitElement {
  /**
   * Element label
   * @attr
   */
  @property({type: String}) label: string = '';

  /**
   * Currency
   * @attr
   */
  @property({type: String}) currency: string = '';

  /**
   * Price value
   * @attr
   */
  @property({type: String}) value: string = '';

  /**
   * Text color
   * @attr
   */
  @property({type: String}) textColor: string = '#545454)';

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  constructor() {
    super();
  }

  render(): TemplateResult {
    const classes: any = {
      'sr-two-lines-price': true
    };
    return html`
      <div class="${classMap(classes)}" style="color: ${this.textColor}">
        <div class="sr-two-lines-price__label">${this.label} (${this.currency})</div>
        <div class="sr-two-lines-price__value">${this.value}</div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-two-lines-price': TwoLinesPrice;
  }
}
