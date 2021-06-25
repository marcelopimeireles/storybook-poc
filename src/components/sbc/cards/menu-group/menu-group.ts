/**
 * Sunrise UI - SBC - Menu Group
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult, query} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import styles from './menu-group.scss';
import '../../../icon/icon.ts';
import '../menu-item/menu-item.ts';

@customElement('srui-menu-group')

export class MenuGroup extends LitElement {
  /**
   * Group label
   * @attr
   */
  @property({type: String}) label: string = '';

  /**
   * if true this element will have sub items (sub navigation) with a collapsible behaviour
   * @attr
   */
  @property({type: Boolean}) hasSubItems: boolean = false;

  /**
   * Expandable content internal state (this can't be used to control component state)
   */
  @property({type: Boolean}) open: boolean = false;

  @query('.sr-menu-group__sub-items-content') protected contentEl!: HTMLElement;
  @query('.sr-menu-group__sub-items-holder') protected contentHolderEl!: HTMLElement;

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  constructor() {
    super();
  }

  render(): TemplateResult {
    const classes: any = {
      'sr-menu-group': true,
      'sr-menu-group--open': this.open
    };
    return html`
      <div class="${classMap(classes)}">
        <div class="sr-menu-group__header">
          ${this.hasSubItems ? html`<div class="sr-menu-group__click-area" @click="${this.toggleContent}"></div>` : html``}
          <div class="sr-menu-group__label">${this.label}</div>
          ${this.hasSubItems ? html`<srui-icon icon="arrow-down-l-small" size="small" color="gray4-color"></srui-icon>` : html``}
        </div>
         ${this.hasSubItems ? html`
          <div class="sr-menu-group__sub-items-holder">
            <div class="sr-menu-group__sub-items-content">
              <slot name="sub_items_holder"></slot>
            </div>
          </div>
          ` : html``}
      </div>
    `;
  }
  toggleContent(): void {
    if (!this.hasSubItems) {
      return;
    }
    const height: number = this.contentEl.scrollHeight;
    if (this.open === true) {
      this.contentHolderEl.style.maxHeight = `${height}px`;
    }
    const maxHeight: string = !this.open ? `${height}px` : '0px';
    setTimeout(() => {
      this.contentHolderEl.style.maxHeight = maxHeight;
    }, 0);
    this.open = !this.open;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-menu-group': MenuGroup;
  }
}
