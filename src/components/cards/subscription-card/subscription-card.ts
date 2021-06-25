/**
 * Sunrise UI - Modal Widget
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import styles from './subscription-card.scss';

/**
 * Line component for subcription card with edit button
 * @slot label - Label for the line
 * @slot title - Line title
 * @slot info - Subtitle info
 */
@customElement('srui-subscription-card')

export class SubscriptionCard extends LitElement {
  /**
   * If true, line is a state line and doesn't show title or info, just the state info
   * @attr
   */
  @property({type: Boolean}) showState: boolean = false;

  /**
   * Removes bottom separator
   * @attr
   */
  @property({type: Boolean}) last: boolean = false;
  /**
   * if true the edit icon/button is not visible
   * @attr
   */
  @property({type: Boolean}) editMode: boolean = false;

  /**
   * State text string
   * @attr
   */
  @property({type: String}) stateString: string = 'Active';

  /**
   * State text color (uses global-styles color variables)
   * @attr
   */
  @property({type: String}) stateColor: string = 'valid-color';

  /**
   * Active state string
   * @attr
   */
  @property({type: String}) iconColor: string = 'gray3-color';

  /**
   * If true the button will be disabled
   * @attr
   */
  @property({type: Boolean}) disabledButton: boolean = false;

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  render(): TemplateResult {
    const classes: any = {
      'sr-subscription-card': true,
      'sr-subscription-card--state': this.showState,
      'sr-subscription-card--last': this.last
    };
    return html`
      <div class="${classMap(classes)}">
        <div class="sr-subscription-card__content">
          <span class="sr-subscription-card__label-holder"><slot name="label"></slot></span>
          <div class="sr-subscription-card__info">
            <span class="sr-subscription-card__title-holder"><slot name="title"></slot></span>
            <span class="sr-subscription-card__info-holder"><slot name="info"></slot></span>
            <span class="sr-subscription-card__state-label" style="color: var(${'--srui-' + this.stateColor })">● ${this.stateString}</span>
          </div>
        </div>
        ${ this.editMode ? html`
          <srui-std-button
            size="tiny"
            rounded=true"
            color="alpha-color"
            icon="edit"
            ?disabled=${this.disabledButton}
            iconcolor=${this.iconColor}
            @click=${this.editHandler}
          ></srui-std-button>
        ` : ``}
      </div>
    `;
  }

  editHandler(): void {
    /**
     * Event triggered when line edit button is clicked
     * @event srui-click-edit
     */
    this.dispatchEvent(new CustomEvent('srui-click-edit', {
      composed: true,
      bubbles: true,
    }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-subscription-card': SubscriptionCard;
  }
}
