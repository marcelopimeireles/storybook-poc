/**
 * Sunrise UI - SBC - Subscription credit buckets
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import styles from './subscription-credit-buckets.scss';

/**
 * @slot button_area - Slot to add a more button (or similar) which will provide actions for this option
 */
/**
 * @slot credit_buckets - Slot to add all Credit buckets elements
 */

@customElement('srui-subscription-credit-buckets')

export class SubscriptionCreditBuckets extends LitElement {

  /**
   * Block Title
   * @attr
   */
  @property({type: String}) title: string = '';

  /**
   * Rate plan label
   * @attr
   */
  @property({type: String}) planLabel: string = '';

  /**
   * Additional Note
   * @attr
   */
  @property({type: String}) note: string = '';

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  constructor() {
    super();
  }
  connectedCallback(): void {
    super.connectedCallback();
  }
  render(): TemplateResult {
    const classes: any = {
      'sr-subscription-credit-buckets': true
    };
    return html`
      <div class="${classMap(classes)}">
        <div class="sr-subscription-credit-buckets__header">
            <div class="sr-subscription-credit-buckets__title">${this.title}</div>
            <slot name="button_area"></slot>
        </div>
        <div class="sr-subscription-credit-buckets__holder">
            <div class="sr-subscription-credit-buckets__plan">${this.planLabel}</div>
            <slot name="credit_buckets"></slot>
        </div>
        ${this.note !== '' ? html`<div class="sr-subscription-credit-buckets__note">${this.note}</div>` : html``}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-subscription-credit-buckets': SubscriptionCreditBuckets;
  }
}
