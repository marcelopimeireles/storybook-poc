/**
 * Sunrise UI - Expandable Block Group
 */
import {css, CSSResult, customElement, html, LitElement, property, unsafeCSS, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';
import styles from './expandable-block-group.scss';
import { ExpandableBlock } from '../expandable-block/expandable-block';

/**
 * Container to group expandable blocks in an accordean manner
 * @slot default - where the srui-expandable-block should go (nothing else!)
 */
@customElement('srui-expandable-block-group')

export class ExpandableBlockGroup extends LitElement {
  /**
   * Expandable content internal state (this can't be used to control component state)
   */
  @property({type: Number, attribute: false}) activeBlockIdx: number = -1;

  protected blocks: NodeListOf<ExpandableBlock> = null;

  static get styles(): CSSResult {
    return css`${unsafeCSS(styles)}`;
  }

  render(): TemplateResult {
    const classes: any = {
      'sr-expandable-block-group': true
    };
    return html`
      <div class="${classMap(classes)}">
        <slot @slotchange=${this.initBlocks} @srui-block-toggle=${this.toggleBlockHandler}>
      </div>
    `;
  }

  initBlocks(): void {
    this.blocks = this.querySelectorAll('srui-expandable-block');
    this.adjustBlocksPosition();
  }

  toggleBlockHandler(event: CustomEvent): void {
    if (this.activeBlockIdx >= 0 && event.detail.idx !== this.activeBlockIdx) {
      this.blocks[this.activeBlockIdx].toggleContent();
    }

    this.activeBlockIdx = event.detail.open ? event.detail.idx : -1;
    this.adjustBlocksPosition();
  }

  adjustBlocksPosition(): void {
    const count: number = this.blocks.length;
    this.blocks.forEach((block, idx) => {
      block.blockIdx = idx;
      if (
        (idx === 0 && count > 1 && this.activeBlockIdx !== 1)
        || (idx === this.activeBlockIdx + 1 && idx < count - 1)
      ) {
        block.position = 'first';
      } else if (idx > 0 && idx < count - 1 && this.activeBlockIdx !== idx + 1 && idx !== this.activeBlockIdx - 1) {
        block.position = 'middle';
      } else if (
        (idx === count - 1 && count > 1 && this.activeBlockIdx !== idx - 1)
        || (idx === this.activeBlockIdx - 1 && idx > 0)
      ) {
        block.position = 'last';
      } else {
        block.position = null;
      }
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-expandable-block-group': ExpandableBlockGroup;
  }
}
