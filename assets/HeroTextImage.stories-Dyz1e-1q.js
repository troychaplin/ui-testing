import{j as e}from"./jsx-runtime-CKrituN3.js";import{B as ve}from"./ButtonGroup-BqR3XMcH.js";import{B as r}from"./Button-Br6DnAHj.js";import{e as Te}from"./optionClasses-Chq8FjL-.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Icon-BykHp66m.js";import"./ChevronDownIcon-DCf8Nrl_.js";const q={base:"flex flex-wrap gap-6 mx-auto md:flex-nowrap md:gap-12 not-contained not-prose mb-6 md:mb-12",border:"border-b border-cu-black-50 pb-6 shadow-hero-text-image md:pb-10"},t={contentWrapper:"flex flex-col gap-4 md:gap-6 flex-[0_0_100%] md:max-w-4xl md:flex-1",contentTopSpace:"md:pt-4",header:"text-cu-black-700 not-italic font-semibold md:leading-10",headerOne:"text-3xl md:text-4xl lg:text-5xl lg:leading-[3.5rem]",headerTwo:"text-xl sm:text-3xl md:text-4xl lg:text-5xl lg:leading-[3.5rem]",pronoun:"text-xl lg:text-3xl font-light lowercase text-cu-black-500",listItems:"text-lg",listLink:"font-semibold text-cu-red hover:underline",largeText:"text-lg font-light text-cu-black-700 md:text-2xl md:leading-[2.25rem] mb-2 md:max-w-3xl [&>a]:text-cu-red [&>a]:hover:underline"},y={mediaWrapper:"flex-[0_0_100%] md:flex-none md:w-[40%]",mediaBgImage:"relative rounded bg-cover bg-no-repeat min-h-[220px]",svgLeft:"hidden lg:block absolute -left-px top-0 z-10 h-full",svgRight:"hidden lg:block absolute -right-px top-0 z-10 h-full transform scale-[-1]"},x={flex:"flex items-center gap-6",link:"text-cu-black-400",icon:"w-6 h-6 md:w-8 md:h-8"},ge=({children:n,title:s,paragraph:o,headerType:l="h2",isCenter:m,hasMediaCol:i})=>{const d=i?"md:py-4":"",c=m?"justify-center":"";return e.jsxs("div",{className:`${t.contentWrapper} ${d} ${c}`,children:[l==="h1"&&e.jsx("h1",{className:`${t.header} ${t.headerOne}`,children:s}),l==="h2"&&e.jsx("h2",{className:`${t.header} ${t.headerTwo}`,children:s}),o&&e.jsx("p",{className:t.largeText,children:o}),n]})};ge.displayName="HeroTextImage.Content";try{HeroTextImage.Content.displayName="HeroTextImage.Content",HeroTextImage.Content.__docgenInfo={description:"",displayName:"HeroTextImage.Content",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},paragraph:{defaultValue:null,description:"",name:"paragraph",required:!1,type:{name:"string"}},headerType:{defaultValue:{value:"h2"},description:"",name:"headerType",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'}]}},isCenter:{defaultValue:null,description:"",name:"isCenter",required:!1,type:{name:"boolean"}},hasMediaCol:{defaultValue:null,description:"",name:"hasMediaCol",required:!1,type:{name:"boolean"}}}}}catch{}const xe=({title:n,startDate:s,endDate:o,eventType:l,location:m,virtualType:i,virtualUrl:d,cost:c,contactName:p,contactPhone:u,contactEmail:g,primaryButtonUrl:h,primaryButtonText:v,secondaryButtonUrl:S,secondaryButtonText:P})=>e.jsxs("div",{className:`${t.contentWrapper} ${t.contentTopSpace}`,children:[e.jsx("h1",{className:`${t.header} ${t.headerOne}`,children:n}),s&&e.jsx("p",{className:t.largeText,children:s}),o&&e.jsx("p",{className:t.largeText,children:o}),e.jsxs("ul",{className:t.listItems,children:[e.jsx("li",{children:e.jsxs("strong",{className:"font-semibold",children:[l," Event"]})}),(l==="In-Person"||l==="Hybrid")&&m&&e.jsx("li",{children:m}),(l==="Virtual"||l==="Hybrid")&&i&&d&&e.jsx("li",{children:e.jsxs("a",{className:t.listLink,href:d,children:[i," meeting link"]})}),(l==="Virtual"||l==="Hybrid")&&i&&!d&&e.jsx("li",{children:"Meeting link is not yet available"})]}),(c||p||u||g)&&e.jsx(e.Fragment,{children:e.jsxs("ul",{className:t.listItems,children:[c&&e.jsxs("li",{children:[e.jsx("strong",{className:"font-semibold",children:"Cost: "}),c]}),p&&e.jsxs("li",{children:[e.jsx("strong",{className:"font-semibold",children:"Contact: "}),p&&e.jsxs(e.Fragment,{children:[" ",p]}),g&&e.jsxs(e.Fragment,{children:[" | ",e.jsx("a",{className:t.listLink,href:`mailto:${g}`,children:g})]}),u&&e.jsxs(e.Fragment,{children:[" | ",u]})]})]})}),h&&e.jsxs(ve,{children:[h&&e.jsx(r,{isSmall:!0,onClick:()=>{typeof h=="string"&&(window.location.href=h)},title:v||"Register Now"}),S&&P&&e.jsx(r,{isSmall:!0,color:"grey",onClick:()=>{typeof S=="string"&&(window.location.href=S)},title:P})]})]});xe.displayName="HeroTextImage.Event";try{HeroTextImage.Event.displayName="HeroTextImage.Event",HeroTextImage.Event.__docgenInfo={description:"",displayName:"HeroTextImage.Event",props:{designation:{defaultValue:null,description:"",name:"designation",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},startDate:{defaultValue:null,description:"",name:"startDate",required:!1,type:{name:"string"}},endDate:{defaultValue:null,description:"",name:"endDate",required:!1,type:{name:"string"}},eventType:{defaultValue:null,description:"",name:"eventType",required:!0,type:{name:"enum",value:[{value:'"In-Person"'},{value:'"Virtual"'},{value:'"Hybrid"'}]}},location:{defaultValue:null,description:"",name:"location",required:!1,type:{name:"string"}},virtualType:{defaultValue:null,description:"",name:"virtualType",required:!1,type:{name:"enum",value:[{value:'"Teams"'},{value:'"Zoom"'}]}},virtualUrl:{defaultValue:null,description:"",name:"virtualUrl",required:!1,type:{name:"string"}},primaryButtonUrl:{defaultValue:null,description:"",name:"primaryButtonUrl",required:!1,type:{name:"string"}},primaryButtonText:{defaultValue:null,description:"",name:"primaryButtonText",required:!1,type:{name:"string"}},secondaryButtonUrl:{defaultValue:null,description:"",name:"secondaryButtonUrl",required:!1,type:{name:"string"}},secondaryButtonText:{defaultValue:null,description:"",name:"secondaryButtonText",required:!1,type:{name:"string"}},cost:{defaultValue:null,description:"",name:"cost",required:!1,type:{name:"string"}},contactName:{defaultValue:null,description:"",name:"contactName",required:!1,type:{name:"string"}},contactPhone:{defaultValue:null,description:"",name:"contactPhone",required:!1,type:{name:"string"}},contactEmail:{defaultValue:null,description:"",name:"contactEmail",required:!1,type:{name:"string"}}}}}catch{}const he=({children:n,designation:s,title:o,jobTitle:l,pronoun:m,...i})=>{const{degrees:d,building:c,room:p,email:u,phone:g,phoneExt:h}=i;return e.jsxs("div",{className:`${t.contentWrapper} ${t.contentTopSpace}`,children:[e.jsxs("h1",{className:`${t.header} ${t.headerOne}`,children:[s&&`${s} `,o," ",m&&e.jsxs("span",{className:t.pronoun,children:["(",m,")"]})]}),l&&e.jsx("p",{className:t.largeText,children:l}),Object.values(i).some(v=>v)&&e.jsxs("ul",{children:[d&&e.jsx("li",{children:d}),c&&e.jsxs("li",{children:[p&&`${p} `,c]}),u&&e.jsx("li",{children:e.jsx("a",{className:t.listLink,href:`mailto:${u}`,children:u})}),g&&e.jsxs("li",{children:[g,h&&` x${h}`]})]}),n]})};he.displayName="HeroTextImage.People";try{HeroTextImage.People.displayName="HeroTextImage.People",HeroTextImage.People.__docgenInfo={description:"",displayName:"HeroTextImage.People",props:{designation:{defaultValue:null,description:"",name:"designation",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},jobTitle:{defaultValue:null,description:"",name:"jobTitle",required:!1,type:{name:"string"}},pronoun:{defaultValue:null,description:"",name:"pronoun",required:!1,type:{name:"string"}},degrees:{defaultValue:null,description:"",name:"degrees",required:!1,type:{name:"string"}},building:{defaultValue:null,description:"",name:"building",required:!1,type:{name:"string"}},room:{defaultValue:null,description:"",name:"room",required:!1,type:{name:"string"}},email:{defaultValue:null,description:"",name:"email",required:!1,type:{name:"string"}},phone:{defaultValue:null,description:"",name:"phone",required:!1,type:{name:"string"}},phoneExt:{defaultValue:null,description:"",name:"phoneExt",required:!1,type:{name:"string"}}}}}catch{}const fe=({resume:n,linkedin:s,twitter:o,facebook:l})=>e.jsxs("div",{className:x.flex,children:[n&&e.jsx(r,{isSmall:!0,color:"grey",onClick:()=>{window.location.href=n},title:"Resume"}),e.jsxs("ul",{className:x.flex,children:[s&&e.jsx("li",{children:e.jsxs("a",{className:`${x.link} hover:text-[#0072b1]`,href:s,children:[e.jsx("span",{className:"sr-only",children:"View on LinkedIn"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",className:x.icon,"aria-hidden":"true",children:e.jsx("path",{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"})})]})}),o&&e.jsx("li",{children:e.jsxs("a",{className:`${x.link} hover:text-[#00acee]`,href:s,children:[e.jsx("span",{className:"sr-only",children:"View on Twitter"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",className:x.icon,"aria-hidden":"true",children:e.jsx("path",{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"})})]})}),l&&e.jsx("li",{children:e.jsxs("a",{className:`${x.link} hover:text-[#3b5998]`,href:s,children:[e.jsx("span",{className:"sr-only",children:"View on Facebook"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",className:x.icon,"aria-hidden":"true",children:e.jsx("path",{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"})})]})})]})]});fe.displayName="HeroTextImage.Social";try{HeroTextImage.Social.displayName="HeroTextImage.Social",HeroTextImage.Social.__docgenInfo={description:"",displayName:"HeroTextImage.Social",props:{resume:{defaultValue:null,description:"",name:"resume",required:!1,type:{name:"string"}},linkedin:{defaultValue:null,description:"",name:"linkedin",required:!1,type:{name:"string"}},twitter:{defaultValue:null,description:"",name:"twitter",required:!1,type:{name:"string"}},facebook:{defaultValue:null,description:"",name:"facebook",required:!1,type:{name:"string"}}}}}catch{}const ye=({children:n,image:s,angle:o,focalPointX:l="50",focalPointY:m="50",hasMobileImage:i})=>{let d=null,c=null;switch(o){case"left":d=e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:y.svgLeft,fill:"none",viewBox:"0 0 123 440",children:e.jsx("path",{fill:"#fff",d:"M0 440h6c-4.4 0-4.5-3-3.5-6C49.344 293.466 118.06 4.849 119 2.5c1-2.5 3-2.5 4-2.5H0v440Z"})});break;case"dual":d=e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:y.svgLeft,fill:"none",viewBox:"0 0 123 440",children:e.jsx("path",{fill:"#fff",d:"M0 440h6c-4.4 0-4.5-3-3.5-6C49.344 293.466 118.06 4.849 119 2.5c1-2.5 3-2.5 4-2.5H0v440Z"})}),c=e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:y.svgRight,fill:"none",viewBox:"0 0 123 440",children:e.jsx("path",{fill:"#fff",d:"M0 440h6c-4.4 0-4.5-3-3.5-6C49.344 293.466 118.06 4.849 119 2.5c1-2.5 3-2.5 4-2.5H0v440Z"})});break}const p=s?y.mediaBgImage:"",u=i?"":"hidden md:block",g=p?{backgroundImage:`url(${s})`,backgroundPosition:`${l}% ${m}%`}:{};return e.jsxs("div",{className:`${y.mediaWrapper} ${p} ${u}`,style:g,children:[d,c,n]})};ye.displayName="HeroTextImage.Media";try{HeroTextImage.Media.displayName="HeroTextImage.Media",HeroTextImage.Media.__docgenInfo={description:"",displayName:"HeroTextImage.Media",props:{image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},angle:{defaultValue:null,description:"",name:"angle",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"none"'},{value:'"dual"'}]}},focalPointX:{defaultValue:{value:"50"},description:"",name:"focalPointX",required:!1,type:{name:"string"}},focalPointY:{defaultValue:{value:"50"},description:"",name:"focalPointY",required:!1,type:{name:"string"}},hasMobileImage:{defaultValue:null,description:"",name:"hasMobileImage",required:!1,type:{name:"boolean"}}}}}catch{}const M=({children:n,maxWidth:s="7xl",hasBorder:o,reverse:l})=>{const m=l?"flex-row-reverse":"",i=o?q.border:"";return e.jsx("div",{className:`cu-hero-textimage ${q.base} ${Te[s]} ${m} ${i}`,children:n})},a=Object.assign(M,{Content:ge,Event:xe,People:he,Social:fe,Media:ye});try{M.displayName="HeroTextImageWrapper",M.__docgenInfo={description:"",displayName:"HeroTextImageWrapper",props:{maxWidth:{defaultValue:{value:"7xl"},description:"",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"full"'},{value:'"5xl"'},{value:'"7xl"'}]}},hasBorder:{defaultValue:null,description:"",name:"hasBorder",required:!1,type:{name:"boolean"}},reverse:{defaultValue:null,description:"",name:"reverse",required:!1,type:{name:"boolean"}}}}}catch{}try{a.displayName="HeroTextImage",a.__docgenInfo={description:"",displayName:"HeroTextImage",props:{maxWidth:{defaultValue:{value:"7xl"},description:"",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"full"'},{value:'"5xl"'},{value:'"7xl"'}]}},hasBorder:{defaultValue:null,description:"",name:"hasBorder",required:!1,type:{name:"boolean"}},reverse:{defaultValue:null,description:"",name:"reverse",required:!1,type:{name:"boolean"}}}}}catch{}const Ve={title:"Deprecated/Hero Text Image",component:a,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},f="Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem non. Molestiae quas dolores accusamus in. Praesent quis ligula quis nulla malesuada tempor.",T={render:()=>e.jsxs(a,{hasBorder:!0,children:[e.jsx(a.Content,{title:"Website and Application Development",paragraph:f,headerType:"h1",hasMediaCol:!0,children:e.jsxs("div",{className:"flex flex-wrap gap-4 buttons md:gap-6",children:[e.jsx(r,{title:"Primary"}),e.jsx(r,{title:"Secondary",color:"grey"})]})}),e.jsx(a.Media,{image:"https://picsum.photos/400/266"})]})},j={render:()=>e.jsxs(a,{reverse:!0,hasBorder:!0,children:[e.jsx(a.Content,{title:"Website and Application Development",paragraph:f,headerType:"h1",hasMediaCol:!0,children:e.jsxs("div",{className:"flex flex-wrap gap-4 buttons md:gap-6",children:[e.jsx(r,{title:"Primary"}),e.jsx(r,{title:"Secondary",color:"grey"})]})}),e.jsx(a.Media,{image:"https://picsum.photos/400/266"})]})},I={render:()=>e.jsxs(a,{hasBorder:!0,children:[e.jsx(a.Content,{title:"Website and Application Development",paragraph:f,headerType:"h1",hasMediaCol:!0,children:e.jsxs("div",{className:"flex flex-wrap gap-4 buttons md:gap-6",children:[e.jsx(r,{title:"Primary"}),e.jsx(r,{title:"Secondary",color:"grey"})]})}),e.jsx(a.Media,{image:"https://picsum.photos/400/266",angle:"left"})]})},b={render:()=>e.jsxs(a,{reverse:!0,hasBorder:!0,children:[e.jsx(a.Content,{title:"Website and Application Development",paragraph:f,headerType:"h1",hasMediaCol:!0,children:e.jsxs("div",{className:"flex flex-wrap gap-4 buttons md:gap-6",children:[e.jsx(r,{title:"Primary"}),e.jsx(r,{title:"Secondary",color:"grey"})]})}),e.jsx(a.Media,{image:"https://picsum.photos/400/266",angle:"left"})]})},H={render:()=>e.jsxs(a,{hasBorder:!0,children:[e.jsx(a.Content,{title:"Website and Application Development",paragraph:f,headerType:"h1",hasMediaCol:!0,children:e.jsxs("div",{className:"flex flex-wrap gap-4 buttons md:gap-6",children:[e.jsx(r,{title:"Primary"}),e.jsx(r,{title:"Secondary",color:"grey"})]})}),e.jsx(a.Media,{image:"https://picsum.photos/400/266",angle:"dual"})]})},w={render:()=>e.jsxs(a,{reverse:!0,hasBorder:!0,children:[e.jsx(a.Content,{title:"Website and Application Development",paragraph:f,headerType:"h1",hasMediaCol:!0,children:e.jsxs("div",{className:"flex flex-wrap gap-4 buttons md:gap-6",children:[e.jsx(r,{title:"Primary"}),e.jsx(r,{title:"Secondary",color:"grey"})]})}),e.jsx(a.Media,{image:"https://picsum.photos/400/266",angle:"dual"})]})},N={render:()=>e.jsx(a,{maxWidth:"5xl",hasBorder:!0,children:e.jsx(a.Content,{title:"Website and Application Development",paragraph:f,headerType:"h1",children:e.jsxs("div",{className:"flex flex-wrap gap-4 buttons md:gap-6",children:[e.jsx(r,{title:"Primary"}),e.jsx(r,{title:"Secondary",color:"grey"})]})})})},C={render:()=>e.jsx(a,{maxWidth:"5xl",hasBorder:!0,children:e.jsx(a.Content,{title:"Website and Application Development",headerType:"h1",children:e.jsxs("div",{className:"flex flex-wrap gap-4 buttons md:gap-6",children:[e.jsx(r,{title:"Primary"}),e.jsx(r,{title:"Secondary",color:"grey"})]})})})},B={render:()=>e.jsx(a,{maxWidth:"5xl",hasBorder:!0,children:e.jsx(a.Content,{title:"Website and Application Development",headerType:"h2",children:e.jsxs("div",{className:"flex flex-wrap gap-4 buttons md:gap-6",children:[e.jsx(r,{title:"Primary"}),e.jsx(r,{title:"Secondary",color:"grey"})]})})})},V={render:()=>e.jsxs(a,{maxWidth:"5xl",hasBorder:!0,children:[e.jsx(a.People,{designation:"Dr.",title:"Employee Profile",jobTitle:"Financial Analyst, Business Office",degrees:"Master of Business Administration",pronoun:"They/Them",building:"Dunton Tower",room:"148-A",email:"employee.email@carleton.ca",phone:"613-520-2600",phoneExt:"2497",children:e.jsx(a.Social,{resume:"#",linkedin:"#",twitter:"#",facebook:"#"})}),e.jsx(a.Media,{children:e.jsx("img",{src:"https://picsum.photos/400/400",alt:"Demo"})})]})},_={render:()=>e.jsxs(a,{maxWidth:"5xl",hasBorder:!0,children:[e.jsx(a.Event,{title:"Capital Hoops Classic",eventType:"Hybrid",virtualType:"Teams",virtualUrl:"https://events.carleton.ca",startDate:"March 21st, 2023 at 6:00pm",location:"Raven’s Nest, 1125 Colonel By Drive",cost:"$20 per adult, $15 for youth/senior",contactName:"John Doe",contactEmail:"johndoe@test.com",contactPhone:"613-520-2600 x1234",primaryButtonUrl:"https://carleton.ca",secondaryButtonUrl:"https://carleton.ca/webservices",secondaryButtonText:"More Information"}),e.jsx(a.Media,{image:"https://picsum.photos/400/266"})]})};var W,D,$;T.parameters={...T.parameters,docs:{...(W=T.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <HeroTextImage hasBorder>
      <HeroTextImage.Content title="Website and Application Development" paragraph={SinglePara} headerType="h1" hasMediaCol>
        <div className="flex flex-wrap gap-4 buttons md:gap-6">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </HeroTextImage.Content>
      <HeroTextImage.Media image="https://picsum.photos/400/266" />
    </HeroTextImage>
}`,...($=(D=T.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var k,A,E;j.parameters={...j.parameters,docs:{...(k=j.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <HeroTextImage reverse hasBorder>
      <HeroTextImage.Content title="Website and Application Development" paragraph={SinglePara} headerType="h1" hasMediaCol>
        <div className="flex flex-wrap gap-4 buttons md:gap-6">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </HeroTextImage.Content>
      <HeroTextImage.Media image="https://picsum.photos/400/266" />
    </HeroTextImage>
}`,...(E=(A=j.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var L,O,z;I.parameters={...I.parameters,docs:{...(L=I.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <HeroTextImage hasBorder>
      <HeroTextImage.Content title="Website and Application Development" paragraph={SinglePara} headerType="h1" hasMediaCol>
        <div className="flex flex-wrap gap-4 buttons md:gap-6">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </HeroTextImage.Content>
      <HeroTextImage.Media image="https://picsum.photos/400/266" angle="left" />
    </HeroTextImage>
}`,...(z=(O=I.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var F,R,U;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <HeroTextImage reverse hasBorder>
      <HeroTextImage.Content title="Website and Application Development" paragraph={SinglePara} headerType="h1" hasMediaCol>
        <div className="flex flex-wrap gap-4 buttons md:gap-6">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </HeroTextImage.Content>
      <HeroTextImage.Media image="https://picsum.photos/400/266" angle="left" />
    </HeroTextImage>
}`,...(U=(R=b.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var Z,J,X;H.parameters={...H.parameters,docs:{...(Z=H.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <HeroTextImage hasBorder>
      <HeroTextImage.Content title="Website and Application Development" paragraph={SinglePara} headerType="h1" hasMediaCol>
        <div className="flex flex-wrap gap-4 buttons md:gap-6">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </HeroTextImage.Content>
      <HeroTextImage.Media image="https://picsum.photos/400/266" angle="dual" />
    </HeroTextImage>
}`,...(X=(J=H.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Y,G,K;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <HeroTextImage reverse hasBorder>
      <HeroTextImage.Content title="Website and Application Development" paragraph={SinglePara} headerType="h1" hasMediaCol>
        <div className="flex flex-wrap gap-4 buttons md:gap-6">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </HeroTextImage.Content>
      <HeroTextImage.Media image="https://picsum.photos/400/266" angle="dual" />
    </HeroTextImage>
}`,...(K=(G=w.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,ee,ae;N.parameters={...N.parameters,docs:{...(Q=N.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <HeroTextImage maxWidth="5xl" hasBorder>
      <HeroTextImage.Content title="Website and Application Development" paragraph={SinglePara} headerType="h1">
        <div className="flex flex-wrap gap-4 buttons md:gap-6">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </HeroTextImage.Content>
    </HeroTextImage>
}`,...(ae=(ee=N.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,re,ne;C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <HeroTextImage maxWidth="5xl" hasBorder>
      <HeroTextImage.Content title="Website and Application Development" headerType="h1">
        <div className="flex flex-wrap gap-4 buttons md:gap-6">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </HeroTextImage.Content>
    </HeroTextImage>
}`,...(ne=(re=C.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var le,se,oe;B.parameters={...B.parameters,docs:{...(le=B.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <HeroTextImage maxWidth="5xl" hasBorder>
      <HeroTextImage.Content title="Website and Application Development" headerType="h2">
        <div className="flex flex-wrap gap-4 buttons md:gap-6">
          <Button title="Primary" />
          <Button title="Secondary" color="grey" />
        </div>
      </HeroTextImage.Content>
    </HeroTextImage>
}`,...(oe=(se=B.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,de,me;V.parameters={...V.parameters,docs:{...(ie=V.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <HeroTextImage maxWidth="5xl" hasBorder>
      <HeroTextImage.People designation="Dr." title="Employee Profile" jobTitle="Financial Analyst, Business Office" degrees="Master of Business Administration" pronoun="They/Them" building="Dunton Tower" room="148-A" email="employee.email@carleton.ca" phone="613-520-2600" phoneExt="2497">
        <HeroTextImage.Social resume="#" linkedin="#" twitter="#" facebook="#" />
      </HeroTextImage.People>
      <HeroTextImage.Media>
        <img src="https://picsum.photos/400/400" alt="Demo" />
      </HeroTextImage.Media>
    </HeroTextImage>
}`,...(me=(de=V.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ce,pe,ue;_.parameters={..._.parameters,docs:{...(ce=_.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <HeroTextImage maxWidth="5xl" hasBorder>
      <HeroTextImage.Event title="Capital Hoops Classic" eventType="Hybrid" virtualType="Teams" virtualUrl="https://events.carleton.ca" startDate="March 21st, 2023 at 6:00pm" location="Raven’s Nest, 1125 Colonel By Drive" cost="$20 per adult, $15 for youth/senior" contactName="John Doe" contactEmail="johndoe@test.com" contactPhone="613-520-2600 x1234" primaryButtonUrl="https://carleton.ca" secondaryButtonUrl="https://carleton.ca/webservices" secondaryButtonText="More Information" />
      <HeroTextImage.Media image="https://picsum.photos/400/266"></HeroTextImage.Media>
    </HeroTextImage>
}`,...(ue=(pe=_.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};const _e=["DefaultTemplate","ImageLeft","ImageAngle","ImageLeftAngle","ImageDualAngle","ImageLeftDualAngle","NoImage","NoParagraph","UsingHeaderTwo","PeopleProfile","EventDetails"];export{T as DefaultTemplate,_ as EventDetails,I as ImageAngle,H as ImageDualAngle,j as ImageLeft,b as ImageLeftAngle,w as ImageLeftDualAngle,N as NoImage,C as NoParagraph,V as PeopleProfile,B as UsingHeaderTwo,_e as __namedExportsOrder,Ve as default};
