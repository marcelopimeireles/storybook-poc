/**
 * Sunrise UI - Modal Widget
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import styles from './title-text-card.scss';

/**
 * Simple element with a label and text
 * @slot content text
 */
@customElement('srui-title-text-card')

export class TitleTextCard extends LitElement {
  /**
   * Title of the element
   * @attr
   */
  @property({type: String}) title: string = '';
  /**
   * If true the space for the title will be bigger (43,33%)
   * @attr
   */
  @property({type: Boolean}) largeTitle: boolean = false;

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  constructor() {
    super();
  }

  render(): TemplateResult {
    const classes: any = {
      'sr-title-text-card': true,
      'sr-title-text-card__large-tile': this.largeTitle
    };
    return html`
      <div class="${classMap(classes)}">
        <div class="sr-title-text-card__title">${this.title}</div>
        <div class="sr-title-text-card__text">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-title-text-card': TitleTextCard;
  }
}
