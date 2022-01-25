import{d as Ke,Q as Ht,_ as Qe,o as R,c as q,a as V,F as Fe,v as Me,q as Wt,t as ye,f as mt,k as vt,y as Gt,r as Ze,x as bt,K as jt,b as zt,w as Ut}from"./index.13b91343.js";const qt=Ke({props:{data:{type:Object,required:!0,default:()=>({title:"",tags:[],options:[]})}},setup(){return{colorInit:Ht(()=>e=>{const o=[{color:"#57c05d",tag:"\u65B0\u589E"},{color:"#67a4dc",tag:"\u4F18\u5316"}].find(i=>i.tag===e);return o&&o.tag?o.color:"#67a4dc"})}}}),Vt={class:"item"},Kt={class:"title"},Qt={class:"tags"},Zt={class:"options"};function Jt(n,e,t,o,i,r){return R(),q("div",Vt,[V("div",Kt,[V("div",Qt,[(R(!0),q(Fe,null,Me(n.data.tags,(a,l)=>(R(),q("div",{class:"tag",key:l,style:Wt({background:n.colorInit(a)})},ye(a),5))),128))]),mt(" "+ye(n.data.name),1)]),V("div",Zt,[(R(!0),q(Fe,null,Me(n.data.options,(a,l)=>(R(),q("p",{key:l},ye(a),1))),128))])])}var en=Qe(qt,[["render",Jt],["__scopeId","data-v-2af06efc"]]);/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function _t(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,o)}return t}function W(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?_t(Object(t),!0).forEach(function(o){tn(n,o,t[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):_t(Object(t)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(t,o))})}return n}function ke(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ke=function(e){return typeof e}:ke=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ke(n)}function tn(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function K(){return K=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},K.apply(this,arguments)}function nn(n,e){if(n==null)return{};var t={},o=Object.keys(n),i,r;for(r=0;r<o.length;r++)i=o[r],!(e.indexOf(i)>=0)&&(t[i]=n[i]);return t}function on(n,e){if(n==null)return{};var t=nn(n,e),o,i;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(i=0;i<r.length;i++)o=r[i],!(e.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,o)||(t[o]=n[o]))}return t}var rn="1.14.0";function Q(n){if(typeof window!="undefined"&&window.navigator)return!!navigator.userAgent.match(n)}var Z=Q(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),we=Q(/Edge/i),Et=Q(/firefox/i),De=Q(/safari/i)&&!Q(/chrome/i)&&!Q(/android/i),yt=Q(/iP(ad|od|hone)/i),an=Q(/chrome/i)&&Q(/android/i),wt={capture:!1,passive:!1};function _(n,e,t){n.addEventListener(e,t,!Z&&wt)}function b(n,e,t){n.removeEventListener(e,t,!Z&&wt)}function Be(n,e){if(!!e){if(e[0]===">"&&(e=e.substring(1)),n)try{if(n.matches)return n.matches(e);if(n.msMatchesSelector)return n.msMatchesSelector(e);if(n.webkitMatchesSelector)return n.webkitMatchesSelector(e)}catch{return!1}return!1}}function ln(n){return n.host&&n!==document&&n.host.nodeType?n.host:n.parentNode}function G(n,e,t,o){if(n){t=t||document;do{if(e!=null&&(e[0]===">"?n.parentNode===t&&Be(n,e):Be(n,e))||o&&n===t)return n;if(n===t)break}while(n=ln(n))}return null}var Dt=/\s+/g;function F(n,e,t){if(n&&e)if(n.classList)n.classList[t?"add":"remove"](e);else{var o=(" "+n.className+" ").replace(Dt," ").replace(" "+e+" "," ");n.className=(o+(t?" "+e:"")).replace(Dt," ")}}function h(n,e,t){var o=n&&n.style;if(o){if(t===void 0)return document.defaultView&&document.defaultView.getComputedStyle?t=document.defaultView.getComputedStyle(n,""):n.currentStyle&&(t=n.currentStyle),e===void 0?t:t[e];!(e in o)&&e.indexOf("webkit")===-1&&(e="-webkit-"+e),o[e]=t+(typeof t=="string"?"":"px")}}function ce(n,e){var t="";if(typeof n=="string")t=n;else do{var o=h(n,"transform");o&&o!=="none"&&(t=o+" "+t)}while(!e&&(n=n.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(t)}function St(n,e,t){if(n){var o=n.getElementsByTagName(e),i=0,r=o.length;if(t)for(;i<r;i++)t(o[i],i);return o}return[]}function j(){var n=document.scrollingElement;return n||document.documentElement}function C(n,e,t,o,i){if(!(!n.getBoundingClientRect&&n!==window)){var r,a,l,s,u,f,d;if(n!==window&&n.parentNode&&n!==j()?(r=n.getBoundingClientRect(),a=r.top,l=r.left,s=r.bottom,u=r.right,f=r.height,d=r.width):(a=0,l=0,s=window.innerHeight,u=window.innerWidth,f=window.innerHeight,d=window.innerWidth),(e||t)&&n!==window&&(i=i||n.parentNode,!Z))do if(i&&i.getBoundingClientRect&&(h(i,"transform")!=="none"||t&&h(i,"position")!=="static")){var m=i.getBoundingClientRect();a-=m.top+parseInt(h(i,"border-top-width")),l-=m.left+parseInt(h(i,"border-left-width")),s=a+r.height,u=l+r.width;break}while(i=i.parentNode);if(o&&n!==window){var y=ce(i||n),v=y&&y.a,E=y&&y.d;y&&(a/=E,l/=v,d/=v,f/=E,s=a+f,u=l+d)}return{top:a,left:l,bottom:s,right:u,width:d,height:f}}}function Tt(n,e,t){for(var o=te(n,!0),i=C(n)[e];o;){var r=C(o)[t],a=void 0;if(t==="top"||t==="left"?a=i>=r:a=i<=r,!a)return o;if(o===j())break;o=te(o,!1)}return!1}function de(n,e,t,o){for(var i=0,r=0,a=n.children;r<a.length;){if(a[r].style.display!=="none"&&a[r]!==p.ghost&&(o||a[r]!==p.dragged)&&G(a[r],t.draggable,n,!1)){if(i===e)return a[r];i++}r++}return null}function Je(n,e){for(var t=n.lastElementChild;t&&(t===p.ghost||h(t,"display")==="none"||e&&!Be(t,e));)t=t.previousElementSibling;return t||null}function B(n,e){var t=0;if(!n||!n.parentNode)return-1;for(;n=n.previousElementSibling;)n.nodeName.toUpperCase()!=="TEMPLATE"&&n!==p.clone&&(!e||Be(n,e))&&t++;return t}function Ct(n){var e=0,t=0,o=j();if(n)do{var i=ce(n),r=i.a,a=i.d;e+=n.scrollLeft*r,t+=n.scrollTop*a}while(n!==o&&(n=n.parentNode));return[e,t]}function sn(n,e){for(var t in n)if(!!n.hasOwnProperty(t)){for(var o in e)if(e.hasOwnProperty(o)&&e[o]===n[t][o])return Number(t)}return-1}function te(n,e){if(!n||!n.getBoundingClientRect)return j();var t=n,o=!1;do if(t.clientWidth<t.scrollWidth||t.clientHeight<t.scrollHeight){var i=h(t);if(t.clientWidth<t.scrollWidth&&(i.overflowX=="auto"||i.overflowX=="scroll")||t.clientHeight<t.scrollHeight&&(i.overflowY=="auto"||i.overflowY=="scroll")){if(!t.getBoundingClientRect||t===document.body)return j();if(o||e)return t;o=!0}}while(t=t.parentNode);return j()}function un(n,e){if(n&&e)for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n}function et(n,e){return Math.round(n.top)===Math.round(e.top)&&Math.round(n.left)===Math.round(e.left)&&Math.round(n.height)===Math.round(e.height)&&Math.round(n.width)===Math.round(e.width)}var Se;function It(n,e){return function(){if(!Se){var t=arguments,o=this;t.length===1?n.call(o,t[0]):n.apply(o,t),Se=setTimeout(function(){Se=void 0},e)}}}function cn(){clearTimeout(Se),Se=void 0}function Ot(n,e,t){n.scrollLeft+=e,n.scrollTop+=t}function At(n){var e=window.Polymer,t=window.jQuery||window.Zepto;return e&&e.dom?e.dom(n).cloneNode(!0):t?t(n).clone(!0)[0]:n.cloneNode(!0)}var M="Sortable"+new Date().getTime();function dn(){var n=[],e;return{captureAnimationState:function(){if(n=[],!!this.options.animation){var o=[].slice.call(this.el.children);o.forEach(function(i){if(!(h(i,"display")==="none"||i===p.ghost)){n.push({target:i,rect:C(i)});var r=W({},n[n.length-1].rect);if(i.thisAnimationDuration){var a=ce(i,!0);a&&(r.top-=a.f,r.left-=a.e)}i.fromRect=r}})}},addAnimationState:function(o){n.push(o)},removeAnimationState:function(o){n.splice(sn(n,{target:o}),1)},animateAll:function(o){var i=this;if(!this.options.animation){clearTimeout(e),typeof o=="function"&&o();return}var r=!1,a=0;n.forEach(function(l){var s=0,u=l.target,f=u.fromRect,d=C(u),m=u.prevFromRect,y=u.prevToRect,v=l.rect,E=ce(u,!0);E&&(d.top-=E.f,d.left-=E.e),u.toRect=d,u.thisAnimationDuration&&et(m,d)&&!et(f,d)&&(v.top-d.top)/(v.left-d.left)==(f.top-d.top)/(f.left-d.left)&&(s=hn(v,m,y,i.options)),et(d,f)||(u.prevFromRect=f,u.prevToRect=d,s||(s=i.options.animation),i.animate(u,v,d,s)),s&&(r=!0,a=Math.max(a,s),clearTimeout(u.animationResetTimer),u.animationResetTimer=setTimeout(function(){u.animationTime=0,u.prevFromRect=null,u.fromRect=null,u.prevToRect=null,u.thisAnimationDuration=null},s),u.thisAnimationDuration=s)}),clearTimeout(e),r?e=setTimeout(function(){typeof o=="function"&&o()},a):typeof o=="function"&&o(),n=[]},animate:function(o,i,r,a){if(a){h(o,"transition",""),h(o,"transform","");var l=ce(this.el),s=l&&l.a,u=l&&l.d,f=(i.left-r.left)/(s||1),d=(i.top-r.top)/(u||1);o.animatingX=!!f,o.animatingY=!!d,h(o,"transform","translate3d("+f+"px,"+d+"px,0)"),this.forRepaintDummy=fn(o),h(o,"transition","transform "+a+"ms"+(this.options.easing?" "+this.options.easing:"")),h(o,"transform","translate3d(0,0,0)"),typeof o.animated=="number"&&clearTimeout(o.animated),o.animated=setTimeout(function(){h(o,"transition",""),h(o,"transform",""),o.animated=!1,o.animatingX=!1,o.animatingY=!1},a)}}}}function fn(n){return n.offsetWidth}function hn(n,e,t,o){return Math.sqrt(Math.pow(e.top-n.top,2)+Math.pow(e.left-n.left,2))/Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))*o.animation}var fe=[],tt={initializeByDefault:!0},Te={mount:function(e){for(var t in tt)tt.hasOwnProperty(t)&&!(t in e)&&(e[t]=tt[t]);fe.forEach(function(o){if(o.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),fe.push(e)},pluginEvent:function(e,t,o){var i=this;this.eventCanceled=!1,o.cancel=function(){i.eventCanceled=!0};var r=e+"Global";fe.forEach(function(a){!t[a.pluginName]||(t[a.pluginName][r]&&t[a.pluginName][r](W({sortable:t},o)),t.options[a.pluginName]&&t[a.pluginName][e]&&t[a.pluginName][e](W({sortable:t},o)))})},initializePlugins:function(e,t,o,i){fe.forEach(function(l){var s=l.pluginName;if(!(!e.options[s]&&!l.initializeByDefault)){var u=new l(e,t,e.options);u.sortable=e,u.options=e.options,e[s]=u,K(o,u.defaults)}});for(var r in e.options)if(!!e.options.hasOwnProperty(r)){var a=this.modifyOption(e,r,e.options[r]);typeof a!="undefined"&&(e.options[r]=a)}},getEventProperties:function(e,t){var o={};return fe.forEach(function(i){typeof i.eventProperties=="function"&&K(o,i.eventProperties.call(t[i.pluginName],e))}),o},modifyOption:function(e,t,o){var i;return fe.forEach(function(r){!e[r.pluginName]||r.optionListeners&&typeof r.optionListeners[t]=="function"&&(i=r.optionListeners[t].call(e[r.pluginName],o))}),i}};function pn(n){var e=n.sortable,t=n.rootEl,o=n.name,i=n.targetEl,r=n.cloneEl,a=n.toEl,l=n.fromEl,s=n.oldIndex,u=n.newIndex,f=n.oldDraggableIndex,d=n.newDraggableIndex,m=n.originalEvent,y=n.putSortable,v=n.extraEventProperties;if(e=e||t&&t[M],!!e){var E,X=e.options,z="on"+o.charAt(0).toUpperCase()+o.substr(1);window.CustomEvent&&!Z&&!we?E=new CustomEvent(o,{bubbles:!0,cancelable:!0}):(E=document.createEvent("Event"),E.initEvent(o,!0,!0)),E.to=a||t,E.from=l||t,E.item=i||t,E.clone=r,E.oldIndex=s,E.newIndex=u,E.oldDraggableIndex=f,E.newDraggableIndex=d,E.originalEvent=m,E.pullMode=y?y.lastPutMode:void 0;var A=W(W({},v),Te.getEventProperties(o,e));for(var Y in A)E[Y]=A[Y];t&&t.dispatchEvent(E),X[z]&&X[z].call(e,E)}}var gn=["evt"],x=function(e,t){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=o.evt,r=on(o,gn);Te.pluginEvent.bind(p)(e,t,W({dragEl:c,parentEl:D,ghostEl:g,rootEl:w,nextEl:le,lastDownEl:Xe,cloneEl:S,cloneHidden:ne,dragStarted:Ie,putSortable:I,activeSortable:p.active,originalEvent:i,oldIndex:he,oldDraggableIndex:Ce,newIndex:k,newDraggableIndex:oe,hideGhostForTarget:Bt,unhideGhostForTarget:Xt,cloneNowHidden:function(){ne=!0},cloneNowShown:function(){ne=!1},dispatchSortableEvent:function(l){P({sortable:t,name:l,originalEvent:i})}},r))};function P(n){pn(W({putSortable:I,cloneEl:S,targetEl:c,rootEl:w,oldIndex:he,oldDraggableIndex:Ce,newIndex:k,newDraggableIndex:oe},n))}var c,D,g,w,le,Xe,S,ne,he,k,Ce,oe,Ye,I,pe=!1,Re=!1,$e=[],se,$,nt,ot,Pt,xt,Ie,ge,Oe,Ae=!1,Le=!1,He,O,it=[],rt=!1,We=[],Ge=typeof document!="undefined",je=yt,Nt=we||Z?"cssFloat":"float",mn=Ge&&!an&&!yt&&"draggable"in document.createElement("div"),Ft=function(){if(!!Ge){if(Z)return!1;var n=document.createElement("x");return n.style.cssText="pointer-events:auto",n.style.pointerEvents==="auto"}}(),Mt=function(e,t){var o=h(e),i=parseInt(o.width)-parseInt(o.paddingLeft)-parseInt(o.paddingRight)-parseInt(o.borderLeftWidth)-parseInt(o.borderRightWidth),r=de(e,0,t),a=de(e,1,t),l=r&&h(r),s=a&&h(a),u=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+C(r).width,f=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+C(a).width;if(o.display==="flex")return o.flexDirection==="column"||o.flexDirection==="column-reverse"?"vertical":"horizontal";if(o.display==="grid")return o.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(r&&l.float&&l.float!=="none"){var d=l.float==="left"?"left":"right";return a&&(s.clear==="both"||s.clear===d)?"vertical":"horizontal"}return r&&(l.display==="block"||l.display==="flex"||l.display==="table"||l.display==="grid"||u>=i&&o[Nt]==="none"||a&&o[Nt]==="none"&&u+f>i)?"vertical":"horizontal"},vn=function(e,t,o){var i=o?e.left:e.top,r=o?e.right:e.bottom,a=o?e.width:e.height,l=o?t.left:t.top,s=o?t.right:t.bottom,u=o?t.width:t.height;return i===l||r===s||i+a/2===l+u/2},bn=function(e,t){var o;return $e.some(function(i){var r=i[M].options.emptyInsertThreshold;if(!(!r||Je(i))){var a=C(i),l=e>=a.left-r&&e<=a.right+r,s=t>=a.top-r&&t<=a.bottom+r;if(l&&s)return o=i}}),o},kt=function(e){function t(r,a){return function(l,s,u,f){var d=l.options.group.name&&s.options.group.name&&l.options.group.name===s.options.group.name;if(r==null&&(a||d))return!0;if(r==null||r===!1)return!1;if(a&&r==="clone")return r;if(typeof r=="function")return t(r(l,s,u,f),a)(l,s,u,f);var m=(a?l:s).options.group.name;return r===!0||typeof r=="string"&&r===m||r.join&&r.indexOf(m)>-1}}var o={},i=e.group;(!i||ke(i)!="object")&&(i={name:i}),o.name=i.name,o.checkPull=t(i.pull,!0),o.checkPut=t(i.put),o.revertClone=i.revertClone,e.group=o},Bt=function(){!Ft&&g&&h(g,"display","none")},Xt=function(){!Ft&&g&&h(g,"display","")};Ge&&document.addEventListener("click",function(n){if(Re)return n.preventDefault(),n.stopPropagation&&n.stopPropagation(),n.stopImmediatePropagation&&n.stopImmediatePropagation(),Re=!1,!1},!0);var ue=function(e){if(c){e=e.touches?e.touches[0]:e;var t=bn(e.clientX,e.clientY);if(t){var o={};for(var i in e)e.hasOwnProperty(i)&&(o[i]=e[i]);o.target=o.rootEl=t,o.preventDefault=void 0,o.stopPropagation=void 0,t[M]._onDragOver(o)}}},_n=function(e){c&&c.parentNode[M]._isOutsideThisEl(e.target)};function p(n,e){if(!(n&&n.nodeType&&n.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(n));this.el=n,this.options=e=K({},e),n[M]=this;var t={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(n.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Mt(n,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(a,l){a.setData("Text",l.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:p.supportPointer!==!1&&"PointerEvent"in window&&!De,emptyInsertThreshold:5};Te.initializePlugins(this,n,t);for(var o in t)!(o in e)&&(e[o]=t[o]);kt(e);for(var i in this)i.charAt(0)==="_"&&typeof this[i]=="function"&&(this[i]=this[i].bind(this));this.nativeDraggable=e.forceFallback?!1:mn,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?_(n,"pointerdown",this._onTapStart):(_(n,"mousedown",this._onTapStart),_(n,"touchstart",this._onTapStart)),this.nativeDraggable&&(_(n,"dragover",this),_(n,"dragenter",this)),$e.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),K(this,dn())}p.prototype={constructor:p,_isOutsideThisEl:function(e){!this.el.contains(e)&&e!==this.el&&(ge=null)},_getDirection:function(e,t){return typeof this.options.direction=="function"?this.options.direction.call(this,e,t,c):this.options.direction},_onTapStart:function(e){if(!!e.cancelable){var t=this,o=this.el,i=this.options,r=i.preventOnFilter,a=e.type,l=e.touches&&e.touches[0]||e.pointerType&&e.pointerType==="touch"&&e,s=(l||e).target,u=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||s,f=i.filter;if(In(o),!c&&!(/mousedown|pointerdown/.test(a)&&e.button!==0||i.disabled)&&!u.isContentEditable&&!(!this.nativeDraggable&&De&&s&&s.tagName.toUpperCase()==="SELECT")&&(s=G(s,i.draggable,o,!1),!(s&&s.animated)&&Xe!==s)){if(he=B(s),Ce=B(s,i.draggable),typeof f=="function"){if(f.call(this,e,s,this)){P({sortable:t,rootEl:u,name:"filter",targetEl:s,toEl:o,fromEl:o}),x("filter",t,{evt:e}),r&&e.cancelable&&e.preventDefault();return}}else if(f&&(f=f.split(",").some(function(d){if(d=G(u,d.trim(),o,!1),d)return P({sortable:t,rootEl:d,name:"filter",targetEl:s,fromEl:o,toEl:o}),x("filter",t,{evt:e}),!0}),f)){r&&e.cancelable&&e.preventDefault();return}i.handle&&!G(u,i.handle,o,!1)||this._prepareDragStart(e,l,s)}}},_prepareDragStart:function(e,t,o){var i=this,r=i.el,a=i.options,l=r.ownerDocument,s;if(o&&!c&&o.parentNode===r){var u=C(o);if(w=r,c=o,D=c.parentNode,le=c.nextSibling,Xe=o,Ye=a.group,p.dragged=c,se={target:c,clientX:(t||e).clientX,clientY:(t||e).clientY},Pt=se.clientX-u.left,xt=se.clientY-u.top,this._lastX=(t||e).clientX,this._lastY=(t||e).clientY,c.style["will-change"]="all",s=function(){if(x("delayEnded",i,{evt:e}),p.eventCanceled){i._onDrop();return}i._disableDelayedDragEvents(),!Et&&i.nativeDraggable&&(c.draggable=!0),i._triggerDragStart(e,t),P({sortable:i,name:"choose",originalEvent:e}),F(c,a.chosenClass,!0)},a.ignore.split(",").forEach(function(f){St(c,f.trim(),at)}),_(l,"dragover",ue),_(l,"mousemove",ue),_(l,"touchmove",ue),_(l,"mouseup",i._onDrop),_(l,"touchend",i._onDrop),_(l,"touchcancel",i._onDrop),Et&&this.nativeDraggable&&(this.options.touchStartThreshold=4,c.draggable=!0),x("delayStart",this,{evt:e}),a.delay&&(!a.delayOnTouchOnly||t)&&(!this.nativeDraggable||!(we||Z))){if(p.eventCanceled){this._onDrop();return}_(l,"mouseup",i._disableDelayedDrag),_(l,"touchend",i._disableDelayedDrag),_(l,"touchcancel",i._disableDelayedDrag),_(l,"mousemove",i._delayedDragTouchMoveHandler),_(l,"touchmove",i._delayedDragTouchMoveHandler),a.supportPointer&&_(l,"pointermove",i._delayedDragTouchMoveHandler),i._dragStartTimer=setTimeout(s,a.delay)}else s()}},_delayedDragTouchMoveHandler:function(e){var t=e.touches?e.touches[0]:e;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){c&&at(c),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;b(e,"mouseup",this._disableDelayedDrag),b(e,"touchend",this._disableDelayedDrag),b(e,"touchcancel",this._disableDelayedDrag),b(e,"mousemove",this._delayedDragTouchMoveHandler),b(e,"touchmove",this._delayedDragTouchMoveHandler),b(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,t){t=t||e.pointerType=="touch"&&e,!this.nativeDraggable||t?this.options.supportPointer?_(document,"pointermove",this._onTouchMove):t?_(document,"touchmove",this._onTouchMove):_(document,"mousemove",this._onTouchMove):(_(c,"dragend",this),_(w,"dragstart",this._onDragStart));try{document.selection?Ue(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(e,t){if(pe=!1,w&&c){x("dragStarted",this,{evt:t}),this.nativeDraggable&&_(document,"dragover",_n);var o=this.options;!e&&F(c,o.dragClass,!1),F(c,o.ghostClass,!0),p.active=this,e&&this._appendGhost(),P({sortable:this,name:"start",originalEvent:t})}else this._nulling()},_emulateDragOver:function(){if($){this._lastX=$.clientX,this._lastY=$.clientY,Bt();for(var e=document.elementFromPoint($.clientX,$.clientY),t=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint($.clientX,$.clientY),e!==t);)t=e;if(c.parentNode[M]._isOutsideThisEl(e),t)do{if(t[M]){var o=void 0;if(o=t[M]._onDragOver({clientX:$.clientX,clientY:$.clientY,target:e,rootEl:t}),o&&!this.options.dragoverBubble)break}e=t}while(t=t.parentNode);Xt()}},_onTouchMove:function(e){if(se){var t=this.options,o=t.fallbackTolerance,i=t.fallbackOffset,r=e.touches?e.touches[0]:e,a=g&&ce(g,!0),l=g&&a&&a.a,s=g&&a&&a.d,u=je&&O&&Ct(O),f=(r.clientX-se.clientX+i.x)/(l||1)+(u?u[0]-it[0]:0)/(l||1),d=(r.clientY-se.clientY+i.y)/(s||1)+(u?u[1]-it[1]:0)/(s||1);if(!p.active&&!pe){if(o&&Math.max(Math.abs(r.clientX-this._lastX),Math.abs(r.clientY-this._lastY))<o)return;this._onDragStart(e,!0)}if(g){a?(a.e+=f-(nt||0),a.f+=d-(ot||0)):a={a:1,b:0,c:0,d:1,e:f,f:d};var m="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");h(g,"webkitTransform",m),h(g,"mozTransform",m),h(g,"msTransform",m),h(g,"transform",m),nt=f,ot=d,$=r}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!g){var e=this.options.fallbackOnBody?document.body:w,t=C(c,!0,je,!0,e),o=this.options;if(je){for(O=e;h(O,"position")==="static"&&h(O,"transform")==="none"&&O!==document;)O=O.parentNode;O!==document.body&&O!==document.documentElement?(O===document&&(O=j()),t.top+=O.scrollTop,t.left+=O.scrollLeft):O=j(),it=Ct(O)}g=c.cloneNode(!0),F(g,o.ghostClass,!1),F(g,o.fallbackClass,!0),F(g,o.dragClass,!0),h(g,"transition",""),h(g,"transform",""),h(g,"box-sizing","border-box"),h(g,"margin",0),h(g,"top",t.top),h(g,"left",t.left),h(g,"width",t.width),h(g,"height",t.height),h(g,"opacity","0.8"),h(g,"position",je?"absolute":"fixed"),h(g,"zIndex","100000"),h(g,"pointerEvents","none"),p.ghost=g,e.appendChild(g),h(g,"transform-origin",Pt/parseInt(g.style.width)*100+"% "+xt/parseInt(g.style.height)*100+"%")}},_onDragStart:function(e,t){var o=this,i=e.dataTransfer,r=o.options;if(x("dragStart",this,{evt:e}),p.eventCanceled){this._onDrop();return}x("setupClone",this),p.eventCanceled||(S=At(c),S.draggable=!1,S.style["will-change"]="",this._hideClone(),F(S,this.options.chosenClass,!1),p.clone=S),o.cloneId=Ue(function(){x("clone",o),!p.eventCanceled&&(o.options.removeCloneOnHide||w.insertBefore(S,c),o._hideClone(),P({sortable:o,name:"clone"}))}),!t&&F(c,r.dragClass,!0),t?(Re=!0,o._loopId=setInterval(o._emulateDragOver,50)):(b(document,"mouseup",o._onDrop),b(document,"touchend",o._onDrop),b(document,"touchcancel",o._onDrop),i&&(i.effectAllowed="move",r.setData&&r.setData.call(o,i,c)),_(document,"drop",o),h(c,"transform","translateZ(0)")),pe=!0,o._dragStartId=Ue(o._dragStarted.bind(o,t,e)),_(document,"selectstart",o),Ie=!0,De&&h(document.body,"user-select","none")},_onDragOver:function(e){var t=this.el,o=e.target,i,r,a,l=this.options,s=l.group,u=p.active,f=Ye===s,d=l.sort,m=I||u,y,v=this,E=!1;if(rt)return;function X(Ee,$t){x(Ee,v,W({evt:e,isOwner:f,axis:y?"vertical":"horizontal",revert:a,dragRect:i,targetRect:r,canSort:d,fromSortable:m,target:o,completed:A,onMove:function(gt,Lt){return ze(w,t,c,i,gt,C(gt),e,Lt)},changed:Y},$t))}function z(){X("dragOverAnimationCapture"),v.captureAnimationState(),v!==m&&m.captureAnimationState()}function A(Ee){return X("dragOverCompleted",{insertion:Ee}),Ee&&(f?u._hideClone():u._showClone(v),v!==m&&(F(c,I?I.options.ghostClass:u.options.ghostClass,!1),F(c,l.ghostClass,!0)),I!==v&&v!==p.active?I=v:v===p.active&&I&&(I=null),m===v&&(v._ignoreWhileAnimating=o),v.animateAll(function(){X("dragOverAnimationComplete"),v._ignoreWhileAnimating=null}),v!==m&&(m.animateAll(),m._ignoreWhileAnimating=null)),(o===c&&!c.animated||o===t&&!o.animated)&&(ge=null),!l.dragoverBubble&&!e.rootEl&&o!==document&&(c.parentNode[M]._isOutsideThisEl(e.target),!Ee&&ue(e)),!l.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),E=!0}function Y(){k=B(c),oe=B(c,l.draggable),P({sortable:v,name:"change",toEl:t,newIndex:k,newDraggableIndex:oe,originalEvent:e})}if(e.preventDefault!==void 0&&e.cancelable&&e.preventDefault(),o=G(o,l.draggable,t,!0),X("dragOver"),p.eventCanceled)return E;if(c.contains(e.target)||o.animated&&o.animatingX&&o.animatingY||v._ignoreWhileAnimating===o)return A(!1);if(Re=!1,u&&!l.disabled&&(f?d||(a=D!==w):I===this||(this.lastPutMode=Ye.checkPull(this,u,c,e))&&s.checkPut(this,u,c,e))){if(y=this._getDirection(e,o)==="vertical",i=C(c),X("dragOverValid"),p.eventCanceled)return E;if(a)return D=w,z(),this._hideClone(),X("revert"),p.eventCanceled||(le?w.insertBefore(c,le):w.appendChild(c)),A(!0);var L=Je(t,l.draggable);if(!L||Dn(e,y,this)&&!L.animated){if(L===c)return A(!1);if(L&&t===e.target&&(o=L),o&&(r=C(o)),ze(w,t,c,i,o,r,e,!!o)!==!1)return z(),t.appendChild(c),D=t,Y(),A(!0)}else if(L&&wn(e,y,this)){var ie=de(t,0,l,!0);if(ie===c)return A(!1);if(o=ie,r=C(o),ze(w,t,c,i,o,r,e,!1)!==!1)return z(),t.insertBefore(c,ie),D=t,Y(),A(!0)}else if(o.parentNode===t){r=C(o);var H=0,re,me=c.parentNode!==t,N=!vn(c.animated&&c.toRect||i,o.animated&&o.toRect||r,y),ve=y?"top":"left",J=Tt(o,"top","top")||Tt(c,"top","top"),be=J?J.scrollTop:void 0;ge!==o&&(re=r[ve],Ae=!1,Le=!N&&l.invertSwap||me),H=Sn(e,o,r,y,N?1:l.swapThreshold,l.invertedSwapThreshold==null?l.swapThreshold:l.invertedSwapThreshold,Le,ge===o);var U;if(H!==0){var ae=B(c);do ae-=H,U=D.children[ae];while(U&&(h(U,"display")==="none"||U===g))}if(H===0||U===o)return A(!1);ge=o,Oe=H;var _e=o.nextElementSibling,ee=!1;ee=H===1;var Ne=ze(w,t,c,i,o,r,e,ee);if(Ne!==!1)return(Ne===1||Ne===-1)&&(ee=Ne===1),rt=!0,setTimeout(yn,30),z(),ee&&!_e?t.appendChild(c):o.parentNode.insertBefore(c,ee?_e:o),J&&Ot(J,0,be-J.scrollTop),D=c.parentNode,re!==void 0&&!Le&&(He=Math.abs(re-C(o)[ve])),Y(),A(!0)}if(t.contains(c))return A(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){b(document,"mousemove",this._onTouchMove),b(document,"touchmove",this._onTouchMove),b(document,"pointermove",this._onTouchMove),b(document,"dragover",ue),b(document,"mousemove",ue),b(document,"touchmove",ue)},_offUpEvents:function(){var e=this.el.ownerDocument;b(e,"mouseup",this._onDrop),b(e,"touchend",this._onDrop),b(e,"pointerup",this._onDrop),b(e,"touchcancel",this._onDrop),b(document,"selectstart",this)},_onDrop:function(e){var t=this.el,o=this.options;if(k=B(c),oe=B(c,o.draggable),x("drop",this,{evt:e}),D=c&&c.parentNode,k=B(c),oe=B(c,o.draggable),p.eventCanceled){this._nulling();return}pe=!1,Le=!1,Ae=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),lt(this.cloneId),lt(this._dragStartId),this.nativeDraggable&&(b(document,"drop",this),b(t,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),De&&h(document.body,"user-select",""),h(c,"transform",""),e&&(Ie&&(e.cancelable&&e.preventDefault(),!o.dropBubble&&e.stopPropagation()),g&&g.parentNode&&g.parentNode.removeChild(g),(w===D||I&&I.lastPutMode!=="clone")&&S&&S.parentNode&&S.parentNode.removeChild(S),c&&(this.nativeDraggable&&b(c,"dragend",this),at(c),c.style["will-change"]="",Ie&&!pe&&F(c,I?I.options.ghostClass:this.options.ghostClass,!1),F(c,this.options.chosenClass,!1),P({sortable:this,name:"unchoose",toEl:D,newIndex:null,newDraggableIndex:null,originalEvent:e}),w!==D?(k>=0&&(P({rootEl:D,name:"add",toEl:D,fromEl:w,originalEvent:e}),P({sortable:this,name:"remove",toEl:D,originalEvent:e}),P({rootEl:D,name:"sort",toEl:D,fromEl:w,originalEvent:e}),P({sortable:this,name:"sort",toEl:D,originalEvent:e})),I&&I.save()):k!==he&&k>=0&&(P({sortable:this,name:"update",toEl:D,originalEvent:e}),P({sortable:this,name:"sort",toEl:D,originalEvent:e})),p.active&&((k==null||k===-1)&&(k=he,oe=Ce),P({sortable:this,name:"end",toEl:D,originalEvent:e}),this.save()))),this._nulling()},_nulling:function(){x("nulling",this),w=c=D=g=le=S=Xe=ne=se=$=Ie=k=oe=he=Ce=ge=Oe=I=Ye=p.dragged=p.ghost=p.clone=p.active=null,We.forEach(function(e){e.checked=!0}),We.length=nt=ot=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":c&&(this._onDragOver(e),En(e));break;case"selectstart":e.preventDefault();break}},toArray:function(){for(var e=[],t,o=this.el.children,i=0,r=o.length,a=this.options;i<r;i++)t=o[i],G(t,a.draggable,this.el,!1)&&e.push(t.getAttribute(a.dataIdAttr)||Cn(t));return e},sort:function(e,t){var o={},i=this.el;this.toArray().forEach(function(r,a){var l=i.children[a];G(l,this.options.draggable,i,!1)&&(o[r]=l)},this),t&&this.captureAnimationState(),e.forEach(function(r){o[r]&&(i.removeChild(o[r]),i.appendChild(o[r]))}),t&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,t){return G(e,t||this.options.draggable,this.el,!1)},option:function(e,t){var o=this.options;if(t===void 0)return o[e];var i=Te.modifyOption(this,e,t);typeof i!="undefined"?o[e]=i:o[e]=t,e==="group"&&kt(o)},destroy:function(){x("destroy",this);var e=this.el;e[M]=null,b(e,"mousedown",this._onTapStart),b(e,"touchstart",this._onTapStart),b(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(b(e,"dragover",this),b(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),$e.splice($e.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!ne){if(x("hideClone",this),p.eventCanceled)return;h(S,"display","none"),this.options.removeCloneOnHide&&S.parentNode&&S.parentNode.removeChild(S),ne=!0}},_showClone:function(e){if(e.lastPutMode!=="clone"){this._hideClone();return}if(ne){if(x("showClone",this),p.eventCanceled)return;c.parentNode==w&&!this.options.group.revertClone?w.insertBefore(S,c):le?w.insertBefore(S,le):w.appendChild(S),this.options.group.revertClone&&this.animate(c,S),h(S,"display",""),ne=!1}}};function En(n){n.dataTransfer&&(n.dataTransfer.dropEffect="move"),n.cancelable&&n.preventDefault()}function ze(n,e,t,o,i,r,a,l){var s,u=n[M],f=u.options.onMove,d;return window.CustomEvent&&!Z&&!we?s=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(s=document.createEvent("Event"),s.initEvent("move",!0,!0)),s.to=e,s.from=n,s.dragged=t,s.draggedRect=o,s.related=i||e,s.relatedRect=r||C(e),s.willInsertAfter=l,s.originalEvent=a,n.dispatchEvent(s),f&&(d=f.call(u,s,a)),d}function at(n){n.draggable=!1}function yn(){rt=!1}function wn(n,e,t){var o=C(de(t.el,0,t.options,!0)),i=10;return e?n.clientX<o.left-i||n.clientY<o.top&&n.clientX<o.right:n.clientY<o.top-i||n.clientY<o.bottom&&n.clientX<o.left}function Dn(n,e,t){var o=C(Je(t.el,t.options.draggable)),i=10;return e?n.clientX>o.right+i||n.clientX<=o.right&&n.clientY>o.bottom&&n.clientX>=o.left:n.clientX>o.right&&n.clientY>o.top||n.clientX<=o.right&&n.clientY>o.bottom+i}function Sn(n,e,t,o,i,r,a,l){var s=o?n.clientY:n.clientX,u=o?t.height:t.width,f=o?t.top:t.left,d=o?t.bottom:t.right,m=!1;if(!a){if(l&&He<u*i){if(!Ae&&(Oe===1?s>f+u*r/2:s<d-u*r/2)&&(Ae=!0),Ae)m=!0;else if(Oe===1?s<f+He:s>d-He)return-Oe}else if(s>f+u*(1-i)/2&&s<d-u*(1-i)/2)return Tn(e)}return m=m||a,m&&(s<f+u*r/2||s>d-u*r/2)?s>f+u/2?1:-1:0}function Tn(n){return B(c)<B(n)?1:-1}function Cn(n){for(var e=n.tagName+n.className+n.src+n.href+n.textContent,t=e.length,o=0;t--;)o+=e.charCodeAt(t);return o.toString(36)}function In(n){We.length=0;for(var e=n.getElementsByTagName("input"),t=e.length;t--;){var o=e[t];o.checked&&We.push(o)}}function Ue(n){return setTimeout(n,0)}function lt(n){return clearTimeout(n)}Ge&&_(document,"touchmove",function(n){(p.active||pe)&&n.cancelable&&n.preventDefault()});p.utils={on:_,off:b,css:h,find:St,is:function(e,t){return!!G(e,t,e,!1)},extend:un,throttle:It,closest:G,toggleClass:F,clone:At,index:B,nextTick:Ue,cancelNextTick:lt,detectDirection:Mt,getChild:de};p.get=function(n){return n[M]};p.mount=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];e[0].constructor===Array&&(e=e[0]),e.forEach(function(o){if(!o.prototype||!o.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(o));o.utils&&(p.utils=W(W({},p.utils),o.utils)),Te.mount(o)})};p.create=function(n,e){return new p(n,e)};p.version=rn;var T=[],Pe,st,ut=!1,ct,dt,qe,xe;function On(){function n(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var e in this)e.charAt(0)==="_"&&typeof this[e]=="function"&&(this[e]=this[e].bind(this))}return n.prototype={dragStarted:function(t){var o=t.originalEvent;this.sortable.nativeDraggable?_(document,"dragover",this._handleAutoScroll):this.options.supportPointer?_(document,"pointermove",this._handleFallbackAutoScroll):o.touches?_(document,"touchmove",this._handleFallbackAutoScroll):_(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var o=t.originalEvent;!this.options.dragOverBubble&&!o.rootEl&&this._handleAutoScroll(o)},drop:function(){this.sortable.nativeDraggable?b(document,"dragover",this._handleAutoScroll):(b(document,"pointermove",this._handleFallbackAutoScroll),b(document,"touchmove",this._handleFallbackAutoScroll),b(document,"mousemove",this._handleFallbackAutoScroll)),Yt(),Ve(),cn()},nulling:function(){qe=st=Pe=ut=xe=ct=dt=null,T.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,o){var i=this,r=(t.touches?t.touches[0]:t).clientX,a=(t.touches?t.touches[0]:t).clientY,l=document.elementFromPoint(r,a);if(qe=t,o||this.options.forceAutoScrollFallback||we||Z||De){ft(t,this.options,l,o);var s=te(l,!0);ut&&(!xe||r!==ct||a!==dt)&&(xe&&Yt(),xe=setInterval(function(){var u=te(document.elementFromPoint(r,a),!0);u!==s&&(s=u,Ve()),ft(t,i.options,u,o)},10),ct=r,dt=a)}else{if(!this.options.bubbleScroll||te(l,!0)===j()){Ve();return}ft(t,this.options,te(l,!1),!1)}}},K(n,{pluginName:"scroll",initializeByDefault:!0})}function Ve(){T.forEach(function(n){clearInterval(n.pid)}),T=[]}function Yt(){clearInterval(xe)}var ft=It(function(n,e,t,o){if(!!e.scroll){var i=(n.touches?n.touches[0]:n).clientX,r=(n.touches?n.touches[0]:n).clientY,a=e.scrollSensitivity,l=e.scrollSpeed,s=j(),u=!1,f;st!==t&&(st=t,Ve(),Pe=e.scroll,f=e.scrollFn,Pe===!0&&(Pe=te(t,!0)));var d=0,m=Pe;do{var y=m,v=C(y),E=v.top,X=v.bottom,z=v.left,A=v.right,Y=v.width,L=v.height,ie=void 0,H=void 0,re=y.scrollWidth,me=y.scrollHeight,N=h(y),ve=y.scrollLeft,J=y.scrollTop;y===s?(ie=Y<re&&(N.overflowX==="auto"||N.overflowX==="scroll"||N.overflowX==="visible"),H=L<me&&(N.overflowY==="auto"||N.overflowY==="scroll"||N.overflowY==="visible")):(ie=Y<re&&(N.overflowX==="auto"||N.overflowX==="scroll"),H=L<me&&(N.overflowY==="auto"||N.overflowY==="scroll"));var be=ie&&(Math.abs(A-i)<=a&&ve+Y<re)-(Math.abs(z-i)<=a&&!!ve),U=H&&(Math.abs(X-r)<=a&&J+L<me)-(Math.abs(E-r)<=a&&!!J);if(!T[d])for(var ae=0;ae<=d;ae++)T[ae]||(T[ae]={});(T[d].vx!=be||T[d].vy!=U||T[d].el!==y)&&(T[d].el=y,T[d].vx=be,T[d].vy=U,clearInterval(T[d].pid),(be!=0||U!=0)&&(u=!0,T[d].pid=setInterval(function(){o&&this.layer===0&&p.active._onTouchMove(qe);var _e=T[this.layer].vy?T[this.layer].vy*l:0,ee=T[this.layer].vx?T[this.layer].vx*l:0;typeof f=="function"&&f.call(p.dragged.parentNode[M],ee,_e,n,qe,T[this.layer].el)!=="continue"||Ot(T[this.layer].el,ee,_e)}.bind({layer:d}),24))),d++}while(e.bubbleScroll&&m!==s&&(m=te(m,!1)));ut=u}},30),Rt=function(e){var t=e.originalEvent,o=e.putSortable,i=e.dragEl,r=e.activeSortable,a=e.dispatchSortableEvent,l=e.hideGhostForTarget,s=e.unhideGhostForTarget;if(!!t){var u=o||r;l();var f=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,d=document.elementFromPoint(f.clientX,f.clientY);s(),u&&!u.el.contains(d)&&(a("spill"),this.onSpill({dragEl:i,putSortable:o}))}};function ht(){}ht.prototype={startIndex:null,dragStart:function(e){var t=e.oldDraggableIndex;this.startIndex=t},onSpill:function(e){var t=e.dragEl,o=e.putSortable;this.sortable.captureAnimationState(),o&&o.captureAnimationState();var i=de(this.sortable.el,this.startIndex,this.options);i?this.sortable.el.insertBefore(t,i):this.sortable.el.appendChild(t),this.sortable.animateAll(),o&&o.animateAll()},drop:Rt};K(ht,{pluginName:"revertOnSpill"});function pt(){}pt.prototype={onSpill:function(e){var t=e.dragEl,o=e.putSortable,i=o||this.sortable;i.captureAnimationState(),t.parentNode&&t.parentNode.removeChild(t),i.animateAll()},drop:Rt};K(pt,{pluginName:"removeOnSpill"});p.mount(new On);p.mount(pt,ht);const An=Ke({components:{Item:en},props:{data:{type:Object,default:()=>({name:"",children:[]})}},setup(n){const e=vt(null);return Gt(()=>{e.value.list=n.data,new p(e.value,{group:"shared",animation:150,ghostClass:"blue-background-class",onEnd:function(t){const o=t.pullMode,i=t.oldIndex,r=t.newIndex;let a=t.target.list.children,l=t.to.list.children;if(o)l.splice(r,0,a[i]),a.splice(i,1);else{const s=a[i];a[i]=a[r],a[r]=s,console.log(a[0])}}})}),{dom:e}}}),Pn={class:"block"},xn={class:"header"},Nn={class:"num"},Fn={class:"list",ref:"dom"};function Mn(n,e,t,o,i,r){const a=Ze("Item");return R(),q("div",Pn,[V("div",xn,[V("span",Nn,ye(n.data.children.length),1),V("div",null,ye(n.data.name),1)]),V("div",Fn,[(R(!0),q(Fe,null,Me(n.data.children,l=>(R(),bt(a,{key:l.id,data:l},null,8,["data"]))),128))],512)])}var kn=Qe(An,[["render",Mn],["__scopeId","data-v-cf88fed8"]]);function Bn(n){return jt({url:"/work/list",method:"post",baseURL:"/mock",data:n})}const Xn=Ke({components:{Block:kn},setup(){let n=vt([]);return(()=>{Bn({}).then(o=>{n.value=o.data.list})})(),{list:n}}}),Yn={class:"layout-container"},Rn=mt("\u8BF7\u5C1D\u8BD5\u5DE6\u53F3\u62D6\u52A8\u6A21\u5757\uFF0C\u6570\u636E\u4ECE\u63A5\u53E3\u800C\u6765\uFF0C\u4EFB\u610F\u65F6\u523B\u5747\u53EF\u4EE5\u63D0\u4EA4\u81F3\u63A5\u53E3\u4E2D\u53BB"),$n={class:"layout-container-table"},Ln={class:"list"};function Hn(n,e,t,o,i,r){const a=Ze("el-alert"),l=Ze("Block");return R(),q("div",Yn,[zt(a,{type:"success"},{default:Ut(()=>[Rn]),_:1}),V("div",$n,[V("div",Ln,[(R(!0),q(Fe,null,Me(n.list,(s,u)=>(R(),bt(l,{key:u,data:s},null,8,["data"]))),128))])])])}var jn=Qe(Xn,[["render",Hn],["__scopeId","data-v-c164b1ae"]]);export{jn as default};
