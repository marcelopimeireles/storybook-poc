/**
 * Sunrise UI - SBC - Option Box
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import styles from './option-box.scss';

/**
 * @slot detail_button_area - Slot to add a detail button (or similar) which will provide actions for this option
 */
/**
 * @slot buckets_list - Slot to add a buckets list
 */
/**
 * @slot button_area - Slot to add a button (or similar) which will provide actions for this option
 */

@customElement('srui-option-box')

export class OptionBox extends LitElement {
  /**
   * If true the status header will be hide
   */
  @property({type: Boolean}) hideHeader: boolean = false;

  /**
   * Box Header Title
   * @attr
   */
  @property({type: String}) headerTitle: string = '';

  /**
   * Box Title
   * @attr
   */
  @property({type: String}) title: string = '';

  /**
   * If true the detail button will be hide
   */
  @property({type: Boolean}) hideDetailButton: boolean = false;

  /**
   * Box description
   * @attr
   */
  @property({type: String}) description: string = '';

  /**
   * If true the detail button will be hide
   */
  @property({type: Boolean}) hideBucketList: boolean = false;

  /**
   * Payment Type label
   * @attr
   */
  @property({type: String}) paymentTypeLabel: string = '';

  /**
   * Price
   * @attr
   */
  @property({type: String}) price: string = '';

  /**
   * Label for next payment
   * @attr
   */
  @property({type: String}) nextPaymentLabel: string = '';

  /**
   * Next payment date
   * @attr
   */
  @property({type: String}) nextPayment: string = '';

  /**
   * If true the button will be hide
   */
  @property({type: Boolean}) hideButton: boolean = false;

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  constructor() {
    super();
  }

  render(): TemplateResult {
    const classes: any = {
      'sr-option-box': true,
    };
    return html`
      <div class="${classMap(classes)}">
        ${!this.hideHeader ? html`
          <div class="sr-option-box__header">
              <div class="sr-option-box__header-title">${this.headerTitle}</div>
          </div>
        ` : html``}
        <div class="sr-option-box__content-holder">
          <div class="sr-option-box__content">
            <div class="sr-option-box__title">${this.title}</div>
            ${!this.hideDetailButton ? html`
              <slot name="detail_button_area"></slot>
            ` : html``}
          </div>
          ${this.description !== '' ? html`
            <div class="sr-option-box__content">
              <div class="sr-option-box__description">${this.description}</div>
            </div>
          ` : html``}
          <slot name="buckets_list"></slot>
          ${this.price !== '' ? html`
            <div class="sr-option-box__content">
              <div class="sr-option-box__payment-label">${this.paymentTypeLabel}</div>
              <div class="sr-option-box__price">${this.price}</div>
            </div>
          ` : html``}
          <div class="sr-option-box__content ${this.nextPayment !== '' ? 'full' : 'half'}">
            ${this.nextPayment !== '' ? html`
            <div>
              <div class="sr-option-box__next-payment-label">${this.nextPaymentLabel}</div>
              <div class="sr-option-box__next-payment">${this.nextPayment}</div>
            </div>
            ` : html``}
            ${!this.hideButton ? html`
              <div class="sr-option-box__action">
                <slot name="button_area"></slot>
              </div>
            ` : html``}
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-option-box': OptionBox;
  }
}
