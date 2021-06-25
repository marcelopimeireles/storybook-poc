/**
 * Sunrise UI - Modal Widget
 */
import {css, CSSResult, customElement, html, LitElement, unsafeCSS, TemplateResult, property} from 'lit-element';
import styles from './modal-hardware.scss';
import './modal.ts';
import '../icon/icon.ts';
/**
 * Modal show hardware
 *
 * @slot titlte - Modal title
 * @slot sub-title - Modal sub-title
 * @slot device - Modal hardware device
 * @slot subscriber - Modal hardware subscriber
 */
@customElement('srui-modal-hardware')

export class ModalHardware extends LitElement {
  /**
 * Image src (for device image)
 * @attr
 */
@property({type: String}) imageSrc: string = '';

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  render(): TemplateResult {
    return html`
    <srui-modal>
      <div slot="content">
        <div class="sr-modal-hardware">
            ${this.imageSrc ? html`
                <div class="sr-modal-hardware__image"><img src="${this.imageSrc}"></div>
            ` : ''}
            <div class="sr-modal-hardware__title"><slot name="title"></slot></div>
            <div class="sr-modal-hardware__sub-title"><slot name="sub-title"></slot></div>
            <div class="sr-modal-hardware__info">
                <div class="sr-modal-hardware__label">Device Identity</div>
                <slot name="device"></slot>
            </div>
            <div class="sr-modal-hardware__info">
                <div class="sr-modal-hardware__label">Subscriber Identity</div>
                <slot name="subscriber"></slot>
            </div>
            <div class="sr-modal-hardware__actions">
                <slot name="actions"></slot>
            </div>
        </div>
      </div>
    </srui-modal>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-modal-hardware': ModalHardware;
  }
}
