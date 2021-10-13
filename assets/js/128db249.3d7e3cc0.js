"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[22355],{7557:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return m},default:function(){return f}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=n(31137),l=n(71871),s=["components"],c={},u="Example Tests",d={unversionedId:"guide/schema/examples",id:"guide/schema/examples",isDocsHomePage:!1,title:"Example Tests",description:"We saw in the previous section how you can call() or post() function requests. We also",source:"@site/external/wasp/documentation/docs/guide/schema/examples.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/examples",permalink:"/wasp/guide/schema/examples",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Testing Smart Contracts",permalink:"/wasp/guide/schema/test"},next:{title:"Colored Tokens and Time Locks",permalink:"/wasp/guide/schema/timelock"}},m=[],p={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"example-tests"},"Example Tests"),(0,o.kt)("p",null,"We saw in the previous section how you can call() or post() function requests. We also\ncreated a few wrapper functions to simplify calling these functions even further. Now we\nwill look at how to use the SoloContext to create full-blown tests for the\n",(0,o.kt)("inlineCode",{parentName:"p"},"dividend")," example smart contract."),(0,o.kt)("p",null,"Let's start with a simple test. We're going to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"member")," function to add a valid\nnew member/factor combination to the member group."),(0,o.kt)(i.Z,{defaultValue:"go",values:[{label:"Go",value:"go"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func TestAddMemberOk(t *testing.T) {\n    ctx := wasmsolo.NewSoloContext(t, dividend.ScName, dividend.OnLoad)\n\n    member1 := ctx.NewSoloAgent()\n    dividendMember(ctx, member1, 100)\n    require.NoError(t, ctx.Err)\n}\n")))),(0,o.kt)("p",null,"The above test first deploys the ",(0,o.kt)("inlineCode",{parentName:"p"},"dividend")," smart contract to a new chain and returns a\nSoloContext ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx"),". Then it uses ctx to create a new SoloAgent. A SoloAgent is an actor\nwith its own Tangle address, which contains solo.Saldo tokens. The SoloAgent can be used\nwhenever an address or agent ID needs to be provided, it can be used to sign a token\ntransfer from its address, and can be used to inspect the balance of tokens on the\naddress."),(0,o.kt)("p",null,"In this case we simply create ",(0,o.kt)("inlineCode",{parentName:"p"},"member"),", and pass it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"member")," function, which will\nreceive the address of member1 and a dispersal factor of 100. Finally, we check if ctx has\nreceived an error during the execution of the call. Remember that the only way to pass an\nerror from a WasmLib function call is through a panic() call. The code that handles the\nactual call will intercept any panic() that was raised and return an error in that case.\nThe SoloContext saves this error for later inspection, because the function descriptor\nused in the call itself has no way of passing back this error."),(0,o.kt)("p",null,"The next two example tests each call the same ",(0,o.kt)("inlineCode",{parentName:"p"},"member")," function in the exact same way, but\nin both cases one required parameter is omitted. The idea is to test that the function\nproperly panics by checking the ctx.Err value is not nil after the call. Finally, the\nerror message text is checked to contain the correct error message."),(0,o.kt)(i.Z,{defaultValue:"go",values:[{label:"Go",value:"go"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func TestAddMemberFailMissingAddress(t *testing.T) {\n    ctx := wasmsolo.NewSoloContext(t, dividend.ScName, dividend.OnLoad)\n\n    member := dividend.ScFuncs.Member(ctx)\n    member.Params.Factor().SetValue(100)\n    member.Func.TransferIotas(1).Post()\n    require.Error(t, ctx.Err)\n    require.True(t, strings.HasSuffix(ctx.Err.Error(), "missing mandatory address"))\n}\n\nfunc TestAddMemberFailMissingFactor(t \\*testing.T) {\n    ctx := wasmsolo.NewSoloContext(t, dividend.ScName, dividend.OnLoad)\n\n    member1 := ctx.NewSoloAgent()\n    f := dividend.ScFuncs.Member(ctx)\n    f.Params.Address().SetValue(member1.ScAddress())\n    f.Func.TransferIotas(1).Post()\n    require.Error(t, ctx.Err)\n    require.True(t, strings.HasSuffix(ctx.Err.Error(), "missing mandatory factor"))\n}\n')))),(0,o.kt)("p",null,"Notice how each test has to set up the chain/contract/context from scratch. We will often\nuse a specific setupTest() function to do all setup work that is shared by many tests."),(0,o.kt)("p",null,"Also notice how we cannot use the ",(0,o.kt)("inlineCode",{parentName:"p"},"dividendMember")," wrapper function in these two tests\nbecause of the missing required function parameters. So we have copy/pasted the code and\nremoved the Params initialization we wanted to be missing."),(0,o.kt)("p",null,"Now let's see a more complex example:"),(0,o.kt)(i.Z,{defaultValue:"go",values:[{label:"Go",value:"go"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func TestDivide1Member(t *testing.T) {\n    ctx := wasmsolo.NewSoloContext(t, dividend.ScName, dividend.OnLoad)\n\n    member1 := ctx.NewSoloAgent()\n    dividendMember(ctx, member1, 100)\n    require.NoError(t, ctx.Err)\n\n    require.EqualValues(t, 1, ctx.Balance(nil))\n\n    dividendDivide(ctx, 99)\n    require.NoError(t, ctx.Err)\n\n    // 99 from divide() + 1 from the member() call\n    require.EqualValues(t, solo.Saldo+100, member1.Balance())\n    require.EqualValues(t, 0, ctx.Balance(nil))\n}\n")))),(0,o.kt)("p",null,"The first half of the code is identical to our first test above. We set up the test,\ncreate an agent, set the factor for that agent to 100, and verify that no error occurred.\nThen in the next line we verify that the smart contract associated with ctx now holds a\nbalance of 1 iota. This is the token that was transferred as part of the Post() request\ninside the dividendMember() function."),(0,o.kt)("p",null,"Next we transfer 99 iotas as part of thePost() request to the ",(0,o.kt)("inlineCode",{parentName:"p"},"divide")," function. We\nsubsequently check that no error has occurred. Finally, we expect the balance of member1\naddress to have increased by the total of 100 tokens that were stored in the\n",(0,o.kt)("inlineCode",{parentName:"p"},"dividend")," smart contract account, as 100/100th of the tokens should have been sent to\nmember1. And the contract account should end up empty."),(0,o.kt)("p",null,"Now let's skip to the most complex test of all:"),(0,o.kt)(i.Z,{defaultValue:"go",values:[{label:"Go",value:"go"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func TestDivide3Members(t *testing.T) {\n    ctx := wasmsolo.NewSoloContext(t, dividend.ScName, dividend.OnLoad)\n\n    member1 := ctx.NewSoloAgent()\n    dividendMember(ctx, member1, 25)\n    require.NoError(t, ctx.Err)\n\n    member2 := ctx.NewSoloAgent()\n    dividendMember(ctx, member2, 50)\n    require.NoError(t, ctx.Err)\n\n    member3 := ctx.NewSoloAgent()\n    dividendMember(ctx, member3, 75)\n    require.NoError(t, ctx.Err)\n\n    require.EqualValues(t, 3, ctx.Balance(nil))\n\n    dividendDivide(ctx, 97)\n    require.NoError(t, ctx.Err)\n\n    // 97 from divide() + 3 from the member() calls\n    require.EqualValues(t, solo.Saldo+16, member1.Balance())\n    require.EqualValues(t, solo.Saldo+33, member2.Balance())\n    require.EqualValues(t, solo.Saldo+50, member3.Balance())\n    // 1 remaining due to fractions\n    require.EqualValues(t, 1, ctx.Balance(nil))\n}\n")))),(0,o.kt)("p",null,"This function creates 3 agents, and associates factors of 25, 50, and 75, respectively, to\nthem. Since that required 3 ",(0,o.kt)("inlineCode",{parentName:"p"},"member")," requests, the contract account should now contain 3\niotas. Next the ",(0,o.kt)("inlineCode",{parentName:"p"},"divide")," function is called, with 97 iotas passed to it, for a total of\n100 into the contract account."),(0,o.kt)("p",null,"After this we verify that each agent has been distributed tokens according to its relative\nfactor. Those factors are 25/150th, 50/150th, and 75/150th, respectively. Note that we\ncannot transfer fractional tokens, so we truncate to the nearest integer and ultimately\nare left with 1 iota in the contract account. This 1 iota will be part of the dispersal\namount when the next ",(0,o.kt)("inlineCode",{parentName:"p"},"divide")," call request is executed."),(0,o.kt)("p",null,"We can test this behavior by adding extra calls to ",(0,o.kt)("inlineCode",{parentName:"p"},"divide")," at the end of this test like\nthis:"),(0,o.kt)(i.Z,{defaultValue:"go",values:[{label:"Go",value:"go"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"    dividendDivide(ctx, 100)\n    require.NoError(t, ctx.Err)\n\n    // 100 from divide() + 1 remaining\n    require.EqualValues(t, solo.Saldo+16+16, member1.Balance())\n    require.EqualValues(t, solo.Saldo+33+33, member2.Balance())\n    require.EqualValues(t, solo.Saldo+50+50, member3.Balance())\n    // now we have 2 remaining due to fractions\n    require.EqualValues(t, 2, ctx.Balance(nil))\n\n    dividendDivide(ctx, 100)\n    require.NoError(t, ctx.Err)\n\n    // 100 from divide() + 2 remaining\n    require.EqualValues(t, solo.Saldo+16+16+17, member1.Balance())\n    require.EqualValues(t, solo.Saldo+33+33+34, member2.Balance())\n    require.EqualValues(t, solo.Saldo+50+50+51, member3.Balance())\n    // managed to give every one an exact integer amount, so no remainder\n    require.EqualValues(t, 0, ctx.Balance(nil))\n")))),(0,o.kt)("p",null,"Note how after the final ",(0,o.kt)("inlineCode",{parentName:"p"},"divide")," call we ended up with the exact amounts to disperse,\nso no remainder iotas were left in the contract account."),(0,o.kt)("p",null,"Also note how each divide is cumulative to the balances of the members. We have\nhighlighted this by indicating the separate increases after every ",(0,o.kt)("inlineCode",{parentName:"p"},"divide")," call."),(0,o.kt)("p",null,"Finally, we will show how to test Views and/or Funcs that return a result. Since solo\nexecutes post() requests synchronously it is possible to have a Func return a result and\ntest for certain result values"),(0,o.kt)(i.Z,{defaultValue:"go",values:[{label:"Go",value:"go"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func TestGetFactor(t *testing.T) {\n    ctx := wasmsolo.NewSoloContext(t, dividend.ScName, dividend.OnLoad)\n\n    member1 := ctx.NewSoloAgent()\n    dividendMember(ctx, member1, 25)\n    require.NoError(t, ctx.Err)\n\n    member2 := ctx.NewSoloAgent()\n    dividendMember(ctx, member2, 50)\n    require.NoError(t, ctx.Err)\n\n    member3 := ctx.NewSoloAgent()\n    dividendMember(ctx, member3, 75)\n    require.NoError(t, ctx.Err)\n\n    require.EqualValues(t, 3, ctx.Balance(nil))\n\n    value := dividendGetFactor(ctx, member3)\n    require.NoError(t, ctx.Err)\n    require.EqualValues(t, 75, value)\n\n    value = dividendGetFactor(ctx, member2)\n    require.NoError(t, ctx.Err)\n    require.EqualValues(t, 50, value)\n\n    value = dividendGetFactor(ctx, member1)\n    require.NoError(t, ctx.Err)\n    require.EqualValues(t, 25, value)\n}\n")))),(0,o.kt)("p",null,"Here we first set up the same 3 dispersion factors, and then we retrieve the dispersion\nfactors for each member in reverse order and verify its value."),(0,o.kt)("p",null,"In the next section we will describe a few more helper member functions of the\nSoloContext."))}f.isMDXComponent=!0},71871:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},31137:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),a=n(54179);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var c=function(e){var t,n=e.lazy,a=e.block,c=e.defaultValue,u=e.values,d=e.groupId,m=e.className,p=r.Children.toArray(e.children),f=null!=u?u:p.map((function(e){return{value:e.props.value,label:e.props.label}})),h=null!=c?c:null==(t=p.find((function(e){return e.props.default})))?void 0:t.props.value,v=o(),b=v.tabGroupChoices,g=v.setTabGroupChoices,x=(0,r.useState)(h),w=x[0],k=x[1],y=[];if(null!=d){var N=b[d];null!=N&&N!==w&&f.some((function(e){return e.value===N}))&&k(N)}var E=function(e){var t=e.currentTarget,n=y.indexOf(t),r=f[n].value;k(r),null!=d&&(g(d,r),setTimeout((function(){var e,n,r,a,o,i,l,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,l=i.innerHeight,c=i.innerWidth,n>=0&&o<=c&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=y.indexOf(e.target)+1;n=y[r]||y[0];break;case"ArrowLeft":var a=y.indexOf(e.target)-1;n=y[a]||y[y.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},m)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":w===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:T,onFocus:E,onClick:E},null!=n?n:t)}))),n?(0,r.cloneElement)(p.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},p.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},54179:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);