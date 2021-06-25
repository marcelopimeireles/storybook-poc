/**
 * Sunrise UI - Side navigation button
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import '../../svg/loader-icon.ts';
import '../../icon/icon.ts';
import styles from './std-button.scss';

/**
 * Standard Button
 * @slot default - Button Label
 */
@customElement('srui-std-button')

export class StdButton extends LitElement {
  /**
   * Disables button
   * @attr
   */
  @property({type: Boolean}) disabled: boolean = false;

  /**
   * Button background color - Should be one of the CSS var defined colors:
   * [primary-color, primary-color-dark, secondary-color, secondary-color-light,
   * promo-color, valid-color, invalid-color, dark-color, grey-color, white-color, alpha-color]
   * @attr
   */
  @property({type: String}) color: string = 'primary-color';

  /**
   * Button size
   * [tiny, small, default, large]
   * @attr
   */
  @property({type: String}) size: string = 'default';

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
   * Color for the font icons and label
   * [primary-color, primary-color-dark, secondary-color, secondary-color-light,
   * promo-color, valid-color, invalid-color, dark-color, grey-color, white-color, alpha-color]
   * @attr
   */
  @property({type: String}) iconColor: string = 'white-color';

  /**
   * Icon size
   * [tiny, small, medium, large, inherit (just for font icons - will inherit ancestor font size)]
   * @attr
   */
  @property({type: String}) iconSize: string = 'small';

  /**
   * Round button (no text, just icon)
   * @attr
   */
  @property({type: Boolean}) rounded: boolean = false;

  /**
   * Hover effect is a brighter color instead of darker
   * @attr
   */
  @property({type: Boolean}) lighterHover: boolean = false;

  /**
   * Loading state - if present shows the load animation icon
   * @attr
   */
  @property({type: Boolean}) loading: boolean = false;

  /**
   * If true, when loading removes text and icon and only the loader animation shows in the button
   * @attr
   */
  @property({type: Boolean}) loadingSolo: boolean = false;

  /**
   * HTML button type (if submit event is triggered from hidden button outside the shadow dom)
   * @attr
   */
  @property({type: String}) type: string = 'button';

  /**
   * If true, when loading removes text and icon and only the loader animation shows in the button
   * @attr
   */
  @property({type: Boolean}) disableEvent: boolean = false;

  /**
   * If true, the button text will
   * @attr
   */
  @property({type: String}) fontWeight: string = '700';

  private targetButton: HTMLButtonElement;

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  constructor() {
    super();
    this.addEventListener('click', this.clickHandler);
  }

  firstUpdated(): void {
    if (this.type !== 'submit') {
      return;
    }
    const button: HTMLButtonElement = document.createElement('button');
    button.style.display = 'none';
    button.type = this.type;
    button.addEventListener('click', this.submitHandler);
    this.appendChild(button);

    this.targetButton = button;
  }

  render(): TemplateResult {
    const classes: any = {
      'sr-std-button': true,
      'sr-std-button--rounded': this.rounded,
      'sr-std-button--loading': this.loading,
      'sr-std-button--solo-loader': this.loadingSolo,
      'sr-std-button--lighter-hover': this.lighterHover,
    };
    classes[`sr-std-button--${this.color}`] = true;
    classes[`sr-std-button--size-${this.size}`] = true;
    return html`
      <button class="${classMap(classes)}"
        ?disabled=${this.disabled}
        type="${this.type}"
      >
        <div class="sr-std-button__background"
          style="background: var(${'--srui-' + this.color})"
        ></div>
        <div class="sr-std-button__loader">
          <srui-loader-icon></srui-loader-icon>
        </div>
        ${this.icon !== '' || this.iconSrc !== '' ? html`
          <srui-icon icon="${this.icon}" iconsrc="${this.iconSrc}" color="${this.iconColor}" size="${this.iconSize}"/>`
          : ''
        }
        ${!this.rounded ? html`<span class='sr-std-button__label' style="color: var(${'--srui-' + this.iconColor}); font-weight: ${this.fontWeight}"><slot></span>` : '' }
      </button>
      `;
  }
  submitHandler = (evt: Event): void => {
    /**
     * Event triggered when button is type submit
     * Event detail.event retrieves the event and detail.target the event.target of the element clicked
     * @event srui-submit-event
     */
    this.dispatchEvent(new CustomEvent('srui-submit-event', {
      composed: true,
      bubbles: true,
      detail: {
        event: evt,
        target: evt.target
      }
    }));
  }
  clickHandler(event: Event): void {
    if (this.disableEvent) {
      event.stopPropagation();
      return;
    }
    if (this.disabled) {
      event.stopImmediatePropagation();
    } else if (this.type === 'submit') {
      event.stopImmediatePropagation();
      this.targetButton.click();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-std-button': StdButton;
  }
}
