/**
 * Sunrise UI - Shortcut Widget
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import '../../icon/icon.ts';
import '../../form-elements/checkbox/checkbox.ts';
import styles from './shortcut-selector.scss';
/**
 * Shortcut selector component, it appear on shortcuts container edit mode
 *
 */
@customElement('srui-shortcut-selector')

export class ShortcutSelector extends LitElement {

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
  @property({type: String}) label: string = '';
  /**
   * If true, marks the the checkbox has checked.
   * @attr
   */
  @property({type: Boolean}) active: boolean = false;
  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  render(): TemplateResult {
    return html`
      <div class="sr-shortcut-selector" @click="${this.toggleCheckState}">
        <div class="sr-shortcut-selector__background" ></div>
        <div class="sr-shortcut-selector__checkbox-holder">
          <srui-checkbox round=true medium=true ?checked=${this.active}></srui-checkbox>
        </div>
        <div class="sr-shortcut-selector__holder">
          <div class="sr-shortcut-selector__icon-holder">
            ${this.iconSrc || this.icon ? html`
              <srui-icon icon="${this.icon}" size="large"></srui-icon>
              ` : ''}
          </div>
          <div class="sr-shortcut-selector__label">
            ${ this.label }
          </div>
        </div>
      </div>
    `;
  }
  toggleCheckState(): void {
    this.active = !this.active;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-shortcut-selector': ShortcutSelector;
  }
}
