import{j as l}from"./jsx-runtime-CKrituN3.js";import{B as y}from"./Button-CcWXL9jf.js";import{S as i,a as u}from"./Search-DRkkPqBJ.js";import{r as a}from"./index-CBqU2yxZ.js";import"./Icon-BwCzAfC2.js";import"./optionClasses-lUePzRsn.js";import"./ChevronDownIcon-DCf8Nrl_.js";import"./index-CezNtdIE.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./transition-Detct5jf.js";import"./use-resolve-button-type-BBdwncF-.js";import"./calculate-active-index-B63RnLbF.js";import"./dialog-DUtRWrn8.js";function j({title:e,titleId:t,...r},x){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:x,"aria-labelledby":t},r),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"}))}const w=a.forwardRef(j),v=w,q={title:"Components/Search",component:i,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},s=()=>{const[,e]=a.useState(!1),t=a.useCallback(r=>{e(r)},[e]);return l.jsx(i,{sourceData:u,callback:t})},n=()=>{const[,e]=a.useState(!1),t=a.useCallback(r=>{e(r)},[e]);return l.jsx(i,{sourceData:u,callback:t,children:l.jsx(y,{icon:v})})},c=()=>{const[,e]=a.useState(!1),t=a.useCallback(r=>{e(r)},[e]);return l.jsx(i,{sourceData:u,searchOn:"url",callback:t})},o=()=>{const[,e]=a.useState(!1),t=a.useCallback(r=>{e(r)},[e]);return l.jsx(i,{sourceData:u,searchOn:"id",callback:t})};s.storyName="Default Search";n.storyName="Custom Avatar Search";c.storyName="Validation Url Search";o.storyName="Validation Key Search";var p,m,b;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [, setOpen] = useState(false);
  const callback = useCallback((itemOpen: boolean) => {
    setOpen(itemOpen);
  }, [setOpen]);
  return <Search sourceData={SearchDatabase} callback={callback} />;
}`,...(b=(m=s.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var d,S,O;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const [, setOpen] = useState(false);
  const callback = useCallback((itemOpen: boolean) => {
    setOpen(itemOpen);
  }, [setOpen]);
  return <Search sourceData={SearchDatabase} callback={callback}>
      <Button icon={MagnifyingGlassIcon} />
    </Search>;
}`,...(O=(S=n.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var h,k,f;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const [, setOpen] = useState(false);
  const callback = useCallback((itemOpen: boolean) => {
    setOpen(itemOpen);
  }, [setOpen]);
  return <Search sourceData={SearchDatabase} searchOn="url" callback={callback} />;
}`,...(f=(k=c.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var D,g,C;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const [, setOpen] = useState(false);
  const callback = useCallback((itemOpen: boolean) => {
    setOpen(itemOpen);
  }, [setOpen]);
  return <Search sourceData={SearchDatabase} searchOn="id" callback={callback} />;
}`,...(C=(g=o.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};const W=["SearchDefault","SearchCustomAvatar","ValidationUrl","ValidationKey"];export{n as SearchCustomAvatar,s as SearchDefault,o as ValidationKey,c as ValidationUrl,W as __namedExportsOrder,q as default};
