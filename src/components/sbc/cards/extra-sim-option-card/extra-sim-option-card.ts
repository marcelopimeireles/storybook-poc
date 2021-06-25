/**
 * Sunrise UI - - SBC - extra-sim-options-card
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import styles from './extra-sim-option-card.scss';

/**
 * @slot more_button - Slot to add a more button (or similar) which will provide actions for this option
 */

/**
 * @slot button_area - Slot to add a button (or similar) which will provide actions for this option
 */

@customElement('srui-extra-sim-option-card')

export class ExtraSimOptionCard extends LitElement {

  /**
   * Card Title
   * @attr
   */
  @property({type: String}) title: string = '';

  /**
   * Card sub title
   * @attr
   */
  @property({type: String}) subTitle: string = '';

  /**
   * Card description
   * @attr
   */
  @property({type: String}) description: string = '';

  /**
   * Card price
   * @attr
   */
  @property({type: String}) price: string = '';

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  constructor() {
    super();
  }

  render(): TemplateResult {
    const classes: any = {
      'sr-extra-sim-option-card': true
    };
    return html`
      <div class="${classMap(classes)}">
        <div>
          <div class="sr-extra-sim-option-card__title">${this.title}</div>
          <slot name="more_button"></slot>
        </div>
        <div class="sr-extra-sim-option-card__content">
          <div class="sr-extra-sim-option-card__sub-title">${this.subTitle}</div>
          <div class="sr-extra-sim-option-card__description">${this.description}</div>
        </div>
        <div>
          <slot name="button_area"></slot>
          <div class="sr-extra-sim-option-card__price">${this.price}</div>
        </div>
      </div>
    `;
  }
  actionHandler(): void {
    /**
     * Event triggered when call to action is clicked
     * @event srui-cta-click
     */
    this.dispatchEvent(new CustomEvent('srui-cta-click', {
      composed: true,
      bubbles: true,
    }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-extra-sim-option-card': ExtraSimOptionCard;
  }
}
