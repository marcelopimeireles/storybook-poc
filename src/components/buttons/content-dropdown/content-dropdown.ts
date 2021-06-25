/**
 * Sunrise UI - Content dropdown
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import '../icon-button/icon-button.ts';
import styles from './content-dropdown.scss';

/**
 *  This component generates a button that can switch on and off a dropdown overlay with flexible content.
 *  The width of the overlay can be set, as well as a content max height that enables inner content scrolling.
 *  Header and footer slots are provided.
 *
 *  @slot header - Dropdown overlay header
 *  @slot content - Dropdown overlay content
 *  @slot footer - Dropdown overlay footer
 *  @slot custom-header-label - Dropdown Custom label (tooltip possibility)
 */
@customElement('srui-content-dropdown')

export class ContentDropdown extends LitElement {
  /**
   * Disable component
   * @attr
   */
  @property({type: Boolean}) disabled: boolean = false;

  /**
   * State of the dropdown (true = open)
   * @attr
   */
  @property({type: Boolean}) active: boolean = false;

  /**
   * Font Icon name for the dropdown toggle button
   * @attr
   */
  @property({type: String}) icon: string = '';

  /**
   * Icon image location (src) - ignored if a font icon is set
   * @attr
   */
  @property({type: String}) iconSrc: string = '';

  /**
   * Label for the dropdown toggle button
   * @attr
   */
  @property({type: String}) label: string = '';

  /**
   * Sub-label for the dropdown toggle button
   * @attr
   */
  @property({type: String}) subLabel: string = '';

  /**
   * Static width of the dropdown overlay
   * @attr
   */
  @property({type: Number}) overlayWidth: number = 300;

  /**
   * Max height of the dropdown overlay content (excluding header and footer slots).
   * If content exceeds this height, the content will scroll
   * @attr
   */
  @property({type: Number}) contentMaxHeight: number = 300;

  /**
   * Hide toggle label for mobile
   * @attr
   */
  @property({type: Boolean}) hideLabelMobile: boolean = false;

  /**
   * No Content (completely removes content)
   * @attr
   */
  @property({type: Boolean}) noContent: boolean = false;

  /**
   * If true will set main label (srui-icon-button) with a max with
   * @attr
   */
  @property({type: Boolean}) labelMaxWidth: boolean = false;

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  constructor() {
    super();
    this.addEventListener('click', this.clickHandler);
  }

  render(): TemplateResult {
    return html`
      <div class="sr-content-dropdown ${classMap({'sr-content-dropdown--active': this.active})}">
        <srui-icon-button
          iconsrc=${ this.iconSrc }
          icon=${ this.icon }
          ?hidelabelmobile=${this.hideLabelMobile}
          sublabel=${this.subLabel}
          ?maxWith=${this.labelMaxWidth}
          @click=${ this.toggleHandler }>
          ${ this.label && this.label !== '' ? this.label : html`<slot name="custom-header-label" slot="custom-label"></slot>` }
        </srui-icon-button>
        <div class="sr-content-dropdown__overlay" ?active=${this.active} style="width: ${this.overlayWidth}px">
          <div class="sr-content-dropdown__overlay-header">
            <slot name="header"></slot>
          </div>
          ${ !this.noContent ? html`
            <div class="sr-content-dropdown__overlay-content">
              <div class="sr-content-dropdown__scroll-content" style="max-height: ${this.contentMaxHeight}px">
                <slot name="content"></slot>
              </div>
              <div class="sr-content-dropdown__fade-element"></div>
            </div>
          ` : ''}
          <div class="sr-content-dropdown__overlay-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    `;
  }

  clickHandler(event: Event): void {
    if (this.disabled) {
      event.stopImmediatePropagation();
    }
  }

  toggleHandler(): void {
    if (this.disabled) {
      return;
    }

    /**
     * Dropdown toggle event - details: target active state
     * @event srui-toggle
     */
    this.dispatchEvent(new CustomEvent('srui-toggle', {
      composed: true,
      bubbles: true,
      detail: !this.active
    }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-content-dropdown': ContentDropdown;
  }
}
