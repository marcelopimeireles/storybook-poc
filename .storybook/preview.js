/* global window */

import {
  configure,
  addParameters,
  setCustomElements,
} from '@storybook/web-components';

import '../public/styles/normalize.css';
import '../public/styles/global-styles.css';

import customElements from '../custom-elements.json';
import { MINIMAL_VIEWPORTS, INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

setCustomElements(customElements);

const RESPONSIVE_VIEWPORT = {
  Responsive: {
    name: 'Responsive',
    styles: {
      width: '100%',
      height: '100%',
    },
    type: 'desktop'
  }
};

addParameters({
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...RESPONSIVE_VIEWPORT,
      ...INITIAL_VIEWPORTS
    },
  },
})

// configure(require.context('../stories', true, /\.stories\.(js|mdx)$/), module);

// force full reload to not reregister web components
const req = require.context('../stories', true, /\.(stories|story)\.(js|mdx|ts)$/);
// const story = require.context('../src', true, /\.(stories|story)\.(js|mdx|ts)$/);

configure(req, module);
if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}
// if (module.hot) {
//   module.hot.accept(req.id, () => {
//     const currentLocationHref = window.location.href;
//     window.history.pushState(null, null, currentLocationHref);
//     window.location.reload();
//   });
// }
