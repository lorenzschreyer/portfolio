(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[91],{9868:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles",function(){return n(4039)}])},4451:function(e,t,n){"use strict";n.d(t,{V:function(){return N}});var s=n(7568),i=n(1799),r=n(9396),a=n(9534),c=n(4051),l=n.n(c),o=n(5893),u=n(2323),d=n(6240),h=n(7378),p=n(7294);function f(e){return _.apply(this,arguments)}function _(){return(_=(0,s.Z)(l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){return setTimeout(e,t)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=n(2362),x=n(9085),m=n.n(x),g=["000","001","010","011","100","101","110","111"],j="glyph",y="value";var N=(0,p.memo)((function(e){var t=e.text,n=e.start,c=void 0===n||n,_=e.delay,x=void 0===_?0:_,N=e.className,A=(0,a.Z)(e,["text","start","delay","className"]),D=(0,p.useRef)([{type:j,value:""}]),k=(0,p.useRef)(),w=(0,d.J)(),L=(0,h.q)(0,{stiffness:8,damping:5});return(0,p.useEffect)((function(){var e=k.current,n=t.split(""),i=function(){var t=D.current.map((function(e){return'<span class="'.concat(m()[e.type],'">').concat(e.value,"</span>")}));e.innerHTML=t.join("")},r=L.onChange((function(e){D.current=function(e,t,n){return e.map((function(e,s){if(s<n)return{type:y,value:e};if(n%1<.5){var i=Math.floor(Math.random()*g.length);return{type:j,value:g[i]}}return{type:j,value:t[s].value}}))}(n,D.current,e),i()})),a=function(){var e=(0,s.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(x);case 2:L.set(n.length);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c&&!w&&a(),w&&(D.current=n.map((function(e,t){return{type:y,value:n[t]}})),i()),function(){null===r||void 0===r||r()}}),[L,w,c,x,t]),(0,o.jsxs)("span",(0,r.Z)((0,i.Z)({className:(0,v.Sh)(m().text,N)},A),{children:[(0,o.jsx)(u.T,{className:m().label,children:t}),(0,o.jsx)("span",{"aria-hidden":!0,className:m().content,ref:k})]}))}))},3185:function(e,t,n){"use strict";n.d(t,{i:function(){return u}});var s=n(1799),i=n(9396),r=n(9534),a=n(5893),c=n(2362),l=n(3265),o=n.n(l),u=function(e){var t=e.lineWidth,n=e.lineHeight,l=e.notchWidth,u=e.notchHeight,d=e.collapseDelay,h=e.collapsed,p=e.className,f=e.style,_=(0,r.Z)(e,["lineWidth","lineHeight","notchWidth","notchHeight","collapseDelay","collapsed","className","style"]);return(0,a.jsxs)("div",(0,i.Z)((0,s.Z)({className:(0,c.Sh)(o().divider,p),style:(0,c.Fh)({lineWidth:t,lineHeight:n,notchWidth:l,notchHeight:u,collapseDelay:(0,c.aU)(d)},f)},_),{children:[(0,a.jsx)("div",{className:o().line,"data-collapsed":h}),(0,a.jsx)("div",{className:o().notch,"data-collapsed":h,style:(0,c.Fh)({collapseDelay:(0,c.aU)(d+160)})})]}))};u.defaultProps={lineWidth:"100%",lineHeight:"2px",notchWidth:"90px",notchHeight:"10px",collapsed:!1,collapseDelay:0}},4039:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return L},default:function(){return w}});var s=n(1799),i=n(9534),r=n(5893),a=n(3861),c=n(4451),l=n(3185),o=n(5192),u=n(2221),d=n(1424),h=n(5633),p=n(6602),f=n(7346),_=n(6240),v=n(4529),x=n(1664),m=n.n(x),g=n(7294),j=n(7715),y=n(2362),N=n(6923),A=n.n(N),D=function(e){var t=e.slug,n=e.title,s=e.abstract,i=e.date,c=e.featured,o=e.banner,h=e.timecode,p=e.index,v=(0,g.useState)(!1),x=v[0],N=v[1],D=(0,g.useState)(null),k=D[0],w=D[1],L=(0,_.J)();(0,g.useEffect)((function(){w((0,j.p)(i))}),[i,k]);return(0,r.jsxs)("article",{className:A().post,"data-featured":!!c,style:void 0!==p?(0,y.Fh)({delay:100*p+200}):void 0,children:[c&&(0,r.jsx)(f.x,{className:A().postLabel,size:"s",children:"Featured"}),c&&!!o&&(0,r.jsx)("div",{className:A().postImage,children:(0,r.jsx)(d.E,{noPauseButton:!0,play:L?void 0:x,src:{src:o},placeholder:{src:"".concat(o.split(".")[0],"-placeholder.jpg")},alt:"",role:"presentation"})}),(0,r.jsx)(m(),{href:"/articles/".concat(t),scroll:!1,children:(0,r.jsx)("a",{className:A().postLink,onMouseEnter:function(){N(!0)},onMouseLeave:function(){N(!1)},children:(0,r.jsxs)("div",{className:A().postDetails,children:[(0,r.jsxs)("div",{"aria-hidden":!0,className:A().postDate,children:[(0,r.jsx)(l.i,{notchWidth:"64px",notchHeight:"8px"}),k]}),(0,r.jsx)(u.X,{as:"h2",level:c?2:4,children:n}),(0,r.jsx)(f.x,{size:c?"l":"s",as:"p",children:s}),(0,r.jsxs)("div",{className:A().postFooter,children:[(0,r.jsx)(a.z,{secondary:!0,iconHoverShift:!0,icon:"chevronRight",as:"div",children:"Read article"}),(0,r.jsx)(f.x,{className:A().timecode,size:"s",children:h})]})]})})}),c&&(0,r.jsx)(f.x,{"aria-hidden":!0,className:A().postTag,size:"s",children:"477"})]})},k=function(e){var t=e.index;return(0,r.jsx)("article",{"aria-hidden":"true",className:(0,y.Sh)(A().post,A().skeleton),style:void 0!==t?(0,y.Fh)({delay:100*t+200}):void 0,children:(0,r.jsx)("div",{className:A().postLink,children:(0,r.jsxs)("div",{className:A().postDetails,children:[(0,r.jsxs)("div",{"aria-hidden":!0,className:A().postDate,children:[(0,r.jsx)(l.i,{notchWidth:"64px",notchHeight:"8px"}),"Coming soon..."]}),(0,r.jsx)(u.X,{className:A().skeletonBone,as:"h2",level:4,style:{height:24,width:"70%"}}),(0,r.jsx)(f.x,{className:A().skeletonBone,size:"s",as:"p",style:{height:90,width:"100%"}}),(0,r.jsxs)("div",{className:A().postFooter,children:[(0,r.jsx)(a.z,{secondary:!0,iconHoverShift:!0,icon:"chevronRight",as:"div",children:"Read more"}),(0,r.jsx)(f.x,{className:A().timecode,size:"s",children:"00:00:00:00"})]})]})})})},w=function(e){var t=e.posts,n=e.featured,a=(0,v.iP)().width<=1190,l=(0,r.jsx)("header",{className:A().header,children:(0,r.jsx)(u.X,{className:A().heading,level:5,as:"h1",children:(0,r.jsx)(c.V,{text:"Latest articles"})})}),d=(0,r.jsxs)("div",{className:A().list,children:[!a&&l,t.map((function(e,t){var n=e.slug,a=(0,i.Z)(e,["slug"]);return(0,r.jsx)(D,(0,s.Z)({slug:n,index:t},a),n)})),Array(2).fill().map((function(e,t){return(0,r.jsx)(k,{},t)}))]}),f=(0,r.jsx)(D,(0,s.Z)({},n));return(0,r.jsxs)("article",{className:A().articles,children:[(0,r.jsx)(h.h,{title:"Articles",description:"A collection of technical design and development articles. May contain incoherent ramblings."}),(0,r.jsxs)(p.$,{className:A().content,children:[!a&&(0,r.jsxs)("div",{className:A().grid,children:[d,f]}),a&&(0,r.jsxs)("div",{className:A().grid,children:[l,f,d]})]}),(0,r.jsx)(o.$,{})]})},L=!0},7715:function(e,t,n){"use strict";function s(e){return new Date(e).toLocaleDateString("default",{year:"numeric",month:"long",day:"2-digit"})}n.d(t,{p:function(){return s}})},9085:function(e){e.exports={text:"DecoderText_text__ZFBnw",glyph:"DecoderText_glyph__vCP7h",value:"DecoderText_value__DIA5G"}},3265:function(e){e.exports={divider:"Divider_divider__R3vqT",line:"Divider_line__bFTLx",notch:"Divider_notch__1kxAj"}},6923:function(e){e.exports={articles:"Articles_articles__kfgwL",grid:"Articles_grid__TXTIl",header:"Articles_header__7uF5I",heading:"Articles_heading___Kjnq",list:"Articles_list__QQ4iW",divider:"Articles_divider__tuqwq",skeleton:"Articles_skeleton__NvF6B",skeletonBone:"Articles_skeletonBone__siy8J",post:"Articles_post__uHvxb",postLabel:"Articles_postLabel__5PL1Q",postTag:"Articles_postTag__eDm5n",labelIn:"Articles_labelIn__Gbml_",tagIn:"Articles_tagIn__EAEGX",postLink:"Articles_postLink__kuFhH",postDate:"Articles_postDate__0YEAe",postImage:"Articles_postImage__DkYDa",postDetails:"Articles_postDetails__KUGXj",postFooter:"Articles_postFooter__99udj",timecode:"Articles_timecode__YgrGL"}},7568:function(e,t,n){"use strict";function s(e,t,n,s,i,r,a){try{var c=e[r](a),l=c.value}catch(o){return void n(o)}c.done?t(l):Promise.resolve(l).then(s,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var a=e.apply(t,n);function c(e){s(a,i,r,c,l,"next",e)}function l(e){s(a,i,r,c,l,"throw",e)}c(void 0)}))}}n.d(t,{Z:function(){return i}})},7378:function(e,t,n){"use strict";n.d(t,{q:function(){return d}});var s=n(655),i=n(7294),r=n(754),a=n(406),c=n(3234),l=n(6014),o=n(6681);var u=n(8868);function d(e,t){void 0===t&&(t={});var n=(0,i.useContext)(l._).isStatic,d=(0,i.useRef)(null),h=function(e){var t=(0,o.h)((function(){return(0,c.B)(e)}));if((0,i.useContext)(l._).isStatic){var n=(0,s.CR)((0,i.useState)(e),2)[1];(0,i.useEffect)((function(){return t.onChange(n)}),[])}return t}((0,a.i)(e)?e.get():e);return(0,i.useMemo)((function(){return h.attach((function(e,i){return n?i(e):(d.current&&d.current.stop(),d.current=(0,r.j)((0,s.pi)((0,s.pi)({from:h.get(),to:e,velocity:h.getVelocity()},t),{onUpdate:i})),h.get())}))}),[JSON.stringify(t)]),function(e,t){(0,u.L)((function(){if((0,a.i)(e))return e.onChange(t)}),[t])}(e,(function(e){return h.set(parseFloat(e))})),h}}},function(e){e.O(0,[408,774,888,179],(function(){return t=9868,e(e.s=t);var t}));var t=e.O();_N_E=t}]);