/**
 * Sunrise UI - User Card
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import styles from './user-card.scss';

/**
 * User Profile card
 * @slot initials - The user first and last name initials
 * @slot name - The name of the user
 * @slot role
 */
@customElement('srui-user-card')

export class UserCard extends LitElement {
  @property({type: Boolean}) disabled: boolean = false;
  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  constructor() {
    super();
  }

  render(): TemplateResult {
    return html`
      <div class="sr-user-card">
        <div class="sr-user-card__patch"><slot name="initials"></slot></div>
        <div class="sr-user-card__info-holder">
          <div class="sr-user-card__name"><slot name="name"></slot></div>
          <div class="sr-user-card__role"><slot name="role"></slot></div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-user-card': UserCard;
  }
}
