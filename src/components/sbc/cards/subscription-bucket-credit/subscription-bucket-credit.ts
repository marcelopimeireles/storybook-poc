/**
 * Sunrise UI - SBC - Subscription bucket credit
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import styles from './subscription-bucket-credit.scss';

/**
 * @slot icon - Slot to add a image or a icon -> MaxWidth 50px
 */

@customElement('srui-subscription-bucket-credit')

export class SubscriptionBucketCredit extends LitElement {
  /**
   * bucket credit type
   * @attr
   */
  @property({type: String}) type: string = '';

  /**
   * bucket credit Title
   * @attr
   */
  @property({type: String}) title: string = '';

  /**
   * bucket credit description
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
      'sr-subscription-bucket-credit': true,
    };
    return html`
      <div class="${classMap(classes)}">
        <div class="sr-subscription-bucket-credit__icon">
          <slot name="icon"></slot>
        </div>
        <div class="sr-subscription-bucket-credit__holder">
          <div class="sr-subscription-bucket-credit__type">${this.type}</div>
          <div class="sr-subscription-bucket-credit__title">${this.title}</div>
          <div class="sr-subscription-bucket-credit__description">${this.description}</div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-subscription-bucket-credit': SubscriptionBucketCredit;
  }
}
