/**
 * Sunrise UI - Snackbar
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import styles from './snackbar.scss';

@customElement('srui-snackbar')

export class SnackBar extends LitElement {
  /**
   * Snackbar vertical alignment ['', top, center, bottom]
   * (if empty sting the position will be "free")
   * @attr
   */
  @property({type: String}) vAlign: string = 'top';
  /**
   * Snackbar horizontal alignment ['', left, center, left]
   * (if empty sting the position will be "free")
   * @attr
   */
  @property({type: String}) hAlign: string = 'left';
  /**
   * Snackbar title (text)
   * @attr
   */
  @property({type: String}) title: string = '';
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
    * Base color (icon and text)
    * @attr
   * */
  @property({type: String}) baseColor: string = '';

  /**
   * Add close button to bar
   * @attr
   * */
  @property({type: Boolean}) closeButton: boolean = false;

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  render(): TemplateResult {
    const vAlign: string = 'sr-snackbar--v-align-' + this.vAlign;
    const hAlign: string = 'sr-snackbar--h-align-' + this.hAlign;
    const classes: any = {
        'sr-snackbar': true,
        [vAlign]: this.vAlign !== '' ? true : false,
        [hAlign]: this.hAlign !== '' ? true : false,
        'sr-snackbar--fixed': this.vAlign !== '' || this.hAlign !== '' ? true : false
    };
    return html`
      <div class="${classMap(classes)}" @click=${(event) => event.stopPropagation()}>
        ${this.icon !== '' || this.iconSrc !==  '' ? html`
          <srui-icon
            class="sr-snackbar__icon"
            icon="${this.icon}"
            iconsrc="${this.iconSrc}"
            size="normal"
            color="${this.baseColor}"></srui-icon>
        ` : ``}
        <div class="sr-snackbar__title" style="color: var(${'--srui-' + this.baseColor})">${this.title}</div>
        ${this.closeButton ? html`
          <button class="sr-snackbar__close" @click="${(event: Event) => this.handleClick(event)}">
            <srui-icon icon="close-m" size="small" color="black"></srui-icon>
          </button>
        ` : html``}
      </div>`;
  }

  handleClick(event: Event): void {
      event.preventDefault();
      /**
       * Event triggered when user clicks close button
       * Event detail.origin informs about if close was originated by an overlay or a close button click
       * @event srui-close-snackbar
       */
      this.dispatchEvent(new CustomEvent('srui-close-snackbar', {
        composed: true,
        bubbles: true
      }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-snackbar': SnackBar;
  }
}
