/**
 * Sunrise UI - SBC - registered-credit-card-block
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import '../../cards/two-lines-date/two-lines-date.ts';
import '../../../icon/icon.ts';
import styles from './registered-credit-card-block.scss';

/**
 * @slot card_image - Slot to image of the credit card type
 */

/**
 * @slot button_area - Slot to add a button (or similar) which will provide actions for this option
 */

@customElement('srui-registered-credit-card-block')

export class RegisteredCreditCardBlock extends LitElement {

  /**
   * Costumer full name
   * @attr
   */
  @property({type: String}) name: string = '';

  /**
   * Credit card number
   * @attr
   */
  @property({type: String}) ccNumber: string = '';

  /**
   * Credit card Expiration Date
   * @attr
   */
  @property({type: String}) ccExpDateLabel: string = '';

  /**
   * Credit card Expiration Date
   * @attr
   */
  @property({type: String}) ccExpDate: string = '';

  /**
   * Credit card CVV label
   * @attr
   */
  @property({type: String}) ccCVVLabel: string = '';

  /**
   * Credit card CVV
   * @attr
   */
  @property({type: String}) ccCVV: string = '';

  /**
   * Status Icon name (for font icons)
   * @attr
   */
  @property({type: String}) statusIcon: string = '';

  /**
   * Status Icon src (for image icons)
   * @attr
   */

  @property({type: String}) statusIconSrc: string = '';

  /**
   * Status Icon color
   * @attr
   */

  @property({type: String}) statusIconColor: string = 'gray2-color';

  /**
   * Status information
   * @attr
   */
  @property({type: String}) statusText: string = '';

  /**
   * Status information text color
   * @attr
   */
  @property({type: String}) statusTextColor: string = '';

  /**
   * extra information relative to credit card
   * @attr
   */
  @property({type: String}) extraInfo: string = '';

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  constructor() {
    super();
  }

  render(): TemplateResult {
    const classes: any = {
      'sr-registered-credit-card-block': true
    };
    return html`
      <div class="${classMap(classes)}">
        <div class="sr-registered-credit-card-block__holder">
          <div class="sr-registered-credit-card-block__header">
            <div>
              <div class="sr-registered-credit-card-block__name">${this.name}</div>
            </div>
            <div class="sr-registered-credit-card-block__cc-number">${this.ccNumber}</div>
            <div class="sr-registered-credit-card-block__cc-info">
              <div>
                <srui-two-lines-date
                    label="${this.ccExpDateLabel}"
                    value="${this.ccExpDate}"
                    textColor="#FFFFFF">
                </srui-two-lines-date>
                <srui-two-lines-date
                    label="${this.ccCVVLabel}"
                    value="${this.ccCVV}"
                    textColor="#FFFFFF">
                </srui-two-lines-date>
              </div>
              <div class="sr-registered-credit-card-block__card-type-image">
                <slot name="card_image"></slot>
              </div>
            </div>
          </div>
          <div class="sr-registered-credit-card-block__actions">
            <div class="sr-registered-credit-card-block__status">
              ${this.statusIconSrc || this.statusIcon ? html`
                <srui-icon
                  class="sr-registered-credit-card-block__status-icon"
                  icon="${this.statusIcon}"
                  iconsrc="${this.statusIconSrc}"
                  color="${this.statusIconColor}"
                  size="inherit"
                ></srui-icon>
              ` : ''}
              <div class="sr-registered-credit-card-block__status-text" style="color:var(${'--srui-' + this.statusTextColor})" ">${this.statusText}</div>
            </div>
            <slot name="button_area"></slot>
          </div>
        </div>
        <div class="sr-registered-credit-card-block__extra-info">${this.extraInfo}</div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-registered-credit-card-block': RegisteredCreditCardBlock;
  }
}
