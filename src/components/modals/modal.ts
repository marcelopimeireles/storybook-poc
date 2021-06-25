/**
 * Sunrise UI - Modal Widget
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import styles from './modal.scss';

/**
 * Basic modal structure
 * @slot title
 * @slot into-text - Text will appear bellow the title
 * @slot toolbar - Extra layout header element that stays fixed and present if scrollable mode is on
 * @slot content
 * @slot call2action - Bottom area to add modal's action buttons
 * @slot top - A slot to put content before the title and icon
 * @slot info - last placeholder where extra info mesage can be added with predefined styling
 */
@customElement('srui-modal')

export class Modal extends LitElement {
  /**
   * Modal size [small, default, large] (480px, 640px 980px)
   * @attr
   */
  @property({type: String}) size: string = 'default';

  /**
   * Special inner scrollable mode where content is scrollable while call2action bar is fixed at modal bottom
   * @attr
   */
  @property({type: Boolean}) scrollable: boolean = false;

  /**
   * Icon name (for font icons)
   * @attr
   */
  @property({type: String}) icon: string = '';

  /**
   * Icon src (for image icons)
   * @attr
   */
  @property({type: String}) iconSrc: string = '';

  /**
    * Icon color
    * @attr
   * */
  @property({type: String}) iconColor: string = '';

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  render(): TemplateResult {
    const sizeClass: string = this.size === 'small' || this.size === 'large' ?
        'sr-modal--size-' + this.size : 'sr-modal--size-default';
    const classes: any = {
        'sr-modal--scrollable': this.scrollable,
        [sizeClass]: true,
    };
    return html`
      <div class="sr-modal__holder" @click="${(event: Event) => this.handleClick(event, 'overlay')}">
        <div class="sr-modal__wrapper">
          <div class="sr-modal ${classMap(classes)}" @click=${(event) => event.stopPropagation()}>
            <button class="sr-modal__close" @click="${(event: Event) => this.handleClick(event, 'button')}">
              <srui-icon icon="close-m" size="default" color="black"></srui-icon>
            </button>
            <div class="sr-modal__content-holder">
              <div class="sr-modal__top"><slot name="top"></slot></div>
              ${this.icon !== '' || this.iconSrc !==  '' ? html`
                <srui-icon
                  class="sr-modal__icon"
                  icon="${this.icon}"
                  iconsrc="${this.iconSrc}"
                  size="large"
                  color="${this.iconColor}"></srui-icon>
              ` : ``}
              <div class="sr-modal__title"><slot name="title"></slot></div>
              <div class="sr-modal__info-text"><slot name="info-text"></slot></div>
              <div class="sr-modal__toolbar"><slot name="toolbar"></slot></div>
              <div class="sr-modal__content"><slot name="content"></slot></div>
              <div class="sr-modal__call2action"><slot name="call2action"></slot></div>
            </div>
            <span class='srui-modal__info'><slot name="info"></slot></span>
          </div>
        </div>
      </div>`;
  }

  handleClick(event: Event, type: string): void {
      event.preventDefault();
      /**
       * Event triggered when user clicks on the overlay or close button
       * Event detail.origin informs about if close was originated by an overlay or a close button click
       * @event srui-close-modal
       */
      this.dispatchEvent(new CustomEvent('srui-close-modal', {
        composed: true,
        bubbles: true,
        detail: {
          origin: type
        }
      }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-modal': Modal;
  }
}
