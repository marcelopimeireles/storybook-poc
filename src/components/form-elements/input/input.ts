/**
 * Sunrise UI - Input
 */
import {html, css, LitElement, property, unsafeCSS, customElement, CSSResult, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import styles from './input.scss';

/**
 * This component is not complete and is mostly used as a placeholder.
 * Angular Material input should be used instead
 */
@customElement ('srui-input')

export class Input extends LitElement {
  @property({type: String}) value: string = '';
  @property({type: String}) placeholder: string = '';
  @property({type: String}) size: string = 'default';
  @property({type: String}) type: string = 'text';
  @property({type: String}) element: string = '';
  @property({type: Boolean}) noBorder: boolean = false;

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  constructor() {
    super();
  }

  render(): TemplateResult {
    const sizeClass: string = this.size === 'small' || this.size === 'large' ?
      'sr-input--size-' + this.size : 'sr-input--size-default';
    const inputClasses: { [p: string]: boolean } = {
      [sizeClass]: true,
      'sr-input--no-border': this.noBorder
    };
    return html`
        ${this.type === 'search' ? html` <img class="sr-input__search-icon" src='/assets/images/icons/search24px.svg'/>` : ''}
        <input
          placeholder=${this.placeholder}
          class="sr-input ${classMap(inputClasses)}"
          type=${this.type}
          element=${this.element}
          value=${this.value}
      />
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-input': Input;
  }
}
