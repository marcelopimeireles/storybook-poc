/**
 * Sunrise UI - SBC - Device in Use
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import styles from './device-use.scss';

/**
 * @slot thumb - Slot to add a device image
 */

@customElement('srui-device-use')

export class DeviceUse extends LitElement {

  /**
   * Component Title
   * @attr
   */
  @property({type: String}) title: string = '';

  /**
   * Device label
   * @attr
   */
  @property({type: String}) device: string = '';

  /**
   * possible extra info
   * @attr
   */
  @property({type: String}) note: string = '';

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  constructor() {
    super();
  }

  render(): TemplateResult {
    const classes: any = {
      'sr-device-use': true,
    };
    return html`
      <div class="${classMap(classes)}">
        <div class="sr-device-use__title">${this.title}</div>
        <div class="sr-device-use__device">
          <div class="sr-device-use__thumb">
            <slot name="thumb"></slot>
          </div>
          <div class="sr-device-use__device-info">
            <slot name="device"></slot>
          </div>
        </div>
        <div class="sr-device-use__note">${this.note}</div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-device-use': DeviceUse;
  }
}
