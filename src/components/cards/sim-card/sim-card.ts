/**
 * Sunrise UI - Modal Widget
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import styles from './sim-card.scss';

/**
 * Sim card info display line
 * @slot title - Sim card name / type
 * @slot iccid - ICCID of the sim card
 * @slot pin_puk - PIN / PUK code of the card
 * @slot device - Device associated to the sim card
 * @slot more_button - Slot to add a more button (or similar) which will provide actions for this option
 */
@customElement('srui-sim-card')

export class SimCard extends LitElement {
  /**
   * State for the sim card (if true shows Active)
   * @attr
   */
  @property({type: Boolean}) active: boolean = false;

  /**
   * Removes bottom separator
   * @attr
   */
  @property({type: Boolean}) last: boolean = false;

  /**
   * Label for ICCID info
   * @attr
   */
  @property({type: String}) iccidLabel: string = 'ICCID';

  /**
   * Label for Pin Puk info
   * @attr
   */
  @property({type: String}) pinPukLabel: string = 'PIN / PUK';

  /**
   * Label for device info
   * @attr
   */
  @property({type: String}) deviceLabel: string = 'Device';

  /**
   * Label for state info
   * @attr
   */
  @property({type: String}) stateLabel: string = 'Active';

  /**
   * Color for label info
   * @attr
   */
  @property({type: String}) stateColor: string = 'active-color';

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  render(): TemplateResult {
    const classes: any = {
      'sr-sim-card': true,
      'sr-sim-card--active': this.active,
      'sr-sim-card--last': this.last
    };
    return html`
      <div class="${classMap(classes)}">
        <div class="sr-sim-card-card__row">
          <div class="sr-sim-card__label"><slot name="title"></slot></div>
          <div class="sr-sim-card__active-status" style="color: var(${'--srui-' + this.stateColor })">● ${this.stateLabel}</div>
        </div>
        <div class="sr-sim-card-card__row">
          <div class="sr-sim-card__label">${this.iccidLabel}</div>
          <slot name="iccid" class="content"></slot>
        </div>
        <div class="sr-sim-card-card__row">
          <div class="sr-sim-card__label">${this.pinPukLabel}</div>
          <slot name="pin_puk" class="content"></slot>
        </div>
        <div class="sr-sim-card-card__row">
          <div class="sr-sim-card__label">${this.deviceLabel}</div>
          <slot name="device" class="content"></slot>
        </div>
        <div class="sr-sim-card-card_more-button-holder"><slot name="more_button"></slot></div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-sim-card': SimCard;
  }
}
