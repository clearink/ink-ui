import{v as p,r as o,i as u,O as f}from"./index-BBhucVwM.js";function t(n,e){if(!p(e))n.push(e);else for(let r=0,s=e.length;r<s;r++)n.push(e[r]);return n}function a(n){return o.Children.toArray(n).reduce((e,r)=>u(r)?e:!f.isFragment(r)||!r.props?t(e,r):t(e,a(r.props.children)),[])}export{a as f,t as p};