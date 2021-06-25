/**
 * Sunrise UI - SBC - Missing Credit card
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import styles from './missing-credit-card.scss';

/**
 * @slot icon_placeholder - Slot to add a image or a icon
 */

/**
 * @slot button_area - Slot to add a button (or similar) which will provide actions for this option
 */

@customElement('srui-missing-credit-card')

export class MissingCreditCard extends LitElement {

  /**
   * Box Title
   * @attr
   */
  @property({type: String}) title: string = '';

  /**
   * Box description
   * @attr
   */
  @property({type: String}) description: string = '';

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
      'sr-missing-credit-card': true,
    };
    return html`
      <div class="${classMap(classes)}">
        <div class="sr-missing-credit-card__header">
          <div class="sr-missing-credit-card__title">${this.title}</div>
        </div>
        <div class="sr-missing-credit-card__description">${this.description}</div>
        <slot name="icon_placeholder"></slot>
        ${!this.hideButton ? html`
          <div class="sr-missing-credit-card__action">
          <slot name="button_area"></slot>
        </div>
        ` : html``}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-missing-credit-card': MissingCreditCard;
  }
}
