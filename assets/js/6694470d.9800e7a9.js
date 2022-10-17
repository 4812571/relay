"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[49903],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>s,MDXProvider:()=>p,mdx:()=>f,useMDXComponents:()=>c,withMDXComponents:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),m=function(e){return function(n){var t=c(n.components);return a.createElement(e,i({},n,{components:t}))}},c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=c(t),p=r,h=m["".concat(o,".").concat(p)]||m[p]||u[p]||i;return t?a.createElement(h,l(l({ref:n},s),{},{components:t})):a.createElement(h,l({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=h;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},68629:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(39960),r=t(86341),i=t(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function l(e){var n=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),n)}var d=function(){var e=i.useState(!1),n=e[0],t=e[1],a=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},s=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},m=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(a.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},c=function(){return i.createElement(l,null,i.createElement(s,null),i.createElement(d,null),i.createElement(m,null))},p=function(){return i.createElement(l,null,i.createElement(d,null),i.createElement(m,null))};const u=function(){return(0,r.fbContent)({internal:i.createElement(c,null),external:i.createElement(p,null)})}},27885:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>m,toc:()=>p});var a=t(83117),r=t(80102),i=(t(67294),t(3905)),o=t(68629),l=(t(86341),["components"]),d={id:"graphql-directives",title:"GraphQL Directives",slug:"/api-reference/graphql-and-directives/",description:"API Reference for GraphQL directives",keywords:["GraphQL","Directive","arguments","argumentDefinitions","connection","relay","inline"]},s=void 0,m={unversionedId:"api-reference/graphql/graphql-directives",id:"version-v13.0.0/api-reference/graphql/graphql-directives",title:"GraphQL Directives",description:"API Reference for GraphQL directives",source:"@site/versioned_docs/version-v13.0.0/api-reference/graphql/graphql-directives.md",sourceDirName:"api-reference/graphql",slug:"/api-reference/graphql-and-directives/",permalink:"/docs/v13.0.0/api-reference/graphql-and-directives/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v13.0.0/api-reference/graphql/graphql-directives.md",tags:[],version:"v13.0.0",lastUpdatedBy:"Dylan",lastUpdatedAt:1665990943,formattedLastUpdatedAt:"Oct 17, 2022",frontMatter:{id:"graphql-directives",title:"GraphQL Directives",slug:"/api-reference/graphql-and-directives/",description:"API Reference for GraphQL directives",keywords:["GraphQL","Directive","arguments","argumentDefinitions","connection","relay","inline"]},sidebar:"version-v13.0.0/docs",previous:{title:"requestSubscription",permalink:"/docs/v13.0.0/api-reference/request-subscription/"},next:{title:"Legacy APIs",permalink:"/docs/v13.0.0/api-reference/legacy-apis/"}},c={},p=[{value:"<code>@arguments</code>",id:"arguments",level:2},{value:"<code>@argumentDefinitions</code>",id:"argumentdefinitions",level:2},{value:"<code>@connection(key: String!, filters: [String])</code>",id:"connectionkey-string-filters-string",level:2},{value:"<code>@refetchable(queryName: String!)</code>",id:"refetchablequeryname-string",level:2},{value:"<code>@relay(plural: Boolean)</code>",id:"relayplural-boolean",level:2},{value:"@required",id:"required",level:2},{value:"<code>@inline</code>",id:"inline",level:2},{value:"<code>@relay(mask: Boolean)</code>",id:"relaymask-boolean",level:2}],u={toc:p};function h(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.mdx)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Relay uses directives to add additional information to GraphQL documents, which are used by the ",(0,i.mdx)("a",{parentName:"p",href:"../../guides/compiler/"},"Relay compiler")," to generate the appropriate runtime artifacts. These directives only appear in your application code and are removed from requests sent to your GraphQL server."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Note:")," The Relay compiler will maintain any directives supported by your server (such as ",(0,i.mdx)("inlineCode",{parentName:"p"},"@include")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"@skip"),") so they remain part of the request to the GraphQL server and won't alter generated runtime artifacts."),(0,i.mdx)("h2",{id:"arguments"},(0,i.mdx)("inlineCode",{parentName:"h2"},"@arguments")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"@arguments")," is a directive used to pass arguments to a fragment that was defined using ",(0,i.mdx)("a",{parentName:"p",href:"#argumentdefinitions"},(0,i.mdx)("inlineCode",{parentName:"a"},"@argumentDefinitions")),". For example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},"query TodoListQuery($userID: ID) {\n  ...TodoList_list @arguments(count: $count, userID: $userID) # Pass arguments here\n}\n")),(0,i.mdx)("h2",{id:"argumentdefinitions"},(0,i.mdx)("inlineCode",{parentName:"h2"},"@argumentDefinitions")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"@argumentDefinitions")," is a directive used to specify arguments taken by a fragment. For example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-graphql"},'fragment TodoList_list on TodoList @argumentDefinitions(\n  count: {type: "Int", defaultValue: 10},  # Optional argument\n  userID: {type: "ID"},                    # Required argument\n) {\n  title\n  todoItems(userID: $userID, first: $count) {  # Use fragment arguments here as variables\n    ...TodoItem_item\n  }\n}\n')),(0,i.mdx)("h2",{id:"connectionkey-string-filters-string"},(0,i.mdx)("inlineCode",{parentName:"h2"},"@connection(key: String!, filters: [String])")),(0,i.mdx)("p",null,"With ",(0,i.mdx)("inlineCode",{parentName:"p"},"usePaginationFragment"),", Relay expects connection fields to be annotated with a ",(0,i.mdx)("inlineCode",{parentName:"p"},"@connection")," directive. For more detailed information and an example, check out the ",(0,i.mdx)("a",{parentName:"p",href:"../../guided-tour/list-data/rendering-connections"},"docs on ",(0,i.mdx)("inlineCode",{parentName:"a"},"usePaginationFragment")),"."),(0,i.mdx)("h2",{id:"refetchablequeryname-string"},(0,i.mdx)("inlineCode",{parentName:"h2"},"@refetchable(queryName: String!)")),(0,i.mdx)("p",null,"With ",(0,i.mdx)("inlineCode",{parentName:"p"},"useRefetchableFragment")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"usePaginationFragment"),", Relay expects a ",(0,i.mdx)("inlineCode",{parentName:"p"},"@refetchable")," directive. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"@refetchable"),' directive can only be added to fragments that are "refetchable", that is, on fragments that are declared on ',(0,i.mdx)("inlineCode",{parentName:"p"},"Viewer")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"Query")," types, or on a type that implements ",(0,i.mdx)("inlineCode",{parentName:"p"},"Node")," (i.e. a type that has an id). The ",(0,i.mdx)("inlineCode",{parentName:"p"},"@refetchable")," directive will autogenerate a query with the specified ",(0,i.mdx)("inlineCode",{parentName:"p"},"queryName"),". This will also generate Flow types for the query, available to import from the generated file: ",(0,i.mdx)("inlineCode",{parentName:"p"},"<queryName>.graphql.js"),". For more detailed information and examples, check out the docs on ",(0,i.mdx)("a",{parentName:"p",href:"../use-refetchable-fragment/"},(0,i.mdx)("inlineCode",{parentName:"a"},"useRefetchableFragment"))," or ",(0,i.mdx)("a",{parentName:"p",href:"../use-pagination-fragment/"},(0,i.mdx)("inlineCode",{parentName:"a"},"usePaginationFragment")),"."),(0,i.mdx)("h2",{id:"relayplural-boolean"},(0,i.mdx)("inlineCode",{parentName:"h2"},"@relay(plural: Boolean)")),(0,i.mdx)("p",null,"When defining a fragment for use with a Fragment container, you can use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"@relay(plural: true)")," directive to indicate that container expects the prop for that fragment to be a list of items instead of a single item. A query or parent that spreads a ",(0,i.mdx)("inlineCode",{parentName:"p"},"@relay(plural: true)")," fragment should do so within a plural field (ie a field backed by a ",(0,i.mdx)("a",{parentName:"p",href:"http://graphql.org/learn/schema/#lists-and-non-null"},"GraphQL list"),". For example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Plural fragment definition\ngraphql`\n  fragment TodoItems_items on TodoItem @relay(plural: true) {\n    id\n    text\n  }\n`;\n\n// Plural fragment usage: note the parent type is a list of items (`TodoItem[]`)\nfragment TodoApp_app on App {\n  items {\n    // parent type is a list here\n    ...TodoItem_items\n  }\n}\n")),(0,i.mdx)("h2",{id:"required"},"@required"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"@required")," is a directive you can add to fields in your Relay queries to declare how null values should be handled at runtime."),(0,i.mdx)("p",null,"See also ",(0,i.mdx)("a",{parentName:"p",href:"../../guides/required-directive/"},"the @required guide"),"."),(0,i.mdx)("h2",{id:"inline"},(0,i.mdx)("inlineCode",{parentName:"h2"},"@inline")),(0,i.mdx)("p",null,"The hooks APIs that Relay exposes allow you to read data from the store only during the render phase. In order to read data from outside of the render phase (or from outside of React), Relay exposes the ",(0,i.mdx)("inlineCode",{parentName:"p"},"@inline")," directive. The data from a fragment annotated with ",(0,i.mdx)("inlineCode",{parentName:"p"},"@inline")," can be read using ",(0,i.mdx)("inlineCode",{parentName:"p"},"readInlineData"),"."),(0,i.mdx)("p",null,"In the example below, the function ",(0,i.mdx)("inlineCode",{parentName:"p"},"processItemData")," is called from a React component. It requires an item object with a specific set of fields. All React components that use this function should spread the ",(0,i.mdx)("inlineCode",{parentName:"p"},"processItemData_item")," fragment to ensure all of the correct item data is loaded for this function."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"import {graphql, readInlineData} from 'react-relay';\n\n// non-React function called from React\nfunction processItemData(itemRef) {\n  const item = readInlineData(graphql`\n    fragment processItemData_item on Item @inline {\n      title\n      price\n      creator {\n        name\n      }\n    }\n  `, itemRef);\n  sendToThirdPartyApi({\n    title: item.title,\n    price: item.price,\n    creatorName: item.creator.name\n  });\n}\n")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"export default function MyComponent({item}) {\n  function handleClick() {\n    processItemData(item);\n  }\n\n  const data = useFragment(\n    graphql`\n      fragment MyComponent_item on Item {\n        ...processItemData_item\n        title\n      }\n    `,\n    item\n  );\n\n  return (\n    <button onClick={handleClick}>Process {item.title}</button>\n  );\n}\n")),(0,i.mdx)("h2",{id:"relaymask-boolean"},(0,i.mdx)("inlineCode",{parentName:"h2"},"@relay(mask: Boolean)")),(0,i.mdx)("p",null," It is not recommended to use ",(0,i.mdx)("inlineCode",{parentName:"p"},"@relay(mask: false)"),". Please instead consider using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"@inline")," fragment."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"@relay(mask: false)")," can be used to prevent data masking; when including a fragment and annotating it with ",(0,i.mdx)("inlineCode",{parentName:"p"},"@relay(mask: false)"),", its data will be available directly to the parent instead of being masked for a different container."),(0,i.mdx)("p",null,"Applied to a fragment definition, ",(0,i.mdx)("inlineCode",{parentName:"p"},"@relay(mask: false)")," changes the generated Flow types to be better usable when the fragment is included with the same directive. The Flow types will no longer be exact objects and no longer contain internal marker fields."),(0,i.mdx)("p",null,"This may be helpful to reduce redundant fragments when dealing with nested or recursive data within a single Component."),(0,i.mdx)("p",null,"Keep in mind that it is typically considered an ",(0,i.mdx)("strong",{parentName:"p"},"anti-pattern")," to create a single fragment shared across many containers. Abusing this directive could result in over-fetching in your application."),(0,i.mdx)("p",null,"In the example below, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"user")," prop will include the data for ",(0,i.mdx)("inlineCode",{parentName:"p"},"id")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"name")," fields wherever ",(0,i.mdx)("inlineCode",{parentName:"p"},"...Component_internUser")," is included, instead of Relay's normal behavior to mask those fields:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"graphql`\n  fragment Component_internUser on InternUser @relay(mask: false) {\n    id\n    name\n  }\n`;\n")),(0,i.mdx)(o.Z,{mdxType:"DocsRating"}))}h.isMDXComponent=!0}}]);