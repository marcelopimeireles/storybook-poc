/**
 * Sunrise UI -
 */
import { css, customElement, html, LitElement, unsafeCSS, TemplateResult, CSSResult, property} from 'lit-element';
import styles from './mock-base.scss';

@customElement('mock-base')

export class MockBase extends LitElement {
  @property({type: Boolean}) mock: boolean = false;

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  render(): TemplateResult {
    return html`
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mock-base': MockBase;
  }
}
