/**
 * Sunrise UI - SBC - select-service-block
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import styles from './select-service-block.scss';

/**
 * @slot content - Slot to add all content for this block
 */

@customElement('srui-select-service-block')

export class SelectServiceBlock extends LitElement {

  /**
   * Block Title
   * @attr
   */
  @property({type: String}) title: string = '';

  /**
   * Block Description
   * @attr
   */
  @property({type: String}) description: string = '';

  /**
   * Block Sub title
   * @attr
   */
  @property({type: String}) subTitle: string = '';

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
      'sr-select-service-block': true
    };
    return html`
      <div class="${classMap(classes)}">
        <div class="sr-select-service-block__description">${this.description}</div>
        <div class="sr-select-service-block__sub-title">${this.subTitle}</div>
        <div class="sr-select-service-block__content">
            <slot name="content"></slot>
        </div>
      </div>
    `;
  }
  handleBackClick(event: Event, type: string): void {
    event.preventDefault();
    /**
     * Event triggered when user clicks on back button
     * @event srui-select-service-back
     */
    this.dispatchEvent(new CustomEvent('srui-select-service-back', {
      composed: true,
      bubbles: true,
      detail: {
        origin: type
      }
    }));
  }
  handleCloseClick(event: Event, type: string): void {
    event.preventDefault();
    /**
     * Event triggered when user clicks on close button
     * @event srui-close-select-service
     */
    this.dispatchEvent(new CustomEvent('srui-close-select-service', {
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
    'srui-select-service-block': SelectServiceBlock;
  }
}
