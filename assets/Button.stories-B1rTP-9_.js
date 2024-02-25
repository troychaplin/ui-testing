import{j}from"./jsx-runtime-DQ32znRX.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const l=({isOutline:s=!1,size:O="md",color:n="#369173",label:x,...q})=>{const V=s?"ui-button--outline":"ui-button--solid";return console.log(n),j.jsx("button",{type:"button",className:["ui-button",`ui-button--${O}`,V].join(" "),style:s?{borderColor:n}:{backgroundColor:n},...q,children:x})};try{l.displayName="Button",l.__docgenInfo={description:"",displayName:"Button",props:{isOutline:{defaultValue:{value:"false"},description:"",name:"isOutline",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"#369173"},description:"",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const k={title:"Example/Button",component:l,tags:["autodocs"]},e={args:{label:"Button",color:"#369173"}},r={args:{label:"Outline Button",isOutline:!0}},a={args:{size:"sm",label:"Small Button",color:"#7a2bcf"}},t={args:{size:"md",label:"Medium Button",color:"#c4812f"}},o={args:{size:"lg",label:"Large Button",color:"#2896b6"}};var u,i,c;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    color: '#369173'
  }
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var m,d,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Outline Button',
    isOutline: true
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var g,b,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Small Button',
    color: '#7a2bcf'
  }
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var y,B,_;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'md',
    label: 'Medium Button',
    color: '#c4812f'
  }
}`,...(_=(B=t.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var S,v,z;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    label: 'Large Button',
    color: '#2896b6'
  }
}`,...(z=(v=o.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};const E=["Primary","Outline","Small","Medium","Large"];export{o as Large,t as Medium,r as Outline,e as Primary,a as Small,E as __namedExportsOrder,k as default};
