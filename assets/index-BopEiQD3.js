var _t=Object.defineProperty;var Ct=(n,t,e)=>t in n?_t(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var p=(n,t,e)=>Ct(n,typeof t!="symbol"?t+"":t,e);import{k as j,n as b,g as ot,h as F,q as Et,m as $,r as f,j as a,s as yt,t as Ot,w as k}from"./index-CtQgf38W.js";import{M as rt}from"./index-A4eXEg1a.js";import{c as O}from"./classnames-i4W5uzNT.js";import{i as $t,a as A,c as S,u as st,C as z,b as H,f as D}from"./index-DjnRMsMa.js";import{Z as jt,a as W,u as it,s as Mt}from"./preset_attrs-BM4CFZ4s.js";import{d as q,u as V,a as K,c as St,g as Tt,e as ct,b as T,m as Nt,o as kt}from"./index-D8thIb-8.js";import{o as Pt,n as at,g as Rt,a as bt,b as lt,c as At,u as Lt}from"./index-ttufKTwy.js";function Q(n,t){const e={...n},o=Object.keys(t);for(let r=0,s=o.length;r<s;r++){const i=o[r];j(n[i])&&(e[i]=t[i])}return e}function Bt(n,t){return!Object.is(n,t)}function zt(n,t){const e=n.indexOf(t);return e>-1&&n.splice(e,1),n}function It(n){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return b(n)?[]:ot(n)?n:t?[]:[n]}function ut(n){var e;const t=(e=n==null?void 0:n.getRootNode)==null?void 0:e.call(n);return t instanceof ShadowRoot?t:null}function I(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];const[o,r]=t;return $t?b(o)?r:F(o)?o():Et(o)?q().querySelector(o):$(o)&&"current"in o?o.current:o:null}function ft(n,t){const{name:e,theme:o}=t,r=o==="twotone"?"64 64 896 896":"0 0 1024 1024";function s(i,c){const{className:l,style:u}=i;return a.jsx("span",{...i,ref:c,className:`ink-icon icon-${e}${l?` ${l}`:""}`,style:u,"aria-label":e,role:"img",children:a.jsx(n,{"aria-hidden":"true","data-icon":e,fill:"currentColor",focusable:"false",height:"1em",viewBox:r,width:"1em"})})}return f.forwardRef(s)}function Ut(n,t){const e=!j(n);return[e?n:t,e]}function Ft(n){const{defaultValue:t,onChange:e,shouldUpdate:o=Bt,value:r}=n,[s,i]=f.useState(t),[c,l]=Ut(r,s),u=V(d=>{const h=F(d)?d(c):d;o(c,h)&&(l||i(h),e&&e(h))});return[c,u]}var Ht=typeof Element<"u",Dt=typeof Map=="function",Wt=typeof Set=="function",qt=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function N(n,t){if(n===t)return!0;if(n&&t&&typeof n=="object"&&typeof t=="object"){if(n.constructor!==t.constructor)return!1;var e,o,r;if(Array.isArray(n)){if(e=n.length,e!=t.length)return!1;for(o=e;o--!==0;)if(!N(n[o],t[o]))return!1;return!0}var s;if(Dt&&n instanceof Map&&t instanceof Map){if(n.size!==t.size)return!1;for(s=n.entries();!(o=s.next()).done;)if(!t.has(o.value[0]))return!1;for(s=n.entries();!(o=s.next()).done;)if(!N(o.value[1],t.get(o.value[0])))return!1;return!0}if(Wt&&n instanceof Set&&t instanceof Set){if(n.size!==t.size)return!1;for(s=n.entries();!(o=s.next()).done;)if(!t.has(o.value[0]))return!1;return!0}if(qt&&ArrayBuffer.isView(n)&&ArrayBuffer.isView(t)){if(e=n.length,e!=t.length)return!1;for(o=e;o--!==0;)if(n[o]!==t[o])return!1;return!0}if(n.constructor===RegExp)return n.source===t.source&&n.flags===t.flags;if(n.valueOf!==Object.prototype.valueOf)return n.valueOf()===t.valueOf();if(n.toString!==Object.prototype.toString)return n.toString()===t.toString();if(r=Object.keys(n),e=r.length,e!==Object.keys(t).length)return!1;for(o=e;o--!==0;)if(!Object.prototype.hasOwnProperty.call(t,r[o]))return!1;if(Ht&&n instanceof Element)return!1;for(o=e;o--!==0;)if(!((r[o]==="_owner"||r[o]==="__v"||r[o]==="__o")&&n.$$typeof)&&!N(n[r[o]],t[r[o]]))return!1;return!0}return n!==n&&t!==t}var Vt=function(t,e){try{return N(t,e)}catch(o){if((o.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw o}};const L=yt(Vt);function Gt(n,t){const e=A(()=>({deps:t,value:n()}));return f.useMemo(()=>{L(e.deps,t)||(e.deps=t,e.value=n())},[t,n,e]),e.value}function dt(n,t){const e=V(t),[o,r]=f.useState(null);f.useEffect(()=>{r(I(n))},[n]),f.useEffect(()=>o?Pt(o,e):void 0,[o,e])}function Zt(n,t){const{children:e,getContainer:o}=n,[r,s]=f.useState(()=>I(o,K()));return f.useImperativeHandle(t,()=>r,[r]),f.useEffect(()=>{s(I(o,K()))},[o]),b(r)?null:r===!1?a.jsx(a.Fragment,{children:e}):Ot.createPortal(e,r)}var Xt=f.forwardRef(Zt);function Yt(n,t){const{isOpen:e,zIndex:o}=t,{getZIndex:r}=jt.useState(),s=!j(o),i=A(()=>({value:s||!e&&!n?0:r()}));return S(e,()=>{e&&!s&&(i.value=r())}),s?o:i.value}class Jt{constructor(t){p(this,"$content",{current:null});this.isMounted=!!t.keepMounted||!!t.isOpen}}class Kt{constructor(t,e){p(this,"setIsMounted",t=>{const e=this.states.isMounted!==t;return e&&this.forceUpdate(),this.states.isMounted=t,e});this.forceUpdate=t,this.states=e}get isExited(){const t=this.states.$content.current;return t&&t.isExited}}function Qt(n){const{keepMounted:t,isOpen:e,unmountOnExit:o}=n,r=st(),s=A(()=>new Jt(n)),i=f.useMemo(()=>new Kt(r,s),[r,s]),c=S(`${t}-${o}`,()=>{let u=s.isMounted;return t?u=!0:o&&i.isExited&&(u=!1),i.setIsMounted(u)}),l=S(e,()=>i.setIsMounted(!0));return{returnEarly:c||l,actions:i,states:s}}const te={mask:!0};function ee(n,t){const e=k(n,te),{isOpen:o,keepMounted:r,getContainer:s,unmountOnExit:i,className:c,classNames:l={},transitions:u={}}=e,d=W(e),{actions:h,returnEarly:x,states:_}=Qt(e),E=Yt(_.isMounted,e);return x||!_.isMounted?null:a.jsx(Xt,{ref:t,getContainer:s,children:a.jsxs("div",{className:O(c,l.root),style:k(d.root||{},{position:"absolute",zIndex:E}),children:[!!e.mask&&a.jsx(z,{appear:!0,classNames:u.mask,when:o,children:a.jsx("div",{className:l.mask,style:d.mask,"aria-hidden":"true"})}),a.jsx(z,{ref:_.$content,appear:!0,classNames:u.content,when:o,onEnter:(g,w)=>{var C;(C=e.onEnter)==null||C.call(e,g,w),h.setIsMounted(!0)},onEntered:e.onEntered,onEntering:e.onEntering,onExit:e.onExit,onExited:g=>{var w;(w=e.onExited)==null||w.call(e,g),h.setIsMounted(!(i&&!r))},onExiting:e.onExiting,children:e.children})]})})}var ne=f.forwardRef(ee);function oe(n){return n.children}var re=f.memo(oe,(n,t)=>{let{when:e}=t;return!(F(e)?e():e)});const tt=St(()=>at);function se(n){const{className:t,show:e,style:o}=n;return e?a.jsx("div",{className:t,style:o}):null}function ie(n){const{overflow:t,overflowX:e,overflowY:o}=Tt(n),r=new Set(["auto","clip","hidden","scroll"]);return r.has(t)||r.has(e)||r.has(o)}function ht(n){const t=[];let e=n.parentElement;for(;e;)ie(e)&&t.push(e),e=e.parentElement;return t}function U(n){const t=Rt(n);return{_height:n.clientHeight,_width:n.clientWidth,bottom:t.bottom,el:n,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function ce(n){return U(bt(n))}function ae(n,t){const{children:e,onMounted:o,onResize:r,onScroll:s,isOpen:i}=n,c=f.useRef(null);dt(c,r),f.useEffect(()=>o(c.current),[o]),f.useEffect(()=>{if(!c.current||!i)return;const u=new Set([ct(c.current),...ht(c.current)]);return u.forEach(d=>{d.addEventListener("scroll",s,{passive:!0})}),()=>{u.forEach(d=>{d.removeEventListener("scroll",s)})}},[i,s]);const l=lt(e.ref,t,c);return f.cloneElement(e,{ref:l})}var le=f.forwardRef(ae);function ue(n,t){const{children:e,events:o,onResize:r,onScroll:s,isOpen:i}=n,c=f.useRef(null);dt(c,r),f.useEffect(()=>{if(!c.current||!i)return;const d=ht(c.current);return d.forEach(h=>{h.addEventListener("scroll",s,{passive:!0})}),()=>{d.forEach(h=>{h.removeEventListener("scroll",s)})}},[i,s]);const l=lt(e.ref,t,c),u=Object.entries(o).reduce((d,h)=>{let[x,_]=h;return d[x]=H(_,e.props[x]),d},{});return f.cloneElement(e,{ref:l,...u})}var fe=f.forwardRef(ue);function de(n){const t=()=>{n(()=>!0)},e=()=>{n(()=>!1)};return[{onMouseEnter:t,onMouseLeave:e},{onMouseEnter:t,onMouseLeave:e}]}function he(n){return[{onClick:()=>{n(e=>!e)}},{}]}function me(n){return[{onBlur:()=>{n(()=>!1)},onFocus:()=>{n(()=>!0)}},{}]}function ge(n){return[{onContextMenu:e=>{e.preventDefault(),n(o=>!o)}},{}]}function xe(n,t){const{popup:e,popups:o,trigger:r}=n,s=t.target,i=c=>{var l;return c&&(c===s||c.contains(s)||((l=ut(c))==null?void 0:l.host)===s)};return i(r)||i(e)||o.some(c=>i(c))}function pe(n,t){const e=[];return n.has("hover")&&e.push(de(t)),n.has("click")&&e.push(he(t)),n.has("focus")&&e.push(me(t)),n.has("contextMenu")&&e.push(ge(t)),e.reduce((o,r)=>(o[0]=Q(o[0],r[0]),o[1]=Q(o[1],r[1]),o),[{},{}])}function we(n,t,e){const{trigger:o}=n,r=Gt(()=>new Set(It(o)),[o]),s=r.has("click")||r.has("contextMenu");return f.useEffect(()=>{const i=t.trigger;if(!i||!s)return;const c=d=>{e(h=>!h||xe(t,d)?h:!1)},l=ut(i),u=ct(i);return H(T(u,"mousedown",c,!0),T(u,"contextmenu",c,!0),l&&T(l,"mousedown",c,!0),l&&T(l,"contextmenu",c,!0))},[t,s,e]),f.useMemo(()=>pe(r,e),[r,e])}function ve(n){const{closeDelay:t,content:e,defaultIsOpen:o,onOpenChange:r,isOpen:s,openDelay:i}=n,c=f.useRef(()=>{});f.useEffect(()=>()=>{c.current()},[]);const[l,u]=Ft({defaultValue:o&&!!e,onChange:r,value:s&&!!e});return S(e,()=>{u(l&&!!e)}),[l,V(d=>{c.current();const h=d(l)&&!!e,x=(h?i:t)??0;x===0?u(h):c.current=Nt(x,()=>{u(h)})})]}const m=8,mt=m/2*1.41,P=m,R=m/2,gt=m/2,xt=m/2;function _e(n,t){return(e,o,r)=>{const s=(e.arrow?xt:0)+gt,i=n==="top"?r.top-o._height-s:r.bottom+s,c=r.width-o._width,l=r.left+(t==="left"?0:t==="right"?c:c/2),u=q(r.el).documentElement;return{_delta:0,_height:o._height,_mx:u.clientWidth,_my:u.clientHeight,_width:o._width,cross:t,left:l,main:n,top:i}}}function Ce(n,t){return(e,o,r)=>{const s=(e.arrow?xt:0)+gt,i=n==="left"?r.left-o._width-s:r.right+s,c=r.height-o._height,l=r.top+(t==="top"?0:t==="bottom"?c:c/2),u=q(r.el).documentElement;return{_delta:0,_height:o._height,_mx:u.clientWidth,_my:u.clientHeight,_width:o._width,cross:t,left:i,main:n,top:l}}}function Ee(){const n=(t,e)=>{const{cross:o,left:r}=t,s=e.width/2-P-m;return[r+(o==="left"?1:o==="right"?-1:0)*s,s]};return(t,e,o)=>{const{arrow:r}=t;if(!($(r)&&r.pointAtCenter))return e;const[s,i]=n(e,o);return{...e,_delta:i,left:s}}}function ye(){const n=(t,e)=>{const{cross:o,top:r}=t,s=e.height/2-R-m;return[r+(o==="top"?1:o==="bottom"?-1:0)*s,s]};return(t,e,o)=>{const{arrow:r}=t;if(!($(r)&&r.pointAtCenter))return e;const[s,i]=n(e,o);return{...e,_delta:i,top:s}}}function Oe(n,t){let{offset:e}=n;const{left:o,main:r,top:s}=t,[i,c]=ot(e)?e:[e,0],l=r==="top"||r==="left"?-1:1;return{...t,left:o+(i||0)*l,top:s+(c||0)*l}}function $e(){const n=(t,e)=>{const o=(P+m)*2+t._delta,r=t._mx-t._width;if(t.left<=0)return Math.min(e.right-o,0);if(t.left>=r)return Math.max(e.left-t._width+o,r)};return(t,e,o)=>{const{shift:r}=t;if(!r||$(r)&&r.horizontal===!1)return e;const s=n(e,o);return{...e,left:D(s,e.left)}}}function je(){const n=(t,e)=>{const o=(R+m)*2+t._delta,r=t._my-t._height;if(t.top<=0)return Math.min(e.bottom-o,0);if(t.top>=r)return Math.max(e.top-t._height+o,r)};return(t,e,o)=>{const{shift:r}=t;if(!r||$(r)&&r.vertical===!1)return e;const s=n(e,o);return{...e,top:D(s,e.top)}}}function Me(){const n=(t,e)=>{if(t.main==="top"&&t.top>0)return;const o=t.top+t._height;if(!(t.main==="bottom"&&o<t._my))return e.bottom+e.top-o};return(t,e,o)=>{const{flip:r}=t;if(!r||$(r)&&!r.vertical)return e;const s=n(e,o),i=!j(s),c=e.main==="top"?"bottom":"top";return{...e,main:i?c:e.main,top:i?s:e.top}}}function Se(){const n=(t,e)=>{if(t.main==="left"&&t.left>0)return;const o=t.left+t._width;if(!(t.main==="right"&&o<t._mx))return e.right+e.left-o};return(t,e,o)=>{const{flip:r}=t;if(!r||$(r)&&!r.horizontal)return e;const s=n(e,o),i=!j(s),c=e.main==="left"?"right":"left";return{...e,left:i?s:e.left,main:i?c:e.main}}}function Te(){return(n,t)=>{const e=n.main==="top"?0:180,o=(n.main==="top"?n._height:0)-m,r=P+m*2,s=Math.max(t.left,n.left-n._delta),i=Math.min(t.right,n.left+n._width+n._delta);let c=-n.left;return n.cross==="left"?c+=s+P+n._delta:n.cross==="right"?c+=i-r-n._delta:c+=(i+s)/2-m,{left:c,top:o,transform:`rotate(${e}deg)`}}}function Ne(){return(n,t)=>{const e=n.main==="left"?270:90,o=(n.main==="left"?n._width:0)-m,r=R+m*2,s=Math.max(t.top,n.top-n._delta),i=Math.min(t.bottom,n.top+n._height+n._delta);let c=-n.top;return n.cross==="top"?c+=s+R+n._delta:n.cross==="bottom"?c+=i-r-n._delta:c+=(i+s)/2-m,{left:o,top:c,transform:`rotate(${e}deg)`}}}function ke(){return(n,t)=>{const e=t.main==="top"?1:-1;return{left:n.left+m,top:n.top+m+e*mt}}}function Pe(){return(n,t)=>{const e=t.main==="left"?1:-1;return{left:n.left+m+e*mt,top:n.top+m}}}function Re(n){return t=>L(t,n)?null:n}function be(n){return t=>L(t,n)?null:n}function v(n,t){const e=n==="top"||n==="bottom",o=e?_e(n,t):Ce(n,t),r=e?Ee():ye(),s=e?$e():je(),i=e?Me():Se(),c=e?Te():Ne(),l=e?ke():Pe();return(u,d,h)=>{const x=U(h),_=U(d),E=ce(d);let g=o(u,_,x);g=Oe(u,g),g=r(u,g,x),g=s(u,g,x),g=i(u,g,x);const w=c(g,x),C=l(w,g);return[Re(w),be({"--origin-x":`${C.left.toFixed(2)}px`,"--origin-y":`${C.top.toFixed(2)}px`,transform:`translate3d(${g.left-E.left}px,${g.top-E.top}px,0)`})]}}const et={bottom:v("bottom","center"),bottomLeft:v("bottom","left"),bottomRight:v("bottom","right"),left:v("left","center"),leftBottom:v("left","bottom"),leftTop:v("left","top"),right:v("right","center"),rightBottom:v("right","bottom"),rightTop:v("right","top"),top:v("top","center"),topLeft:v("top","left"),topRight:v("top","right")};class Ae{constructor(){p(this,"$popup",{current:null});p(this,"$trigger",{current:null});p(this,"arrowCoords",{});p(this,"popupCoords",{transform:"translate3d(-1000vw,-1000vh,0)"});p(this,"popups",[])}get popup(){return this.$popup.current}get trigger(){return this.$trigger.current}}class Le{constructor(t,e){p(this,"setArrowCoords",t=>{t&&(this.states.arrowCoords=t,this.forceUpdate())});p(this,"setPopupCoords",t=>{t&&(this.states.popupCoords=t,this.forceUpdate())});p(this,"updateCoords",t=>{const{arrowCoords:e,popup:o,popupCoords:r,trigger:s}=this.states;if(!o||!s)return;const i=et[t.placement]||et.top,[c,l]=i(t,o,s);this.setArrowCoords(c(e)),this.setPopupCoords(l(r))});p(this,"appendPopupItem",t=>{this.states.popups.push(t)});p(this,"removePopupItem",t=>{zt(this.states.popups,t)});this.forceUpdate=t,this.states=e}}function Be(){const n=st(),t=A(()=>new Ae);return{actions:f.useMemo(()=>new Le(n,t),[n,t]),states:t}}function ze(n,t){const{arrow:e,flip:o,offset:r,placement:s,shift:i}=n;S([s,r,e,i,o],{compare:L,listener:t})}const Ie={arrow:!0,closeDelay:200,defaultIsOpen:!1,flip:!0,offset:0,openDelay:100,placement:"top",shift:!0,trigger:"hover"};function Ue(n){const t=k(n,Ie),{arrow:e,children:o,className:r,classNames:s={},content:i,fresh:c,getContainer:l,keepMounted:u,transition:d,unmountOnExit:h,zIndex:x}=t,_=W(t),[E,g]=ve(t),{actions:w,states:C}=Be(),G=tt.useState(),Z=f.useMemo(()=>H(G,M=>M?(w.appendPopupItem(M),()=>{w.removePopupItem(M)}):at),[w,G]),[wt,vt]=we(t,C,g),B=()=>{E&&w.updateCoords(t)};ze(t,B);const X=At(B),Y=Lt(B);return a.jsxs(a.Fragment,{children:[a.jsx(fe,{ref:C.$trigger,events:wt,isOpen:E,onResize:X,onScroll:Y,children:o}),a.jsx(ne,{style:{left:0,top:0},getContainer:l,keepMounted:u,mask:!1,isOpen:E,transitions:{content:d},unmountOnExit:h,zIndex:x,children:(M,J)=>a.jsx(le,{isOpen:E,onMounted:Z,onResize:X,onScroll:Y,children:a.jsx("div",{ref:C.$popup,className:s.wrapper,style:{..._.wrapper,...C.popupCoords},children:a.jsxs("div",{ref:M,className:O(r,s.root,J.className),style:{..._.root,...J.style},...vt,children:[a.jsx(se,{className:s.arrow,style:{..._.arrow,...C.arrowCoords},show:!!e}),a.jsx(tt.Provider,{value:Z,children:a.jsx(re,{when:E||!!c,children:i})})]})})})})]})}function Fe(n,t){const{align:e,children:o,className:r,dashed:s,direction:i,margin:c,plain:l}=t;return O(n,{[`${n}--${i}`]:i,[`${n}--align-${e}`]:e,[`${n}--custom-margin`]:(e==="left"||e==="right")&&!j(c),[`${n}--dashed`]:s,[`${n}--plain`]:l,[`${n}--with-text`]:o},r)}const He={align:"center",dashed:!1,direction:"horizontal",plain:!1},De=["children","dashed","align","margin","plain","direction",...Mt];function We(n){const t=k(n,He),{align:e,children:o,direction:r,margin:s}=t,i=it("divider"),c=Fe(i,t),l=W(t),u=f.useMemo(()=>{const h={...l.text};return e==="left"?h.marginLeft=s:e==="right"&&(h.marginRight=s),h},[e,s,l.text]),d=kt(t,De);return a.jsx("div",{...d,className:c,style:l.root,children:r==="horizontal"&&!b(o)&&a.jsx("span",{className:`${i}__inner-text`,style:u,children:o})})}function pt(n){const{transition:t,classNames:e={}}=n,o=it(),r=`${o}-tooltip`;return a.jsx(Ue,{...n,transition:D(t,`${o}-zoom-fast`),classNames:{root:O(r,e.root),arrow:O(`${r}__arrow`,e.arrow),wrapper:O(`${r}-wrapper`,e.wrapper)}})}function qe(n){const t=n;return a.jsx("svg",{...t,children:a.jsx("path",{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9m67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32"})})}var Ve=ft(qe,{name:"edit",theme:"outlined"});function Ge(n){const t=n;return a.jsx("svg",{...t,children:a.jsx("path",{d:"M890.5 755.3 537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 0 0 140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7"})})}var Ze=ft(Ge,{name:"up",theme:"outlined"});const Xe="_content_16a9h_1",Ye={content:Xe};function Je(n){const{isOpen:t,rawText:e}=n;return a.jsx(z,{when:t,classNames:"code-collapse-motion",onEnter:o=>{o.$set("height","0px")},onEntering:o=>{o.$set("height",`${o.scrollHeight}px`)},onEntered:o=>{o.$remove("height")},onEnterCancel:o=>{o.$set("height",`${o.offsetHeight}px`)},onExit:o=>{o.$set("height",`${o.offsetHeight}px`)},onExiting:o=>{o.$set("height","0px")},onExited:o=>{o.$remove("height")},onExitCancel:o=>{o.$set("height",`${o.offsetHeight}px`)},children:a.jsx("div",{children:a.jsx(rt,{rawText:e,className:Ye.content})})})}const Ke="_root_1tcj6_1",Qe={root:Ke};function tn(n){return a.jsx(pt,{content:"在 GitHub 上编辑此示例！",children:a.jsx(Ve,{className:Qe.root})})}const en="_root_otexa_1",nn="_preview_otexa_6",on="_name_otexa_12",rn="_desc_otexa_18",sn="_toolbar_otexa_22",cn="_collapse_otexa_29",y={root:en,preview:nn,name:on,desc:rn,toolbar:sn,collapse:cn,"is-collapse":"_is-collapse_otexa_33"};function an(n){const{children:t,title:e,desc:o,rawText:r}=n,[s,i]=f.useState(!1);return a.jsxs("div",{className:y.root,children:[a.jsx("div",{className:y.preview,children:t}),a.jsx(We,{align:"left",style:{margin:0},children:a.jsxs("span",{className:y.name,children:[a.jsx("span",{children:e}),a.jsx(tn,{relativePath:"aaa"})]})}),a.jsx(rt,{className:y.desc,rawText:(o==null?void 0:o["zh-CN"])||""}),a.jsx("div",{className:y.toolbar,children:a.jsx(pt,{content:`${s?"收起":"展开"}代码`,children:a.jsx(Ze,{className:O(y.collapse,!s&&y["is-collapse"]),onClick:()=>{i(!s)}})})}),a.jsx(Je,{isOpen:s,rawText:r})]})}const ln="_root_1ep1d_1",un="_column_1ep1d_5",nt={root:ln,column:un};function vn(n){const{items:t}=n,e=2;return a.jsx("div",{className:nt.root,children:Array.from({length:e},(o,r)=>a.jsx("div",{className:nt.column,children:t.filter((s,i)=>(i+r)%e===0).map(({title:s,rawText:i,element:c,desc:l})=>a.jsx("div",{style:{marginBottom:16},children:a.jsx(an,{title:s,rawText:i,desc:l,children:c})},s))},r))})}export{vn as C,Gt as a,L as i,zt as r,It as t,Ft as u,ft as w};
