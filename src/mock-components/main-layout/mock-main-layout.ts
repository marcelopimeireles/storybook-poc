/**
 * Sunrise UI -
 */
import { css, customElement, html, LitElement, unsafeCSS, TemplateResult, CSSResult, property} from 'lit-element';
import styles from './mock-main-layout.scss';
import '../../components/containers/sidenav-container.ts';
import '../../components/navigation/navigation.ts';
import '../../components/toolbar/toolbar.ts';
import '../../components/sub-navigation/sub-navigation.ts';
import '../../components/buttons/nav-button/nav-button.ts';
import '../../components/buttons/content-dropdown/content-dropdown.ts';
import '../../components/cards/user-card/user-card.ts';
import '../../components/form-elements/simple-select/simple-select.ts';
import '../../components/buttons/site-selector-button/site-selector-button.ts';
import '../../components/buttons/std-button/std-button.ts';
import '../../components/buttons/link/link.ts';
import '../../components/footer/footer.ts';
import {
  mockNavigation,
  mockSubNavigation,
  mockSiteSelector,
  mockLanguageLinks
} from '../../../mockup-data/mockup-data';
import {
    mockAgentNavigation,
    mockAgentViewNavigation
} from '../../../mockup-data/mockup-accounts-data';
import {
    mockPortalUsersSubNavigation
} from '../../../mockup-data/mockup-portal-users-data';
@customElement('mock-main-layout')

