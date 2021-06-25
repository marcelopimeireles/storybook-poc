/**
 * Sunrise UI - Expandable block container
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult, query} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import '../../icon/icon.ts';
import styles from './expandable-block.scss';

/**
 * Generic expandable block
 * @slot title
 * @slot content
 */
@customElement('srui-expandable-block')

export class ExpandableBlock extends LitElement {
  /**
   * Expandable content internal state (this can't be used to control component state)
   */
  @property({type: Boolean}) open: boolean = false;
  /**
   * To start Block with open state
   */
  @property({type: Boolean}) initStateOpen: boolean = false;

  @property({type: Number, attribute: false}) blockIdx: number = 0;

  /**
   * To be used in accordean groups where collapsed blocks stick together.
   * Don't specify this attribute for standalone use
   * [first, middle, last]
   */
  @property({type: String}) position: string = null;

  @query('.sr-expandable-block__content') protected contentEl!: HTMLElement;
  @query('.sr-expandable-block__content-holder') protected contentHolderEl!: HTMLElement;

  @property({type: Boolean}) opening: boolean = false;

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener('resize', () => this.adjustMaxHeight());
    if (this.initStateOpen) {
      setTimeout(() => {
        this.toggleContent();
      }, 10);
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.adjustMaxHeight) {
      window.removeEventListener('resize', this.adjustMaxHeight);
    }
  }

  render(): TemplateResult {
    const classes: any = {
      'sr-expandable-block': true,
      'sr-expandable-block--open': this.open
    };
    if (this.position) {
      classes[`sr-expandable-block--${this.position}`] = true;
    }
    return html`
      <div class="${classMap(classes)}">
        <div class="sr-expandable-block__header" @click="${this.toggleContent}">
          <slot name="title"></slot>
          <srui-icon icon="arrow-down-m" size="inherit" color="black"></srui-icon>
        </div>
        <div class="sr-expandable-block__content-holder">
          <div class="sr-expandable-block__content">
            <slot name="content" @slotChange="${this.adjustMaxHeight}"></slot>
          </div>
        </div>
      </div>
    `;
  }

  adjustMaxHeight(): void {
    const height: number = this.contentEl.scrollHeight;
    this.contentHolderEl.style.maxHeight = this.open ? `${height}px` : '0px';
  }

  toggleContent(): void {
    if (this.opening) {
      return;
    }
    this.opening = true;
    const height: number = this.contentEl.scrollHeight;
    if (this.open === true) {
      this.contentHolderEl.style.maxHeight = `${height}px`;
    }
    const maxHeight: string = !this.open ? `${height}px` : '0px';
    setTimeout(() => {
      this.contentHolderEl.style.maxHeight = maxHeight;
    }, 0);
    this.open = !this.open;
    if (this.open === true) {
      setTimeout(() => {
        this.contentHolderEl.style.maxHeight = 'fit-content';
        this.opening = false;
      }, 500);
    } else {
      this.opening = false;
    }

    /**
     * Event triggered when user toggles box
     * @event srui-block-toggle
     */
    this.dispatchEvent(new CustomEvent('srui-block-toggle', {
      composed: true,
      bubbles: true,
      detail: {
        open: this.open,
        idx: this.blockIdx
      }
    }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-expandable-block': ExpandableBlock;
  }
}
