import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as t}from"./index-CBqU2yxZ.js";import{N as a,a as v,b as c,c as N}from"./NavData-BWKADDSs.js";import{S as o}from"./SearchData-ChxStwSa.js";import{S as i}from"./Search-BNtO7RIV.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CezNtdIE.js";import"./Avatar-RY1zWvJc.js";import"./optionClasses-Chq8FjL-.js";import"./dialog-BHhb4iix.js";import"./transition-Dz28ezoH.js";import"./use-root-containers-CiCts8xM.js";import"./index-BtM5VmRH.js";import"./use-resolve-button-type-BHDntMkD.js";import"./calculate-active-index-CmL1XPTK.js";const H={title:"Components/Nav",component:a,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},l=()=>{const[,s]=t.useState(!1),n=t.useCallback(r=>{s(r)},[s]);return e.jsxs(a,{navType:"primary",children:[e.jsx(a.Logo,{}),e.jsxs(a.Primary,{children:[e.jsx(a.Menu,{menu:v}),e.jsx(a.Aside,{menu:c,children:e.jsx(i,{sourceData:o,callback:n})})]})]})},u=()=>{const[,s]=t.useState(!1),n=t.useCallback(r=>{s(r)},[s]);return e.jsxs(a,{navType:"primary",children:[e.jsx(a.Logo,{title:"Max and Tessie Zelikovitz Centre for Jewish Studies",link:"https://carleton.ca/webservices"}),e.jsxs(a.Primary,{children:[e.jsx(a.Menu,{menu:v}),e.jsx(a.Aside,{menu:c,children:e.jsx(i,{sourceData:o,callback:n})})]})]})},d=()=>{const[,s]=t.useState(!1),n=t.useCallback(r=>{s(r)},[s]);return e.jsxs(a,{navType:"secondary",children:[e.jsx(a.Logo,{title:"Max and Tessie Zelikovitz Centre for Jewish Studies",link:"https://carleton.ca/webservices"}),e.jsx(a.Aside,{menu:c,children:e.jsx(i,{sourceData:o,callback:n})}),e.jsxs(a.Secondary,{children:[e.jsx(a.Menu,{menu:v}),e.jsx(a.Aside,{menu:c,children:e.jsx(i,{sourceData:o,callback:n})})]})]})},m=()=>{const[,s]=t.useState(!1),n=t.useCallback(r=>{s(r)},[s]);return e.jsxs(a,{navType:"primary",children:[e.jsx(a.Logo,{title:"Web Services",link:"https://carleton.ca/webservices"}),e.jsxs(a.Primary,{children:[e.jsx(a.Menu,{menu:v}),e.jsx(a.Aside,{menu:c,LoggedOutUser:!0,children:e.jsx(i,{sourceData:o,callback:n})})]})]})},g={firstName:"Web",lastName:"Services"},p=()=>{const[,s]=t.useState(!1),n=t.useCallback(r=>{s(r)},[s]);return e.jsxs(a,{navType:"secondary",children:[e.jsx(a.Logo,{title:"Web Services",link:"https://carleton.ca/webservices"}),e.jsx(a.Aside,{menu:c,LoggedInUser:!0,LoggedMenu:N,userNoImage:g,children:e.jsx(i,{sourceData:o,callback:n})}),e.jsxs(a.Secondary,{children:[e.jsx(a.Menu,{menu:v}),e.jsx(a.Aside,{menu:c,LoggedInUser:!0,LoggedMenu:N,userNoImage:g,children:e.jsx(i,{sourceData:o,callback:n})})]})]})};l.storyName="Default Nav";u.storyName="With Title";d.storyName="Title With Secondary";m.storyName="Logged Out";p.storyName="Logged IN";var b,S,h;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const [, setOpen] = useState(false);
  const callback = useCallback((itemOpen: boolean) => {
    setOpen(itemOpen);
  }, [setOpen]);
  return <Nav navType="primary">
      <Nav.Logo />
      <Nav.Primary>
        <Nav.Menu menu={NavDataSingle} />
        <Nav.Aside menu={NavAsideData}>
          <Search sourceData={SearchDatabase} callback={callback} />
        </Nav.Aside>
      </Nav.Primary>
    </Nav>;
}`,...(h=(S=l.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var k,x,y;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [, setOpen] = useState(false);
  const callback = useCallback((itemOpen: boolean) => {
    setOpen(itemOpen);
  }, [setOpen]);
  return <Nav navType="primary">
      <Nav.Logo title="Max and Tessie Zelikovitz Centre for Jewish Studies" link="https://carleton.ca/webservices" />
      <Nav.Primary>
        <Nav.Menu menu={NavDataSingle} />
        <Nav.Aside menu={NavAsideData}>
          <Search sourceData={SearchDatabase} callback={callback} />
        </Nav.Aside>
      </Nav.Primary>
    </Nav>;
}`,...(y=(x=u.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var D,O,j;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const [, setOpen] = useState(false);
  const callback = useCallback((itemOpen: boolean) => {
    setOpen(itemOpen);
  }, [setOpen]);
  return <Nav navType="secondary">
      <Nav.Logo title="Max and Tessie Zelikovitz Centre for Jewish Studies" link="https://carleton.ca/webservices" />
      <Nav.Aside menu={NavAsideData}>
        <Search sourceData={SearchDatabase} callback={callback} />
      </Nav.Aside>
      <Nav.Secondary>
        <Nav.Menu menu={NavDataSingle} />
        <Nav.Aside menu={NavAsideData}>
          <Search sourceData={SearchDatabase} callback={callback} />
        </Nav.Aside>
      </Nav.Secondary>
    </Nav>;
}`,...(j=(O=d.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var A,L,f;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  const [, setOpen] = useState(false);
  const callback = useCallback((itemOpen: boolean) => {
    setOpen(itemOpen);
  }, [setOpen]);
  return <Nav navType="primary">
      <Nav.Logo title="Web Services" link="https://carleton.ca/webservices" />
      <Nav.Primary>
        <Nav.Menu menu={NavDataSingle} />
        <Nav.Aside menu={NavAsideData} LoggedOutUser={true}>
          <Search sourceData={SearchDatabase} callback={callback} />
        </Nav.Aside>
      </Nav.Primary>
    </Nav>;
}`,...(f=(L=m.parameters)==null?void 0:L.docs)==null?void 0:f.source}}};var T,M,C;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const [, setOpen] = useState(false);
  const callback = useCallback((itemOpen: boolean) => {
    setOpen(itemOpen);
  }, [setOpen]);
  return <Nav navType="secondary">
      <Nav.Logo title="Web Services" link="https://carleton.ca/webservices" />
      <Nav.Aside menu={NavAsideData} LoggedInUser={true} LoggedMenu={NavAsideLoggedInOptions} userNoImage={userNoImage}>
        <Search sourceData={SearchDatabase} callback={callback} />
      </Nav.Aside>
      <Nav.Secondary>
        <Nav.Menu menu={NavDataSingle} />
        <Nav.Aside menu={NavAsideData} LoggedInUser={true} LoggedMenu={NavAsideLoggedInOptions} userNoImage={userNoImage}>
          <Search sourceData={SearchDatabase} callback={callback} />
        </Nav.Aside>
      </Nav.Secondary>
    </Nav>;
}`,...(C=(M=p.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};const K=["Default","WithTitle","TitleWithSecondary","LoggedOut","LoggedIn"];export{l as Default,p as LoggedIn,m as LoggedOut,d as TitleWithSecondary,u as WithTitle,K as __namedExportsOrder,H as default};
