/**
 * Sunrise UI - SBC - Selection Box
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import styles from './selection-box.scss';

/**
 * @slot button_area - Slot to add a button (or similar) which will provide actions for this option
 */

@customElement('srui-selection-box')

export class SelectionBox extends LitElement {

  /**
   * Box Title
   * @attr
   */
  @property({type: String}) title: string = '';

  /**
   * Box description
   * @attr
   */
  @property({type: String}) description: string = '';

  /**
   * If true the button will be hide
   */
  @property({type: Boolean}) hideButton: boolean = false;

  /**
   * If true the box will have opacity
   */
  @property({type: Boolean}) disabled: boolean = false;

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  constructor() {
    super();
  }

  render(): TemplateResult {
    const classes: any = {
      'sr-selection-box': true,
      'disabled': this.disabled
    };
    return html`
      <div class="${classMap(classes)}">
        <div class="sr-selection-box__title">${this.title}</div>
        <div class="sr-selection-box__description">${this.description}</div>
        ${!this.hideButton ? html`
          <div class="sr-selection-box__action">
          <slot name="button_area"></slot>
        </div>
        ` : html``}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-selection-box': SelectionBox;
  }
}
