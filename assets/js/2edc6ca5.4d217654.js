"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[479],{1012:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=t(5893),r=t(1151);const a={sidebar_position:2},s="Creating an application",l={id:"get_started/creating_an_application",title:"Creating an application",description:"You will learn",source:"@site/docs/get_started/creating_an_application.md",sourceDirName:"get_started",slug:"/get_started/creating_an_application",permalink:"/docs/get_started/creating_an_application",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"RChangelog[bot]",lastUpdatedAt:1705562102,formattedLastUpdatedAt:"Jan 18, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Quick Start",permalink:"/docs/get_started/quick_start"},next:{title:"Widget in depth",permalink:"/docs/get_started/widget_in_depth"}},o={},c=[{value:"Install Rust",id:"install-rust",level:2},{value:"Create a new Ribir project",id:"create-a-new-ribir-project",level:2},{value:"Start writing <code>main.rs</code>",id:"start-writing-mainrs",level:2},{value:"Run the application",id:"run-the-application",level:2},{value:"Run Ribir&#39;s built-in examples",id:"run-ribirs-built-in-examples",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"creating-an-application",children:"Creating an application"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"You will learn"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["How to write and start a simple ",(0,i.jsx)(n.code,{children:"Hello world!"})," application"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"install-rust",children:"Install Rust"}),"\n",(0,i.jsxs)(n.p,{children:["At first, you need to install Rust, you can reference the ",(0,i.jsx)(n.a,{href:"https://www.rust-lang.org/tools/install",children:"official documentation"}),"."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Tips"}),"\n",(0,i.jsxs)(n.p,{children:["Currently Ribir only supports Rust nightly channel. You can use ",(0,i.jsx)(n.code,{children:"rustup override set nightly"})," to switch to nightly channel. If you haven't installed nightly channel yet, you can check out ",(0,i.jsx)(n.a,{href:"https://rust-lang.github.io/rustup/concepts/channels.html",children:"rustup Channels documentation"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"create-a-new-ribir-project",children:"Create a new Ribir project"}),"\n",(0,i.jsx)(n.p,{children:"Then, open your terminal and create a new Rust project:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"cargo new ribir-hello-world\ncd ribir-hello-world\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Next, edit the ",(0,i.jsx)(n.code,{children:"Cargo.toml"})," file and add Ribir as a dependency:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'[dependencies]\nribir = "@RIBIR_VERSION"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Or you can directly run ",(0,i.jsx)(n.code,{children:'cargo add --git "https://github.com/RibirX/Ribir" ribir'})," to let Cargo add the latest Ribir version that is under development for you."]}),"\n",(0,i.jsxs)(n.h2,{id:"start-writing-mainrs",children:["Start writing ",(0,i.jsx)(n.code,{children:"main.rs"})]}),"\n",(0,i.jsxs)(n.p,{children:["Open your editor and modify the ",(0,i.jsx)(n.code,{children:"src/main.rs"})," file to:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'// main.rs\nuse ribir::prelude::*;\n\nfn main() {\n  App::run(fn_widget! { @Text { text: "Hello World!" }});\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"run-the-application",children:"Run the application"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"cargo run\n"})}),"\n",(0,i.jsx)(n.p,{children:"Congratulations! You have completed your first Ribir project."}),"\n",(0,i.jsx)(n.h2,{id:"run-ribirs-built-in-examples",children:"Run Ribir's built-in examples"}),"\n",(0,i.jsx)(n.p,{children:"Finally, there are some other examples in the Ribir repository, you can clone the Git repository:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"git clone git@github.com:RibirX/Ribir.git\ncd Ribir/Ribir\n"})}),"\n",(0,i.jsx)(n.p,{children:"and run the examples with one of the following commands:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"cargo run -p counter\ncargo run -p storybook\ncargo run -p messages\ncargo run -p todos\ncargo run -p worle_game\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var i=t(7294);const r={},a=i.createContext(r);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);