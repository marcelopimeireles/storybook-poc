/**
 * Sunrise UI - Action Card
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import styles from './contact-info-card.scss';

/**
 * Two columns Contact info holder card
 * @slot main - Main address and contact (1st column)
 * @slot secondary - Seconday (billing) address and contact (2nd column)
 */
@customElement('srui-contact-info-card')

export class ContactInfoCard extends LitElement {
  /**
   * Main Contact Title
   * @attr
   */
  @property({type: String}) mainTitle: string = '';

  /**
   * Secondary Contact Title
   * @attr
   */
  @property({type: String}) secondaryTitle: string = '';

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  render(): TemplateResult {
    return html`
      <div class="sr-contact-info-card">
        <div class="sr-contact-info-card__block">
          <div class="sr-contact-info-card__block-title">${this.mainTitle}Title</div>
          <div class="sr-contact-info-card__block-content"><slot name="main"></div>
        </div>
        <div class="sr-contact-info-card__block">
          <div class="sr-contact-info-card__block-title">${this.secondaryTitle}Secondary Title</div>
          <div class="sr-contact-info-card__block-content"><slot name="secondary"></div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-contact-info-card': ContactInfoCard;
  }
}
