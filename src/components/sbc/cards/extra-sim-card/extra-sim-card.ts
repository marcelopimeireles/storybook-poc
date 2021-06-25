/**
 * Sunrise UI - SBC - extra-sim-card
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import styles from './extra-sim-card.scss';

/**
 * @slot more_button - Slot to add a more button (or similar) which will provide actions for this option
 */
@customElement('srui-extra-sim-card')

export class ExtraSimOptionCard extends LitElement {

  /**
   * Card Title
   * @attr
   */
  @property({type: String}) title: string = '';

  /**
   * Card description
   * @attr
   */
  @property({type: String}) description: string = '';

  /**
   * Extra SIM state
   * @attr
   */
  @property({type: String}) state: string = '';

  /**
   * Color for label info
   * @attr
   */
  @property({type: String}) stateColor: string = 'valid-color';

  /**
   * Device thumb
   * @attr
   */
  @property({type: String}) thumb: string = '';

  /**
   * Removes bottom separator
   */
  @property({type: Boolean}) last: boolean = false;

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  constructor() {
    super();
  }

  render(): TemplateResult {
    const classes: any = {
      'sr-extra-sim-card': true,
      'sr-extra-sim-card__last': this.last
    };
    return html`
      <div class="${classMap(classes)}">
        <div>
          <div class="sr-extra-sim-card__title">${this.title}</div>
          <div class="sr-extra-sim-card__description">${this.description}</div>
          <div class="sr-extra-sim-card__state" style="color: var(${'--srui-' + this.stateColor })">● ${this.state}</div>
        </div>
        <div class="sr-extra-sim-card__image-holder">
            <img src="${this.thumb}" alt="">
        </div>
        <div>
          <slot name="more_button"></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-extra-sim-card': ExtraSimOptionCard;
  }
}
