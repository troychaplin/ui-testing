import{r as c}from"./index-CBqU2yxZ.js";import{d as v}from"./use-root-containers-CiCts8xM.js";import{l as h}from"./transition-Dz28ezoH.js";function a(r){return[r.screenX,r.screenY]}function E(){let r=c.useRef([-1,-1]);return{wasMoved(n){let t=a(n);return r.current[0]===t[0]&&r.current[1]===t[1]?!1:(r.current=t,!0)},update(n){r.current=a(n)}}}function w({container:r,accept:n,walk:t,enabled:u=!0}){let o=c.useRef(n),e=c.useRef(t);c.useEffect(()=>{o.current=n,e.current=t},[n,t]),h(()=>{if(!r||!u)return;let s=v(r);if(!s)return;let l=o.current,i=e.current,d=Object.assign(p=>l(p),{acceptNode:l}),f=s.createTreeWalker(r,NodeFilter.SHOW_ELEMENT,d,!1);for(;f.nextNode();)i(f.currentNode)},[r,u,o,e])}function N(r){throw new Error("Unexpected object: "+r)}var g=(r=>(r[r.First=0]="First",r[r.Previous=1]="Previous",r[r.Next=2]="Next",r[r.Last=3]="Last",r[r.Specific=4]="Specific",r[r.Nothing=5]="Nothing",r))(g||{});function D(r,n){let t=n.resolveItems();if(t.length<=0)return null;let u=n.resolveActiveIndex(),o=u??-1;switch(r.focus){case 0:{for(let e=0;e<t.length;++e)if(!n.resolveDisabled(t[e],e,t))return e;return u}case 1:{for(let e=o-1;e>=0;--e)if(!n.resolveDisabled(t[e],e,t))return e;return u}case 2:{for(let e=o+1;e<t.length;++e)if(!n.resolveDisabled(t[e],e,t))return e;return u}case 3:{for(let e=t.length-1;e>=0;--e)if(!n.resolveDisabled(t[e],e,t))return e;return u}case 4:{for(let e=0;e<t.length;++e)if(n.resolveId(t[e],e,t)===r.id)return e;return u}case 5:return null;default:N(r)}}export{w as F,g as c,D as f,E as u};
