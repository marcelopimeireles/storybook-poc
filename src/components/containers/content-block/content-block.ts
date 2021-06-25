/**
 * Sunrise UI - Content Block
 */
import {css, CSSResult, customElement, html, LitElement, unsafeCSS, TemplateResult, property} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import styles from './content-block.scss';

/**
 * Generic content block with header title, action and content layout
 * @slot title - The block title (header)
 * @slot action - Holder for an action button on the top right of the box
 * @slot content - The content of the block
 * @slot title_2nd-column - The block title (header) for 2nd column
 * @slot content_2nd-column - The content of the block for 2nd column
 * @slot footer - footer of the block (optional)
 */
@customElement('srui-content-block')

export class ContentBlock extends LitElement {
    /**
    * if true the edit icon/button is not visible
    * @attr
    */
    @property({type: Boolean}) notEditable: boolean = false;

    /**
    * if true 2nd column will be avaiable
    * @attr
    */
    @property({type: Boolean}) secondColumn: boolean = false;

    /**
    * * * if true the edit icon/button is not visible
    * @attr
    * */
    @property({type: Boolean}) secondColumnNotEditable: boolean = false;

  /**
   * * * if true the the height will adapt the content
   * @attr
   * */
  @property({type: Boolean}) adaptiveHeight: boolean = false;

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  render(): TemplateResult {
    const classes: any = {
      'sr-content-block': true,
      'sr-content-block__2columns': this.secondColumn,
      'sr-content-block__no-min-height': this.adaptiveHeight
    };
    return html`
      <div class="${classMap(classes)}">
        <div  class="sr-content-block__main-holder">
          <div class="sr-content-block__1st-column">
            <div class="sr-content-block__header">
              <slot name="title"></slot>
              ${ !this.notEditable ? html`
                <slot name="action"></slot>
            ` : ``}
            </div>
            <div class="sr-content-block__content">
              <slot name="content"></slot>
            </div>
          </div>
          ${this.secondColumn ? html`
            <div class="sr-content-block__2nd-column">
              <div class="sr-content-block__header">
                <slot name="title_2nd-column"></slot>
                ${ !this.secondColumnNotEditable ? html`
                <slot name="action_2nd-column"></slot>
              ` : ``}
              </div>
              <div class="sr-content-block__content">
                <slot name="content_2nd-column"></slot>
              </div>
            </div>`
          : html``}
        </div>
        <div class="sr-content-block__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-content-block': ContentBlock;
  }
}
