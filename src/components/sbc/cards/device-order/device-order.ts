/**
 * Sunrise UI - SBC - Device Order
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import styles from './device-order.scss';

/**
 * @slot button_area - Slot to add a button (or similar) which will provide actions for this option
 */

@customElement('srui-device-order')

export class DeviceOrder extends LitElement {
  /**
   * If true the status header will be hide
   */
  @property({type: Boolean}) hideHeader: boolean = false;

  /**
   * Box Title
   * @attr
   */
  @property({type: String}) headerTitle: string = '';

  /**
   * Device label
   * @attr
   */
  @property({type: String}) deviceTitle: string = '';

  /**
   * Device Info
   * @attr
   */
  @property({type: Array}) deviceInfo: any = [];

  /**
   * If true the button will be hide
   */
  @property({type: Boolean}) hideButton: boolean = false;

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  constructor() {
    super();
  }

  render(): TemplateResult {
    const classes: any = {
      'sr-device-order': true,
    };
    return html`
      <div class="${classMap(classes)}">
        ${!this.hideHeader ? html`
          <div class="sr-device-order__header">
            <div class="sr-device-order__title">${this.headerTitle}</div>
        </div>
        ` : html``}
        <div class="sr-device-order__content">
            <div class="sr-device-order__thumb">
                <slot name="thumb"></slot>
            </div>
            <div class="sr-device-order__device">
                <div class="sr-device-order__device-title">${this.deviceTitle}</div>
                ${this.deviceInfo.map((item) => html`
                    <div class="sr-device-order__device-info">
                        <span>${item.label}: </span><span>${item.value}</span>
                    </div>
                `)}
            </div>
        </div>
        ${!this.hideButton ? html`
          <div class="sr-device-order__action">
            <slot name="button_area"></slot>
          </div>
        ` : html``}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-device-order': DeviceOrder;
  }
}
