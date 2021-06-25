/**
 * Sunrise UI - Icon Button
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import '../../icon/icon.ts';
import styles from './icon-button.scss';

/**
 * Simple Button component with an icon before the label
 * @slot default - Button label
 * @slot custom-label - Custom label
 */
@customElement('srui-icon-button')

export class IconButton extends LitElement {
  /**
   * Disables button
   * @attr
   */
  @property({type: Boolean}) disabled: boolean = false;

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
   * Removes margin if there is no label
   * @attr
   */
  @property({type: Boolean}) iconOnly: boolean = false;

  /**
   * Sub-label for the button
   * @attr
   */
  @property({type: String}) subLabel: string = '';

  /**
   * If true, on hover bg becomes light grey. Used in dropdown menus.
   * @attr
   */
  @property({type: Boolean}) hoverHighlight: boolean = false;

  /**
   * If true, font will be normal instead of bold
   * @attr
   */
  @property({type: Boolean}) lightText: boolean = false;

  /**
   * If true, marks the icon with a red overlay disc
   * @attr
   */
  @property({type: Boolean}) updates: boolean = false;

  /**
   * Button active state - Click not triggered
   * @attr
   */
  @property({type: Boolean}) active: boolean = false;

  /**
   * Removes the label in mobile (only icon shows)
   * @attr
   */
  @property({type: Boolean}) hideLabelMobile: boolean = false;

  /**
   * Button style ['normal', 'small-link']
   * @attr
   */
  @property({type: String}) buttonType: string = 'normal';
  /**
    * Button color
    * @attr
    */
  @property({type: String}) buttonColor: string = 'black';

  /**
   * if true will set label max with to 250px
   * @attr
   */
  @property({type: Boolean}) maxWith: boolean = false;

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  constructor() {
    super();
    this.addEventListener('click', this.clickHandler);
  }

  render(): TemplateResult {
    const classes: any = {
      'sr-icon-button': true,
      'sr-icon-button--hover-highlight': this.hoverHighlight,
      'sr-icon-button--light-text': this.lightText,
      'sr-icon-button--active': this.active,
      'sr-icon-button--hide-label-mobile': this.hideLabelMobile,
      'sr-icon-button--icon-only': this.iconOnly,
      'sr-icon-button--has-sub-label': this.subLabel,
      'sr-icon-button__max-width': this.maxWith
    };
    classes[`sr-icon-button--${this.buttonType}`] = true;
    return html`
      <button
        class="${classMap(classes)}"
        ?disabled="${this.disabled}"
        style="${this.buttonColor !== 'black' ? css`color: var(--srui-primary-color, #E6003C)` : ''}">
        <div class="sr-icon-button__icon">
          ${this.iconSrc || this.icon ? html`
            <srui-icon
              class="sr-icon-button__main-icon"
              icon="${this.icon}"
              iconsrc="${this.iconSrc}"
              color="black"
              size="${this.buttonType === 'small-link' ? 'small' : 'normal'}"
            ></srui-icon>
          ` : ''}
          ${this.updates ? html`<span class="sr-icon-button__updates-warning"></span>` : ''}
        </div>
        <div class="sr-icon-button__text-holder">
            <span class="sr-icon-button__label"><slot></slot><slot name="custom-label"></slot></span>
          ${this.subLabel !== '' ? html`
            <span class="sr-icon-button__sub-label">${this.subLabel}</span>
          ` : html``}
        </div>
      </button>
    `;
  }

  clickHandler(event: Event): void {
    if (this.disabled) {
      event.stopImmediatePropagation();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-icon-button': IconButton;
  }
}
