/**
 * Sunrise UI - SBC - Menu-block
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import styles from './menu-block.scss';
import '../../cards/menu-group/menu-group.ts';
import '../../cards/menu-item/menu-item.ts';

@customElement('srui-menu-block')

export class MenuBlock extends LitElement {
  /**
   * Device Info
   * @attr
   */
  @property({type: Array}) menuData: any = [];

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }
  constructor() {
    super();
  }
  connectedCallback(): void {
    super.connectedCallback();
  }
  render(): TemplateResult {
    const classes: any = {
      'sr-menu-block': true
    };
    return html`
      <div class="${classMap(classes)}">
         ${this.menuData !== [] ?
             this.menuData.map((item) => html`
               <srui-menu-group label="${item.label}" ?hasSubItems="${item.item.length > 0}">
                 ${item.item.length > 0 ? html`
                   <div slot="sub_items_holder">
                        ${item.item.map((subItem) => html`
                            <srui-menu-item label="${subItem.label}" icon="${subItem.icon}"></srui-menu-item>
                        `)}
                   </div>
                 ` : html ``}
               </srui-menu-group>
             `) : html``}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-menu-block': MenuBlock;
  }
}
