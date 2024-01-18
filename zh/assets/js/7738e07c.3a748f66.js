"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[881],{2805:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var i=r(5893),t=r(1151);const s={},c="\u521b\u5efa\u4e00\u4e2a Ribir \u5e94\u7528",l={id:"get_started/creating_an_application",title:"\u521b\u5efa\u4e00\u4e2a Ribir \u5e94\u7528",description:"\u8fd9\u7bc7\u6587\u6863\u5c06\u5411\u4f60\u4ecb\u7ecd\u5982\u4f55\u914d\u7f6e\u548c\u521b\u5efa\u4e00\u4e2a Ribir \u5e94\u7528\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/get_started/creating_an_application.md",sourceDirName:"get_started",slug:"/get_started/creating_an_application",permalink:"/zh/docs/get_started/creating_an_application",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Adoo",lastUpdatedAt:1705562850,formattedLastUpdatedAt:"2024\u5e741\u670818\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6df1\u5165\u7406\u89e3 Widget",permalink:"/zh/docs/get_started/widget_in_depth"},next:{title:"\u5feb\u901f\u5165\u95e8",permalink:"/zh/docs/get_started/quick_start"}},d={},a=[{value:"\u5b89\u88c5 Rust",id:"\u5b89\u88c5-rust",level:2},{value:"\u65b0\u5efa Ribir \u9879\u76ee",id:"\u65b0\u5efa-ribir-\u9879\u76ee",level:2},{value:"\u7f16\u5199 <code>main.rs</code>",id:"\u7f16\u5199-mainrs",level:2},{value:"\u8fd0\u884c\u5e94\u7528",id:"\u8fd0\u884c\u5e94\u7528",level:2},{value:"\u8fd0\u884c Ribir \u81ea\u5e26\u793a\u4f8b",id:"\u8fd0\u884c-ribir-\u81ea\u5e26\u793a\u4f8b",level:2}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u521b\u5efa\u4e00\u4e2a-ribir-\u5e94\u7528",children:"\u521b\u5efa\u4e00\u4e2a Ribir \u5e94\u7528"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u7bc7\u6587\u6863\u5c06\u5411\u4f60\u4ecb\u7ecd\u5982\u4f55\u914d\u7f6e\u548c\u521b\u5efa\u4e00\u4e2a Ribir \u5e94\u7528\u3002"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u4f60\u5c06\u4e86\u89e3"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5982\u4f55\u7f16\u5199\u548c\u542f\u52a8\u4e00\u4e2a\u7b80\u5355\u7684 ",(0,i.jsx)(n.code,{children:"Hello world!"})," \u5e94\u7528"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5b89\u88c5-rust",children:"\u5b89\u88c5 Rust"}),"\n",(0,i.jsxs)(n.p,{children:["\u9996\u5148, \u4f60\u9700\u8981\u5b89\u88c5 Rust\uff0c\u4f60\u53ef\u4ee5\u53c2\u8003 ",(0,i.jsx)(n.a,{href:"https://www.rust-lang.org/tools/install",children:"Rust \u5b98\u65b9\u6587\u6863"}),"."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u63d0\u793a"}),"\n",(0,i.jsxs)(n.p,{children:["\u76ee\u524d Ribir \u53ea\u652f\u6301 Rust nightly \u7248\u672c\u3002 \u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"rustup override set nightly"})," \u5207\u6362\u5230 nightly \u901a\u9053\u3002\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u5b89\u88c5 nightly \u901a\u9053\uff0c\u53ef\u4ee5\u67e5\u770b [rustup Channels \u6587\u6863] (",(0,i.jsx)(n.a,{href:"https://rust-lang.github.io/rustup/concepts/channels.html)%E3%80%82",children:"https://rust-lang.github.io/rustup/concepts/channels.html)\u3002"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u65b0\u5efa-ribir-\u9879\u76ee",children:"\u65b0\u5efa Ribir \u9879\u76ee"}),"\n",(0,i.jsx)(n.p,{children:"\u7136\u540e\uff0c\u6253\u5f00\u4f60\u7684\u7ec8\u7aef\uff0c\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 Rust \u9879\u76ee:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"cargo new ribir-hello-world\ncd ribir-hello-world\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u63a5\u4e0b\u6765, \u7f16\u8f91 ",(0,i.jsx)(n.code,{children:"Cargo.toml"})," \u6587\u4ef6, \u6dfb\u52a0 Ribir \u4f5c\u4e3a\u4f9d\u8d56:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'[dependencies]\nribir = "@RIBIR_VERSION"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u6216\u8005\u76f4\u63a5\u8fd0\u884c ",(0,i.jsx)(n.code,{children:'cargo add --git "https://github.com/RibirX/Ribir" ribir'})," \u8ba9 Cargo \u4e3a\u4f60\u6dfb\u52a0\u6b63\u5728\u5f00\u53d1\u4e2d\u7684\u6700\u65b0 Ribir \u7248\u672c."]}),"\n",(0,i.jsxs)(n.h2,{id:"\u7f16\u5199-mainrs",children:["\u7f16\u5199 ",(0,i.jsx)(n.code,{children:"main.rs"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u6253\u5f00\u7f16\u8f91\u5668, \u5c06 ",(0,i.jsx)(n.code,{children:"src/main.rs"})," \u6587\u4ef6\u4fee\u6539\u4e3a:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'// main.rs\nuse ribir::prelude::*;\n\nfn main() {\n  App::run(fn_widget! { @Text { text: "Hello World!" }});\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u8fd0\u884c\u5e94\u7528",children:"\u8fd0\u884c\u5e94\u7528"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"cargo run\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u606d\u559c! \u4f60\u5b8c\u6210\u4e86\u7b2c\u4e00\u4e2a Ribir \u9879\u76ee\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u8fd0\u884c-ribir-\u81ea\u5e26\u793a\u4f8b",children:"\u8fd0\u884c Ribir \u81ea\u5e26\u793a\u4f8b"}),"\n",(0,i.jsx)(n.p,{children:"\u6700\u540e\uff0cRibir \u4ed3\u5e93\u4e2d\u8fd8\u6709\u4e00\u4e9b\u5176\u4ed6\u793a\u4f8b\uff0c\u4f60\u53ef\u4ee5\u514b\u9686 Git \u4ed3\u5e93:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"git clone git@github.com:RibirX/Ribir.git\ncd Ribir/Ribir\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5e76\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u4e4b\u4e00\u8fd0\u884c\u793a\u4f8b:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"cargo run -p counter\ncargo run -p storybook\ncargo run -p messages\ncargo run -p todos\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>c});var i=r(7294);const t={},s=i.createContext(t);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);