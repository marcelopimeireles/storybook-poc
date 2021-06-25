/**
 * Sunrise UI - Shortcut Widget
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult, query} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import '../../buttons/more-button/more-button.ts';
import '../../icon/icon.ts';
import styles from './shortcut.scss';

/**
 * Shortcut Widget component
 *
 * @slot more_button - Slot for more_button component
 */
@customElement('srui-shortcut')

export class Shortcut extends LitElement {
    static types: string[] = ['external', 'lock', 'plus'];

    /**
     * Icon src (for image icons)
     * @attr
     */
    @property({type: String}) iconSrc: string = '';
    /**
     * Icon name (for font icons)
     * @attr
     */
    @property({type: String}) icon: string = '';
    /**
     * Widget label
     * @attr
     */
    @property({type: String}) label: string = '';
    /**
     * widget type [external, lock, plus] used on the icons
     * @attr
     */
    @property({type: String}) type: string = '';
    /**
     * If true, Widget is on edit mode, more_button stays hidden,
     * remove button is visible.
     * @attr
     */
    @property({type: Boolean}) editMode: boolean = false;
    /**
     * If true, Widget is on loading mode, all button, icon and
     * label are hidden,
     * @attr
     */
    @property({type: Boolean}) loading: boolean = false;
    /**
     * If true, Widget is on drag mode, all button are hidden,
     * @attr
     */
    @property({type: Boolean}) dragEnabled: boolean = false;

    @query('.sr-shortcut__label') protected labelEl!: HTMLElement;

    static get styles(): CSSResult {
        return css`${unsafeCSS(styles)}`;
    }

    constructor() {
        super();
    }

    connectedCallback(): void {
        super.connectedCallback();
        setTimeout(() => {
            this.labelEl.innerHTML = this.label;
        }, 0);
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();
    }

    render(): TemplateResult {
        const classes: any = {
            'sr-shortcut': true,
            'sr-shortcut--edit-mode': this.editMode,
            'sr-shortcut--loading': this.loading,
            'sr-shortcut--drag-enabled': this.dragEnabled,
        };
        return html`
            <div class="${classMap(classes)}" type="${this.type}" @click=${this.clickHandler}>
                <div class="sr-shortcut__background"></div>
                <slot name="drag-handle"></slot>
                <srui-icon-button
                        class="sr-shortcut__drag"
                        icon="dots-drag"
                        icononly
                        @click=${this.ignoreClickHandler}
                ></srui-icon-button>
                ${!this.editMode ? html`
                    <div class="sr-shortcut__actions">
                        <slot name="more_button" @click=${this.ignoreClickHandler}></slot>
                    </div>
                ` : html`
                    <srui-icon-button
                            class="sr-shortcut__remove"
                            icon="close-m"
                            icononly
                            @click=${this.removeClickHandler}
                    ></srui-icon-button>
                `}
                <div class="sr-shortcut__holder">
                    <div class="sr-shortcut__icon-holder">
                        ${this.iconSrc || this.icon ? html`
                            <srui-icon icon="${this.icon}" iconsrc="${this.iconSrc}" size="large"></srui-icon>
                        ` : ''}
                        ${Shortcut.types.includes(this.type) ? html`
                            <srui-icon class="sr-shortcut__type-icon" icon="${this.type}" size="small" color="black"></srui-icon>
                        ` : ''}
                    </div>
                    ${this.loading ? html`` : html`
                        <div class="sr-shortcut__label"></div>`}
                </div>
            </div>
        `;
    }

    clickHandler(event: Event): void {
        if (this.editMode && this.loading) {
            event.stopImmediatePropagation();
        }
    }

    ignoreClickHandler(event: Event): void {
        event.stopImmediatePropagation();
    }

    removeClickHandler(event: Event): void {
        event.preventDefault();
        /**
         * Event triggered when user clicks on the remove button
         * @event srui-remove-shortcut
         */
        this.dispatchEvent(new CustomEvent('srui-remove-shortcut'));
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'srui-shortcut': Shortcut;
    }
}
