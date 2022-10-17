/*! For license information please see 7e37206e.586ac5b6.js.LICENSE.txt */
(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[62740],{62579:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(94184),a=n.n(r),i=n(67294),l=function(e){var t,n=a()("container",e.className,{darkBackground:"dark"===e.background,highlightBackground:"highlight"===e.background,lightBackground:"light"===e.background,paddingAll:e.padding.indexOf("all")>=0,paddingBottom:e.padding.indexOf("bottom")>=0,paddingLeft:e.padding.indexOf("left")>=0,paddingRight:e.padding.indexOf("right")>=0,paddingTop:e.padding.indexOf("top")>=0});return t=e.wrapper?i.createElement("div",{className:"wrapper"},e.children):e.children,i.createElement("div",{className:n,id:e.id},t)};l.defaultProps={background:null,padding:[],wrapper:!0};const o=l},29260:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(21073),a=n(94184),i=n.n(a),l=n(67294),o=function(e){function t(){return e.apply(this,arguments)||this}(0,r.Z)(t,e);var n=t.prototype;return n.renderBlock=function(e){var t=Object.assign({},{imageAlign:"left"},e),n=i()("blockElement",this.props.className,{alignCenter:"center"===this.props.align,alignRight:"right"===this.props.align,fourByGridBlock:"fourColumn"===this.props.layout,imageAlignSide:t.image&&("left"===t.imageAlign||"right"===t.imageAlign),imageAlignTop:t.image&&"top"===t.imageAlign,imageAlignRight:t.image&&"right"===t.imageAlign,imageAlignBottom:t.image&&"bottom"===t.imageAlign,imageAlignLeft:t.image&&"left"===t.imageAlign,threeByGridBlock:"threeColumn"===this.props.layout,twoByGridBlock:"twoColumn"===this.props.layout}),r=("top"===t.imageAlign||"left"===t.imageAlign)&&this.renderBlockImage(t.image,t.imageLink,t.imageAlt),a=("bottom"===t.imageAlign||"right"===t.imageAlign)&&this.renderBlockImage(t.image,t.imageLink,t.imageAlt);return l.createElement("div",{className:n,key:t.title},r,l.createElement("div",{className:"blockContent"},this.renderBlockTitle(t.title),t.content),a)},n.renderBlockImage=function(e,t,n){return e?l.createElement("div",{className:"blockImage"},t?l.createElement("a",{href:t},l.createElement("img",{src:e,alt:n})):l.createElement("img",{src:e,alt:n})):null},n.renderBlockTitle=function(e){return e?l.createElement("h2",null,e):null},n.render=function(){return l.createElement("div",{className:"gridBlock"},this.props.contents.map(this.renderBlock,this))},t}(l.Component);o.defaultProps={align:"left",contents:[],layout:"twoColumn"};const s=o},75401:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var r=n(21073),a=n(62579),i=n(29260),l=n(34660),o=n(67294),s=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=[{content:o.createElement("span",null,"Relay is worked on full-time by Facebook's product infrastructure engineering teams. They're often around and available for questions."),title:"Need help?"},{content:o.createElement("span",null,"Many members of the community use Stack Overflow to ask questions. Read through the"," ",o.createElement("a",{href:"https://stackoverflow.com/questions/tagged/relayjs?sort=active"},"existing questions")," ","tagged with ",o.createElement("b",null,"#relayjs")," or"," ",o.createElement("a",{href:"https://stackoverflow.com/questions/ask?tags=relayjs"},"ask your own"),"!"),title:"Stack Overflow"},{content:o.createElement("span",null,"Many developers and users idle in the #relay channel of the"," ",o.createElement("a",{href:"https://discord.gg/Kb3SFkUeQt"},"GraphQL Discord server"),"."),title:"Discord"},{content:o.createElement("span",null,"Hashtag"," ",o.createElement("a",{href:"https://twitter.com/search?q=%23relayjs"},"#relayjs")," is used on Twitter to keep up with the latest Relay news."),title:"Twitter"}];return o.createElement("div",{className:"docMainWrapper wrapper"},o.createElement(a.Z,{className:"mainContainer documentContainer postContainer"},o.createElement("div",{className:"post"},o.createElement(i.Z,{contents:e}))))},t}(o.Component);const c=function(e){return o.createElement(l.Z,null,o.createElement(s,e))}},94184:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var l=a.apply(null,n);l&&e.push(l)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var o in n)r.call(n,o)&&n[o]&&e.push(o);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()}}]);