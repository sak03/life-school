"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[247,608],{22247:function(e,n,t){t.r(n),t.d(n,{default:function(){return m},userMode:function(){return r},userModeValue:function(){}});t(72791);var r,a=t(11087),l=t(78983),s=(t(24846),t(26726)),o=t(57689),i=t(92506),u=t(95854),c=t(29025),p=t(40905),d=t(80184),m=function(){var e=(0,o.s0)(),n={email:"sartaj@testmail.com",password:"Admin@123"},t={email:"pooja@testmail.com",password:"Admin@123"},m={email:"sonu@testmail.com",password:"Admin@123"},f=(0,i.TA)({initialValues:{email:"",password:""},validate:function(e){var n={};return e.email||(n.email="Please enter username or email."),e.password||(n.password="Please enter password."),n},onSubmit:function(a){return a.email===n.email&&a.password===n.password?(r=1,e("/dashboard")):a.email===t.email&&a.password===t.password?(r=2,e("/dashboard")):a.email===m.email&&a.password===m.password?(r=3,e("/dashboard")):(alert("Wrong email or password combination"),console.log(n.email,n.password)),localStorage.setItem("userMode",r),!1}}),g=function(e){return!(!f.touched[e]||!f.errors[e])},h=function(e){return g(e)&&(0,d.jsx)("small",{className:"p-error",children:f.errors[e]})};return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"bg-light min-vh-100 d-flex flex-row align-items-center",children:[(0,d.jsx)("div",{className:"login-logo",style:{position:"absolute",top:"2rem",left:"2rem"},children:(0,d.jsx)("a",{href:"http://www.acescan.co/",target:"blank",placeholder:"visit",children:(0,d.jsx)("img",{src:s,alt:"login"})})}),(0,d.jsx)(l.KB,{children:(0,d.jsx)(l.rb,{className:"justify-content-center border-0",children:(0,d.jsx)("div",{className:"card p-4 col-lg-4 border-0 shadow-lg",children:(0,d.jsx)("div",{className:"row",children:(0,d.jsxs)("form",{onSubmit:f.handleSubmit,children:[(0,d.jsxs)("div",{className:" col-sm-12 col-md-4 col-lg-12 mt-4",children:[(0,d.jsxs)("span",{className:"p-float-label",children:[(0,d.jsx)(c.o,{id:"email",value:f.values.email,onChange:f.handleChange,className:((0,u.AK)({"p-invalid":g("email")}),"p-inputtext-sm w-100 borderClass")}),(0,d.jsx)("label",{htmlFor:"email",children:"Username"})]}),h("email")]}),(0,d.jsxs)("div",{className:" col-sm-12 col-md-12 col-lg-12 mt-4",children:[(0,d.jsxs)("span",{className:"p-float-label",children:[(0,d.jsx)(p.r,{id:"password",inputId:"password",value:f.values.password,onChange:f.handleChange,className:((0,u.AK)({"p-invalid":g("password")}),"p-inputtext-sm w-100 borderClass"),toggleMask:!0,feedback:!1}),(0,d.jsx)("label",{htmlFor:"password",children:"Password"})]}),h("password")]}),(0,d.jsx)("div",{className:"text-right mt-2 mb-4",children:(0,d.jsx)("span",{className:"mx-2 text-primary",style:{cursor:"pointer"},children:"Forgot password?"})}),(0,d.jsx)(l.rb,{children:(0,d.jsx)(l.b7,{xs:12,children:(0,d.jsx)(l.u5,{type:"submit",color:"primary",className:"px-4 w-100",children:"Login"})})}),(0,d.jsx)("div",{className:"text-right mt-3",children:(0,d.jsxs)("p",{children:["Don't have an account ?",(0,d.jsx)("span",{className:"mx-2",children:(0,d.jsx)(a.rU,{to:"/register",style:{textDecoration:"none"},children:"Sign Up"})})]})})]})})})})})]})})}},40905:function(e,n,t){t.d(n,{r:function(){return f}});var r=t(72791),a=t(87890),l=t(3561),s=t(42062),o=t(29025),i=t(70377),u=t(79022),c=t(95854);function p(){return p=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},p.apply(this,arguments)}function d(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function m(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,l=[],s=!0,o=!1;try{for(t=t.call(e);!(s=(r=t.next()).done)&&(l.push(r.value),!n||l.length!==n);s=!0);}catch(i){o=!0,a=i}finally{try{s||null==t.return||t.return()}finally{if(o)throw a}}return l}}(e,n)||function(e,n){if(e){if("string"===typeof e)return d(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?d(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var f=r.memo(r.forwardRef((function(e,n){var t=e.promptLabel||(0,a.qJ)("passwordPrompt"),d=e.weakLabel||(0,a.qJ)("weak"),g=e.mediumLabel||(0,a.qJ)("medium"),h=e.strongLabel||(0,a.qJ)("strong"),w=m(r.useState(!1),2),b=w[0],v=w[1],x=m(r.useState(null),2),y=x[0],j=x[1],N=m(r.useState(t),2),E=N[0],k=N[1],S=m(r.useState(!1),2),R=S[0],C=S[1],A=m(r.useState(!1),2),P=A[0],I=A[1],_=r.useRef(null),O=r.useRef(null),K=r.useRef(e.inputRef),F=r.useRef(new RegExp(e.mediumRegex)),L=r.useRef(new RegExp(e.strongRegex)),M=P?"text":"password",J=m((0,s.gq)({target:_,overlay:O,listener:function(e,n){n.valid&&V()},when:b}),2),T=J[0],U=J[1],Z=K.current&&K.current.value,q=r.useMemo((function(){return c.gb.isNotEmpty(e.value)||c.gb.isNotEmpty(e.defaultValue)||c.gb.isNotEmpty(Z)}),[e.value,e.defaultValue,Z]),z=function(n){e.feedback&&i.F.emit("overlay-click",{originalEvent:n,target:_.current})},B=function(){I((function(e){return!e}))},H=function(){!function(){if(y){var e=null;switch(y.strength){case"weak":e=d;break;case"medium":e=g;break;case"strong":e=h}e&&E!==e&&k(e)}else E!==t&&k(t)}(),v(!0)},V=function(){v(!1)},X=function(){c.P9.set("overlay",O.current,a.ZP.autoZIndex,a.ZP.zIndex.overlay),K.current&&c.p7.alignOverlay(O.current,K.current.parentElement,e.appendTo||a.ZP.appendTo)},D=function(){T(),e.onShow&&e.onShow()},W=function(){U()},Y=function(){c.P9.clear(O.current),e.onHide&&e.onHide()},$=function(e){return L.current.test(e)?3:F.current.test(e)?2:e.length?1:0};r.useImperativeHandle(n,(function(){return{props:e,getElement:function(){return _.current},getOverlay:function(){return O.current},getInput:function(){return K.current}}})),r.useEffect((function(){c.gb.combinedRefs(K,e.inputRef)}),[K,e.inputRef]),r.useEffect((function(){F.current=new RegExp(e.mediumRegex)}),[e.mediumRegex]),r.useEffect((function(){L.current=new RegExp(e.strongRegex)}),[e.strongRegex]),r.useEffect((function(){!q&&c.p7.hasClass(_.current,"p-inputwrapper-filled")&&c.p7.removeClass(_.current,"p-inputwrapper-filled")}),[q]),(0,s.zq)((function(){c.P9.clear(O.current)}));var G=(0,c.AK)("p-password p-component p-inputwrapper",{"p-inputwrapper-filled":q,"p-inputwrapper-focus":R,"p-input-icon-right":e.toggleMask},e.className),Q=(0,c.AK)("p-password-input",e.inputClassName),ee=c.gb.findDiffKeys(e,f.defaultProps),ne=function(){if(e.toggleMask){var n=P?"pi pi-eye-slash":"pi pi-eye",t=r.createElement("i",{className:n,onClick:B});if(e.icon){var a={onClick:B,className:n,element:t,props:e};t=c.gb.getJSXElement(e.icon,a)}return t}return null}(),te=function(){var n=(0,c.AK)("p-password-panel p-component",e.panelClassName),t=y||{strength:"",width:"0%"},a=t.strength,s=t.width,o=c.gb.getJSXElement(e.header,e),i=c.gb.getJSXElement(e.footer,e),p=e.content?c.gb.getJSXElement(e.content,e):r.createElement(r.Fragment,null,r.createElement("div",{className:"p-password-meter"},r.createElement("div",{className:"p-password-strength ".concat(a),style:{width:s}})),r.createElement("div",{className:"p-password-info ".concat(a)},E)),d=r.createElement(l.K,{nodeRef:O,classNames:"p-connected-overlay",in:b,timeout:{enter:120,exit:100},options:e.transitionOptions,unmountOnExit:!0,onEnter:X,onEntered:D,onExit:W,onExited:Y},r.createElement("div",{ref:O,className:n,style:e.panelStyle,onClick:z},o,p,i));return r.createElement(u.h,{element:d,appendTo:e.appendTo})}();return r.createElement("div",{ref:_,id:e.id,className:G,style:e.style},r.createElement(o.o,p({ref:K,id:e.inputId},ee,{type:M,className:Q,style:e.inputStyle,onFocus:function(n){C(!0),e.feedback&&H(),e.onFocus&&e.onFocus(n)},onBlur:function(n){C(!1),e.feedback&&V(),e.onBlur&&e.onBlur(n)},onKeyUp:function(n){var r=n.keyCode||n.which;if(e.feedback){var a=n.target.value,l=null,s=null;switch($(a)){case 1:l=d,s={strength:"weak",width:"33.33%"};break;case 2:l=g,s={strength:"medium",width:"66.66%"};break;case 3:l=h,s={strength:"strong",width:"100%"};break;default:l=t,s=null}j(s),k(l),r&&!b&&H()}e.onKeyUp&&e.onKeyUp(n)},onInput:function(n,t){e.onInput&&e.onInput(n,t),e.onChange||(c.gb.isNotEmpty(n.target.value)?c.p7.addClass(_.current,"p-inputwrapper-filled"):c.p7.removeClass(_.current,"p-inputwrapper-filled"))},tooltip:e.tooltip,tooltipOptions:e.tooltipOptions})),ne,te)})));f.displayName="Password",f.defaultProps={__TYPE:"Password",id:null,inputId:null,inputRef:null,promptLabel:null,weakLabel:null,mediumLabel:null,strongLabel:null,mediumRegex:"^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})",strongRegex:"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})",feedback:!0,toggleMask:!1,appendTo:null,header:null,content:null,footer:null,icon:null,tooltip:null,tooltipOptions:null,style:null,className:null,inputStyle:null,inputClassName:null,panelStyle:null,panelClassName:null,transitionOptions:null,onInput:null,onShow:null,onHide:null}},26726:function(e,n,t){e.exports=t.p+"static/media/AceScan_logo.dcd49e0efe07cbe2781e.png"}}]);
//# sourceMappingURL=247.f5e0ae74.chunk.js.map