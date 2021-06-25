/**
 * Sunrise UI - Account Acess Card
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import '../../icon/icon.ts';
import styles from './account-access-card.scss';

/**
 * Account access card with an Icon, Title, Sub title
 */
@customElement('srui-account-access-card')

export class AccountAccessCard extends LitElement {
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
   * Removes bottom separator
   * @attr
   */
  @property({type: Boolean}) last: boolean = false;
  /**
   * if true set the content full width
   * @attr
   */
  @property({type: Boolean}) fullWith: boolean = false;

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  constructor() {
    super();
  }

  render(): TemplateResult {
    const classes: any = {
        'sr-account-access-card': true,
        'sr-account-access-card--last': this.last,
        'sr-account-access-card--full-width': this.fullWith
    };
    return html`
      <div class="${classMap(classes)}">
        <div class="sr-account-access-card__holder">
          <srui-icon icon="${this.icon ? this.icon : ''}" iconsrc="${this.iconSrc} "size="normal" color=""></srui-icon>
          <div class="sr-account-access-card__text-content">
            <div class="sr-account-access-card__title">${this.title}</div>
            <div class="sr-account-access-card__sub-title">${this.subTitle}</div>
          </div>
        </div>
      </div>
`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-account-access-card': AccountAccessCard;
  }
}
