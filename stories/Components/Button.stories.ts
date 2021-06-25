import {html} from 'lit-html';
import {TemplateResult} from 'lit-element';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import { ColorsEnum, SizesEnum, TypesEnum } from 'sdb-dd-webcomponents';
import 'sdb-dd-webcomponents';

export default {
  title: "Components/Primary Button",
  component: "PrimaryButton",
  decorators: [withKnobs],
};

export const Example: () => TemplateResult = () => {
	return html`
		<div>
    <primary-button
        size=${select("Size", SizesEnum, SizesEnum.MOBILE)}
        type=${select("Type", TypesEnum, TypesEnum.BUTTON)}
        color=${select("Color", ColorsEnum, ColorsEnum.RED)}
        ?disabled=${boolean("Disabled", false)}
        ?loading=${boolean("Loading", false)}
        ?rounded=${boolean("Rounded", false)}
        >${text("Text", "Awesome Button")}
    </primary-button>
		</div>
	`;
};
