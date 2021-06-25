import {fixture, TestFixture} from '../../../../test/src/util/helpers';
import {StdButton} from './std-button';
import {html} from 'lit-html';
import { assert } from 'chai';

interface ButtonProps {
  disabled: boolean;
  color: string;
  size: string;
  icon: string;
  iconColor: string;
  rounded: boolean;
  iconOnly: boolean;
  lighterHover: boolean;
  loading: boolean;
  loadingSolo: boolean;
  text: string;
}

const defaultButton: any = html`<srui-std-button></srui-std-button>`;

const button = (propsInit: Partial<ButtonProps>) => {
  return html`
    <srui-std-button
      ?disabled=${propsInit.disabled === true}
      ?color=${propsInit.color ?? ''}
      ?size=${propsInit.size ?? ''}
      ?icon=${propsInit.icon ?? ''}
      ?iconColor=${propsInit.iconColor ?? ''}
      ?rounded=${propsInit.rounded === true}
      ?iconOnly=${propsInit.iconOnly === true}
      ?lighterHover=${propsInit.lighterHover === true}
      ?loading=${propsInit.loading === true}
      ?loadingSolo=${propsInit.loadingSolo === true}>${propsInit.text ?? ''}</srui-std-button>
  `;
};

suite('srui-std-button', () => {
  let fixt: TestFixture;
  let element: StdButton;

  teardown(() => {
    fixt.remove();
  });

  suite('basic', () => {
    setup(async () => {
      fixt = await fixture(defaultButton);
      element = fixt.root.querySelector('srui-std-button')!;
    });

    test('initializes as an srui-std-button', () => {
      assert.instanceOf(element, StdButton);
      assert.equal(element.color, 'primary-color');
    });
  });

  suite('disabled', () => {
    setup(async () => {
      fixt = await fixture(button({disabled: true}));
      element = fixt.root.querySelector('srui-std-button')!;
      await element.updateComplete;
    });

    test(
        'updates the disabled property on the native button element',
        async () => {
          const button = element.shadowRoot!.querySelector('button')!;

          assert.isTrue(button.hasAttribute('disabled'));

          element.disabled = false;
          await element.updateComplete;
          assert.isFalse(button.hasAttribute('disabled'));
        });
  });
});
