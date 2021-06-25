/**
 * Sunrise UI - SBC - Two lines date element
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import styles from './two-lines-date.scss';

@customElement('srui-two-lines-date')

export class TwoLinesDate extends LitElement {
  /**
   * Element label
   * @attr
   */
  @property({type: String}) label: string = '';

  /**
   * Date value
   * @attr
   */
  @property({type: String}) value: string = '';

  /**
   * Text color
   * @attr
   */
  @property({type: String}) textColor: string = '#545454)';

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  constructor() {
    super();
  }

  render(): TemplateResult {
    const classes: any = {
      'sr-two-lines-date': true
    };
    return html`
      <div class="${classMap(classes)}" style="color: ${this.textColor}">
        <div class="sr-two-lines-date__label">${this.label}</div>
        <div class="sr-two-lines-date__value">${this.value}</div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-two-lines-date': TwoLinesDate;
  }
}
