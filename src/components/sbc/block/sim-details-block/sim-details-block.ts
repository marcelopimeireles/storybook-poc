/**
 * Sunrise UI - SBC - sim-details
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import styles from './sim-details-block.scss';

@customElement('srui-sim-details')

export class SimDetailsBlock extends LitElement {

  /**
   * Sim Number Label
   * @attr
   */
  @property({type: String}) simNumberLabel: string = 'SIM card number';

  /**
   * Sim Number
   * @attr
   */
  @property({type: String}) simNumber: string = '';

  /**
   * Sim Status Label
   * @attr
   */
  @property({type: String}) simStatusLabel: string = 'SIM status';

  /**
   * Sim Status
   * @attr
   */
  @property({type: String}) simStatus: string = '';

  /**
   * Sim Status Icon
   * @attr
   */
  @property({type: String}) simStatusIcon: string = '';

  /**
   * Sim Format Label
   * @attr
   */
  @property({type: String}) simFormatLabel: string = 'SIM format';

  /**
   * Sim Format
   * @attr
   */
  @property({type: String}) simFormat: string = '';

  /**
   * PUK Label
   * @attr
   */
  @property({type: String}) pukLabel: string = '';

  /**
   * PUK
   * @attr
   */
  @property({type: String}) puk: string = '';

  /**
   * PIN Label
   * @attr
   */
  @property({type: String}) pinLabel: string = '';

  /**
   * PIN
   * @attr
   */
  @property({type: String}) pin: string = '';

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  constructor() {
    super();
  }

  connectedCallback(): void {
    super.connectedCallback();
  }

  render(): TemplateResult {
    const classes: any = {
      'sr-sim-details': true
    };
    return html`
        <div class="${classMap(classes)}">
            <div class="sr-sim-details__holder">
                <div class="sr-sim-details__item">
                    <div class="sr-sim-details__label">${this.simNumberLabel}</div>
                    <div class="sr-sim-details__value">${this.simNumber}</div>
                </div>
                <div class="sr-sim-details__item">
                    <div class="sr-sim-details__label">${this.simStatusLabel}</div>
                    <div class="sr-sim-details__value">${this.simStatus}</div>
                    <div class="sr-sim-details__icon">
                        ${this.simStatus === 'Active' ? html`
                            <srui-icon
                                    icon="circle-success-large"
                                    color="valid-color"
                            ></srui-icon>
                        ` : html`
                            <srui-icon
                                    icon="circle-alert-large"
                                    color="invalid-color"
                            ></srui-icon>`}
                    </div>
                </div>
                <div class="sr-sim-details__item">
                    <div class="sr-sim-details__label">${this.simFormatLabel}</div>
                    <div class="sr-sim-details__value">${this.simFormat}</div>
                    <div class="sr-sim-details__icon">
                        <slot name="extra_option"></slot>
                    </div>
                </div>
                <div class="sr-sim-details__item">
                    <div class="sr-sim-details__label">${this.pukLabel}</div>
                    <div class="sr-sim-details__value">${this.puk}</div>
                </div>
                <div class="sr-sim-details__item">
                    <div class="sr-sim-details__label">${this.pinLabel}</div>
                    <div class="sr-sim-details__value">${this.pin}</div>
                </div>
            </div>
        </div>
    `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'srui-sim-details': SimDetailsBlock;
  }
}
