"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[832],{51832:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var r=n(70885),a=n(72791),i=n(19739),o=n(87890),l=n(3561),u=n(42062),c=n(95854);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function m(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||f(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(u){l=!0,a=u}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return i}}(e,t)||f(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=function(){},g=a.forwardRef((function(e,t){var n=b(a.useState(e.id),2),r=n[0],i=n[1],p=b(a.useState(e.activeIndex),2),d=p[0],f=p[1],v=a.useRef(null),x=e.onTabChange?e.activeIndex:d,E=function(t){return e.multiple?x&&x.some((function(e){return e===t})):x===t};if(a.useImperativeHandle(t,(function(){return{props:e,getElement:function(){return v.current}}})),(0,u.nw)((function(){r||i((0,c.Th)())})),!r)return null;var w=function(t,n,i){var l=h(h({},t.props.style||{}),t.props.headerStyle||{}),u=(0,c.AK)("p-accordion-header",{"p-highlight":n,"p-disabled":t.props.disabled},t.props.headerClassName,t.props.className),s=r+"_header_"+i,p=r+"_content_"+i,d=t.props.disabled?-1:t.props.tabIndex,b=t.props.headerTemplate?c.gb.getJSXElement(t.props.headerTemplate,t.props):a.createElement("span",{className:"p-accordion-header-text"},t.props.header),v=c.Cz.getJSXIcon(n?e.collapseIcon:e.expandIcon,{className:"p-accordion-toggle-icon"},{props:e,selected:n}),y=n?(0,o.$2)("collapseLabel"):(0,o.$2)("expandLabel");return a.createElement("div",{className:u,style:l},a.createElement("a",{href:"#"+p,id:s,className:"p-accordion-header-link","aria-controls":p,role:"tab","aria-expanded":n,onClick:function(n){return function(t,n,r){if(!n.props.disabled){var a=E(r),i=null;if(e.multiple){var o=x||[];i=a?o.filter((function(e){return e!==r})):[].concat(m(o),[r])}else i=a?null:r;var l=a?e.onTabClose:e.onTabOpen;l&&l({originalEvent:t,index:r}),e.onTabChange?e.onTabChange({originalEvent:t,index:i}):f(i)}t.preventDefault()}(n,t,i)},tabIndex:d,"aria-label":y},v,b))},N=function(t,n){if(function(e){return e&&"AccordionTab"===e.props.__TYPE}(t)){var i=r+"_"+n,o=E(n),u=c.gb.findDiffKeys(t.props,y.defaultProps),p=w(t,o,n),d=function(t,n,i){var o=h(h({},t.props.style||{}),t.props.contentStyle||{}),u=(0,c.AK)("p-toggleable-content",t.props.contentClassName,t.props.className),s=r+"_content_"+i,p=r+"_header_"+i,d=a.createRef();return a.createElement(l.K,{nodeRef:d,classNames:"p-toggleable-content",timeout:{enter:1e3,exit:450},in:n,unmountOnExit:!0,options:e.transitionOptions},a.createElement("div",{ref:d,id:s,className:u,style:o,role:"region","aria-labelledby":p},a.createElement("div",{className:"p-accordion-content"},t.props.children)))}(t,o,n),f=(0,c.AK)("p-accordion-tab",{"p-accordion-tab-active":o});return a.createElement("div",s({key:i,className:f},u),p,d)}return null},O=c.gb.findDiffKeys(e,g.defaultProps),C=(0,c.AK)("p-accordion p-component",e.className),T=a.Children.map(e.children,N);return a.createElement("div",s({id:r,ref:v,className:C,style:e.style},O),T)}));y.displayName="AccordionTab",y.defaultProps={__TYPE:"AccordionTab",className:null,contentClassName:null,contentStyle:null,disabled:!1,header:null,headerClassName:null,headerStyle:null,headerTemplate:null,style:null,tabIndex:0},g.displayName="Accordion",g.defaultProps={__TYPE:"Accordion",id:null,activeIndex:null,className:null,style:null,multiple:!1,expandIcon:"pi pi-chevron-right",collapseIcon:"pi pi-chevron-down",transitionOptions:null,onTabOpen:null,onTabClose:null,onTabChange:null};var x=n(80184),E=function(){var e=(0,a.useState)(0),t=(0,r.Z)(e,2);t[0],t[1];return(0,x.jsx)("div",{className:"row mx-1",children:(0,x.jsx)("div",{className:"card",children:(0,x.jsx)("div",{className:"body",children:(0,x.jsxs)(i.f,{className:"tabview-header-icon",children:[(0,x.jsxs)(i.x,{header:"FAQ",children:[(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(g,{activeIndex:0,children:[(0,x.jsx)(y,{header:"How to create new account ?",children:(0,x.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})}),(0,x.jsx)(y,{header:"What is account lead ?",children:(0,x.jsx)("p",{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."})}),(0,x.jsx)(y,{header:"Who is customers ? ",children:(0,x.jsx)("p",{children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."})})]})}),"     "]}),(0,x.jsx)(i.x,{header:"Articles",children:(0,x.jsx)("p",{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."})}),(0,x.jsx)(i.x,{header:"Videos",children:(0,x.jsx)("p",{children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."})})]})})})})}},49411:function(e,t,n){n.d(t,{H:function(){return l}});var r=n(72791),a=n(87890),i=n(42062),o=n(95854),l=r.memo(r.forwardRef((function(){var e=r.useRef(null),t=r.useRef(null),n=function(){return e.current&&e.current.parentElement},l=function(){t.current&&(t.current.addEventListener("mousedown",c),o.p7.isTouchDevice()&&t.current.addEventListener("touchstart",u))},u=function(n){isTouching.current=!0;var r=o.p7.getOffset(t.current),a=n.targetTouches[0].pageX-r.left+document.body.scrollTop-o.p7.getWidth(e.current)/2,i=n.targetTouches[0].pageY-r.top+document.body.scrollLeft-o.p7.getHeight(e.current)/2;s(a,i)},c=function(n){if(!o.p7.isTouchDevice()){var r=o.p7.getOffset(t.current),a=n.pageX-r.left+document.body.scrollTop-o.p7.getWidth(e.current)/2,i=n.pageY-r.top+document.body.scrollLeft-o.p7.getHeight(e.current)/2;s(a,i)}},s=function(n,r){if(e.current&&"none"!==getComputedStyle(e.current,null).display){if(o.p7.removeClass(e.current,"p-ink-active"),!o.p7.getHeight(e.current)&&!o.p7.getWidth(e.current)){var a=Math.max(o.p7.getOuterWidth(t.current),o.p7.getOuterHeight(t.current));e.current.style.height=a+"px",e.current.style.width=a+"px"}e.current.style.top=r+"px",e.current.style.left=n+"px",o.p7.addClass(e.current,"p-ink-active")}};return(0,i.nw)((function(){e.current&&(t.current=n(),l())})),(0,i.rf)((function(){e.current&&!t.current&&(t.current=n(),l())})),(0,i.zq)((function(){e.current&&(t.current=null,t.current&&(t.current.removeEventListener("mousedown",c),o.p7.isTouchDevice()&&t.current.removeEventListener("touchstart",u)))})),a.ZP.ripple?r.createElement("span",{role:"presentation",ref:e,className:"p-ink",onAnimationEnd:function(e){o.p7.removeClass(e.currentTarget,"p-ink-active")}}):null})));l.displayName="Ripple",l.defaultProps={__TYPE:"Ripple"}},19739:function(e,t,n){n.d(t,{f:function(){return h},x:function(){return v}});var r=n(72791),a=n(87890),i=n(42062),o=n(49411),l=n(95854);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t){if(e){if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function d(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||p(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(u){l=!0,a=u}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return i}}(e,t)||p(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=function(){},h=r.forwardRef((function(e,t){var n=f(r.useState(e.id),2),c=n[0],s=n[1],p=f(r.useState(!0),2),m=p[0],y=p[1],g=f(r.useState(!1),2),x=g[0],E=g[1],w=f(r.useState([]),2),N=w[0],O=w[1],C=f(r.useState(e.activeIndex),2),T=C[0],j=C[1],q=r.useRef(null),_=r.useRef(null),S=r.useRef(null),P=r.useRef(null),A=r.useRef(null),I=r.useRef(null),k=r.useRef({}),D=e.onTabChange?e.activeIndex:T,R=function(e){return e===D},L=function(e,t){return e&&"TabPanel"===e.props.__TYPE&&N.every((function(e){return e!==t}))},K=function(t,n,r){if(t&&t.preventDefault(),!n.props.disabled){if(e.onBeforeTabChange&&!1===e.onBeforeTabChange({originalEvent:t,index:r}))return;e.onTabChange?e.onTabChange({originalEvent:t,index:r}):j(r)}H(r)},W=function(e,t,n){"Enter"===e.code&&K(e,t,n)},H=function(e){var t=k.current["tab_".concat(e)];t&&t.scrollIntoView&&t.scrollIntoView({block:"nearest"})},Y=function(t){e.scrollable&&function(){var e=_.current,t=e.scrollLeft,n=e.scrollWidth,r=l.p7.getWidth(_.current);y(0===t),E(t===n-r)}(),t.preventDefault()},B=function(){return[A.current,I.current].reduce((function(e,t){return t?e+l.p7.getWidth(t):e}),0)},$=function(){var e=l.p7.getWidth(_.current)-B(),t=_.current.scrollLeft-e;_.current.scrollLeft=t<=0?0:t},V=function(){var e=l.p7.getWidth(_.current)-B(),t=_.current.scrollLeft+e,n=_.current.scrollWidth-e;_.current.scrollLeft=t>=n?n:t},X=function(){y(!0),E(!1),O([]),e.onTabChange?e.onTabChange({index:D}):j(e.activeIndex)};r.useEffect((function(){!function(){var e=k.current["tab_".concat(D)];P.current.style.width=l.p7.getWidth(e)+"px",P.current.style.left=l.p7.getOffset(e).left-l.p7.getOffset(S.current).left+"px"}()})),(0,i.nw)((function(){c||s((0,l.Th)())})),(0,i.rf)((function(){if(l.gb.isNotEmpty(N)){var t=function(t){var n=r.Children.map(e.children,(function(e,t){if(L(e,t))return{tab:e,index:t}}));return n.find((function(e){var n=e.tab,r=e.index;return!n.props.disabled&&r>=t}))||n.reverse().find((function(e){var n=e.tab,r=e.index;return!n.props.disabled&&t>r}))}(N[N.length-1]);t&&K(null,t.tab,t.index)}}),[N]),(0,i.rf)((function(){H(e.activeIndex)}),[e.activeIndex]),r.useImperativeHandle(t,(function(){return{props:e,reset:X,getElement:function(){return q.current}}}));var J=function(t,n){var a=R(n),i=t.props,u=i.headerStyle,s=i.headerClassName,p=i.style,f=i.className,m=i.disabled,v=i.leftIcon,h=i.rightIcon,y=i.header,g=i.headerTemplate,x=i.closable,E=b(b({},u||{}),p||{}),w=(0,l.AK)("p-unselectable-text",{"p-tabview-selected p-highlight":a,"p-disabled":m},s,f),C=c+"_header_"+n,T=c+"_content_"+n,j=m?null:0,q=v&&r.createElement("i",{className:v}),_=r.createElement("span",{className:"p-tabview-title"},y),S=h&&r.createElement("i",{className:h}),P=x&&r.createElement("i",{className:"p-tabview-close pi pi-times",onClick:function(t){return function(t,n){t.preventDefault(),e.onBeforeTabClose&&!1===e.onBeforeTabClose({originalEvent:t,index:n})||(O([].concat(d(N),[n])),e.onTabClose&&e.onTabClose({originalEvent:t,index:n}))}(t,n)}}),A=r.createElement("a",{role:"tab",className:"p-tabview-nav-link",onClick:function(e){return K(e,t,n)},id:C,onKeyDown:function(e){return W(e,t,n)},"aria-controls":T,"aria-selected":a,tabIndex:j},q,_,S,P,r.createElement(o.H,null));if(g){var I={className:"p-tabview-nav-link",titleClassName:"p-tabview-title",onClick:function(e){return K(e,t,n)},onKeyDown:function(e){return W(e,t,n)},leftIconElement:q,titleElement:_,rightIconElement:S,element:A,props:e,index:n,selected:a,ariaControls:T};A=l.gb.getJSXElement(g,I)}return r.createElement("li",{ref:function(e){return k.current["tab_".concat(n)]=e},className:w,style:E,role:"presentation"},A)},M=l.gb.findDiffKeys(e,h.defaultProps),U=(0,l.AK)("p-tabview p-component",{"p-tabview-scrollable":e.scrollable},e.className),z=function(){var t=r.Children.map(e.children,(function(e,t){if(L(e,t))return J(e,t)}));return r.createElement("div",{ref:_,id:c,className:"p-tabview-nav-content",style:e.style,onScroll:Y},r.createElement("ul",{ref:S,className:"p-tabview-nav",role:"tablist"},t,r.createElement("li",{ref:P,className:"p-tabview-ink-bar"})))}(),F=function(){var t=(0,l.AK)("p-tabview-panels",e.panelContainerClassName),n=r.Children.map(e.children,(function(t,n){if(L(t,n)&&(!e.renderActiveOnly||R(n))){var a=R(n),i=b(b({},t.props.contentStyle||{}),t.props.style||{}),o=(0,l.AK)(t.props.contentClassName,t.props.className,"p-tabview-panel",{"p-hidden":!a}),s=c+"_content_"+n,p=c+"_header_"+n,d=l.gb.findDiffKeys(t.props,v.defaultProps);return r.createElement("div",u({},d,{id:s,"aria-labelledby":p,"aria-hidden":!a,className:o,style:i,role:"tabpanel"}),e.renderActiveOnly?a&&t.props.children:t.props.children)}}));return r.createElement("div",{className:t,style:e.panelContainerStyle},n)}(),Z=e.scrollable&&!m?r.createElement("button",{ref:A,className:"p-tabview-nav-prev p-tabview-nav-btn p-link",onClick:$,type:"button","aria-label":(0,a.$2)("previousPageLabel")},r.createElement("span",{className:"pi pi-chevron-left"}),r.createElement(o.H,null)):null,Q=function(){if(e.scrollable&&!x)return r.createElement("button",{ref:I,className:"p-tabview-nav-next p-tabview-nav-btn p-link",onClick:V,type:"button","aria-label":(0,a.$2)("nextPageLabel")},r.createElement("span",{className:"pi pi-chevron-right","aria-hidden":"true"}),r.createElement(o.H,null))}();return r.createElement("div",u({ref:q,className:U},M),r.createElement("div",{className:"p-tabview-nav-container"},Z,z,Q),F)}));v.displayName="TabPanel",v.defaultProps={__TYPE:"TabPanel",className:null,closable:!1,contentClassName:null,contentStyle:null,disabled:!1,header:null,headerClassName:null,headerStyle:null,headerTemplate:null,leftIcon:null,rightIcon:null,style:null},h.displayName="TabView",h.defaultProps={__TYPE:"TabView",id:null,activeIndex:0,className:null,onBeforeTabChange:null,onBeforeTabClose:null,onTabChange:null,onTabClose:null,panelContainerClassName:null,panelContainerStyle:null,renderActiveOnly:!0,scrollable:!1,style:null}}}]);
//# sourceMappingURL=832.49fb9ad3.chunk.js.map