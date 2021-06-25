/**
 * Sunrise UI - More button
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import '../icon-button/icon-button.ts';
import styles from './more-button.scss';

/**
 * 3 dots Button (or other icon set by attribute) that opens a dropdown to show options
 * @slot content - dropdown box content
 */
@customElement('srui-more-button')

export class MoreButton extends LitElement {
  /**
   * Disables button
   * @attr
   */
  @property({type: Boolean}) disabled: boolean = false;

  /**
   * Shows dropdown
   * @attr
   */
  @property({type: Boolean, reflect: true}) active: boolean = false;

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

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  constructor() {
    super();
  }

  render(): TemplateResult {
    const classes: any = {
      'sr-more-button': true,
      'sr-more-button--active': this.active,
      'sr-more-button--disabled': this.disabled
    };
    return html`
      <span class="${classMap(classes)}" @click="${this.toggleDropdown}" @mouseleave="${ this.closeDropdown }">
      <span class="sr-more-button__click-area"></span>
        <srui-icon-button
          class="sr-more-button__icon-holder"
          icon="${this.icon}"
          iconsrc="${this.iconSrc}"
          icononly
        ></srui-icon-button>
        <div class="sr-more-button__content-dropdown">
          <slot name="content"></slot>
        </div>
      </div>
    `;
  }
  toggleDropdown(event: Event): void {
    if (event) {
      this.active = !this.active;
    }
  }
  closeDropdown(event: Event): void {
    if (event) {
      this.active = false;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-more-button': MoreButton;
  }
}
