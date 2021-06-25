/**
 * Sunrise UI - Action Card
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import '../../buttons/std-button/std-button.ts';
import '../../icon/icon.ts';
import styles from './action-card.scss';

/**
 * Generic card with an Icon, Title, description and call to action
 * @slot default - Card description
 */
@customElement('srui-action-card')

export class ActionCard extends LitElement {
  /**
   * Icon name (for font icons)
   * @attr
   */
  @property({type: String}) icon: string = 'dots-more';

  /**
   * Icon src (for image icons)
   * @attr
   */
  @property({type: String}) iconSrc: string = '';

  /**
   * Title
   * @attr
   */
  @property({type: String}) title: string = '';

  /**
   * Button label
   * @attr
   */
  @property({type: String}) buttonLabel: string = '';

  /**
   * Action Button color
   * @attr
   */
  @property({type: String}) actionColor: string = 'primary-color';

  /**
   * If true the button will be disabled
   * @attr
   */
  @property({type: Boolean}) disabledButton: boolean = false;

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  constructor() {
    super();
  }

  render(): TemplateResult {
    return html`
      <div class="sr-action-card">
        ${this.icon !== '' || this.iconSrc !== '' ? html`
          <srui-icon icon="${this.icon}" iconsrc="${this.iconSrc}" size="large" color="${this.actionColor}"/>`
          : ''
        }
        <div class="sr-action-card__title">${this.title}</div>
        <div class="sr-action-card__description">
          <slot></slot>
        </div>
        <srui-std-button
          ?disabled=${this.disabledButton}
          class="sr-action-card__button"
          size="tiny"
          color="${this.actionColor}"
          @click="${this.actionHandler}">
          ${this.buttonLabel}
        </srui-std-button>
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
    'srui-action-card': ActionCard;
  }
}
