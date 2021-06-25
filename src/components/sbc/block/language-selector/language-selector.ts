/**
 * Sunrise UI - SBC - Language selector
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult, query} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import styles from './language-selector.scss';
import '../../../icon/icon.ts';
@customElement('srui-language-selector')

export class LanguageSelector extends LitElement {

  /**
   * Current Language
   * @attr
   */
  @property({type: String}) currentLanguage: string = '';

  /**
   * Main background Color
   * @attr
   */
  @property({type: Boolean}) whiteBackground: boolean = false;

  /**
   * Main alignment
   * @attr
   */
  @property({type: String}) mainAlignment: string = 'center';

  /**
   * languages Selection
   * @attr
   */
  @property({type: Array}) languages: any = [];

  /**
   * Open state of the language selection (this can't be used to control component state)
   */
  @property({type: Boolean}) open: boolean = false;

  @query('.sr-language-selector') protected contentEl!: HTMLElement;

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  constructor() {
    super();
  }
  connectedCallback(): void {
    super.connectedCallback();
    setTimeout(() => {
      this.contentEl.addEventListener('click', (e: any) => this.closeSelectorHandler(e));
    }, 10);
  }
  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.contentEl.removeEventListener('click', (e: any) => this.closeSelectorHandler(e));
  }
  render(): TemplateResult {
    const classes: any = {
      'sr-language-selector': true,
      'sr-language-selector__white-background': this.whiteBackground,
      'sr-language-selector__open': this.open
    };
    classes[`sr-language-selector__${this.mainAlignment}`] = true;
    return html`
      <div class="${classMap(classes)}">
        <button class="sr-language-selector__current-language-button" @click="${this.toggleSelector}" id="main_button">
          ${this.currentLanguage}<srui-icon icon="arrow-down-m" size="small" color="black"></srui-icon>
        </button>
        <div class="sr-language-selector__language-selection">
          <div class="sr-language-selector__tip"></div>
          <div class="sr-language-selector__language-selection-holder">
            ${this.languages.map((item) => html`
              <button class="sr-language-selector__language-selection-button ${this.setActive(item)}" @click="${(event: Event) => this.setActiveLanguage(event, item)}">${item}</button>
            `)}
          </div>
        </div>
      </div>
    `;
  }

  setActive(lang: string): any {
    return lang === this.currentLanguage ? 'active' : '';
  }
  toggleSelector(): void {
    this.open = !this.open;
    /**
     * Event triggered when user toggles language selector
     * @event srui-language-selector-toggle
     */
    this.dispatchEvent(new CustomEvent('srui-language-selector-toggle', {
      composed: true,
      bubbles: true,
      detail: {
        open: this.open
      }
    }));
  }

  setActiveLanguage(event: Event, lang: string): void {
    event.preventDefault();
    this.currentLanguage = lang;
    this.languageSelectionHandler(event, lang);
    setTimeout(() => {
      this.open = false;
    }, 250);
  }

  languageSelectionHandler = (evt: Event, lang: String): void => {
    /**
     * Event triggered when language is selected
     * lang retrieves the selected language
     * @event srui-language-selection
     */
    this.dispatchEvent(new CustomEvent('srui-language-selection', {
      composed: true,
      bubbles: true,
      detail: {
        event: evt,
        lang: lang
      }
    }));
  }

  closeSelectorHandler = (e: any): void => {
    if (!e['srcElement'].classList.value.includes('current-language-button')) {
      if (this.open) {
        this.open = false;
      }
    }
    /**
     * Event triggered to close the selector
     * lang retrieves the selected language
     * @event srui-close-language-selection
     */
    this.dispatchEvent(new CustomEvent('srui-close-language-selection', {
      composed: true,
      bubbles: true,
      detail: {
        event: e
      }
    }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-language-selector': LanguageSelector;
  }
}
