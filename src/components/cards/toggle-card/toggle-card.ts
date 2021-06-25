/**
 * Sunrise UI - User Card
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import styles from './toggle-card.scss';

/**
 * Toggle card
 * @slot title - Card title
 * @slot sub-title - Card sub-title
 */
@customElement('srui-toggle-card')

export class ToggleCard extends LitElement {
  /**
   * The card Title
   * @attr
   */
  @property({type: String}) title: string = '';
  /**
   * The card sub-itle
   * @attr
   */
  @property({type: String}) subTitle: string = '';
  /**
   * if true the toggle is active/checked
   * @attr
   */
  @property({type: Boolean}) active: boolean = false;
  /**
   * Removes bottom separator
   * @attr
   */
  @property({type: Boolean}) last: boolean = false;
  /**
   * Reduces height and removes bottom border
   * @attr
   */
  @property({type: Boolean}) compact: boolean = false;
  /**
   * Set toggle size (small, medium, large)
   * @attr
   */
  @property({type: String}) toggleSize: string = 'medium';
  /**
   * if filled will add tooltip info (icon with info on hover)
   * @attr
   */
  @property({type: String}) tooltip: string = '';
  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  render(): TemplateResult {
    const classes: any = {
        'sr-toggle-card': true,
        'sr-toggle-card--last': this.last,
        'sr-toggle-card--compact': this.compact
    };
    return html`
      <div class="${classMap(classes)}">
        <div class="sr-toggle-card__text-holder">
          <div class="sr-toggle-card__title ${this.subTitle ? 'width-margin' : ''}">${this.title}</div>
          <div class="sr-toggle-card__sub-title">${this.subTitle}</div>
          ${this.tooltip !== '' ? html`
            <srui-info tooltip="${this.tooltip}"></srui-info>
          ` : html``}
        </div>
        <srui-toggle
          ?checked=${this.active} size="${this.toggleSize}">
        </srui-toggle>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-toggle-card': ToggleCard;
  }
}
