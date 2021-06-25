/**
 * Sunrise UI - Site Selector Button
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import '../../icon/icon.ts';
import '../icon-button/icon-button.ts';
import styles from './site-selector-button.scss';

/**
 * Selector button for company (site) selection and settings
 * @slot site - Title, eg: Company / Site name
 * @slot code - Subtitle, eg: code or extra info
 */
@customElement('srui-site-selector-button')

export class SiteSelectorButton extends LitElement {
  /**
   * Disable Button
   * @attr
   */
  @property({type: Boolean}) disabled: boolean = false;

  /**
   * Button selected state
   * @attr
   */
  @property({type: Boolean}) active: boolean = false;

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

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  constructor() {
    super();
    this.addEventListener('click', this.clickHandler);
  }

  render(): TemplateResult {
    const classes: any = {
      'sr-site-selector-button': true,
      'sr-site-selector-button--disabled': this.disabled,
      'sr-site-selector-button--active': this.active
    };
    return html`
      <div class="${classMap(classes)}">
        <button class="sr-site-selector-button__main" ?disabled="${this.disabled}">
          <div class="sr-site-selector-button__state-icon">
              <span></span>
          </div>
          <div class="sr-site-selector-button__icon">
            <srui-icon iconsrc="${this.iconSrc}" icon="${this.icon}" color="black"></srui-icon>
          </div>
          <div class="sr-site-selector-button__content-holder">
            <span class="sr-site-selector-button__site"><slot name="site"></span>
            <span class="sr-site-selector-button__code"><slot name="code"></span>
          </div>
        </button>
        <srui-icon-button
          class="sr-site-selector-button__settings-button"
          icon="settings-gear"
          @click="${this.settingsHandler}"
        ></srui-icon-button>
      </div>
    `;
  }

  clickHandler(event: Event): void {
    if (this.disabled) {
      event.stopImmediatePropagation();
    }
  }

  settingsHandler(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    if (this.disabled) {
      return;
    }

    /**
     * Settings button clicked
     * @event srui-settings-click
     */
    this.dispatchEvent(new CustomEvent('srui-settings-click', {
      composed: true,
      bubbles: true,
    }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-site-selector-button': SiteSelectorButton;
  }
}
