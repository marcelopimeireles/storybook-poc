/**
 * Sunrise UI - sidebar container
 */
import {css, customElement, html, LitElement, unsafeCSS, TemplateResult, CSSResult, property} from 'lit-element';
import sidebarContainerStyles from './shortcuts-widgets-container.scss';
import { classMap } from 'lit-html/directives/class-map';
import '../../components/widgets/shortcuts/shortcut.ts';

/**
 * Widget container with editition mode
 * @slot default - holder for the widgets
 */
@customElement('srui-shortcuts-widgets-container')

export class ShortcutsWidgetsContainer extends LitElement {
  /**
   * Edit mode, shows sticky bottom bar with done button and add widget
   * @attr
   */
  @property({type: Boolean}) editMode: boolean = false;

  /**
   * Start edit mode button label
   * @attr
   */
  @property({type: String}) editText: string = 'Edit Shortcuts';

  /**
   * Complete edition button label
   * @attr
   */
  @property({type: String}) doneText: string = 'Done Editing';
  /**
   * Disable Edit mode, removes edit button
   * @attr
   */
  @property({type: Boolean}) editModeDisabled: boolean = false;
  /**
   * If true the widgets length is < 2 grid elements should have a max with
   * @attr
   */
    @property({type: Boolean}) hasMaxWidth: boolean = false;
  static get styles(): CSSResult {
    return css`${unsafeCSS(sidebarContainerStyles)}`;
  }

  constructor() {
      super();
  }

  render(): TemplateResult {
    const classes: any = {
      'sr-shortcuts-widgets-container': true,
      'sr-shortcuts-widgets-container--edit': this.editMode,
      'sr-shortcuts-widgets-container--short': this.hasMaxWidth,
    };
    return html`
      <div class="${classMap(classes)}">
        <div class="sr-shortcuts-widgets-container__widgets">
          <slot></slot>
        </div>
        ${!this.editModeDisabled ? html`
          <div class="sr-shortcuts-widgets-container__bottom">
            ${!this.editMode ?
              html`<srui-link
                size="normal"
                color="gray"
                icon="edit"
                @click="${this.editHandler}">
                  ${this.editText}
                </srui-link>`
            :
              html`<srui-std-button
                  parent="block"
                  color="primary-color"
                  icon="check-m"
                  iconcolor="white-color"
                  @click="${this.doneHandler}">
                    ${this.doneText}
                  </srui-std-button>`}
          </div>
        ` : ``}
      </div>
    `;
  }

  editHandler(): void {
    /**
     * Event triggered when user click on edit
     * @event srui-edit-mode
     */
    this.dispatchEvent(new CustomEvent('srui-edit-mode', {
      composed: true,
      bubbles: true,
    }));
  }

  doneHandler(): void {
    /**
     * Event triggered when user click on done editing
     * @event srui-edit-complete
     */
    this.dispatchEvent(new CustomEvent('srui-edit-complete', {
      composed: true,
      bubbles: true,
    }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-shortcuts-widgets-container': ShortcutsWidgetsContainer;
  }
}
