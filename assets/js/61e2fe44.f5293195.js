"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[9132],{19739:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),c=["components"],s={description:"The `accounts` contract keeps a consistent ledger of on-chain accounts in its state for the agents that control them. There are two types of agents who can do it, L1 addresses and smart contracts.",image:"/img/logo/WASP_logo_dark.png",keywords:["core contracts","accounts","deposit","withdraw","assets","balance","reference"]},i="The `accounts` Contract",l={unversionedId:"guide/core_concepts/core_contracts/accounts",id:"guide/core_concepts/core_contracts/accounts",title:"The `accounts` Contract",description:"The `accounts` contract keeps a consistent ledger of on-chain accounts in its state for the agents that control them. There are two types of agents who can do it, L1 addresses and smart contracts.",source:"@site/content/build/wasp/develop/documentation/docs/guide/core_concepts/core_contracts/accounts.md",sourceDirName:"guide/core_concepts/core_contracts",slug:"/guide/core_concepts/core_contracts/accounts",permalink:"/smart-contracts/guide/core_concepts/core_contracts/accounts",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/core_concepts/core_contracts/accounts.md",tags:[],version:"current",frontMatter:{description:"The `accounts` contract keeps a consistent ledger of on-chain accounts in its state for the agents that control them. There are two types of agents who can do it, L1 addresses and smart contracts.",image:"/img/logo/WASP_logo_dark.png",keywords:["core contracts","accounts","deposit","withdraw","assets","balance","reference"]},sidebar:"tutorialSidebar",previous:{title:"The `_default` Contract",permalink:"/smart-contracts/guide/core_concepts/core_contracts/default"},next:{title:"The `blob` Contract",permalink:"/smart-contracts/guide/core_concepts/core_contracts/blob"}},u={},d=[{value:"Entry Points",id:"entry-points",level:2},{value:"deposit",id:"deposit",level:3},{value:"withdraw",id:"withdraw",level:3},{value:"harvest",id:"harvest",level:3},{value:"Views",id:"views",level:2},{value:"accounts",id:"accounts",level:3},{value:"balance",id:"balance",level:3},{value:"totalAssets",id:"totalassets",level:3}],p={toc:d};function h(t){var e=t.components,n=(0,a.Z)(t,c);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-accounts-contract"},"The ",(0,r.kt)("inlineCode",{parentName:"h1"},"accounts")," Contract"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"accounts")," contract is one of the ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/overview"},"core contracts")," on each IOTA Smart Contracts\nchain."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"accounts")," contract keeps a consistent ledger of on-chain accounts in its state for the agents that control them. There are two types of agents who can do it: L1 addresses and smart contracts."),(0,r.kt)("h2",{id:"entry-points"},"Entry Points"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"accounts")," contract provides functions to deposit and withdraw tokens, and also provides information about the assets deposited on the chain.  "),(0,r.kt)("p",null,"Note that the ledger of accounts on the chain is consistently maintained behind scenes by the VM."),(0,r.kt)("h3",{id:"deposit"},"deposit"),(0,r.kt)("p",null,"Moves tokens attached as a transfer to a target account on the chain. By default, the funds are deposited to the caller account. Optionally, a different target account can be specified with the agent ID parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"a"),"."),(0,r.kt)("h3",{id:"withdraw"},"withdraw"),(0,r.kt)("p",null,"Moves all tokens from the caller's on-chain account to another chain, or to an address on L1. It cannot be used to move tokens within the current chain."),(0,r.kt)("h3",{id:"harvest"},"harvest"),(0,r.kt)("p",null,'Moves tokens from the common "default" account controlled by the chain owner, to the proper owner\'s account on the same chain. This entry point is only authorised to whoever owns the chain.'),(0,r.kt)("h2",{id:"views"},"Views"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"accounts")," contract provides a front-end of authorized access to those accounts for users outside the chain."),(0,r.kt)("h3",{id:"accounts"},"accounts"),(0,r.kt)("p",null,"Returns a list of all non-empty accounts in the chain as a list of serialized ",(0,r.kt)("inlineCode",{parentName:"p"},"agent IDs"),"."),(0,r.kt)("h3",{id:"balance"},"balance"),(0,r.kt)("p",null,"Returns the colored token balances that are controlled by the ",(0,r.kt)("inlineCode",{parentName:"p"},"agent ID")," that was specified in the call parameters. It returns the balances as a dictionary of ",(0,r.kt)("inlineCode",{parentName:"p"},"color: amount")," pairs."),(0,r.kt)("h3",{id:"totalassets"},"totalAssets"),(0,r.kt)("p",null,"Returns the colored balances controlled by the chain. They are always equal to the sum of all on-chain accounts, color-by-color."))}h.isMDXComponent=!0},3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return h}});var o=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=o.createContext({}),l=function(t){var e=o.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},u=function(t){var e=l(t.components);return o.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,i=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=l(n),h=a,f=p["".concat(i,".").concat(h)]||p[h]||d[h]||r;return n?o.createElement(f,c(c({ref:e},u),{},{components:n})):o.createElement(f,c({ref:e},u))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,c=new Array(r);c[0]=p;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:a,c[1]=s;for(var l=2;l<r;l++)c[l]=n[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);