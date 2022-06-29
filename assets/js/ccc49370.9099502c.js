"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[46103,27918],{77746:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(67294),r=n(86010),l=n(58417),o=n(21185),i=n(25103),c=n(73907),s=n(87462),m=n(67176),u=n(80187);function d(e){var t=e.nextItem,n=e.prevItem;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,m.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(u.Z,(0,s.Z)({},n,{subLabel:a.createElement(m.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(u.Z,(0,s.Z)({},t,{subLabel:a.createElement(m.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}var g=n(28690);function v(e){var t,n=e.content,r=n.assets,o=n.metadata,i=o.title,c=o.description,s=o.date,m=o.tags,u=o.authors,d=o.frontMatter,g=d.keywords,v=null!=(t=r.image)?t:d.image;return a.createElement(l.d,{title:i,description:c,keywords:g,image:v},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:s}),u.some((function(e){return e.url}))&&a.createElement("meta",{property:"article:author",content:u.map((function(e){return e.url})).filter(Boolean).join(",")}),m.length>0&&a.createElement("meta",{property:"article:tag",content:m.map((function(e){return e.label})).join(",")}))}function f(e){var t=e.content,n=e.sidebar,r=t.assets,l=t.metadata,o=l.nextItem,s=l.prevItem,m=l.frontMatter,u=m.hide_table_of_contents,v=m.toc_min_heading_level,f=m.toc_max_heading_level;return a.createElement(i.Z,{sidebar:n,toc:!u&&t.toc&&t.toc.length>0?a.createElement(g.Z,{toc:t.toc,minHeadingLevel:v,maxHeadingLevel:f}):void 0},a.createElement(c.Z,{frontMatter:m,assets:r,metadata:l,isBlogPostPage:!0},a.createElement(t,null)),(o||s)&&a.createElement(d,{nextItem:o,prevItem:s}))}function p(e){return a.createElement(l.FG,{className:(0,r.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage)},a.createElement(v,e),a.createElement(f,e))}},28690:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),r=n(63366),l=n(67294),o=n(86010),i=n(50985),c="tableOfContents_bqdL",s=["className"];function m(e){var t=e.className,n=(0,r.Z)(e,s);return l.createElement("div",{className:(0,o.Z)(c,"thin-scrollbar",t)},l.createElement(i.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},50985:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(87462),r=n(63366),l=n(67294),o=["parentIndex"];function i(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var a=[];return t.forEach((function(e){var n=e.parentIndex,l=(0,r.Z)(e,o);n>=0?t[n].children.push(l):a.push(l)})),a}function c(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}var s=n(86328);function m(e){var t=e.getBoundingClientRect();return t.top===t.bottom?m(e.parentNode):t}function u(e,t){var n,a,r=t.anchorTopOffset,l=e.find((function(e){return m(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(m(l))?l:null!=(a=e[e.indexOf(l)-1])?a:null:null!=(n=e[e.length-1])?n:null}function d(){var e=(0,l.useRef)(0),t=(0,s.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function g(e){var t=(0,l.useRef)(void 0),n=d();(0,l.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,o=e.maxHeadingLevel;function i(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),c=u(i,{anchorTopOffset:n.current}),s=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),function(){document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function v(e){var t=e.toc,n=e.className,a=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(v,{isChild:!0,toc:e.children,className:n,linkClassName:a}))}))):null}var f=l.memo(v),p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function b(e){var t=e.toc,n=e.className,o=void 0===n?"table-of-contents table-of-contents__left-border":n,m=e.linkClassName,u=void 0===m?"table-of-contents__link":m,d=e.linkActiveClassName,v=void 0===d?void 0:d,b=e.minHeadingLevel,h=e.maxHeadingLevel,E=(0,r.Z)(e,p),N=(0,s.L)(),L=null!=b?b:N.tableOfContents.minHeadingLevel,_=null!=h?h:N.tableOfContents.maxHeadingLevel,P=function(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,l.useMemo)((function(){return c({toc:i(t),minHeadingLevel:n,maxHeadingLevel:a})}),[t,n,a])}({toc:t,minHeadingLevel:L,maxHeadingLevel:_});return g((0,l.useMemo)((function(){if(u&&v)return{linkClassName:u,linkActiveClassName:v,minHeadingLevel:L,maxHeadingLevel:_}}),[u,v,L,_])),l.createElement(f,(0,a.Z)({toc:P,className:o,linkClassName:u},E))}},73907:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(67294),r=n(86010),l=n(3905),o=n(67176),i=n(19372),c=n(35555),s=n(10385),m=n(20436),u=n(70772),d={blogHeader:"blogHeader_DLm6",blogPostTitle:"blogPostTitle_uMeh",blogPost__body:"blogPost__body_teCM",blogPostData:"blogPostData_Vfxe",blogPostDetailsFull:"blogPostDetailsFull_enUA",blogPostDataContainer:"blogPostDataContainer_yN0d"},g=n(43311),v=n(57484);var f=function(e){var t,n,f,p,b=(f=(0,s.c)().selectMessage,function(e){var t=Math.ceil(e);return f(t,(0,o.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),h=(0,c.C)().withBaseUrl,E=e.children,N=e.frontMatter,L=e.assets,_=e.metadata,P=e.truncated,Z=e.isBlogPostPage,x=void 0!==Z&&Z,k=_.date,H=_.formattedDate,C=_.permalink,y=_.tags,w=_.readingTime,T=_.title,M=_.editUrl,I=_.authors,A=null!=(t=L.image)?t:N.image,O=N.url;return a.createElement("article",{className:x?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(p=x?"h1":"h2",a.createElement("header",{className:d.blogHeader},a.createElement(p,{className:d.blogPostTitle,itemProp:"headline"},x?T:a.createElement(i.Z,{itemProp:"url",to:O||C},T)),a.createElement("div",{className:"row row--no-gutters"},a.createElement("div",{className:"col"},a.createElement(v.Z,{authors:I,assets:L})),a.createElement("div",{className:(0,r.Z)(d.blogPostData,"margin-vert--md","col")},a.createElement("div",{className:d.blogPostDataContainer},a.createElement("time",{dateTime:k,itemProp:"datePublished"},H),void 0!==w&&a.createElement(a.Fragment,null," \xb7 ",b(w))))))),A&&a.createElement("meta",{itemProp:"image",content:h(A,{absolute:!0})}),a.createElement("div",{className:(0,r.Z)("markdown",[d.blogPost__body]),itemProp:"articleBody"},a.createElement(l.Zo,{components:m.Z},E)),(y.length>0||P)&&a.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(n={},n[d.blogPostDetailsFull]=x,n))},y.length>0&&a.createElement("div",{className:(0,r.Z)("col",{"col--9":!x})},a.createElement("div",{className:d.tagsList},a.createElement(g.Z,{tags:y}))),x&&M&&a.createElement("div",{className:"col margin-top--sm"},a.createElement(u.Z,{editUrl:M})),!x&&P&&a.createElement("div",{className:"col col--3 text--right"},a.createElement(i.Z,{to:_.permalink,"aria-label":"Read more about "+T},a.createElement("b",null,a.createElement(o.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},70772:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(67176),l=n(31722),o=n(45916);function i(e){var t=e.editUrl,n=function(e){var t=new RegExp("content/build/[^/]*/[^/]*/[^/]*/|external/[^/]*/","i");return e.replace(t,"")}(t);return a.createElement(a.Fragment,null,function(e){return new RegExp("content/build/[^/]*/[^/]*/[^/]*/|external/[^/]*/","i").test(e)}(t)?a.createElement("a",{href:n,target:"_blank",rel:"noreferrer noopener"},a.createElement(l.Z,null),a.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page")):a.createElement(o.Z,{editUrl:t}))}}}]);