/**
 * Sunrise UI - SBC - extra-sims-block
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult, query} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import styles from './extra-sims-block.scss';

/**
 * @slot extra-sims-holder - Slot to add all extra-sims content
 */

/**
 * @slot button_area - Slot to add a button (or similar) which will provide actions for this option
 */

@customElement('srui-extra-sims-block')

export class ExtraSimOptionCard extends LitElement {

  /**
   * Block Title
   * @attr
   */
  @property({type: String}) title: string = '';

  /**
   * SIMs length
   * @attr
   */
  @property({type: Number}) simsLength: Number = 0;

  /**
   * Max SIMs length
   * @attr
   */
  @property({type: Number}) maxSims: Number = 5;

  /**
   * if true, the add option button will be visible
   */
  @property({type: Boolean}) buttonVisible: boolean = false;

  /**
   * Expandable content internal state (this can't be used to control component state)
   */
  @property({type: Boolean}) open: boolean = false;

  @query('.sr-extra-sims-block__content') protected contentEl!: HTMLElement;

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  constructor() {
    super();
  }
  connectedCallback(): void {
    super.connectedCallback();
    setTimeout(() => {
      this.shadowRoot.querySelector('slot').addEventListener('DOMNodeInserted', () => {
        this.updateContentHeight();
      }, false);
    }, 10);
  }
  render(): TemplateResult {
    const classes: any = {
      'sr-extra-sims-block': true,
      'sr-extra-sims-block__opened': this.open
    };
    return html`
      <div class="${classMap(classes)}">
        <div class="sr-extra-sims-block__header">
          <div class="sr-extra-sims-block__title">${this.title}</div>
          ${this.buttonVisible ? html`
            <slot name="button_area"></slot>
          ` : html``}
        </div>
        <div class="sr-extra-sims-block__counter" @click="${this.toggleContent}">
          <div>You have ${this.simsLength} of ${this.maxSims}</div>
          ${this.simsLength > 1 ? html`
            <srui-icon icon="arrow-down-m" size="small" color="black" class="sr-extra-sims-block__arrow"></srui-icon>
          ` : html ``}
        </div>
        <div class="sr-extra-sims-block__content">
        <div style="display: block">
          <slot class="sr-extra-sims-block__sims-holder" name="extra-sims-holder"></slot>
        </div>
        </div>
      </div>
    `;
  }
  toggleContent(): void {
    const height: number = this.contentEl.scrollHeight;
    this.contentEl.style.maxHeight = !this.open ? `${height}px` : '85px';
    this.open = !this.open;
    /**
     * Event triggered when user toggles box
     * @event srui-extra-sims-block-toggle
     */
    this.dispatchEvent(new CustomEvent('srui-extra-sims-block-toggle', {
      composed: true,
      bubbles: true,
      detail: {
        open: this.open
      }
    }));
  }
  updateContentHeight(): void {
    if (this.open) {
      const height: number = this.contentEl.scrollHeight;
      this.contentEl.style.maxHeight = `${height + 105}px`;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-extra-sims-block': ExtraSimOptionCard;
  }
}
