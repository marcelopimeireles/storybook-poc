/**
 * Sunrise UI - Shortcut Widget
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import '../../buttons/more-button/more-button.ts';
import '../../icon/icon.ts';
import styles from './shortcut.scss';
/**
 * Component to add widgets/shortcuts used to select and deselect shortcuts widgets
 *
 */
@customElement('srui-add-shortcut')

export class AddShortcut extends LitElement {

  /**
   * Icon src (for image icons)
   * @attr
   */
  @property({type: String}) iconSrc: string = '';
  /**
   * Icon name (for font icons)
   * @attr
   */
  @property({type: String}) icon: string = '';
  /**
   * Element label
   * @attr
   */
  @property({type: String}) label: string = 'Add Shortcut';
  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  render(): TemplateResult {
    return html`
      <button class="sr-shortcut" @click=${this.ClickHandler}>
        <div class="sr-shortcut__background" ></div>
        <div class="sr-shortcut__holder">
          <div class="sr-shortcut__icon-holder">
            <srui-icon icon="circle-plus-filled-large" size="large"></srui-icon>
          </div>
          <div class="sr-shortcut__label">
            ${ this.label }
          </div>
        </div>
      </button>
    `;
  }

  ClickHandler(event: Event): void {
      event.preventDefault();
      /**
       * Event triggered when user clicks on the remove button
       * @event srui-add-shortcut
       */
      this.dispatchEvent(new CustomEvent('srui-add-shortcut'));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-add-shortcut': AddShortcut;
  }
}
