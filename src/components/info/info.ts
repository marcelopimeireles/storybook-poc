/**
 * Sunrise UI - Info component
 */
import {css, CSSResult, customElement, html, LitElement, unsafeCSS, TemplateResult, property} from 'lit-element';
import './../icon/icon.ts';
import styles from './info.scss';

/**
 * Simple component that displays informational tips
 * @slot default - The info message
 */
@customElement('srui-info')

export class Info extends LitElement {
  /**
   * add a tooltip block if the string isn't empty
   * @attr
   */
  @property({type: String}) tooltip: string = '';
  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  render(): TemplateResult {
    return html`
      <div class="sr-info">
        <div class="sr-info__icon-wrapper">
          <srui-icon class="sr-info__icon" icon="info-outline" color="inherit" size="small"></srui-icon>
        </div>
        ${this.tooltip !== '' ? html`
          <div class="sr-info__tooltip-holder">${this.tooltip}</div>
        ` : html``}
        <slot/>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-info': Info;
  }
}
