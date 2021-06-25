/**
 * Sunrise UI - SBC - options-details-block
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult, query} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import styles from './options-details-block.scss';

/**
 * @slot price_date_holder - Slot to add price or date info
 */

/**
 * @slot content - Slot to add all content
 */

/**
 * @slot cancel_button_area - Slot to add a cancel button (or similar) which will provide actions for this option
 */

/**
 * @slot button_area - Slot to add a button (or similar) which will provide actions for this option
 */

@customElement('srui-options-details-block')

export class OptionsDetailsBlock extends LitElement {

  /**
   * Block Title
   * @attr
   */
  @property({type: String}) title: string = '';

  /**
   * Block Subtitle
   * @attr
   */
  @property({type: String}) subTitle: string = '';

  /**
   * if true, the add option button will be visible
   */
  @property({type: Boolean}) buttonVisible: boolean = false;

  /**
   * Expandable content internal state (this can't be used to control component state)
   */
  @property({type: Boolean}) open: boolean = false;

  @query('.sr-options-details-block__content') protected contentEl!: HTMLElement;

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  constructor() {
    super();
  }

  render(): TemplateResult {
    const classes: any = {
      'sr-options-details-block': true,
      'sr-options-details-block__opened': this.open
    };
    return html`
      <div class="${classMap(classes)}">
        <div class="sr-options-details-block__header">
          <div class="sr-options-details-block__title">${this.title}</div>
          <div class="sr-options-details-block__subtitle">${this.subTitle}</div>
          <div class="sr-options-details-block__price-date-holder">
            <slot name="price_date_holder"></slot>
          </div>
        </div>
        <div class="sr-options-details-block__content">
          <slot name="content"></slot>
        </div>
        <div class="sr-options-details-block__actions">
          <slot name="cancel_button_area"></slot>
          <slot name="button_area"></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-options-details-block': OptionsDetailsBlock;
  }
}
