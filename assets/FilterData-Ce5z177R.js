import{j as t}from"./jsx-runtime-CKrituN3.js";import{r as d,R as O}from"./index-CBqU2yxZ.js";import{u as re}from"./useLinkContext-B6ulR7Vg.js";import{X as ae}from"./XMarkIcon-iOOrpGul.js";import{C as _}from"./ChevronDownIcon-DCf8Nrl_.js";import{o as g,O as z,U as M,y as P,a as ne,u as Z,d as C,C as $,p as ee,b as le,l as L,c as Q,q as F}from"./transition-Dz28ezoH.js";import{y as se,I as V,n as ie,h as oe,T as ce,o as h,r as ue,_ as de,M as G,D as te,j as me}from"./use-root-containers-CiCts8xM.js";import{T as fe}from"./use-resolve-button-type-BHDntMkD.js";import{F as pe,u as xe,c as I,f as he}from"./calculate-active-index-CmL1XPTK.js";import{_ as W}from"./dialog-BHhb4iix.js";import{A as B}from"./disclosure-Dfcqdy2E.js";import{C as S}from"./popover-Dxe09Nil.js";let H=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function X(e){var o,i;let l=(o=e.innerText)!=null?o:"",s=e.cloneNode(!0);if(!(s instanceof HTMLElement))return l;let u=!1;for(let r of s.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))r.remove(),u=!0;let c=u?(i=s.innerText)!=null?i:"":l;return H.test(c)&&(c=c.replace(H,"")),c}function ve(e){let o=e.getAttribute("aria-label");if(typeof o=="string")return o.trim();let i=e.getAttribute("aria-labelledby");if(i){let l=i.split(" ").map(s=>{let u=document.getElementById(s);if(u){let c=u.getAttribute("aria-label");return typeof c=="string"?c.trim():X(u).trim()}return null}).filter(Boolean);if(l.length>0)return l.join(", ")}return X(e).trim()}function be(e){let o=d.useRef(""),i=d.useRef("");return g(()=>{let l=e.current;if(!l)return"";let s=l.innerText;if(o.current===s)return i.current;let u=ve(l).trim().toLowerCase();return o.current=s,i.current=u,u})}var ge=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ge||{}),ye=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(ye||{}),ke=(e=>(e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItem=5]="RegisterItem",e[e.UnregisterItem=6]="UnregisterItem",e))(ke||{});function U(e,o=i=>i){let i=e.activeItemIndex!==null?e.items[e.activeItemIndex]:null,l=me(o(e.items.slice()),u=>u.dataRef.current.domRef.current),s=i?l.indexOf(i):null;return s===-1&&(s=null),{items:l,activeItemIndex:s}}let je={1(e){return e.menuState===1?e:{...e,activeItemIndex:null,menuState:1}},0(e){return e.menuState===0?e:{...e,__demoMode:!1,menuState:0}},2:(e,o)=>{var i;let l=U(e),s=he(o,{resolveItems:()=>l.items,resolveActiveIndex:()=>l.activeItemIndex,resolveId:u=>u.id,resolveDisabled:u=>u.dataRef.current.disabled});return{...e,...l,searchQuery:"",activeItemIndex:s,activationTrigger:(i=o.trigger)!=null?i:1}},3:(e,o)=>{let i=e.searchQuery!==""?0:1,l=e.searchQuery+o.value.toLowerCase(),s=(e.activeItemIndex!==null?e.items.slice(e.activeItemIndex+i).concat(e.items.slice(0,e.activeItemIndex+i)):e.items).find(c=>{var r;return((r=c.dataRef.current.textValue)==null?void 0:r.startsWith(l))&&!c.dataRef.current.disabled}),u=s?e.items.indexOf(s):-1;return u===-1||u===e.activeItemIndex?{...e,searchQuery:l}:{...e,searchQuery:l,activeItemIndex:u,activationTrigger:1}},4(e){return e.searchQuery===""?e:{...e,searchQuery:"",searchActiveItemIndex:null}},5:(e,o)=>{let i=U(e,l=>[...l,{id:o.id,dataRef:o.dataRef}]);return{...e,...i}},6:(e,o)=>{let i=U(e,l=>{let s=l.findIndex(u=>u.id===o.id);return s!==-1&&l.splice(s,1),l});return{...e,...i,activationTrigger:1}}},q=d.createContext(null);q.displayName="MenuContext";function E(e){let o=d.useContext(q);if(o===null){let i=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,E),i}return o}function Ie(e,o){return Z(o.type,je,e,o)}let Ne=d.Fragment;function we(e,o){let{__demoMode:i=!1,...l}=e,s=d.useReducer(Ie,{__demoMode:i,menuState:i?0:1,buttonRef:d.createRef(),itemsRef:d.createRef(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:u,itemsRef:c,buttonRef:r},m]=s,x=P(o);se([r,c],(j,N)=>{var a;m({type:1}),oe(N,ce.Loose)||(j.preventDefault(),(a=r.current)==null||a.focus())},u===0);let y=g(()=>{m({type:1})}),k=d.useMemo(()=>({open:u===0,close:y}),[u,y]),b={ref:x};return O.createElement(q.Provider,{value:s},O.createElement(ne,{value:Z(u,{0:C.Open,1:C.Closed})},$({ourProps:b,theirProps:l,slot:k,defaultTag:Ne,name:"Menu"})))}let Fe="button";function Re(e,o){var i;let l=V(),{id:s=`headlessui-menu-button-${l}`,...u}=e,[c,r]=E("Menu.Button"),m=P(c.buttonRef,o),x=ee(),y=g(a=>{switch(a.key){case h.Space:case h.Enter:case h.ArrowDown:a.preventDefault(),a.stopPropagation(),r({type:0}),x.nextFrame(()=>r({type:2,focus:I.First}));break;case h.ArrowUp:a.preventDefault(),a.stopPropagation(),r({type:0}),x.nextFrame(()=>r({type:2,focus:I.Last}));break}}),k=g(a=>{switch(a.key){case h.Space:a.preventDefault();break}}),b=g(a=>{if(ue(a.currentTarget))return a.preventDefault();e.disabled||(c.menuState===0?(r({type:1}),x.nextFrame(()=>{var f;return(f=c.buttonRef.current)==null?void 0:f.focus({preventScroll:!0})})):(a.preventDefault(),r({type:0})))}),j=d.useMemo(()=>({open:c.menuState===0}),[c]),N={ref:m,id:s,type:fe(e,c.buttonRef),"aria-haspopup":"menu","aria-controls":(i=c.itemsRef.current)==null?void 0:i.id,"aria-expanded":c.menuState===0,onKeyDown:y,onKeyUp:k,onClick:b};return $({ourProps:N,theirProps:u,slot:j,defaultTag:Fe,name:"Menu.Button"})}let Se="div",Te=z.RenderStrategy|z.Static;function De(e,o){var i,l;let s=V(),{id:u=`headlessui-menu-items-${s}`,...c}=e,[r,m]=E("Menu.Items"),x=P(r.itemsRef,o),y=ie(r.itemsRef),k=ee(),b=le(),j=b!==null?(b&C.Open)===C.Open:r.menuState===0;d.useEffect(()=>{let n=r.itemsRef.current;n&&r.menuState===0&&n!==(y==null?void 0:y.activeElement)&&n.focus({preventScroll:!0})},[r.menuState,r.itemsRef,y]),pe({container:r.itemsRef.current,enabled:r.menuState===0,accept(n){return n.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:n.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(n){n.setAttribute("role","none")}});let N=g(n=>{var w,R;switch(k.dispose(),n.key){case h.Space:if(r.searchQuery!=="")return n.preventDefault(),n.stopPropagation(),m({type:3,value:n.key});case h.Enter:if(n.preventDefault(),n.stopPropagation(),m({type:1}),r.activeItemIndex!==null){let{dataRef:v}=r.items[r.activeItemIndex];(R=(w=v.current)==null?void 0:w.domRef.current)==null||R.click()}te(r.buttonRef.current);break;case h.ArrowDown:return n.preventDefault(),n.stopPropagation(),m({type:2,focus:I.Next});case h.ArrowUp:return n.preventDefault(),n.stopPropagation(),m({type:2,focus:I.Previous});case h.Home:case h.PageUp:return n.preventDefault(),n.stopPropagation(),m({type:2,focus:I.First});case h.End:case h.PageDown:return n.preventDefault(),n.stopPropagation(),m({type:2,focus:I.Last});case h.Escape:n.preventDefault(),n.stopPropagation(),m({type:1}),Q().nextFrame(()=>{var v;return(v=r.buttonRef.current)==null?void 0:v.focus({preventScroll:!0})});break;case h.Tab:n.preventDefault(),n.stopPropagation(),m({type:1}),Q().nextFrame(()=>{de(r.buttonRef.current,n.shiftKey?G.Previous:G.Next)});break;default:n.key.length===1&&(m({type:3,value:n.key}),k.setTimeout(()=>m({type:4}),350));break}}),a=g(n=>{switch(n.key){case h.Space:n.preventDefault();break}}),f=d.useMemo(()=>({open:r.menuState===0}),[r]),p={"aria-activedescendant":r.activeItemIndex===null||(i=r.items[r.activeItemIndex])==null?void 0:i.id,"aria-labelledby":(l=r.buttonRef.current)==null?void 0:l.id,id:u,onKeyDown:N,onKeyUp:a,role:"menu",tabIndex:0,ref:x};return $({ourProps:p,theirProps:c,slot:f,defaultTag:Se,features:Te,visible:j,name:"Menu.Items"})}let Ce=d.Fragment;function Me(e,o){let i=V(),{id:l=`headlessui-menu-item-${i}`,disabled:s=!1,...u}=e,[c,r]=E("Menu.Item"),m=c.activeItemIndex!==null?c.items[c.activeItemIndex].id===l:!1,x=d.useRef(null),y=P(o,x);L(()=>{if(c.__demoMode||c.menuState!==0||!m||c.activationTrigger===0)return;let v=Q();return v.requestAnimationFrame(()=>{var A,K;(K=(A=x.current)==null?void 0:A.scrollIntoView)==null||K.call(A,{block:"nearest"})}),v.dispose},[c.__demoMode,x,m,c.menuState,c.activationTrigger,c.activeItemIndex]);let k=be(x),b=d.useRef({disabled:s,domRef:x,get textValue(){return k()}});L(()=>{b.current.disabled=s},[b,s]),L(()=>(r({type:5,id:l,dataRef:b}),()=>r({type:6,id:l})),[b,l]);let j=g(()=>{r({type:1})}),N=g(v=>{if(s)return v.preventDefault();r({type:1}),te(c.buttonRef.current)}),a=g(()=>{if(s)return r({type:2,focus:I.Nothing});r({type:2,focus:I.Specific,id:l})}),f=xe(),p=g(v=>f.update(v)),n=g(v=>{f.wasMoved(v)&&(s||m||r({type:2,focus:I.Specific,id:l,trigger:0}))}),w=g(v=>{f.wasMoved(v)&&(s||m&&r({type:2,focus:I.Nothing}))}),R=d.useMemo(()=>({active:m,disabled:s,close:j}),[m,s,j]);return $({ourProps:{id:l,ref:y,role:"menuitem",tabIndex:s===!0?void 0:-1,"aria-disabled":s===!0?!0:void 0,disabled:void 0,onClick:N,onFocus:a,onPointerEnter:p,onMouseEnter:p,onPointerMove:n,onMouseMove:n,onPointerLeave:w,onMouseLeave:w},theirProps:u,slot:R,defaultTag:Ce,name:"Menu.Item"})}let Pe=M(we),$e=M(Re),Ee=M(De),Ae=M(Me),T=Object.assign(Pe,{Button:$e,Items:Ee,Item:Ae});const D={dropDownTitles:"inline-flex justify-center text-sm font-medium text-cu-black-800 group hover:text-cu-red",chevron:"flex-shrink-0 w-5 h-5 ml-1 text-cu-black-300 group-hover:text-cu-black-600"};function J(...e){return e.filter(Boolean).join(" ")}const Y=({sortOptions:e,filters:o,callback:i})=>{const[l,s]=d.useState(!1),[u,c]=d.useState(""),[r,m]=d.useState([]),x=a=>r.includes(a),[y,k]=d.useState([]),b=a=>{const f=a;return r.includes(f)?m([...r].filter(p=>p!==f)):m([...r,f])},j=a=>{const f=a;return m([...r].filter(p=>p!==f))};d.useEffect(()=>{c(u),k(r)},[u,r]),d.useEffect(()=>{i(r)},[r,i]);const N=re();return t.jsxs("div",{className:"cu-filter not-prose",children:[t.jsx(F.Root,{show:l,as:d.Fragment,children:t.jsxs(W,{as:"div",className:"relative z-40 sm:hidden",onClose:s,children:[t.jsx(F.Child,{as:d.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:t.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),t.jsx("div",{className:"fixed inset-0 z-40 flex",children:t.jsx(F.Child,{as:d.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"translate-x-full",children:t.jsxs(W.Panel,{className:"relative flex flex-col w-full h-full max-w-xs ml-auto overflow-y-auto bg-white shadow-xl",children:[t.jsxs("div",{className:"flex items-center justify-between px-4 py-3 bg-cu-black-50",children:[t.jsx("h2",{className:"text-base font-medium text-cu-black-800",children:"Filters"}),t.jsxs("button",{type:"button",className:"flex items-center justify-center w-8 h-8 p-2 -mr-1 bg-white rounded-md text-cu-black-600",onClick:()=>s(!1),children:[t.jsx("span",{className:"sr-only",children:"Close menu"}),t.jsx(ae,{className:"w-6 h-6","aria-hidden":"true"})]})]}),t.jsx("form",{children:o.map(a=>t.jsx(B,{as:"div",className:"px-4 py-6 border-t border-cu-black-100",children:({open:f})=>t.jsxs(t.Fragment,{children:[t.jsx("h3",{className:"flow-root -mx-2 -my-3 group",children:t.jsxs(B.Button,{className:"flex items-center justify-between w-full px-2 py-3 text-sm bg-white text-cu-black-300 group-hover:text-cu-black-600",children:[t.jsx("span",{className:"font-medium text-cu-black-600",children:a.name}),t.jsx("span",{className:"flex items-center ml-6",children:t.jsx(_,{className:J(f?"-rotate-180":"rotate-0","h-5 w-5 transform"),"aria-hidden":"true"})})]})}),t.jsx(B.Panel,{className:"pt-6",children:t.jsx("div",{className:"space-y-6",children:a.options.map((p,n)=>t.jsxs("div",{className:"flex items-center",children:[t.jsx("input",{id:`filter-mobile-${a.id}-${n}`,name:`${a.id}[]`,defaultValue:p.label,type:"checkbox",onChange:()=>b(p.label),defaultChecked:x(p.label),className:"w-4 h-4 rounded border-cu-black-200 text-cu-red focus:ring-cu-red-100"}),t.jsx("label",{htmlFor:`filter-mobile-${a.id}-${n}`,className:"ml-3 text-sm text-cu-black-600",children:p.label})]},n))})})]})},a.name))})]})})})]})}),t.jsxs("section",{"aria-labelledby":"filter-heading",children:[t.jsx("h2",{id:"filter-heading",className:"sr-only",children:"Filters"}),t.jsx("div",{className:"py-4 border rounded-tl-lg rounded-tr-lg border-cu-black-100 bg-gray-50",children:t.jsxs("div",{className:"flex justify-between px-4 sm:px-6",children:[t.jsxs(T,{as:"div",className:"relative",children:[e&&(e==null?void 0:e.length)>0&&t.jsx("div",{children:t.jsxs(T.Button,{className:D.dropDownTitles,children:["Sort",t.jsx(_,{className:D.chevron,"aria-hidden":"true"})]})}),t.jsx(F,{as:d.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:t.jsx(T.Items,{className:"absolute z-10 w-40 mt-2 bg-white rounded-md shadow-lg -left-4 ring-1 ring-black ring-opacity-5 focus:outline-none",children:e&&(e==null?void 0:e.length)>0&&t.jsx("div",{className:"py-1",children:e.map(a=>t.jsx(T.Item,{children:({active:f})=>t.jsx(N,{href:a.href,className:J(a.name===u?"font-medium text-cu-black-800":"text-cu-black-600",f?"bg-gray-100":"","block px-4 py-2 text-sm")})},a.name))})})})]}),t.jsx("button",{type:"button",className:"inline-block text-sm font-medium text-cu-black-800 hover:text-cu-red sm:hidden",onClick:()=>s(!0),children:"Filters"}),t.jsx("div",{className:"hidden sm:block",children:t.jsx("div",{className:"flow-root",children:t.jsx(S.Group,{className:"flex items-center -mx-4 divide-x divide-gray-200",children:o.map((a,f)=>t.jsxs(S,{className:"relative inline-block px-4 text-left",children:[t.jsxs(S.Button,{className:D.dropDownTitles,children:[t.jsx("span",{children:a.name}),t.jsx(_,{className:D.chevron,"aria-hidden":"true"})]}),t.jsx(F,{as:d.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:t.jsx(S.Panel,{className:"absolute right-0 z-10 p-4 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",children:t.jsx("form",{className:"space-y-4",children:a.options.map((p,n)=>t.jsxs("div",{className:"flex items-center",children:[t.jsx("input",{id:`filter-${a.id}-${n}`,name:`${a.id}[]`,defaultValue:p.label,type:"checkbox",onChange:()=>b(p.label),defaultChecked:x(p.label),className:"w-4 h-4 rounded border-cu-black-200 text-cu-red focus:ring-cu-red-100"}),t.jsx("label",{htmlFor:`filter-${a.id}-${n}`,className:"pr-6 ml-3 text-sm whitespace-nowrap text-cu-black-600",children:p.label})]},n))})})})]},f))})})})]})}),t.jsx("div",{className:"bg-white border border-t-0 rounded-bl-lg rounded-br-lg border-cu-black-100",children:t.jsxs("div",{className:"px-4 py-3 sm:flex sm:items-center sm:px-6",children:[t.jsxs("h3",{className:"py-1 text-sm text-cu-black-600",children:["Filters",t.jsx("span",{className:"sr-only",children:", active"})]}),t.jsx("div",{"aria-hidden":"true",className:"hidden w-px h-5 bg-gray-300 sm:ml-4 sm:block"}),t.jsx("div",{className:"mt-4 sm:ml-4 sm:mt-0",children:t.jsx("div",{className:"flex flex-wrap items-center gap-3 -m-1",children:y.map((a,f)=>t.jsxs("span",{className:"inline-flex items-center py-1 pl-3 pr-2 text-sm bg-white border rounded-lg border-cu-black-100 text-cu-black-600",children:[t.jsx("span",{children:a}),t.jsxs("button",{type:"button",onClick:()=>j(a),className:"inline-flex flex-shrink-0 w-4 h-4 p-1 ml-1 rounded-full text-cu-black-400 hover:bg-cu-red hover:text-white",children:[t.jsxs("span",{className:"sr-only",children:["Remove filter for ",a]}),t.jsx("svg",{className:"w-2 h-2",stroke:"currentColor",fill:"none",viewBox:"0 0 8 8",children:t.jsx("path",{strokeLinecap:"round",strokeWidth:"1.5",d:"M1 1l6 6m0-6L1 7"})})]})]},f))})})]})})]})]})};try{Y.displayName="Filter",Y.__docgenInfo={description:"",displayName:"Filter",props:{sortOptions:{defaultValue:null,description:"",name:"sortOptions",required:!1,type:{name:"{ name: string; href: string; current: boolean; }[]"}},filters:{defaultValue:null,description:"",name:"filters",required:!0,type:{name:"{ id: string; name: string; options: { value: string; label: string; checked: boolean; }[]; }[]"}},callback:{defaultValue:null,description:"",name:"callback",required:!0,type:{name:"(k: string[]) => void"}}}}}catch{}const He={title:"Filter",classname:".filter",sortOptions:[{name:"Daily",href:"#",current:!1},{name:"Weekly",href:"#",current:!1},{name:"Monthly",href:"#",current:!1}],filters:[{id:"audience",name:"Audience",options:[{value:"staff",label:"Staff",checked:!1},{value:"student",label:"Student",checked:!1}]},{id:"tags",name:"Tags",options:[{value:"general",label:"General",checked:!1},{value:"online/virtual",label:"Online/Virtual",checked:!1},{value:"finances",label:"Finances",checked:!1},{value:"healthyworkplace",label:"Healthy Workplace",checked:!1}]}]};export{Y as F,He as a};
