import{u as E,r as f,C as T,d as h,e as j,f as w,h as I}from"./index-69117898.js";function N(e,t,n,s){return o=>{const[c,r,l]=E(),{getPrefixCls:S,iconPrefixCls:i,csp:u}=f.useContext(T),d=S(),p={theme:c,token:r,hashId:l,nonce:()=>u==null?void 0:u.nonce};return h(Object.assign(Object.assign({},p),{path:["Shared",d]}),()=>[{"&":j(r)}]),[h(Object.assign(Object.assign({},p),{path:[e,o,i]}),()=>{const{token:g,flush:b}=A(r),x=typeof n=="function"?n(g):n,y=Object.assign(Object.assign({},x),r[e]),k=`.${o}`,v=P(g,{componentCls:k,prefixCls:o,iconCls:`.${i}`,antCls:`.${d}`},y),O=t(v,{hashId:l,prefixCls:o,rootPrefixCls:d,iconPrefixCls:i,overrideComponentToken:r[e]});return b(e,y),[(s==null?void 0:s.resetStyle)===!1?null:w(r,o),O]}),l]}}const C=typeof CSSINJS_STATISTIC<"u";let m=!0;function P(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(!C)return Object.assign.apply(Object,[{}].concat(t));m=!1;const s={};return t.forEach(o=>{Object.keys(o).forEach(r=>{Object.defineProperty(s,r,{configurable:!0,enumerable:!0,get:()=>o[r]})})}),m=!0,s}function G(){}function A(e){let t,n=e,s=G;return C&&(t=new Set,n=new Proxy(e,{get(o,c){return m&&t.add(c),o[c]}}),s=(o,c)=>{Array.from(t)}),{token:n,keys:t,flush:s}}const F=()=>I()&&window.document.documentElement;let a;const $=()=>{if(!F())return!1;if(a!==void 0)return a;const e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),a=e.scrollHeight===1,document.body.removeChild(e),a},U=()=>{const[e,t]=f.useState(!1);return f.useEffect(()=>{t($())},[]),e};export{N as g,P as m,U as u};