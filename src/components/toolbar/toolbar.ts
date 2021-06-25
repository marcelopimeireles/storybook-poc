/**
 * Sunrise UI - sidebar container
 */
import {css, customElement, html, LitElement, unsafeCSS, TemplateResult, CSSResult} from 'lit-element';
import styles from './toolbar.scss';
/**
 * Toolbar on the top of the page
 * @slot left-content - Left side content (search)
 * @slot right-content - Right side content (dropdown menus)
 */
@customElement('srui-toolbar')

export class Toolbar extends LitElement {
  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  constructor() {
    super();
  }

  render(): TemplateResult {
    return html`
      <div class="sr-toolbar">
        <div class="sr-toolbar__lft-content">
          <button class="sr-toolbar__hamburger-button" @click="${this.handleClick}"><span></span><span></span></button>
          <slot name="left-content"/>
        </div>
        <div class="sr-toolbar__rgt-content"><slot name="right-content"/></div>
      </div>
    `;
  }

  handleClick(event: Event): void {
    event.preventDefault();
    this.dispatchEvent(new CustomEvent('srui-open-nav'));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-toolbar': Toolbar;
  }
}
