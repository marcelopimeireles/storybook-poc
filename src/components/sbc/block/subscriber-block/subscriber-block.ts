/**
 * Sunrise UI - SBC - subscriber-block
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import styles from './subscriber-block.scss';

@customElement('srui-subscriber-block')

export class SubscriberBlock extends LitElement {

  /**
   * Subscriber name
   * @attr
   */
  @property({type: String}) name: string = '';

  /**
   * Subscriber subscription
   * @attr
   */
  @property({type: String}) subscription: string = '';

  /**
   * Large text size.
   * @attr
   */
  @property({type: Boolean}) large: boolean = false;

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  constructor() {
    super();
  }
  connectedCallback(): void {
    super.connectedCallback();
  }
  render(): TemplateResult {
    const classes: any = {
      'sr-subscriber-block': true,
      'sr-subscriber-block__large': this.large
    };
    return html`
      <div class="${classMap(classes)}">
        <div class="sr-subscriber-block__name">${this.name}</div>
        <div class="sr-subscriber-block__subscription">${this.subscription}</div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-subscriber-block': SubscriberBlock;
  }
}
