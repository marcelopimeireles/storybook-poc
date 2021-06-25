/**
 * Sunrise UI - Simple Select (eg: language chooser on profile dropdown)
 */
import { css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult } from 'lit-element';
import styles from './simple-select.scss';

@customElement('srui-simple-select')

export class SimpleSelect extends LitElement {
  @property({type: Boolean}) subNavigation: boolean = false;
  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  constructor() {
    super();
  }

  render(): TemplateResult {
    return html`
      <div class='sr-simple-select'><slot></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-simple-select': SimpleSelect;
  }
}
