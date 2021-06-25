/**
 * Sunrise UI - SBC - header-block
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import styles from './header-block.scss';

@customElement('srui-header-block')

export class HeaderBlock extends LitElement {

  /**
   * Block Title
   * @attr
   */
  @property({type: String}) title: string = '';

  /**
   * If present, makes section a link to go back. Action can be taken using the srui-back-click event or
   * passing a direct link using the attribute backLinkHref
   * @attr
   */
  @property({type: Boolean}) backLink: boolean = true;

  /**
   * Link for the back link (if active)
   */
  @property({type: String}) backLinkHref: string = 'javascript:void(0)';

  /**
   * Show/hide close button
   * @attr
   */
  @property({type: Boolean}) isShownCloseButton: boolean = false;

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
      'sr-header-block': true
    };
    return html`
        <div class="${classMap(classes)}">
            ${this.backLink ? html`
                <button class="sr-header-block__back" @click="${(event: Event) => this.handleBackClick(event, 'button')}">
                    <srui-icon icon="arrow-left-m" size="medium" color="black"></srui-icon>
                </button>
            ` : ''}

            <div class="sr-header-block__title">${this.title}</div>
            ${this.isShownCloseButton ? html`
                <button class="sr-header-block__close" @click="${(event: Event) => this.handleCloseClick(event, 'button')}">
                    <srui-icon icon="close-m" size="medium" color="black"></srui-icon>
                </button>
            ` : ''}
        </div>
    `;
  }

  handleBackClick(event: Event, type: string): void {
    event.preventDefault();
    /**
     * Event triggered when user clicks on back button
     * @event srui-header-back
     */
    this.dispatchEvent(new CustomEvent('srui-header-back', {
      composed: true,
      bubbles: true,
      detail: {
        origin: type
      }
    }));
  }

  handleCloseClick(event: Event, type: string): void {
    event.preventDefault();
    /**
     * Event triggered when user clicks on close button
     * @event srui-close-header
     */
    this.dispatchEvent(new CustomEvent('srui-close-header', {
      composed: true,
      bubbles: true,
      detail: {
        origin: type
      }
    }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-header-block': HeaderBlock;
  }
}
