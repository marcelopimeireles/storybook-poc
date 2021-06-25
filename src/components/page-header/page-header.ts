/**
 * Sunrise UI - Page Header
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import '../icon/icon.ts';
import styles from './page-header.scss';

/**
 * Standard Header for pages
 */
@customElement('srui-page-header')

export class PageHeader extends LitElement {
  /**
   * Section label or back link label (if backLink is true)
   * @attr
   */
  @property({type: String}) section: string = '';

  /**
   * Page Title
   * @attr
   */
  @property({type: String}) title: string = '';

  /**
   * Page subtitle
   * @attr
   */
  @property({type: String}) subtitle: string = '';

  /**
   * If present, makes section a link to go back. Action can be taken using the srui-back-click event or
   * passing a direct link using the attribute backLinkHref
   * @attr
   */
  @property({type: Boolean}) backLink: boolean = false;

  /**
   * Link for the back link (if active)
   */
  @property({type: String}) backLinkHref: string = 'javascript:void(0)';

  /**
   * Header size [default, small]
   * @attr
   */
  @property({type: String}) size: string = 'default';

  /**
   * Active state status (if true hides subtitle)
   * @attr
   */
  @property({type: Boolean}) statusActive: boolean = false;

  /**
   * Suspended state status (if true hides subtitle)
   * @attr
   */
  @property({type: Boolean}) statusSuspended: boolean = false;

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  render(): TemplateResult {
    const classes: any = {
      'sr-page-header': true,
      'sr-page-header--small': this.size === 'small'
    };
    return html`
      <div class="${classMap(classes)}">
        ${this.backLink ? html`
          <a href="${this.backLinkHref}" class="sr-page-header__link" @click=${this.backHandler}>
            <srui-icon icon="arrow-left-l" color="black" class="sr-page-header__link-icon"></srui-icon>
            ${this.section}
          </a>
        ` : ''}
        ${!this.backLink && this.section !== '' ? html`
          <h5>${this.section}</h5>
        ` : ''}
        <h1>${this.title}</h1>
        ${this.subtitle !== '' && !this.statusActive ? html`
          <h3>${this.subtitle}</h3>
        ` : ''}
        ${this.statusActive ? html`
          <div class="sr-page-header__status">
            <span></span>
            Active
          </div>
        ` : html``}
        ${this.statusSuspended ? html`
          <div class="sr-page-header__status_suspended">
            <span></span>
            Suspended
          </div>
        ` : html``}
      </div>
    `;
  }

  backHandler(): void {
    /**
     * Back button clicked (if backLinkHref provided, event can be ingored)
     * @event srui-back-click
     */
    this.dispatchEvent(new CustomEvent('srui-back-click', {
      composed: true,
      bubbles: true,
    }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-page-header': PageHeader;
  }
}
