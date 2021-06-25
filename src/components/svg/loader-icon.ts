/**
 * Sunrise UI - Side navigation button
 */
import {svg, customElement, LitElement, TemplateResult, css, CSSResult} from 'lit-element';
/**
 * Simple svg loader icon
 *
 */
@customElement('srui-loader-icon')

export class LoaderIcon extends LitElement {

   static get styles(): CSSResult {
     return css `
      svg #top_circle {
        animation: cssload-rotate-1 1.0s linear infinite;
      }
      @keyframes cssload-rotate-1 {
        0% {
          transform-origin: center;
          transform: rotateZ(0deg);
        }
        100% {
          transform-origin: center;
          transform: rotateZ(360deg);
        }
      }
    `;
   }

  constructor() {
    super();
  }

  render(): TemplateResult {
    return svg`
      <svg version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             width="20px" height="20px" viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve">
          <style type="text/css">
            .st0{opacity:0.5;fill:none;stroke:#FFFFFF;stroke-width:4;stroke-miterlimit:10;}
            .st1{fill:url(#XMLID_3_);}
          </style>
          <circle id="circle" class="st0" cx="10" cy="10" r="8"/>
          <radialGradient id="XMLID_3_" cx="1.2076" cy="10.3964" r="12.2206" gradientUnits="userSpaceOnUse">
            <stop  offset="0.2142" style="stop-color:#FFFFFF;stop-opacity:0"/>
            <stop  offset="1" style="stop-color:#FFFFFF; stop-opacity:0.8"/>
          </radialGradient>
          <path id="top_circle" class="st1" d="M2.3,10c0.9,0,1.7-0.6,2-1.5C4.9,6.1,7.3,4,10,4s5.1,2.1,5.8,4.5c0.3,0.9,1,1.5,2,1.5h0
            c1.3,0,2.3-1.2,2-2.4c-1-4.6-5-7.6-9.7-7.6C5.3,0,1.3,2.9,0.3,7.6C0,8.8,1,10,2.3,10L2.3,10z"/>
          </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'srui-loader-icon': LoaderIcon;
  }
}
