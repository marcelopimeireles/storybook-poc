/**
 * Sunrise UI - Round Counter
 */
import { css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult } from 'lit-element';
import sruiRoundCounterStyles from './round-counter.scss';

/**
 * A simple small round counter
 * @slot default - the counter content. eg: the count number
 */
@customElement('srui-round-counter')

export class RoundCounter extends LitElement {
  /**
   * Color scheme for the counter: ['primary', 'primary-inverted']
   * primary has forecolor as primary and white as backgorund
   * @attr
   */
  @property({type: String}) color: string = 'primary';
  static get styles(): CSSResult {
    return css`${unsafeCSS(sruiRoundCounterStyles)}`;
  }

  constructor() {
    super();
  }

  render(): TemplateResult {
    return html`
      <div class='sr-round-counter sr-round-counter--color-${this.color}'><slot></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-round-counter': RoundCounter;
  }
}
