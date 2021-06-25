/**
 * Sunrise UI - Icon Button
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import '../../icon/icon.ts';
import '../../counters/round-counter/round-counter.ts';
import styles from './link.scss';

/**
 * Link component with an icon before the label
 *
 * @slot default - Link label
 */
@customElement('srui-link')

export class Link extends LitElement {
  /**
   * Disables link
   * @attr
   */
  @property({type: Boolean}) disabled: boolean = false;

  /**
   * Icon name (for font icons)
   * @attr
   */
  @property({type: String}) icon: string = '';

  /**
   * If true, the link is with active state
   * @attr
   */
  @property({type: Boolean}) active: boolean = false;

  /**
   * Icon src (for image icons)
   * @attr
   */
  @property({type: String}) iconSrc: string = '';

  /**
   * Link size ['normal', 'small', 'tiny', 'inherit']
   * @attr
   */
  @property({type: String}) linkSize: string = 'normal';

  /**
   * Icon size ['normal', 'small', 'tiny', 'inherit']
   * @attr
   */
  @property({type: String}) iconSize: string = 'small';

  /**
   * Link color ['primary', 'gray', 'light-gray', 'black']
   * @attr
   */
  @property({type: String}) color: string = 'primary';

  /**
   * If true, adds underline on link
   * @attr
   */
  @property({type: Boolean}) underline: boolean = false;

  /**
   * Href - Url ore relative path if to be used as a direct link
   * @attr
   */
  @property({type: String}) href: string = 'javascript: void(0)';

  /**
   * Link updated counter (if > 0 shows counter number)
   * if has couter cant be external
   * @attr
   */
  @property({type: Number}) counter: number = 0;

  /**
   * If true, adds external icon
   * cant have counters if is external link
   * @attr
   */
  @property({type: Boolean}) external: boolean = false;

  /**
   * Open target in new tab / window
   * (sets target="_blank")
   * @attr
   */
  @property({type: Boolean}) newTab: boolean = false;

  /**
   * If true, font will be normal instead of bold
   * @attr
   */
  @property({type: Boolean}) lightText: boolean = false;

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  constructor() {
    super();
    this.addEventListener('click', this.clickHandler);
  }

  render(): TemplateResult {
    const size: string = 'sr-link--' + this.linkSize;
    const color: string = 'sr-link--' + this.color;
    const classes: any = {
      'sr-link': true,
      'sr-link--underline': this.underline,
      'sr-link--active': this.active,
      'sr-link--light-text': this.lightText,
      [size]: true,
      [color]: true,
    };

    return html`
      <a
        href="${this.href}"
        target="${this.newTab ? '_blank' : '_self'}"
        class="${classMap(classes)}"
        ?disabled="${this.disabled}">
        ${this.iconSrc !== '' || this.icon !== '' ? html`
          <div class="sr-link__icon">
              <srui-icon
                class="sr-link__main-icon"
                icon="${this.icon}"
                iconsrc="${this.iconSrc}"
                color="black"
                size="${this.iconSize}"
              ></srui-icon>
          </div>
        ` : ''}
        <span class="sr-link__label"><slot></span>
        ${this.counter > 0 && !this.external ? html`
            <srui-round-counter class="sr-link__counter" color="primary-inverted">${this.counter}</srui-round-counter>`
        : html`` }
        ${(this.counter === 0 || !this.counter ) && this.external ? html`
          <srui-icon
            class="sr-link__external-icon"
            icon="arrow-external"
            size="inherit"
            color="inherit"
          ></srui-icon>
        ` : html``}
      </a>
    `;
  }
  clickHandler(event: Event): void {
    if (this.disabled) {
      event.stopImmediatePropagation();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-link': Link;
  }
}
