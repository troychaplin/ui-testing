import{j as e}from"./jsx-runtime-CKrituN3.js";import{h as J,k as K}from"./optionClasses-lUePzRsn.js";import{B as a}from"./Button-CcWXL9jf.js";import{B as p}from"./ButtonGroup-BqR3XMcH.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Icon-BwCzAfC2.js";import"./ChevronDownIcon-DCf8Nrl_.js";const U=({buttonText:i="Submit Email"})=>e.jsxs("div",{className:"w-full max-w-xl space-y-5 cu-wideimage-signup",children:[e.jsxs("div",{className:"flex gap-2.5",children:[e.jsx("label",{htmlFor:"email",className:"sr-only",children:"Enter you email address"}),e.jsx("input",{type:"text",id:"email",name:"email",required:!0,placeholder:"Enter you email address",className:"flex-1 rounded px-3.5 py-2 focus:ring-1 focus:ring-inset"}),e.jsx(a,{title:i||"Subscribe"})]}),e.jsxs("div",{className:"flex items-start flex-none gap-2 ml-1 text-left",children:[e.jsx("input",{name:"favcharacters",id:"optin",type:"checkbox",className:"mt-0.5 border rounded-sm",value:"name"}),e.jsxs("label",{htmlFor:"optin",className:"text-sm font-light",children:["I agree to receive email from Carleton University. Read our"," ",e.jsx("a",{className:"font-bold border-b border-white border-px",href:"https://carleton.ca/privacy/privacy-notices/general-notice-of-collection-use-and-disclosure/",target:"_blank",rel:"noreferrer",children:"Privacy Statement"}),"."]})]})]});U.displayName="WideImage.Signup";try{WideImage.Signup.displayName="WideImage.Signup",WideImage.Signup.__docgenInfo={description:"",displayName:"WideImage.Signup",props:{buttonText:{defaultValue:{value:"Submit Email"},description:"",name:"buttonText",required:!1,type:{name:"string"}}}}}catch{}const r={baseBg:"relative flex items-center justify-center mx-auto px-8 mb-6 overflow-hidden md:px-16 md:mb-12 rounded-xl not-contained not-prose",lightBg:"text-cu-black-800 py-20 bg-cu-black-50",darkBg:"text-white py-20 bg-cu-black-900",imageBg:"relative py-24 text-white bg-opacity-50 bg-cover bg-cu-black-50 md:py-28 lg:py-36 xl:py-48",overlay:"absolute w-full h-full bg-black",content:"relative z-10 flex flex-col items-center gap-2 text-center",headerOne:"font-semibold text-3xl md:text-4xl lg:text-5xl lg:leading-[3.5rem] max-w-5xl",headerTwo:"font-semibold text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem] max-w-5xl"},f=({children:i,title:y,image:g,headerType:v="h2",maxWidth:C="max",opacity:H=70,focalPointX:L="50",focalPointY:z="50",isType:h="light"})=>{const M={backgroundImage:`url(${g})`,backgroundPosition:`${L}% ${z}%`};let x;return x=h==="dark"?r.darkBg:r.lightBg,g&&(x=r.imageBg),e.jsxs("div",{style:M,className:`cu-wideimage cu-container ${r.baseBg} ${J[C]} ${x}`,children:[g&&e.jsx("div",{className:`${r.overlay} ${K[H]}`}),e.jsxs("div",{className:`${r.content} cu-wideimage-content cu-wideimage-${h}`,children:[v==="h1"&&e.jsx("h1",{className:`${r.headerOne}`,children:y}),v==="h2"&&e.jsx("h2",{className:`${r.headerTwo}`,children:y}),i]}),h==="dark"&&e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"absolute bottom-0 w-full opacity-10",fill:"none",viewBox:"0 0 1280 260",children:[e.jsx("g",{filter:"url(#a)",children:e.jsx("ellipse",{cx:"646",cy:"260",fill:"#fff",rx:"640",ry:"200"})}),e.jsx("defs",{children:e.jsxs("filter",{id:"a",width:"1400",height:"520",x:"-54",y:"0",colorInterpolationFilters:"sRGB",filterUnits:"userSpaceOnUse",children:[e.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),e.jsx("feBlend",{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),e.jsx("feGaussianBlur",{result:"effect1_foregroundBlur_6_9",stdDeviation:"30"})]})})]})]})},n=Object.assign(f,{Signup:U});try{f.displayName="WideImageWrapper",f.__docgenInfo={description:"",displayName:"WideImageWrapper",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},headerType:{defaultValue:{value:"h2"},description:"",name:"headerType",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'}]}},maxWidth:{defaultValue:{value:"max"},description:"",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"full"'},{value:'"max"'},{value:'"5xl"'},{value:'"7xl"'}]}},opacity:{defaultValue:{value:"70"},description:"",name:"opacity",required:!1,type:{name:"enum",value:[{value:"40"},{value:"50"},{value:"60"},{value:"70"},{value:"80"}]}},focalPointX:{defaultValue:{value:"50"},description:"",name:"focalPointX",required:!1,type:{name:"string"}},focalPointY:{defaultValue:{value:"50"},description:"",name:"focalPointY",required:!1,type:{name:"string"}},isType:{defaultValue:{value:"light"},description:"",name:"isType",required:!1,type:{name:"enum",value:[{value:'"image"'},{value:'"light"'},{value:'"dark"'}]}}}}}catch{}try{n.displayName="WideImage",n.__docgenInfo={description:"",displayName:"WideImage",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},headerType:{defaultValue:{value:"h2"},description:"",name:"headerType",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'}]}},maxWidth:{defaultValue:{value:"max"},description:"",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"full"'},{value:'"max"'},{value:'"5xl"'},{value:'"7xl"'}]}},opacity:{defaultValue:{value:"70"},description:"",name:"opacity",required:!1,type:{name:"enum",value:[{value:"40"},{value:"50"},{value:"60"},{value:"70"},{value:"80"}]}},focalPointX:{defaultValue:{value:"50"},description:"",name:"focalPointX",required:!1,type:{name:"string"}},focalPointY:{defaultValue:{value:"50"},description:"",name:"focalPointY",required:!1,type:{name:"string"}},isType:{defaultValue:{value:"light"},description:"",name:"isType",required:!1,type:{name:"enum",value:[{value:'"image"'},{value:'"light"'},{value:'"dark"'}]}}}}}catch{}const se={title:"Components/Wide Image",component:n,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},t={};t.args={title:"Wide image with defaults"};const s={args:{...t.args,title:"Wide image with buttons, praesentium architecto a distinctio aut reprehenderit ducimus",children:e.jsxs(p,{children:[e.jsx(a,{title:"Apply Now"}),e.jsx(a,{title:"Request Information",color:"dark-grey"})]})}},l={args:{...t.args,title:"Wide image with dark background",image:"",isType:"dark",children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus."}),e.jsxs(p,{children:[e.jsx(a,{title:"Apply Now"}),e.jsx(a,{title:"Request Information",color:"dark-grey"})]})]})}},o={args:{...t.args,title:"Wide image with image background",isType:"image",image:"https://picsum.photos/1600/700",children:e.jsxs(p,{children:[e.jsx(a,{title:"Apply Now"}),e.jsx(a,{title:"Request Information",isType:"outline",color:"white"})]})}},u={args:{...t.args,title:"Wide image as banner with h1",headerType:"h1",children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus."}),e.jsxs(p,{children:[e.jsx(a,{title:"Apply Now"}),e.jsx(a,{title:"Request Information",color:"dark-grey"})]})]})}},d={args:{...t.args,title:"Subscribe to Our Newsletter",children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus."}),e.jsx(n.Signup,{})]})}},c={args:{...t.args,title:"Subscribe to Our Newsletter",isType:"dark",children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus."}),e.jsx(n.Signup,{})]})}},m={args:{...t.args,title:"Subscribe to Our Newsletter",isType:"image",image:"https://picsum.photos/1600/700",children:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus."}),e.jsx(n.Signup,{})]})}};var b,j,w;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(w=(j=t.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var N,S,B;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Wide image with buttons, praesentium architecto a distinctio aut reprehenderit ducimus',
    children: <ButtonGroup>
        <Button title="Apply Now" />
        <Button title="Request Information" color="dark-grey" />
      </ButtonGroup>
  }
}`,...(B=(S=s.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var k,I,q;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Wide image with dark background',
    image: '',
    isType: 'dark',
    children: <>
        <p>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
          reprehenderit ducimus.
        </p>
        {/* <WideImage.Signup /> */}
        <ButtonGroup>
          <Button title="Apply Now" />
          <Button title="Request Information" color="dark-grey" />
        </ButtonGroup>
      </>
  }
}`,...(q=(I=l.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var W,_,T;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Wide image with image background',
    isType: 'image',
    image: 'https://picsum.photos/1600/700',
    children: <ButtonGroup>
        <Button title="Apply Now" />
        <Button title="Request Information" isType="outline" color="white" />
      </ButtonGroup>
  }
}`,...(T=(_=o.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var P,V,O;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Wide image as banner with h1',
    headerType: 'h1',
    children: <>
        <p>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
          reprehenderit ducimus.
        </p>
        <ButtonGroup>
          <Button title="Apply Now" />
          <Button title="Request Information" color="dark-grey" />
        </ButtonGroup>
      </>
  }
}`,...(O=(V=u.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var D,$,F;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Subscribe to Our Newsletter',
    children: <>
        <p>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
          reprehenderit ducimus.
        </p>
        <WideImage.Signup />
      </>
  }
}`,...(F=($=d.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var G,R,A;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Subscribe to Our Newsletter',
    isType: 'dark',
    children: <>
        <p>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
          reprehenderit ducimus.
        </p>
        <WideImage.Signup />
      </>
  }
}`,...(A=(R=c.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var E,X,Y;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Subscribe to Our Newsletter',
    isType: 'image',
    image: 'https://picsum.photos/1600/700',
    children: <>
        <p>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut
          reprehenderit ducimus.
        </p>
        <WideImage.Signup />
      </>
  }
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const le=["Default","WithButtons","BgDark","BgImage","HeaderOne","SignupLight","SignupDark","SignupImage"];export{l as BgDark,o as BgImage,t as Default,u as HeaderOne,c as SignupDark,m as SignupImage,d as SignupLight,s as WithButtons,le as __namedExportsOrder,se as default};
