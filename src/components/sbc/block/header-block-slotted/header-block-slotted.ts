/**
 * Sunrise UI - SBC - header-block
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import styles from './header-block-slotted.scss';

@customElement('srui-header-block-slotted')

export class HeaderBlockSlotted extends LitElement {

  /**
   * Block Title
   * @attr
   */
  @property({type: String}) title: string = '';

  /**
   * Back button slot - back_button_area
   * @options
   */



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
      'sr-header-block-slotted': true
    };
    return html`
        <div class="${classMap(classes)}">
            <!-- @slot Use this slot for back button -->
            <slot name="back_button_area"></slot>
            ${this.title ? html`
                <div class="sr-header-block__title">${this.title}</div>
            ` : ''}
            <!-- @slot Use this slot for close button -->
            <slot name="title_area"></slot>
            <!-- @slot Use this slot for close button -->
            <slot name="right_button_area"></slot>
        </div>
    `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'srui-header-block-slotted': HeaderBlockSlotted;
  }
}
