/**
 * Sunrise UI - Modal Widget
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import styles from './subscriber-card.scss';

/**
 * Subscriber card
 * @slot name - Name of the subscriber
 * @slot email - Email
 * @slot language - Language
 * @slot address - Address
 * @slot zip - Zip code
 */
@customElement('srui-subscriber-card')

export class SubscriberCard extends LitElement {
  /**
   * Label for salutation field
   * @attr
   */
  @property({type: String}) salutationLabel: string = 'Salutation';

  /**
   * Label for name field
   * @attr
   */
  @property({type: String}) nameLabel: string = 'Name';

  /**
   * Label for email field
   * @attr
   */
  @property({type: String}) emailLabel: string = 'Email';

  /**
   * Label for address field
   * @attr
   */
  @property({type: String}) addressLabel: string = 'Address';

  /**
   * Label for address field
   * @attr
   */
  @property({type: String}) languageLabel: string = 'Language';

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  constructor() {
    super();
  }

  render(): TemplateResult {
    return html`
      <div class="sr-subscriber-card">
        <div class="sr-subscriber-card__row">
          <div class="sr-subscriber-card__label">${this.salutationLabel}</div>
          <div><slot name="salutation"></slot></div>
        </div>
        <div class="sr-subscriber-card__row">
          <div class="sr-subscriber-card__label">${this.nameLabel}</div>
          <div><slot name="name"></slot></div>
        </div>
        <div class="sr-subscriber-card__row">
          <div class="sr-subscriber-card__label">${this.emailLabel}</div>
          <slot name="email"></slot>
        </div>
        <div class="sr-subscriber-card__row">
          <div class="sr-subscriber-card__label">${this.languageLabel}</div>
          <slot name="language"></slot>
        </div>
        <div class="sr-subscriber-card__row">
          <div class="sr-subscriber-card__label">${this.addressLabel}</div>
          <div class="sr-subscriber-card__container">
            <slot name="address"></slot>
            <slot name="zip"></slot>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-subscriber-card': SubscriberCard;
  }
}
