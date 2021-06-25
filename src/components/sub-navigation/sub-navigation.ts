/**
 * Sunrise UI - sidebar container
 */
import {css, customElement, html, LitElement, unsafeCSS, TemplateResult, CSSResult} from 'lit-element';
import styles from './sub-navigation.scss';

@customElement('srui-sub-navigation')

export class SubNavigation extends LitElement {

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }
  connectedCallback(): void {
      super.connectedCallback();
      window.addEventListener('resize', () => this.showActiveElement());
  }

  disconnectedCallback(): void {
      super.disconnectedCallback();
      if (this.showActiveElement) {
          window.removeEventListener('resize', this.showActiveElement);
      }
  }
  updated(changed: Map<string | number | symbol, unknown>): void {
      super.updated(changed);
      setTimeout(() => this.showActiveElement(), 10);
  }

  render(): TemplateResult {
    return html`
      <div class="sr-sub-navigation">
        <div class="sr-sub-navigation-gradient"></div>
        <div class="sr-sub-navigation-content" @click=${this.showActiveElement}>
          <slot name="sub-navigation-content"></slot>
        </div>
      </div>
    `;
  }

  showActiveElement(): void {
    const holderContent: any = this.shadowRoot.querySelector('slot').assignedNodes()[0].childNodes;
    holderContent.forEach((el) => {
      if (el.active) {
        el.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'});
      }
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-sub-navigation': SubNavigation;
  }
}
