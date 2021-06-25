import {html} from 'lit-html';
import {withKnobs, text, boolean, select} from '@storybook/addon-knobs';
import {TemplateResult} from 'lit-element';
import { PrimaryButton } from 'sdb-dd-webcomponents';

export default {
  title: 'Components/Buttons/Primary Button',
  component: PrimaryButton,
  decorators: [withKnobs]
};

const colors: string[] = ['#33FFFF', '#FF33FF', '#FFFF33', '#333333'];
const sizes: string[] = ['desktop', 'mobile'];
const types: string[] = ['button', 'submit', 'reset', 'menu'];

export const Example: () => TemplateResult = () => html`
  <div style="padding: 30px 40px; width: 100%; height:100%; background: #f0f0f0">
    <PrimaryButton
      color=${select('Color', colors , colors[0])}
      size=${select('Size', sizes, sizes[0])}
      type=${select('Types', types, types[0])}
      disabled=${boolean('Disabled', false)}
      loading=${boolean('Loading', false)}
      rounded=${boolean('Rounded', true)}
    >
      ${text('Inner Text', 'Button')}
    </PrimaryButton>
  </div>
`;
