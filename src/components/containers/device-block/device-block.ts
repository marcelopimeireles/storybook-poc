/**
 * Sunrise UI - Modal Widget
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import styles from './device-block.scss';
import '../../buttons/std-button/std-button.ts';

/**
 * Subscriber device block
 * @slot device - Device name and model
 * @slot price - Device price
 * @slot monthly - Device monthly installment
 * @slot remaining - Device remaining installments
 */
@customElement('srui-device-block')

export class DeviceBlock extends LitElement {
  /**
   * Location of the device image
   * @attr
   */
  @property({type: String}) imgSrc: string = '';

  /**
   * Number of paid instalments
   * @attr
   */
  @property({type: Number}) instalments: number = 0;

  /**
   * Total number of instalments
   * @attr
   */
  @property({type: Number}) maxInstalments: number = 0;

  /**
   * Device plan title
   * @attr
   */
  @property({type: String}) devicePlanTitle: string = 'Device Plan';

  /**
   * Device Label
   * @attr
   */
  @property({type: String}) deviceLabel: string = 'Device';

  /**
   * Price Label
   * @attr
   */
  @property({type: String}) priceLabel: string = 'Price';

  /**
   * Price Upfront Payment Label
   * @attr
   */
  @property({type: String}) paymentLabel: string = 'Upfront Payment';

  /**
   * Monthly installment Label
   * @attr
   */
  @property({type: String}) monthlyLabel: string = 'Monthly installment';

  /**
   * Monthly Remaining installments
   * @attr
   */
  @property({type: String}) remainingLabel: string = 'Remaining installments';

  /**
   * Instalments Label
   * @attr
   */
  @property({type: Boolean}) instalmentsVisible: boolean = false;

  /**
   * Instalments Label
   * @attr
   */
  @property({type: String}) instalmentsLabel: string = 'Instalments';

  /**
   * Buyout device Label
   * @attr
   */
  @property({type: String}) buyoutLabel: string = 'Buyout Device';

  /**
   * If true the button will be disabled
   * @attr
   */
  @property({type: Boolean}) disabledButton: boolean = false;

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  render(): TemplateResult {
    return html`
      <div class="sr-device-block">
        <div class="sr-device-block__image-holder">
          <img src="${ this.imgSrc }" alt="">
        </div>
        <div class="sr-device-block__content-holder">
          <div class="sr-device-block__title">${this.devicePlanTitle}</div>
          <div class="sr-device-block__row">
            <div class="sr-device-block__row-label">${this.deviceLabel}</div>
            <slot name="device"></slot>
          </div>
          <div class="sr-device-block__row">
             <div class="sr-device-block__row-label">${this.priceLabel}</div>
             <slot name="price"></slot>
          </div>
          <div class="sr-device-block__row">
             <div class="sr-device-block__row-label">${this.paymentLabel}</div>
             <slot name="payment"></slot>
          </div>
          <div class="sr-device-block__row">
             <div class="sr-device-block__row-label">${this.monthlyLabel}</div>
             <slot name="monthly"></slot>
          </div>
          <div class="sr-device-block__row">
             <div class="sr-device-block__row-label">${this.remainingLabel}</div>
             <slot name="remaining"></slot>
          </div>
          ${this.instalmentsVisible ?
            html`
              <div class="sr-device-block__row">
                <div class="sr-device-block__row-label">${this.instalmentsLabel}</div>
                <div class="sr-device-block__row-dots">
                 ${Array.from({length: this.maxInstalments}, (k) => k).map(
                  (item, idx) => html`<span class="${ idx < this.instalments ? 'srui-device-block__dot--active' : ''}">${item}</span>`)}
                </div>
              </div>
            </div>
        ` : html ``}
          <div class="sr-device-block__row">
            <srui-std-button size="tiny" @click=${this.buyoutHandler} ?disabled=${this.disabledButton}>${this.buyoutLabel}</srui-std-button>
          </div>
    `;
  }

  buyoutHandler(): void {
    /**
     * Event triggered when Buyout device button is clicked
     * @event srui-click-buyout
     */
    this.dispatchEvent(new CustomEvent('srui-click-buyout', {
      composed: true,
      bubbles: true,
    }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-device-block': DeviceBlock;
  }
}
