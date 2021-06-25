import {html} from 'lit-html';
import {TemplateResult} from 'lit-element';
import 'sdb-dd-webcomponents';

export default {
	title: 'Components/Primary Button',
};

export const Desktop: () => TemplateResult = () => {
	return html`
		<div>
			<primary-button size="desktop" type="button" color="red">Desktop</primary-button>
		</div>
	`;
};
export const Mobile: () => TemplateResult = () => {
	return html`
		<div>
			<primary-button size="mobile" type="button" color="red">Mobile</primary-button>
		</div>
	`;
};
