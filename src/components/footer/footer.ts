/**
 * Sunrise UI - Footer
 */
import {css, CSSResult, customElement, html, LitElement, unsafeCSS, TemplateResult} from 'lit-element';
import styles from './footer.scss';

/**
 * Footer component
 *
 * @slot copyright - Company naming and copyright
 * @slot legal - Footer content like legal links etc
 * @slot version - Site version
 */
@customElement('srui-footer')

export class Footer extends LitElement {
  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  render(): TemplateResult {
    return html`
      <footer class="sr-footer">
        <div class="sr-footer__copyright"><slot name="copyright"/></div>
        <div class="sr-footer__legal">
          <slot name="legal"/>
        </div>
        <div class="sr-footer__version">
          <slot name="version"/>
        </div>
      </footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-footer': Footer;
  }
}
