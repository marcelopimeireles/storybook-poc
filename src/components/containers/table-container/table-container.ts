/**
 * Sunrise UI - Content Block
 */
import {css, CSSResult, customElement, html, LitElement, unsafeCSS, TemplateResult} from 'lit-element';
import styles from './table-container.scss';

/**
 * Generic table container
 * @slot header-left-side - right side header of the block (input search placement)
 * @slot header-right-side - right side header of the block (filtering, actions placement)
 * @slot content - The content of the block
 * @slot footer - footer of the block (optional)
 */
@customElement('srui-table-container')

export class TableContainer extends LitElement {
  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  render(): TemplateResult {
    return html`
      <div class="sr-table-container">
        <div class="sr-table-container__header">
            <div class="sr-table-container__header_left"><slot name="header-left-side"></slot></div>
            <div class="sr-table-container__header_right"><slot name="header-right-side"></slot></div>
        </div>
        <div class="sr-table-container__content">
            <slot name="content"></slot>
        </div>
        <div class="sr-table-container__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-table-container': TableContainer;
  }
}
