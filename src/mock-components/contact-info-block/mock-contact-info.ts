/**
 * Sunrise UI -
 */
import { css, customElement, html, LitElement, unsafeCSS, TemplateResult, CSSResult, property} from 'lit-element';
import styles from './mock-contact-info.scss';
import '../../components/containers/content-block/content-block';
import '../../components/cards/contact-info-card/contact-info-card';
import '../../components/info/info';

@customElement('mock-contact-info')

export class MockContactInfo extends LitElement {
  @property({type: Boolean}) mock: boolean = false;
  @property({type: Boolean}) editMode: boolean = false;

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  render(): TemplateResult {
    return html`
      <div class="sr-mock-contact-info">
        <srui-content-block>
          <div slot="title">Contact Information</div>
          ${ this.editMode ? html`
            <srui-std-button slot="action" size="tiny" rounded=true" color="alpha-color" icon="edit" parent="block" iconcolor="gray3-color"></srui-std-button>
          ` : ''}
          <div slot="content">
            <srui-contact-info-card>
              <div slot="main">
                Amelie Pottrich <br>
                jwilliams@bigcorp.com <br>
                Thurgauerstrasse 102B <br>
                8152 Opfikon <br>
              </div>
              <div slot="secondary">
                Same as main address
              </div>
            </srui-contact-info-card>
          </div>
          ${ !this.editMode ? html`
            <srui-info slot="footer">Please contact support to update information on main accounts</srui-info>
          ` : ''}
        </srui-content-block>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mock-contact-info': MockContactInfo;
  }
}
