/**
 * Sunrise UI - sidebar container
 */
import { css, customElement, html, LitElement, unsafeCSS, TemplateResult, CSSResult, property, query} from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import sidebarContainerStyles from './sidenav-container.scss';

/**
 * Sidenav Layout container
 * @slot sidebar - Sidebar content
 * @slot header - Fixed header content
 * @slot content - page content
 * @slot footer - page footer content
 */
@customElement('srui-sidenav-container')

export class SidenavContainer extends LitElement {
  /**
   * Mobile menu state
   * @attr
   */
  @property({type: Boolean}) open: boolean = false;

  /**
   * Makes content not limited to --srui-content-max-width
   */
  @property({type: Boolean}) fluid: boolean = false;

  @query('.sr-sidenav-container__header') protected headerEl!: HTMLElement;

  @query('.sr-sidenav-container__content-wrapper') protected wrapperEl!: HTMLElement;

  static get styles(): CSSResult {
    return css`${unsafeCSS(sidebarContainerStyles)}`;
  }

  connectedCallback(): void {
    super.connectedCallback();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  updated(changed: Map<string | number | symbol, unknown>): void {
    super.updated(changed);
  }

  render(): TemplateResult {
    // tslint:disable-next-line: typedef
    const classes = {
      'sr-sidenav-container--open': this.open,
      'sr-sidenav-container--fluid': this.fluid,
    };

    return html`
      <div class="sr-sidenav-container ${classMap(classes)}">
        <div class="sr-sidenav-container__sidebar">
          <slot name="sidebar"/>
        </div>
        <div class="sr-sidenav-container__content-wrapper">
          <div class="sr-sidenav-container__header">
            <slot name="header" />
          </div>
          <div class="sr-sidenav-container__content">
            <slot name="content" />
          </div>
          <div class="sr-sidenav-container__footer">
            <slot name="footer"/>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-sidenav-container': SidenavContainer;
  }
}
