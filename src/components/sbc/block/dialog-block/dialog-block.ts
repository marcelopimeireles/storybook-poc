/**
 * Sunrise UI - SBC - dialog-block
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import styles from './dialog-block.scss';

@customElement('srui-dialog-block')

export class DialogBlock extends LitElement {

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
   * Icon color
   * @attr
   * */
  @property({type: String}) iconColor: string = '';

  /**
   * Block Title
   * @attr
   */
  @property({type: String}) title: string = '';

  /**
   * Title text color
   * @attr
   */
  @property({type: String}) titleColor: string = 'dark-color';

  /**
   * Block Description
   * @attr
   */
  @property({type: String}) description: string = '';

  /**
   * Description text color
   * @attr
   */
  @property({type: String}) descriptionColor: string = 'gray4-color';

  /**
   * If true the button will have 100% with otherwise will adapt to text length
   * @attr
   */
  @property({type: Boolean}) fullWidthButtons: boolean = false;

  /**
   * If true the buttons be align in a row instead column
   * @attr
   */
  @property({type: Boolean}) buttonsRowDirection: boolean = false;

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
      'sr-dialog-block': true,
      'sr-dialog-block__full-width-buttons': this.fullWidthButtons,
      'sr-dialog-block__row-buttons': this.buttonsRowDirection
    };
    return html`
      <div class="${classMap(classes)}">
        <div class="sr-dialog-block__holder">
          <div class="sr-dialog-block__icon">
            ${this.icon !== '' || this.iconSrc !==  '' ? html`
              <srui-icon
                class="sr-modal__icon"
                icon="${this.icon}"
                iconsrc="${this.iconSrc}"
                size="large"
                color="${this.iconColor}"></srui-icon>
            ` : ``}
          </div>
          <div class="sr-dialog-block__title" style="color: var(${'--srui-' + this.titleColor })">${this.title}</div>
          <div class="sr-dialog-block__description" style="color: var(${'--srui-' + this.descriptionColor })">${this.description}</div>
          <div class="sr-dialog-block__actions">
            <div class="sr-dialog-block__cancel-holder">
              <slot name="cancel_button"></slot>
            </div>
            <div class="sr-dialog-block__action-holder">
              <slot name="action_button"></slot>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-dialog-block': DialogBlock;
  }
}
