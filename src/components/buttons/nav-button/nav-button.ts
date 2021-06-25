/**
 * Sunrise UI - Side navigation button
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import '../../counters/round-counter/round-counter.ts';
import '../../icon/icon.ts';
import sruiNavButtonStyles from './nav-button.scss';

/**
 * Button for the sidebar navigation
 * @slot default - Label for the button
 */
@customElement('srui-nav-button')

export class NavButton extends LitElement {
  /**
   * Diable button (click not possible)
   * @attr
   */
  @property({type: Boolean}) disabled: boolean = false;

  /**
   * Button state
   * ['default', 'active']
   * @attr
   */
  @property({type: String}) state: string = 'default';

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
   * Counter number - if 0 counter doesn't show
   * @attr
   */
  @property({type: Number}) counter: number = 0;

  static get styles(): CSSResult {
    return css`${unsafeCSS(sruiNavButtonStyles)}`;
  }

  constructor() {
    super();
    this.addEventListener('click', this.clickHandler);
  }

  render(): TemplateResult {
    return html`
      <button class="sr-nav-button sr-nav-button--${this.state}" ?disabled="${this.disabled}">
        <div class="sr-nav-button__left">
          <srui-icon class="sr-nav-button__icon" icon="${this.icon}" iconsrc="${this.iconSrc}" color="white-color"></srui-icon>
          <span class="sr-nav-button__label"><slot></span>
        </div>
        ${this.counter > 0 ?  html`<srui-round-counter>${this.counter}</srui-round-counter>` : html`` }
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
    'srui-nav-button': NavButton;
  }
}
