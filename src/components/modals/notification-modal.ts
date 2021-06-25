/**
 * Sunrise UI - Modal Widget
 */
import {css, CSSResult, customElement, html, LitElement, unsafeCSS, TemplateResult, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import styles from './notification-modal.scss';
import './modal.ts';
import '../icon/icon.ts';

/**
 * Notification Modal
 *
 * @slot info-text - Notification content (description)
 * @slot actions - Bottom area to add modal's action buttons
 */
@customElement('srui-notification-modal')

export class NotificationModal extends LitElement {
  /**
  * Notification type [error, success, alert, info]
  * @attr
  */
  @property({type: String}) notificationType: string = 'info';

  /**
  * Notification Title (Optional. If not set, the title will correspond to the notification type (Success, Error, Warning or Information))
  * @attr
  */
  @property({type: String}) title: string = '';
  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  render(): TemplateResult {
    const classType: string = 'sr-notification-modal--' + this.notificationType;
    const classIconType: string = 'sr-notification-modal__icon--' + this.notificationType;
    const classes: any = {
      'sr-notification-modal': true,
      [classIconType]: true,
      [classType]: true,
    };
    return html`
    <srui-modal size="small" icon="circle-${this.notificationType}-large" class="${classMap(classes)}">
      <div slot="title">${this.getTitle()}</div>
      <div slot="info-text"><slot name="info-text"></slot></div>
      <slot name="actions" slot="call2action"></slot>
    </srui-modal>`;
  }

  getTitle(): string {
    /**
     * Method to set title depending on the notification type if the title is not defined
     *
     */
    if (this.title !== '') {
      return this.title;
    }
    let title: string = '';
    switch (this.notificationType) {
      case 'error':
        title = 'Error';
        break;
      case 'success':
        title = 'Success';
        break;
      case 'alert':
        title = 'Warning';
        break;
      case 'info':
        title = 'Information';
        break;
      default:
        title = this.title;
    }
    return title;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-notification-modal': NotificationModal;
  }
}
