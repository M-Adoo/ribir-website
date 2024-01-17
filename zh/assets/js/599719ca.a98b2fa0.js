"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[304],{7999:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var n=t(5893),r=t(1151);const s={},a="Ribir v0.1.0",o={permalink:"/zh/blog/ribir_v0.1.0",source:"@site/blog/ribir_v0.1.0.md",title:"Ribir v0.1.0",description:"After several years of conception, especially the hard work of the past year, we are proud to announce that Ribir v0.1.0 is finally released.",date:"2024-01-17T08:37:12.000Z",formattedDate:"2024\u5e741\u670817\u65e5",tags:[],readingTime:2.925,hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1},l={authorsImageUrls:[]},h=[{value:"What is Ribir?",id:"what-is-ribir",level:2},{value:"Build your UI non-intrusive",id:"build-your-ui-non-intrusive",level:2},{value:"Why Rust?",id:"why-rust",level:2},{value:"What is the current status of Ribir?",id:"what-is-the-current-status-of-ribir",level:2},{value:"The next step",id:"the-next-step",level:2},{value:"Changelog",id:"changelog",level:2},{value:"Feedback",id:"feedback",level:2}];function d(e){const i={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:t(596).Z+"",width:"3489",height:"1548"})}),"\n",(0,n.jsx)(i.p,{children:"After several years of conception, especially the hard work of the past year, we are proud to announce that Ribir v0.1.0 is finally released."}),"\n",(0,n.jsx)(i.h2,{id:"what-is-ribir",children:"What is Ribir?"}),"\n",(0,n.jsx)(i.p,{children:"Ribir is an open-source Rust GUI framework that helps you build beautiful and native multi-platform applications from a single codebase."}),"\n",(0,n.jsx)(i.p,{children:"The architecture overview of Ribir:"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:t(7420).Z+"",width:"701",height:"728"})}),"\n",(0,n.jsx)(i.h2,{id:"build-your-ui-non-intrusive",children:"Build your UI non-intrusive"}),"\n",(0,n.jsx)(i.p,{children:"The most important goal of Ribir is to let you build your UI directly based on your data structure APIs. Any data mutation will trigger a precise UI update. Your focus should be on designing your data structure and its APIs. Then, you can describe your data's UI without intruding on its logic."}),"\n",(0,n.jsx)(i.p,{children:"You can abstract your App data structure first and then describe your UI based on its APIs. This process does not necessitate any pre-design of the data structure."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"No additional states"}),"\n",(0,n.jsx)(i.li,{children:"No additional notification mechanisms"}),"\n",(0,n.jsx)(i.li,{children:"No inheritance of any base classes"}),"\n",(0,n.jsx)(i.li,{children:"No other pre-constraints."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"why-rust",children:"Why Rust?"}),"\n",(0,n.jsx)(i.p,{children:"Building a high-performance cross-platform framework that compiles natively, we had two options within our purview: C++ and Rust."}),"\n",(0,n.jsx)(i.p,{children:"Initially, we were more inclined to choose C++, because C++ has a more mature ecosystem, and we have years of experience in developing large tools based on C++. Although we have been learning and writing Rust for many years, to be honest, we have not used it extensively in a production project. Ultimately, the two core reasons that led us to choose Rust are:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["The ",(0,n.jsx)(i.code,{children:"trait"}),": Using Rust traits to implement our non-intrusive design feels so natural."]}),"\n",(0,n.jsx)(i.li,{children:"Procedure macro: Using Rust's procedural macros for our DSL implementation eliminates the need for extra tools. When combined with Rust's toolchain, it offers an out-of-the-box solution, enhancing the overall development experience."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"what-is-the-current-status-of-ribir",children:"What is the current status of Ribir?"}),"\n",(0,n.jsx)(i.p,{children:"The goal of the first version of Ribir is to finish the core framework and answer our questions about the feasibility of the design."}),"\n",(0,n.jsx)(i.p,{children:"We use it to build examples and build some apps for our daily work. And we are satisfied with the experience of using it."}),"\n",(0,n.jsx)(i.p,{children:"Although we implemented almost all the core features in the first version of Ribir. That seems you can use it to do many things. You need to know that it is still in a very early stage:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"We only test and use it in a very limited environment"}),"\n",(0,n.jsx)(i.li,{children:"There exist several known issues, including memory leaks and performance-related concerns, that are still awaiting resolution."}),"\n",(0,n.jsx)(i.li,{children:"Many APIs may break in the next version"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"So, we are very happy to share it with you. We hope you can try it out and give us feedback. But we don't recommend you to use it in production environments yet."}),"\n",(0,n.jsx)(i.h2,{id:"the-next-step",children:"The next step"}),"\n",(0,n.jsx)(i.p,{children:"After the first version of Ribir, it's time to turn us to a more practical direction. We are confident that we will iterate quickly and stable more features that the production environment needs."}),"\n",(0,n.jsx)(i.p,{children:"The next version of Ribir will focus on the following things:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Enable WebAssembly support, so we can build web apps and share demos online."}),"\n",(0,n.jsx)(i.li,{children:"Introduce a stable and user-friendly overlay system to elegantly handle tooltips, popups, and other overlay UI elements."}),"\n",(0,n.jsx)(i.li,{children:"Stabilize the APIs of BuiltinObj and state, allowing for automatic cycle-reference breaking and memory leak prevention in most scenarios, and providing a reliable option for state unsubscribing."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"changelog",children:"Changelog"}),"\n",(0,n.jsxs)(i.p,{children:["The detailed changelog is available in the ",(0,n.jsx)(i.a,{href:"https://github.com/RibirX/Ribir/blob/master/CHANGELOG.md",children:"CHANGELOG.md"})]}),"\n",(0,n.jsx)(i.h2,{id:"feedback",children:"Feedback"}),"\n",(0,n.jsxs)(i.p,{children:["Welcome to feedback and star our repo on ",(0,n.jsx)(i.a,{href:"https://github.com/RibirX/Ribir",children:"GitHub"})]})]})}function c(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},7420:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/architecture-e1441df8563d770aec4108fd5ae0b53f.svg"},596:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/hero-banner-0b1b66c835ff2c90107672757ac7c206.png"}}]);