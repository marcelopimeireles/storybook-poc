/**
 * Sunrise UI - navigation
 */
import {css, customElement, html, LitElement, unsafeCSS, TemplateResult, CSSResult, query, property} from 'lit-element';
import '../buttons/nav-button/nav-button.ts';
import styles from './navigation.scss';

/**
 * Navigation sidebar. On mobile it shows a close button that triggers a srui-close-nav event in order
 * to control the mobile menu state
 * @slot default - The navigation content, eg: nav buttons.
 */
@customElement('srui-navigation')

export class Navigation extends LitElement {
  /**
   * Src for the top logo image
   * @attr
   */
  @property({type: String}) logoSrc: string = '';

  /**
   * Title that goes under the logo image
   * @attr
   */
  @property({type: String}) title: string = '';

  @query('.sr-navigation') protected el!: HTMLElement;
  @query('.sr-navigation__logo') protected logoEl!: HTMLElement;
  @query('.sr-navigation__content') protected contentEl!: HTMLElement;
  @query('.sr-navigation__footer') protected footerEl!: HTMLElement;
  @query('slot') protected slotEl!: HTMLElement;

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener('resize', () => this.adjustPosition());
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.adjustPosition) {
      window.removeEventListener('resize', this.adjustPosition);
    }
  }

  updated(changed: Map<string | number | symbol, unknown>): void {
    super.updated(changed);
    this.adjustPosition();
    // Fallback for polyfill webcomponents
    setTimeout(() => this.adjustPosition(), 10);
  }

  render(): TemplateResult {
    return html`
      <div class="sr-navigation">
        <div class="sr-navigation__logo">
          ${this.logoSrc ? html`<img src='${this.logoSrc}'/>` : ''}
          ${this.title ? html`<h4>${this.title}<h4/>` : ''}
        </div>
        <button class="sr-navigation__close" @click="${this.handleClick}">
           <span></span>
           <span></span>
        </button>
        <div class="sr-navigation__content">
          <slot @slotchange="${this.adjustPosition}"/>
        </div>
        <div class="sr-navigation__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
  }

  adjustPosition(): void {
    if (!this.el) {
      return;
    }
    const margin: number =
      (this.el.offsetHeight - this.contentEl.offsetHeight - 2 * this.logoEl.offsetHeight) / 2;
    const maxHeight: number = this.logoEl.offsetHeight + this.contentEl.offsetHeight + this.footerEl.offsetHeight;
    this.contentEl.style.marginTop = `${Math.max(0, margin)}px`;
    this.footerEl.style.position = maxHeight >= this.el.offsetHeight ? 'relative' : 'absolute';
  }

  handleClick(event: Event): void {
    event.preventDefault();
    /**
     * Event triggered when user clicks on the mobile close button
     * @event srui-close-nav
     */
    this.dispatchEvent(new CustomEvent('srui-close-nav'));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-navigation': Navigation;
  }
}
