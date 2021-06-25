/**
 * Sunrise UI - Action Card
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import '../../icon/icon.ts';
import styles from './account-card.scss';

/**
 * Account card with an Icon, Title, Sub title, location, sub accounts
 * @slot extra_content - to fill with extra component content
 * @slot more-button-content - to fill content of more-button
 * @slot extra-main-icon - to add other main icon
 */
@customElement('srui-account-card')

export class AccountCard extends LitElement {
  /**
   * Title
   * @attr
   */
  @property({type: String}) title: string = '';
  /**
   * Sub title
   * @attr
   */
  @property({type: String}) subTitle: string = '';
  /**
   * Location
   * @attr
   */
  @property({type: String}) location: string = '';
  /**
   * Number of sub accounts only visible on main account card
   * @attr
   */
  @property({type: Number}) subAccounts: number = 0;
  /**
   * if true, is an Main account else is an sub account card
   * @attr
   */
  @property({type: Boolean}) mainAccount: boolean;
  /**
   * if true, the sub account is active
   * @attr
   */
  @property({type: Boolean}) subAccountActive: boolean = false;
  /**
  * if true, SubAccount button will be visible
  * @attr
  */
  @property({type: Boolean}) subAccountButton: boolean;
  /**
  * * * SubAccount label
  * @attr
  * */
  @property({type: String}) subAccountLabel: string = '';
  /**
   * if true, the location icon will be hidden
   * @attr
   */
  @property({type: Boolean}) hideMainIcon: boolean = false;
  /**
   * if true, the main(1st) icon will be hidden
   * @attr
   */
  @property({type: Boolean}) hideLocationIcon: boolean = false;
  /**
   * if true, the main(1st) icon will be hidden
   * @attr
   */
  @property({type: Boolean}) extraIconSlot: boolean = false;
  /**
   * if true, will hide "more" button
   * @attr
   */
  @property({type: Boolean}) hideHolderActions: boolean = false;
  /**
   * if true, will hide the right arrow icon
   * @attr
   */
  @property({type: Boolean}) hideArrowIcon: boolean = false;
  /**
   * if true, will hide the sub-account-button icons
   * @attr
   */
  @property({type: Boolean}) hideSubButtonIcon: boolean = false;

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  constructor() {
    super();
  }

  render(): TemplateResult {
    const classes: any = {
        'sr-account-card': true,
        'sr-account-card--main-account': this.mainAccount,
        'sr-account-card--sub-active': this.subAccountActive,
    };
    return html`
      <div class="${classMap(classes)}" @click="${this.actionHandler}">
        <div class="sr-account-card__holder-title">
          ${!this.hideMainIcon ? html`
            <srui-icon icon="${this.mainAccount ? 'company' : 'company-sub'}" size="normal" color=""></srui-icon>
          ` : html``}
            ${this.extraIconSlot ? html`
                <slot name="extra-main-icon"></slot>
          ` : html``}
          <div class="sr-account-card__text-content">
            <div class="sr-account-card__title">${this.title}</div>
            <div class="sr-account-card__sub-title">${this.subTitle}</div>
          </div>
        </div>
        <div class="sr-account-card__holder-location">
          ${!this.hideLocationIcon ? html`
            <srui-icon icon="pin" size="normal" color=""></srui-icon>
          ` : html``}
          ${this.location}
        </div>
        <div class="sr-account-card__holder-active">
          ${this.subAccountActive ? ' ● Active' : ''}
        </div>
        <slot name="extra_content"></slot>
        <div class="sr-account-card__holder-sub">
          ${this.subAccountButton && this.mainAccount ? html`
            <a
              class="sr-account-card__holder-sub-button"
              @click="${this.subActionHandler}">
              ${!this.hideSubButtonIcon ? html`
                <srui-icon icon="arrow-sub" color="primary-color" class="sr-account-card__holder-sub-button-icon"></srui-icon>
              ` : html``}
              ${this.subAccounts > 0 && this.mainAccount ? this.subAccounts : ''}
              <span class="sr-account-card__sub-label">${this.subAccountLabel}</span>
            </a>`
          : ``}
        </div>
        <div class="sr-account-card__holder-actions">
        ${this.mainAccount && !this.hideHolderActions ? html`
          <srui-more-button  @click="${this.ignoreClickHandler}">
            <slot name="more-button-content" slot="content"></slot>
          </srui-more-button>` : ``
        }
        ${!this.hideArrowIcon ? html`
            <srui-icon
                class="arrow-icon"
                icon="arrow-right-m"
                color=""
            ></srui-icon>` : html``}
        </div>
      </div>
`;
  }

  actionHandler(): void {
    /**
     * Event triggered when user clicks on card (but not on specific action parts of the card)
     * @event srui-open-account
     */
    this.dispatchEvent(new CustomEvent('srui-open-account', {
      composed: true,
      bubbles: true,
    }));
  }
  subActionHandler(event: Event): void {
      event.stopImmediatePropagation();
      /**
       * Event triggered when user clicks on the sub accounts number
       * @event srui-open-sub-accounts
       */
      this.dispatchEvent(new CustomEvent('srui-open-sub-accounts', {
          composed: true,
          bubbles: true,
      }));
  }
  ignoreClickHandler(event: Event): void {
    event.stopImmediatePropagation();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-account-card': AccountCard;
  }
}
