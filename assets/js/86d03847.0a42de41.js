"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[9637],{4702:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return m},default:function(){return u}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=["components"],s={keywords:["ISCP","Smart Contracts","EVM","Solidity"],description:"EVM based smart contracts",image:"/img/logo/WASP_logo_dark.png"},c="EVM/Solidity based smart contracts",l={unversionedId:"guide/evm/introduction",id:"guide/evm/introduction",isDocsHomePage:!1,title:"EVM/Solidity based smart contracts",description:"EVM based smart contracts",source:"@site/external/wasp/documentation/docs/guide/evm/introduction.md",sourceDirName:"guide/evm",slug:"/guide/evm/introduction",permalink:"/wasp/guide/evm/introduction",tags:[],version:"current",frontMatter:{keywords:["ISCP","Smart Contracts","EVM","Solidity"],description:"EVM based smart contracts",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Colored Tokens and Time Locks",permalink:"/wasp/guide/schema/timelock"},next:{title:"EVM Limitations within ISCP",permalink:"/wasp/guide/evm/limitations"}},m=[{value:"What is EVM / Solidity",id:"what-is-evm--solidity",children:[]},{value:"How ISCP works with EVM",id:"how-iscp-works-with-evm",children:[]}],p={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"evmsolidity-based-smart-contracts"},"EVM/Solidity based smart contracts"),(0,i.kt)("p",null,"Next to the WASM based smart contracts ISCP has to offer, the current release of ISCP also has experimental support for EVM / Solidity smart contracts as well. This means that existing smart contracts and tooling from other EVM based chains like Ethereum are fully compatible with EVM chains running on ISCP. This allows us to offer the existing ecosystem around EVM/Solidity a familiar alternative."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This experimental implementation currently does not have the ability yet to interact with Layer 1 IOTA tokens. We will bring support for this in a later release."))),(0,i.kt)("h3",{id:"what-is-evm--solidity"},"What is EVM / Solidity"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/evm/"},"EVM"),' stands for "Ethereum Virtual Machine" which currently is the tried and proven virtual machine running most smart contract implementations. ',(0,i.kt)("a",{parentName:"p",href:"https://soliditylang.org/"},"Solidity")," is the programming language of choice with EVM and has been created for this specific purpose.\nThe main benefit of using EVM / Solidity right now is the sheer amount of resources available for it from years of development and experimentation on Ethereum. There are many articles, tutorials, examples and tools available for EVM / Solidity and the ISCP implementation is fully compatible with it. If you have experience developing on other EVM based chains you will feel right at home and any existing contracts you've written probably need no or very minimal changes to function on ISCP as well."),(0,i.kt)("h3",{id:"how-iscp-works-with-evm"},"How ISCP works with EVM"),(0,i.kt)("p",null,"With ISCP, an EVM based chain runs inside a ISCP chain as a ISCP smart contract. It is possible to run both WASM based smart contracts and a EVM chain in a single ISCP chain because of this. We offer a EVM compatible JSON / RPC server as part of the ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp-cli")," which allows you to connect to these EVM Chains using existing tooling like ",(0,i.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask"),", ",(0,i.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix")," or ",(0,i.kt)("a",{parentName:"p",href:"https://hardhat.org/"},"Hardhat"),". Deploying to a new EVM chain is as easy as pointing your tools to the address of your JSON / RPC gateway."))}u.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,h=u["".concat(c,".").concat(d)]||u[d]||p[d]||i;return n?r.createElement(h,o(o({ref:t},m),{},{components:n})):r.createElement(h,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);