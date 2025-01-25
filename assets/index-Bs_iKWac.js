var jt=Object.defineProperty;var Ot=(e,t,n)=>t in e?jt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var A=(e,t,n)=>Ot(e,typeof t!="symbol"?t+"":t,n);import{l as Y,i as U,p as T,n as K,G as $t,L as Q,v as j,r as h,j as f,d as $,q as P,U as Tt,g as lt,z as bt,V as kt,Z as Mt,h as S,M as ot,W as Nt,w as H,b as tt,c as p,e as Z,m as St,B as Pt,X as at,A as et,f as nt,J as B,P as zt,a as ft,o as ut,s as Rt}from"./index-BEs8hub7.js";import{n as dt,g as Lt,b as It,c as ht,d as At,f as Bt}from"./index-DqjZKKEc.js";import{M as mt}from"./index-BWagQUaX.js";function qt(e,t){if(!Y(t))e.push(t);else for(let n=0,o=t.length;n<o;n++)e.push(t[n]);return e}function Ht(e,t){const n=e.indexOf(t);return n>-1&&e.splice(n,1),e}function Dt(e,t=!1){return U(e)?[]:Y(e)?e:t?[]:[e]}const Ft=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function gt(e){var n;const t=(n=e==null?void 0:e.getRootNode)==null?void 0:n.call(e);return t instanceof ShadowRoot?t:null}function rt(e,t){const n={...e},o=Object.keys(t);for(let r=0,s=o.length;r<s;r++){const c=o[r];T(e[c])&&(n[c]=t[c])}return n}function Ut(e,t){return!Object.is(e,t)}function X(...e){const[t,n]=e;return Ft?U(t)?n:K(t)?t():$t(t)?Q().querySelector(t):j(t)&&"current"in t?t.current:t:null}function _t(e,t){const{name:n,theme:o}=t,r=o==="twotone"?"64 64 896 896":"0 0 1024 1024";function s(c,i){const{className:a,style:l}=c;return f.jsx("span",{...c,ref:i,className:`ink-icon icon-${n}${a?` ${a}`:""}`,style:l,"aria-label":n,role:"img",children:f.jsx(e,{"aria-hidden":"true","data-icon":n,fill:"currentColor",focusable:"false",height:"1em",viewBox:r,width:"1em"})})}return h.forwardRef(s)}function Wt(e,t){const n=!T(e);return[n?e:t,n]}function Vt(e){const{defaultValue:t,onChange:n,shouldUpdate:o=Ut,value:r}=e,[s,c]=$(t),[i,a]=Wt(r,s),l=P(u=>{const d=K(u)?u(i):u;o(i,d)&&(a||c(d),n&&n(d))});return[i,l,a]}var Gt=typeof Element<"u",Zt=typeof Map=="function",Xt=typeof Set=="function",Jt=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function q(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,o,r;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(o=n;o--!==0;)if(!q(e[o],t[o]))return!1;return!0}var s;if(Zt&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(s=e.entries();!(o=s.next()).done;)if(!t.has(o.value[0]))return!1;for(s=e.entries();!(o=s.next()).done;)if(!q(o.value[1],t.get(o.value[0])))return!1;return!0}if(Xt&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(s=e.entries();!(o=s.next()).done;)if(!t.has(o.value[0]))return!1;return!0}if(Jt&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(o=n;o--!==0;)if(e[o]!==t[o])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(r=Object.keys(e),n=r.length,n!==Object.keys(t).length)return!1;for(o=n;o--!==0;)if(!Object.prototype.hasOwnProperty.call(t,r[o]))return!1;if(Gt&&e instanceof Element)return!1;for(o=n;o--!==0;)if(!((r[o]==="_owner"||r[o]==="__v"||r[o]==="__o")&&e.$$typeof)&&!q(e[r[o]],t[r[o]]))return!1;return!0}return e!==e&&t!==t}var Yt=function(t,n){try{return q(t,n)}catch(o){if((o.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw o}};const W=Tt(Yt);function Kt(e,t){const n=lt(()=>({deps:t,value:e()}));return h.useMemo(()=>(W(n.deps,t)||(n.deps=t,n.value=e()),n.value),[t,e,n])}function xt(e,t){const n=P(t),o=h.useRef(null);h.useEffect(()=>()=>{o.current=null},[]),h.useEffect(()=>{const r=X(e);if(!bt(r,o.current)&&(o.current=r,r))return kt(r,n)},[n,e])}function Qt(e,t){const n=!T(t),{getZIndex:o}=Mt.useState(),[r,s]=$(()=>n||!e?0:o());return[S(e,()=>{e&&!n&&s(o())}),n?t:r]}function te(e,t){const{children:n,getContainer:o}=e,[r,s]=$(()=>X(o,ot()));return h.useImperativeHandle(t,()=>r,[r]),h.useEffect(()=>{s(X(o,ot()))},[o,s]),U(r)?null:r===!1?f.jsx(f.Fragment,{children:n}):Nt.createPortal(n,r)}const ee=h.forwardRef(te);function ne(e){const{isOpen:t,keepMounted:n,unmountOnExit:o}=e,r=h.useRef(null),[s,c]=$(!!(n||t)),i=S(`${n}-${o}`,()=>{var d;const l=(d=r.current)==null?void 0:d.isExited;let u=s;n?u=!0:o&&l&&(u=!1),c(u)}),a=S(t,()=>{c(!0)});return{returnEarly:i||a,$content:r,isMounted:s,setIsMounted:c}}const oe={mask:!0};function re(e,t){const n=H(e,oe),{isOpen:o,keepMounted:r,getContainer:s,unmountOnExit:c,className:i,children:a,mask:l,zIndex:u,onEnter:d,onEntering:_,onEntered:b,onExit:v,onExiting:g,onExited:x,classNames:C={},transitions:z={}}=n,R=tt(n),{returnEarly:y,$content:V,isMounted:k,setIsMounted:L}=ne(n),[G,M]=Qt(k&&!!o,u);return y||G||!k?null:f.jsx(ee,{ref:t,getContainer:s,children:f.jsxs("div",{className:p(i,C.root),style:H(R.root||{},{position:"absolute",zIndex:M}),children:[!!l&&f.jsx(Z,{appear:!0,classNames:z.mask,when:o,children:f.jsx("div",{className:C.mask,style:R.mask,"aria-hidden":"true"})}),f.jsx(Z,{ref:V,appear:!0,classNames:z.content,when:o,onEnter:(O,I)=>{d==null||d(O,I),L(!0)},onEntering:_,onEntered:b,onExit:v,onExiting:g,onExited:O=>{x==null||x(O),L(!(c&&!r))},children:a})]})})}const se=h.forwardRef(re);function ce(e){return e.children}const ie=h.memo(ce,(e,{when:t})=>!(K(t)?t():t)),st=St(()=>dt);function le(e){const{className:t,show:n,style:o}=e;return n?f.jsx("div",{className:t,style:o}):null}function ae(e){const{overflow:t,overflowX:n,overflowY:o}=Pt(e),r=new Set(["auto","clip","hidden","scroll"]);return r.has(t)||r.has(n)||r.has(o)}function wt(e){const t=[];let n=e.parentElement;for(;n;)ae(n)&&t.push(n),n=n.parentElement;return t}function J(e){const t=Lt(e);return{_height:e.clientHeight,_width:e.clientWidth,bottom:t.bottom,el:e,height:t.height,left:t.left,right:t.right,top:t.top,width:t.width}}function fe(e){return J(It(e))}function ue(e,t){const{children:n,onMounted:o,onResize:r,onScroll:s,isOpen:c}=e,i=h.useRef(null);xt(i,r),h.useEffect(()=>o(i.current),[o]),h.useEffect(()=>{if(!i.current||!c)return;const l=new Set([at(i.current),...wt(i.current)]);return l.forEach(u=>{u.addEventListener("scroll",s,{passive:!0})}),()=>{l.forEach(u=>{u.removeEventListener("scroll",s)})}},[c,s]);const a=ht(n.ref,t,i);return h.cloneElement(n,{ref:a})}const de=h.forwardRef(ue);function he(e,t){const{children:n,events:o,onResize:r,onScroll:s,isOpen:c}=e,i=h.useRef(null);xt(i,r),h.useEffect(()=>{if(!i.current||!c)return;const u=wt(i.current);return u.forEach(d=>{d.addEventListener("scroll",s,{passive:!0})}),()=>{u.forEach(d=>{d.removeEventListener("scroll",s)})}},[c,s]);const a=ht(n.ref,t,i),l=Object.entries(o).reduce((u,[d,_])=>(u[d]=et(_,n.props[d]),u),{});return h.cloneElement(n,{ref:a,...l})}const me=h.forwardRef(he),m=8,pt=m/2*1.41,D=m,F=m/2,vt=m/2,Ct=m/2;function ge(e,t){return(n,o,r)=>{const s=(n.arrow?Ct:0)+vt,c=e==="top"?r.top-o._height-s:r.bottom+s,i=r.width-o._width,a=r.left+(t==="left"?0:t==="right"?i:i/2),l=Q(r.el).documentElement;return{_delta:0,_height:o._height,_mx:l.clientWidth,_my:l.clientHeight,_width:o._width,cross:t,left:a,main:e,top:c}}}function _e(e,t){return(n,o,r)=>{const s=(n.arrow?Ct:0)+vt,c=e==="left"?r.left-o._width-s:r.right+s,i=r.height-o._height,a=r.top+(t==="top"?0:t==="bottom"?i:i/2),l=Q(r.el).documentElement;return{_delta:0,_height:o._height,_mx:l.clientWidth,_my:l.clientHeight,_width:o._width,cross:t,left:c,main:e,top:a}}}function xe(){const e=(t,n)=>{const{cross:o,left:r}=t,s=n.width/2-D-m;return[r+(o==="left"?1:o==="right"?-1:0)*s,s]};return(t,n,o)=>{const{arrow:r}=t;if(!(j(r)&&r.pointAtCenter))return n;const[s,c]=e(n,o);return{...n,_delta:c,left:s}}}function we(){const e=(t,n)=>{const{cross:o,top:r}=t,s=n.height/2-F-m;return[r+(o==="top"?1:o==="bottom"?-1:0)*s,s]};return(t,n,o)=>{const{arrow:r}=t;if(!(j(r)&&r.pointAtCenter))return n;const[s,c]=e(n,o);return{...n,_delta:c,top:s}}}function pe({offset:e},t){const{left:n,main:o,top:r}=t,[s,c]=Y(e)?e:[e,0],i=o==="top"||o==="left"?-1:1;return{...t,left:n+(s||0)*i,top:r+(c||0)*i}}function ve(){const e=(t,n)=>{const o=(D+m)*2+t._delta,r=t._mx-t._width;if(t.left<=0)return Math.min(n.right-o,0);if(t.left>=r)return Math.max(n.left-t._width+o,r)};return(t,n,o)=>{const{shift:r}=t;if(!r||j(r)&&r.horizontal===!1)return n;const s=e(n,o);return{...n,left:nt(s,n.left)}}}function Ce(){const e=(t,n)=>{const o=(F+m)*2+t._delta,r=t._my-t._height;if(t.top<=0)return Math.min(n.bottom-o,0);if(t.top>=r)return Math.max(n.top-t._height+o,r)};return(t,n,o)=>{const{shift:r}=t;if(!r||j(r)&&r.vertical===!1)return n;const s=e(n,o);return{...n,top:nt(s,n.top)}}}function ye(){const e=(t,n)=>{if(t.main==="top"&&t.top>0)return;const o=t.top+t._height;if(!(t.main==="bottom"&&o<t._my))return n.bottom+n.top-o};return(t,n,o)=>{const{flip:r}=t;if(!r||j(r)&&!r.vertical)return n;const s=e(n,o),c=!T(s),i=n.main==="top"?"bottom":"top";return{...n,main:c?i:n.main,top:c?s:n.top}}}function Ee(){const e=(t,n)=>{if(t.main==="left"&&t.left>0)return;const o=t.left+t._width;if(!(t.main==="right"&&o<t._mx))return n.right+n.left-o};return(t,n,o)=>{const{flip:r}=t;if(!r||j(r)&&!r.horizontal)return n;const s=e(n,o),c=!T(s),i=n.main==="left"?"right":"left";return{...n,left:c?s:n.left,main:c?i:n.main}}}function je(){return(e,t)=>{const n=e.main==="top"?0:180,o=(e.main==="top"?e._height:0)-m,r=D+m*2,s=Math.max(t.left,e.left-e._delta),c=Math.min(t.right,e.left+e._width+e._delta);let i=-e.left;return e.cross==="left"?i+=s+D+e._delta:e.cross==="right"?i+=c-r-e._delta:i+=(c+s)/2-m,{left:i,top:o,transform:`rotate(${n}deg)`}}}function Oe(){return(e,t)=>{const n=e.main==="left"?270:90,o=(e.main==="left"?e._width:0)-m,r=F+m*2,s=Math.max(t.top,e.top-e._delta),c=Math.min(t.bottom,e.top+e._height+e._delta);let i=-e.top;return e.cross==="top"?i+=s+F+e._delta:e.cross==="bottom"?i+=c-r-e._delta:i+=(c+s)/2-m,{left:o,top:i,transform:`rotate(${n}deg)`}}}function $e(){return(e,t)=>{const n=t.main==="top"?1:-1;return{left:e.left+m,top:e.top+m+n*pt}}}function Te(){return(e,t)=>{const n=t.main==="left"?1:-1;return{left:e.left+m+n*pt,top:e.top+m}}}function be(e){return t=>W(t,e)?t:e}function ke(e){return t=>W(t,e)?t:e}function w(e,t){const n=e==="top"||e==="bottom",o=n?ge(e,t):_e(e,t),r=n?xe():we(),s=n?ve():Ce(),c=n?ye():Ee(),i=n?je():Oe(),a=n?$e():Te();return(l,u,d)=>{const _=J(d),b=J(u),v=fe(u);let g=o(l,b,_);g=pe(l,g),g=r(l,g,_),g=s(l,g,_),g=c(l,g,_);const x=i(g,_),C=a(x,g);return[be({left:0,top:0,transform:`translate3d(${x.left}px, ${x.top}px, 0) ${x.transform}`}),ke({"--origin-x":`${C.left.toFixed(2)}px`,"--origin-y":`${C.top.toFixed(2)}px`,transform:`translate3d(${g.left-v.left}px,${g.top-v.top}px,0)`})]}}const ct={bottom:w("bottom","center"),bottomLeft:w("bottom","left"),bottomRight:w("bottom","right"),left:w("left","center"),leftBottom:w("left","bottom"),leftTop:w("left","top"),right:w("right","center"),rightBottom:w("right","bottom"),rightTop:w("right","top"),top:w("top","center"),topLeft:w("top","left"),topRight:w("top","right")};class Me{constructor(){A(this,"$popup",{current:null});A(this,"$trigger",{current:null});A(this,"chain",[])}get popup(){return this.$popup.current}get trigger(){return this.$trigger.current}}function Ne(){const e=lt(()=>new Me),[t,n]=$({transform:"translate3d(0, 0, 0) rotate(0)"}),[o,r]=$({transform:"translate3d(-1000vw, -1000vh, 0)"}),s=P(c=>{const{placement:i}=c,{popup:a,trigger:l}=e;if(!a||!l)return;const u=ct[i]||ct.top,[d,_]=u(c,a,l);n(d(t)),r(_(o))});return{refs:e,arrowCoords:t,setArrowCoords:n,popupCoords:o,setPopupCoords:r,updateCoords:s}}function Se(e){const t=()=>{e(()=>!0)},n=()=>{e(()=>!1)};return[{onMouseEnter:t,onMouseLeave:n},{onMouseEnter:t,onMouseLeave:n}]}function Pe(e){return[{onClick:()=>{e(n=>!n)}},{}]}function ze(e){return[{onBlur:()=>{e(()=>!1)},onFocus:()=>{e(()=>!0)}},{}]}function Re(e){return[{onContextMenu:n=>{n.preventDefault(),e(o=>!o)}},{}]}function Le(e,t){const n=e.target,{trigger:o,popup:r,chain:s}=t,c=i=>{var a;return i&&(i===n||i.contains(n)||((a=gt(i))==null?void 0:a.host)===n)};return c(o)||c(r)||s.some(i=>c(i))}function Ie(e,t){const n=[];return e.has("hover")&&n.push(Se(t)),e.has("click")&&n.push(Pe(t)),e.has("focus")&&n.push(ze(t)),e.has("contextMenu")&&n.push(Re(t)),n.reduce((o,r)=>(o[0]=rt(o[0],r[0]),o[1]=rt(o[1],r[1]),o),[{},{}])}function Ae(e){const{refs:t,trigger:n,setIsOpen:o}=e,r=Kt(()=>new Set(Dt(n)),[n]),s=r.has("click")||r.has("contextMenu"),c=P(i=>{const a=()=>Le(i,t);o(l=>!l||a()?l:!1)});return h.useEffect(()=>{const i=t.trigger;if(!i||!s)return;const a=gt(i),l=at(i);return et(B(l,"mousedown",c,!0),B(l,"contextmenu",c,!0),a&&B(a,"mousedown",c,!0),a&&B(a,"contextmenu",c,!0))},[t,s,c]),h.useMemo(()=>Ie(r,o),[r,o])}function Be(e){const{closeDelay:t,content:n,defaultIsOpen:o,onOpenChange:r,isOpen:s,openDelay:c}=e,i=h.useRef(()=>{});h.useEffect(()=>()=>{i.current()},[]);const[a,l]=Vt({defaultValue:o&&!!n,onChange:r,value:s&&!!n});return S(n,()=>{l(a&&!!n)}),[a,P(u=>{i.current();const d=u(a)&&!!n,_=(d?c:t)??0;_===0?l(d):i.current=zt(_,()=>{l(d)})})]}function qe(e,t){const{arrow:n,flip:o,offset:r,placement:s,shift:c}=e;S([s,r,n,c,o],{compare:W,listener:t})}const He={arrow:!0,openDelay:100,closeDelay:100,defaultIsOpen:!1,flip:!0,offset:0,placement:"top",shift:!0,trigger:"hover"};function De(e){const t=H(e,He),{arrow:n,trigger:o,children:r,className:s,classNames:c={},content:i,fresh:a,getContainer:l,keepMounted:u,transition:d,unmountOnExit:_,zIndex:b}=t,v=st.useState(),g=tt(t),{refs:x,arrowCoords:C,popupCoords:z,updateCoords:R}=Ne(),[y,V]=Be(t),k=h.useMemo(()=>et(v,N=>N?(qt(x.chain,N),()=>{Ht(x.chain,N)}):dt),[x,v]),[L,G]=Ae({refs:x,trigger:o,setIsOpen:V}),M=()=>{y&&R(t)};qe(t,M);const O=At(M),I=Bt(M);return f.jsxs(f.Fragment,{children:[f.jsx(me,{ref:x.$trigger,events:L,isOpen:y,onResize:O,onScroll:I,children:r}),f.jsx(se,{style:{left:0,top:0},getContainer:l,keepMounted:u,mask:!1,isOpen:y,transitions:{content:d},unmountOnExit:_,zIndex:b,children:(N,Et)=>f.jsx(de,{isOpen:y,onMounted:k,onResize:O,onScroll:I,children:f.jsx("div",{ref:x.$popup,className:c.wrapper,style:{...g.wrapper,...z},children:f.jsxs("div",{ref:N,className:p(s,c.root,Et),style:g.root,...G,children:[f.jsx(le,{className:c.arrow,style:{...g.arrow,...C},show:!!n}),f.jsx(st.Provider,{value:k,children:f.jsx(ie,{when:y||!!a,children:i})})]})})})})]})}function Fe(e,t){const{align:n,children:o,dashed:r,direction:s,margin:c,plain:i,className:a,classNames:l={}}=t;return{root:p(e,{[`${e}--${s}`]:s,[`${e}--align-${n}`]:n,[`${e}--custom-margin`]:(n==="left"||n==="right")&&!T(c),[`${e}--dashed`]:r,[`${e}--plain`]:i,[`${e}--with-text`]:o},a,l.root),text:p(`${e}__inner-text`,l.text)}}const Ue={align:"center",dashed:!1,direction:"horizontal",plain:!1},We=["children","dashed","align","margin","plain","direction",...Rt];function Ve(e){const t=H(e,Ue),{align:n,children:o,direction:r,margin:s}=t,c=ft("divider"),i=Fe(c,t),a=tt(t),l={};return n==="left"?l.marginLeft=s:n==="right"&&(l.marginRight=s),f.jsx("div",{...ut(t,We),className:i.root,style:a.root,children:r==="horizontal"&&!U(o)&&f.jsx("span",{className:i.text,style:{...a.text,...l},children:o})})}function yt(e){const{transition:t,classNames:n={}}=e,o=ft(),r=`${o}-tooltip`;return f.jsx(De,{...e,transition:nt(t,`${o}-zoom-fast`),classNames:{root:p(r,n.root),arrow:p(`${r}__arrow`,n.arrow),wrapper:p(`${r}-wrapper`,n.wrapper)}})}function Ge(e){const t=e;return f.jsx("svg",{...t,children:f.jsx("path",{d:"M890.5 755.3 537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 0 0 140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7"})})}const Ze=_t(Ge,{name:"up",theme:"outlined"}),Xe="_code_collapse__content_20pp4_1",Je={code_collapse__content:Xe};function Ye(e){const{isOpen:t,rawText:n}=e;return f.jsx(Z,{when:t,classNames:"code-collapse-motion",onEnter:o=>{o.style.setProperty("height","0px")},onEntering:o=>{o.style.setProperty("height",`${o.scrollHeight}px`)},onEntered:o=>{o.style.removeProperty("height")},onEnterCancel:o=>{o.style.setProperty("height",`${o.offsetHeight}px`)},onExit:o=>{o.style.setProperty("height",`${o.offsetHeight}px`)},onExiting:o=>{o.style.setProperty("height","0px")},onExited:o=>{o.style.removeProperty("height")},onExitCancel:o=>{o.style.setProperty("height",`${o.offsetHeight}px`)},children:f.jsx("div",{children:f.jsx(mt,{rawText:n,className:Je.code_collapse__content})})})}const Ke="_code_block_61zq6_1",Qe="_example_preview_61zq6_6",tn="_example_name_61zq6_12",en="_example_desc_61zq6_18",nn="_example_toolbar_61zq6_22",on="_collapse_icon_61zq6_29",E={code_block:Ke,example_preview:Qe,example_name:tn,example_desc:en,example_toolbar:nn,collapse_icon:on,"is-collapse":"_is-collapse_61zq6_33"};function rn(e){const t=e;return f.jsx("svg",{...t,children:f.jsx("path",{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9m67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32"})})}const sn=_t(rn,{name:"edit",theme:"outlined"}),cn="_to_github_1d0ay_1",ln={to_github:cn};function an(e){return f.jsx(yt,{content:"在 GitHub 上编辑此示例！",children:f.jsx(sn,{className:ln.to_github})})}const fn=["children","title","rawText","desc","className"];function un(e){const{children:t,title:n,desc:o,rawText:r,className:s}=e,[c,i]=h.useState(!1),a=ut(e,fn);return f.jsxs("div",{...a,className:p(E.code_block,s),children:[f.jsx("div",{className:E.example_preview,children:t}),f.jsx(Ve,{align:"left",style:{margin:0},children:f.jsxs("span",{className:E.example_name,children:[f.jsx("span",{children:n}),f.jsx(an,{relativePath:"aaa"})]})}),f.jsx(mt,{className:E.example_desc,rawText:(o==null?void 0:o["zh-CN"])||""}),f.jsx("div",{className:E.example_toolbar,children:f.jsx(yt,{content:`${c?"收起":"展开"}代码`,children:f.jsx(Ze,{className:p(E.collapse_icon,!c&&E["is-collapse"]),onClick:()=>{i(!c)}})})}),f.jsx(Ye,{isOpen:c,rawText:r})]})}const dn="_code_block_list_7dkzv_1",hn="_block_item_7dkzv_6",it={code_block_list:dn,block_item:hn};function wn(e){const{items:t}=e,n=h.useMemo(()=>t.filter(o=>!o.disabled),[t]);return f.jsx("div",{className:it.code_block_list,children:n.map(o=>f.jsx(un,{title:o.title,rawText:o.rawText,desc:o.desc,className:it.block_item,children:o.element},o.title))})}export{wn as C,Ve as D,se as O,ee as P,yt as T,W as a,Kt as b,Qt as c,Ft as i,qt as p,Ht as r,rt as s,Dt as t,Vt as u,_t as w};