export class MockMainLayout extends LitElement {
  @property({type: Boolean}) mobileOpen: boolean = false;
  @property({type: Boolean}) subNavigation: boolean = false;
  @property({type: Boolean}) fluid: boolean = false;
  @property({type: String}) activeMenuId: string = '1';
  @property({type: Boolean}) siteSelector: boolean = false;
  @property({type: Boolean}) profileDropdown: boolean = false;
  @property({type: String}) subnavId: string = '1';
  @property({type: Boolean}) agent: boolean = false;
  @property({type: Boolean}) agentView: boolean = false;
  @property({type: Boolean}) portalUsers: boolean = false;
  @property({type: Boolean}) customContentDropdownLabel: boolean = false;

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  render(): TemplateResult {
    const navigation: any[] = this.getNavigation();
    const subNavigation: any[] = this.getSubNavigation();
    return html`
      <srui-sidenav-container ?open=${this.mobileOpen} ?fluid=${this.fluid}>
        <srui-navigation slot="sidebar" logoSrc="/assets/images/Logo.svg" title="Business Portal">
          ${navigation.map((item) => html`
            <srui-nav-button
              state="${this.activeMenuId === item.id ? 'active' : 'default'}"
              counter="${item.counter}"
              iconSrc="${item.iconSrc}"
              icon="${item.icon ? item.icon : ''}"
            >
              ${item.title}
            </srui-nav-button>
          `)}
          ${this.agent ? html`
            <srui-std-button
              size="small"
              slot="footer"
              icon="${this.agent && this.agentView ? 'arrow-return' : 'account-filled'}"
              iconColor="black-color"
              color="white-color">
                ${this.agent && this.agentView ? 'Exit Agent View' : 'Customer Login'}
                </srui-std-button>
            ` : ''}
        </srui-navigation>
        <header slot="header">
          <srui-toolbar>
            <srui-input
              placeholder="Search Portal"
              type="search"
              slot="left-content"
              style="width: 100%; max-width: 560px;"
            ></srui-input>
            <div slot="right-content">
            ${!this.agent || this.agentView ? html`
              <srui-content-dropdown
                class="toolbar-content"
                hideLabelMobile=true
                iconSrc=""
                icon="company"
                label="${!this.customContentDropdownLabel ? 'Centre de Politique de Sécurité - Genève GCSP' : ''}"
                labelMaxWidth="true"
                subLabel="1234567894"
                ?active=${this.siteSelector}
                overlayWidth=320>
                ${this.customContentDropdownLabel ? html`
                    <span slot="custom-header-label">Custom header label - big title</span>
                ` : html``}
                <div slot="header">
                  <srui-input
                    placeholder="Search Portal"
                    type="search"
                    element="modal"
                    style="width: 100%"
                  ></srui-input>
                </div>
                <div slot="content">
                  ${mockSiteSelector.map((item) => html`
                    <srui-site-selector-button iconSrc=${item.iconSrc} icon=${item.icon ? item.icon : ''} ?active=${item.active}>
                      <div slot="site">${item.site}</div>
                      <div slot="code">${item.code}</div>
                    </srui-site-selector-button>
                  `)}
                </div>
                <div slot="footer" class="call2action">
                  <srui-std-button style="width: 100%" size="small" fullwidth>Account Management</srui-std-button>
                </div>
              </srui-content-dropdown>
              ` : ''}
              <srui-content-dropdown
                class="toolbar-content"
                hideLabelMobile=true
                icon="${!this.agent || this.agentView ? 'account-filled' : 'agent'}"
                label="${!this.agent || this.agentView ? 'John' : 'Hendry'}"
                ?active=${this.profileDropdown}
                ?noContent=${this.agent && !this.agentView}>
                <div slot="header">
                  ${this.agent && !this.agentView ?
                    html`
                      <srui-user-card>
                        <span slot="initials">H</span>
                        <span slot="name">Hendry</span>
                        <span slot="role">Agent</span>
                      </srui-user-card>
                    ` : html`
                      <srui-user-card>
                        <span slot="initials">JD</span>
                        <span slot="name">Joseph Douglas</span>
                        <span slot="role">Super Admin</span>
                      </srui-user-card>
                    `}
                </div>
                ${!this.agent || this.agentView ? html`
                  <div slot="content">
                    <srui-icon-button
                      style="width: 100%"
                      class="srui-content-dropdown"
                      iconSrc="/assets/images/icons/account.svg"
                      hoverHighlight
                    >
                      Your profile
                    </srui-icon-button>
                    <srui-icon-button
                      style="width: 100%"
                      updates
                      hoverHighlight
                      class="srui-content-dropdown"
                      iconSrc="/assets/images/icons/32/newsUpdates.svg"
                    >
                      News & Updates
                    </srui-icon-button>
                    <srui-icon-button
                      style="width: 100%"
                      updates
                      hoverHighlight
                      class="srui-content-dropdown"
                      iconSrc="/assets/images/icons/32/fqs.svg"
                    >
                      Help Center
                    </srui-icon-button>
                  </div>
                ` : ''}
                <div slot="footer">
                  <div class="language-holder">
                    ${mockLanguageLinks.map((item) => html`
                      <srui-link linkSize="small" color="gray" ?active=${item.active} lightText=true>${item.label}</srui-link>
                    `)}
                  </div>
                  <srui-icon-button
                    buttonType="small-link"
                    icon="logout"
                  >Logout</srui-icon-button>
                </div>
              </srui-content-dropdown>
            </div>
          </srui-toolbar>
          ${ this.subNavigation ? html`
          <srui-sub-navigation>
            <div slot="sub-navigation-content">
              ${subNavigation.map((item) => html`
                <srui-link
                  class="sub-navigation-link"
                  color="black"
                  counter=${item.counter}
                  ?active=${this.subnavId === item.id ? true : false}
                >
                 ${item.title}
                </srui-link>
              `)}
            </div>
          </srui-sub-navigation>
          ` : ''}
        </header>
        <div slot="content"><slot></div>
        <srui-footer slot="footer">
          <div slot="copyright">© Sunrise Communications AG</div>
          <div slot="legal">
            <srui-link underline color="light-gray" linkSize="small" newTab>Legal Information</srui-link>
            <srui-link underline color="light-gray" linkSize="small" newTab>Terms & Conditions</srui-link>
          </div>
          <div slot="version">Version: FE v1.0.55, ML v1.0.58</div>
        </srui-footer>
      </srui-sidenav-container>
    `;
  }
    getNavigation(): any[] {
      let data: any[] = [];
      if (this.agent && !this.agentView) {
          data = mockAgentNavigation;
      } else if (this.agentView) {
          data = mockAgentViewNavigation;
      } else {
          data = mockNavigation;
      }
      return data;
    }

    getSubNavigation(): any[] {
        return this.portalUsers ? mockPortalUsersSubNavigation : mockSubNavigation;
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'mock-main-layout': MockMainLayout;
  }
}
