"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[477],{93540:function(e,n,t){t.d(n,{X:function(){return s}});var r=t(72791),o=t(42062),i=t(93574),l=t(95854);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},u.apply(this,arguments)}function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function c(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],l=!0,u=!1;try{for(t=t.call(e);!(l=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);l=!0);}catch(a){u=!0,o=a}finally{try{l||null==t.return||t.return()}finally{if(u)throw o}}return i}}(e,n)||function(e,n){if(e){if("string"===typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=r.memo(r.forwardRef((function(e,n){var t=c(r.useState(!1),2),a=t[0],d=t[1],f=r.useRef(null),p=r.useRef(e.inputRef),h=function(n){if(!e.disabled&&!e.readOnly&&e.onChange){var t=m(),r=n.target instanceof HTMLDivElement||n.target instanceof HTMLSpanElement,o=n.target===p.current,i=r&&n.target.checked!==t;if(o||i){var u=t?e.falseValue:e.trueValue;e.onChange({originalEvent:n,value:e.value,checked:u,stopPropagation:function(){},preventDefault:function(){},target:{type:"checkbox",name:e.name,id:e.id,value:e.value,checked:u}})}l.p7.focus(p.current),n.preventDefault()}},m=function(){return e.checked===e.trueValue};r.useImperativeHandle(n,(function(){return{props:e,getElement:function(){return f.current},getInput:function(){return p.current}}})),r.useEffect((function(){l.gb.combinedRefs(p,e.inputRef)}),[p,e.inputRef]),(0,o.rf)((function(){p.current.checked=m()}),[e.checked,e.trueValue]);var b=m(),v=l.gb.isNotEmpty(e.tooltip),y=l.gb.findDiffKeys(e,s.defaultProps),g=l.gb.reduceKeys(y,l.p7.ARIA_PROPS),E=(0,l.AK)("p-checkbox p-component",{"p-checkbox-checked":b,"p-checkbox-disabled":e.disabled,"p-checkbox-focused":a},e.className),x=(0,l.AK)("p-checkbox-box",{"p-highlight":b,"p-disabled":e.disabled,"p-focus":a}),k=l.Cz.getJSXIcon(b?e.icon:"",{className:"p-checkbox-icon p-c"},{props:e,checked:b});return r.createElement(r.Fragment,null,r.createElement("div",u({ref:f,id:e.id,className:E,style:e.style},y,{onClick:h,onContextMenu:e.onContextMenu,onMouseDown:e.onMouseDown}),r.createElement("div",{className:"p-hidden-accessible"},r.createElement("input",u({ref:p,type:"checkbox",id:e.inputId,name:e.name,tabIndex:e.tabIndex,defaultChecked:b,onFocus:function(){d(!0)},onBlur:function(){d(!1)},onKeyDown:function(e){"Space"===e.code&&h(e)},disabled:e.disabled,readOnly:e.readOnly,required:e.required},g))),r.createElement("div",{className:x},k)),v&&r.createElement(i.u,u({target:f,content:e.tooltip},e.tooltipOptions)))})));s.displayName="Checkbox",s.defaultProps={__TYPE:"Checkbox",id:null,inputRef:null,inputId:null,value:null,name:null,checked:!1,trueValue:!0,falseValue:!1,style:null,className:null,disabled:!1,required:!1,readOnly:!1,tabIndex:null,icon:"pi pi-check",tooltip:null,tooltipOptions:null,onChange:null,onMouseDown:null,onContextMenu:null}},75550:function(e,n,t){t.d(n,{Q:function(){return c}});var r=t(72791),o=t(93574),i=t(95854);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l.apply(this,arguments)}function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],l=!0,u=!1;try{for(t=t.call(e);!(l=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);l=!0);}catch(a){u=!0,o=a}finally{try{l||null==t.return||t.return()}finally{if(u)throw o}}return i}}(e,n)||function(e,n){if(e){if("string"===typeof e)return u(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=r.memo(r.forwardRef((function(e,n){var t=a(r.useState(!1),2),u=t[0],s=t[1],d=r.useRef(null),f=r.useRef(e.inputRef),p=e.checked===e.trueValue,h=function(n){if(e.onChange){var t=p?e.falseValue:e.trueValue;e.onChange({originalEvent:n,value:t,stopPropagation:function(){},preventDefault:function(){},target:{name:e.name,id:e.id,value:t}})}};r.useImperativeHandle(n,(function(){return{props:e,getElement:function(){return d.current},getInput:function(){return d.current}}})),r.useEffect((function(){i.gb.combinedRefs(f,e.inputRef)}),[f,e.inputRef]);var m=i.gb.isNotEmpty(e.tooltip),b=i.gb.findDiffKeys(e,c.defaultProps),v=i.gb.reduceKeys(b,i.p7.ARIA_PROPS),y=(0,i.AK)("p-inputswitch p-component",{"p-inputswitch-checked":p,"p-disabled":e.disabled,"p-focus":u},e.className);return r.createElement(r.Fragment,null,r.createElement("div",l({ref:d,id:e.id,className:y,style:e.style},b,{onClick:function(n){e.disabled||(h(n),i.p7.focus(f.current),n.preventDefault())},role:"checkbox","aria-checked":p}),r.createElement("div",{className:"p-hidden-accessible"},r.createElement("input",l({ref:f,type:"checkbox",id:e.inputId,name:e.name,checked:p,onChange:h,onFocus:function(n){s(!0),e.onFocus&&e.onFocus(n)},onBlur:function(n){s(!1),e.onBlur&&e.onBlur(n)},disabled:e.disabled,role:"switch",tabIndex:e.tabIndex,"aria-checked":p},v))),r.createElement("span",{className:"p-inputswitch-slider"})),m&&r.createElement(o.u,l({target:d,content:e.tooltip},e.tooltipOptions)))})));c.displayName="InputSwitch",c.defaultProps={__TYPE:"InputSwitch",checked:!1,className:null,disabled:!1,falseValue:!1,id:null,inputId:null,inputRef:null,name:null,onBlur:null,onChange:null,onFocus:null,style:null,tabIndex:null,tooltip:null,tooltipOptions:null,trueValue:!0}},75660:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(63366),o=t(87462),i=t(97326),l=t(94578),u=t(72791),a=t(95545);function c(e,n){var t=Object.create(null);return e&&u.Children.map(e,(function(e){return e})).forEach((function(e){t[e.key]=function(e){return n&&(0,u.isValidElement)(e)?n(e):e}(e)})),t}function s(e,n,t){return null!=t[n]?t[n]:e.props[n]}function d(e,n,t){var r=c(e.children),o=function(e,n){function t(t){return t in n?n[t]:e[t]}e=e||{},n=n||{};var r,o=Object.create(null),i=[];for(var l in e)l in n?i.length&&(o[l]=i,i=[]):i.push(l);var u={};for(var a in n){if(o[a])for(r=0;r<o[a].length;r++){var c=o[a][r];u[o[a][r]]=t(c)}u[a]=t(a)}for(r=0;r<i.length;r++)u[i[r]]=t(i[r]);return u}(n,r);return Object.keys(o).forEach((function(i){var l=o[i];if((0,u.isValidElement)(l)){var a=i in n,c=i in r,d=n[i],f=(0,u.isValidElement)(d)&&!d.props.in;!c||a&&!f?c||!a||f?c&&a&&(0,u.isValidElement)(d)&&(o[i]=(0,u.cloneElement)(l,{onExited:t.bind(null,l),in:d.props.in,exit:s(l,"exit",e),enter:s(l,"enter",e)})):o[i]=(0,u.cloneElement)(l,{in:!1}):o[i]=(0,u.cloneElement)(l,{onExited:t.bind(null,l),in:!0,exit:s(l,"exit",e),enter:s(l,"enter",e)})}})),o}var f=Object.values||function(e){return Object.keys(e).map((function(n){return e[n]}))},p=function(e){function n(n,t){var r,o=(r=e.call(this,n,t)||this).handleExited.bind((0,i.Z)(r));return r.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},r}(0,l.Z)(n,e);var t=n.prototype;return t.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},t.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(e,n){var t,r,o=n.children,i=n.handleExited;return{children:n.firstRender?(t=e,r=i,c(t.children,(function(e){return(0,u.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:s(e,"appear",t),enter:s(e,"enter",t),exit:s(e,"exit",t)})}))):d(e,o,i),firstRender:!1}},t.handleExited=function(e,n){var t=c(this.props.children);e.key in t||(e.props.onExited&&e.props.onExited(n),this.mounted&&this.setState((function(n){var t=(0,o.Z)({},n.children);return delete t[e.key],{children:t}})))},t.render=function(){var e=this.props,n=e.component,t=e.childFactory,o=(0,r.Z)(e,["component","childFactory"]),i=this.state.contextValue,l=f(this.state.children).map(t);return delete o.appear,delete o.enter,delete o.exit,null===n?u.createElement(a.Z.Provider,{value:i},l):u.createElement(a.Z.Provider,{value:i},u.createElement(n,o,l))},n}(u.Component);p.propTypes={},p.defaultProps={component:"div",childFactory:function(e){return e}};var h=p}}]);
//# sourceMappingURL=477.650baa96.chunk.js.map