"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[62425],{69203:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var o=n(87462),r=n(63366),s=(n(67294),n(3905)),a=["components"],i={description:"How to bootstrap the Chrysalis Phase 2 Hornet node from the Genesis Snapshot.",image:"/img/Banner/banner_hornet_genesis_snapshot.png",keywords:["IOTA Node","Hornet Node","genesis snapshot","Chrysalis Phase 2","bootstrap network","how to"]},p="Bootstrapping the Chrysalis Phase 2 Hornet Node From the Genesis Snapshot",l={unversionedId:"how_tos/bootstrap_from_a_genesis_snapshot",id:"how_tos/bootstrap_from_a_genesis_snapshot",title:"Bootstrapping the Chrysalis Phase 2 Hornet Node From the Genesis Snapshot",description:"How to bootstrap the Chrysalis Phase 2 Hornet node from the Genesis Snapshot.",source:"@site/content/build/hornet/production/documentation/docs/how_tos/bootstrap_from_a_genesis_snapshot.md",sourceDirName:"how_tos",slug:"/how_tos/bootstrap_from_a_genesis_snapshot",permalink:"/hornet/how_tos/bootstrap_from_a_genesis_snapshot",draft:!1,editUrl:"https://github.com/gohornet/hornet/edit/mainnet/documentation/content/build/hornet/production/documentation/docs/how_tos/bootstrap_from_a_genesis_snapshot.md",tags:[],version:"current",frontMatter:{description:"How to bootstrap the Chrysalis Phase 2 Hornet node from the Genesis Snapshot.",image:"/img/Banner/banner_hornet_genesis_snapshot.png",keywords:["IOTA Node","Hornet Node","genesis snapshot","Chrysalis Phase 2","bootstrap network","how to"]},sidebar:"mySidebar",previous:{title:"Using Docker Compose",permalink:"/hornet/how_tos/using_docker_compose"},next:{title:"Private Tangle",permalink:"/hornet/how_tos/private_tangle"}},h={},c=[],u={toc:c};function d(e){var t=e.components,i=(0,r.Z)(e,a);return(0,s.kt)("wrapper",(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"bootstrapping-the-chrysalis-phase-2-hornet-node-from-the-genesis-snapshot"},"Bootstrapping the Chrysalis Phase 2 Hornet Node From the Genesis Snapshot"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Hornet Node Snapshot",src:n(15777).Z,width:"862",height:"200"})),(0,s.kt)("p",null,"Please follow these instructions to bootstrap the Chrysalis Phase 2 Hornet node from the Genesis Snapshot:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Rename the ",(0,s.kt)("inlineCode",{parentName:"li"},"genesis_snapshot.bin")," file to ",(0,s.kt)("inlineCode",{parentName:"li"},"full_snapshot.bin"),"."),(0,s.kt)("li",{parentName:"ol"},"Make sure your C2 (Chrysalis Phase 2) Hornet node has no database and no prior snapshot files."),(0,s.kt)("li",{parentName:"ol"},"Place the ",(0,s.kt)("inlineCode",{parentName:"li"},"full_snapshot.bin")," file in the directory as defined in the ",(0,s.kt)("inlineCode",{parentName:"li"},"snapshots.fullPath")," config option (this option contains the full path including the file name)."),(0,s.kt)("li",{parentName:"ol"},"Adjust ",(0,s.kt)("inlineCode",{parentName:"li"},"protocol.networkID")," to the same value as used in the ",(0,s.kt)("inlineCode",{parentName:"li"},'-genesis-snapshot-file-network-id="<network-id-for-chrysalis-phase-2>"')," flag. This step may not be necessary as the C2 Hornet version will ship with the appropriate default values."),(0,s.kt)("li",{parentName:"ol"},"Control that the corresponding ",(0,s.kt)("inlineCode",{parentName:"li"},"protocol.publicKeyRanges")," are correct."),(0,s.kt)("li",{parentName:"ol"},"Start your C2 Hornet node and add peers using the dashboard.")))}d.isMDXComponent=!0},15777:function(e,t,n){t.Z=n.p+"assets/images/banner_hornet_genesis_snapshot-2331de30d1396a6717eab265b1a76184.png"},3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},h=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,f=u["".concat(p,".").concat(d)]||u[d]||c[d]||s;return n?o.createElement(f,a(a({ref:t},h),{},{components:n})):o.createElement(f,a({ref:t},h))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);