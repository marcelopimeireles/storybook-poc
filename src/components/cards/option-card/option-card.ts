/**
 * Sunrise UI - Modal Widget
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import '../../icon/icon.ts';
import styles from './option-card.scss';

/**
 * Options block item - Provides a slot for a more button (or other uses)
 * @slot more_button - Slot to add a more button (or similar) which will provide actions for this option
 * @slot title - Option title
 * @slot icon_placeholder - Placeholder for external icon or any element.
 */
@customElement('srui-option-card')

export class OptionCard extends LitElement {
  /**
   * Removes bottom separator
   * @attr
   */
  @property({type: Boolean}) last: boolean = false;

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  constructor() {
    super();
    this.addEventListener('mouseover', this.mouseoverHandler);
  }

  render(): TemplateResult {
    const classes: any = {
      'sr-option-card': true,
      'sr-option-card--last': this.last
    };
    return html`
      <div class="${classMap(classes)}" @mouseEnter="mouseoverHandler">
        <div>
          <slot name="title"></slot>
          <slot name="icon_placeholder" class="icons-placeholder"></slot>
        </div>
        <slot name="more_button"></slot>
      </div>
    `;
  }
  mouseoverHandler(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    /**
     * Option card mouseEnter
     * @event srui-options-card-hover
     */
    this.dispatchEvent(new CustomEvent('srui-options-card-hover', {
      composed: true,
      bubbles: true,
    }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-option-card': OptionCard;
  }
}
