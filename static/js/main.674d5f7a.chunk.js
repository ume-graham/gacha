(this.webpackJsonpgacha=this.webpackJsonpgacha||[]).push([[0],{11:function(e){e.exports=JSON.parse('[{"label":"Feeling","values":["Whimsical","Sombre","Exciting","Relaxing","Stressful"]},{"label":"Mechanic","values":["Spawner","Lock and Key","Oscillation"]},{"label":"Genre","values":["Puzzle","Adventure","Platformer","Racing","Maze"]}]')},17:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),l=c(9),r=c.n(l),s=(c(8),c(10)),o=c(2),i=c(3),u=c(4),b=c(0),j=function(e){var t=e.children,c=e.className,n=e.onClick;return Object(b.jsx)("button",{type:"button",className:"w-8 h-8 p-2 text-gray-100 bg-gray-600 hover:bg-gray-500 focus:bg-gray-500 focus:outline-none ".concat(c),onClick:n,children:t})},d=function(e){var t=e.field,c=e.onChange,a=t.label,l=t.values,r=Object(n.useRef)(null),s=Object(n.useState)(!1),d=Object(o.a)(s,2),h=d[0],f=d[1],g=Object(n.useState)(!1),x=Object(o.a)(g,2),O=x[0],m=x[1];Object(n.useEffect)((function(){O&&(r.current.lastChild.querySelector("input").focus(),m(!1))}),[O,m,r]);var v=function(e,n){return c(Object(u.a)(Object(u.a)({},t),{},{values:[].concat(Object(i.a)(l.slice(0,e)),[n.target.value],Object(i.a)(l.slice(e+1)))}))};return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"flex items-center",children:[Object(b.jsx)(j,{onClick:function(){return f(!h)},className:"rounded-l-md",children:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"fill-current transform transition-transform ease-in-out ".concat(h?"rotate-90":"rotate-0"),viewBox:"0 0 24 24",children:Object(b.jsx)("path",{d:"M21 12l-18 12v-24z"})})}),Object(b.jsx)("input",{placeholder:"Category",value:a,onChange:function(e){return c(Object(u.a)(Object(u.a)({},t),{},{label:e.target.value}))},className:"w-52 text-gray-900 bg-gray-100 shadow-inner h-8 px-2"}),Object(b.jsx)(j,{onClick:function(){return c(null)},className:"rounded-r",children:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"fill-current",viewBox:"0 0 24 24",children:Object(b.jsx)("path",{d:"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"})})})]}),Object(b.jsxs)("div",{className:"w-52 mx-8 bg-gray-100 transition-all duration-300 ease-in-out shadow overflow-y-hidden rounded-b",style:{height:"".concat(h?2*l.length+3:0,"rem")},children:[Object(b.jsx)("ul",{ref:r,children:l.map((function(e,n){return Object(b.jsxs)("li",{className:"h-8 flex items-center justify-around px-2",children:[Object(b.jsx)("input",{value:e,onChange:function(e){return v(n,e)},className:"w-40 text-gray-900 px-2 shadow-inner rounded-full"}),Object(b.jsx)("button",{type:"button",className:"w-5 h-5 p-1 rounded-full text-gray-100 bg-red-800 hover:bg-red-600 focus:bg-red-600 focus:outline-none",onClick:function(){return e=n,c(Object(u.a)(Object(u.a)({},t),{},{values:[].concat(Object(i.a)(l.slice(0,e)),Object(i.a)(l.slice(e+1)))}));var e},children:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"fill-current",viewBox:"0 0 24 24",children:Object(b.jsx)("path",{d:"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"})})})]},n)}))}),Object(b.jsx)("div",{className:"flex justify-end mx-3 my-2",children:Object(b.jsx)("button",{type:"button",className:"w-8 h-8 text-gray-100 bg-gray-600 p-2 rounded hover:bg-gray-500 focus:bg-gray-500 focus:outline-none",onClick:function(){m(!0),c(Object(u.a)(Object(u.a)({},t),{},{values:[].concat(Object(i.a)(l),[""])}))},children:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"fill-current",viewBox:"0 0 24 24",children:Object(b.jsx)("path",{d:"M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"})})})})]})]})},h=function(e){var t=e.children,c=e.onClick,n=e.className;return Object(b.jsx)("button",{type:"button",className:"w-10 h-10 rounded bg-lightblue-900 p-2 text-gray-100 hover:bg-lightblue-700 focus:bg-lightblue-700 focus:outline-none ".concat(n),onClick:c,children:t})},f=function(e){var t=window.location.href.split("?")[0],c=e.map((function(e){return"".concat(e.label,"=").concat(encodeURIComponent(JSON.stringify(e.values)))})).join("&");return"".concat(t,"?").concat(c)},g=function(e){var t=e.fields,c=e.onChange,a=Object(n.useRef)(null),l=Object(n.useRef)(null),r=Object(n.useState)(!1),s=Object(o.a)(r,2),u=s[0],j=s[1],g=Object(n.useState)(!1),x=Object(o.a)(g,2),O=x[0],m=x[1],v=Object(n.useState)(!1),p=Object(o.a)(v,2),w=p[0],y=p[1];Object(n.useEffect)((function(){w&&(l.current.lastChild.querySelector("input").focus(),y(!1))}),[w,y,l]);var N=function(e,n){c([].concat(Object(i.a)(t.slice(0,e)),Object(i.a)(n?[n]:[]),Object(i.a)(t.slice(e+1))))};return Object(b.jsx)("div",{className:"absolute right-0 top-0 bottom-0 shadow-lg transform transition transition-translate ease-in-out duration-300 ".concat(u?"translate-x-0":"translate-x-full"),children:Object(b.jsxs)("div",{className:"relative bg-gray-300 h-full text-gray-900 px-6 py-12 rounded-bl-lg",children:[Object(b.jsx)("button",{className:"absolute group w-10 h-10 top-0 left-0 shadow-lg -z-10 transform -translate-x-full bg-gray-300 rounded-l mt-6 p-2 text-gray-700 focus:text-gray-500 focus:outline-none",onClick:function(){return j(!u)},children:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"fill-current transition-transform transform rotate-0 group-hover:rotate-180",viewBox:"0 0 24 24",children:Object(b.jsx)("path",{d:"M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"})})}),Object(b.jsx)("ul",{ref:l,children:t.map((function(e,t){return Object(b.jsx)("li",{className:"mb-4",children:Object(b.jsx)(d,{field:e,onChange:function(e){return N(t,e)}})},t)}))}),Object(b.jsx)("input",{className:"w-1 h-1 absolute right-0 transform translate-x-full","aria-hidden":!0,ref:a,value:f(t),readOnly:!0}),Object(b.jsx)("div",{className:"flex justify-end mt-6",children:Object(b.jsxs)("div",{className:"flex",children:[Object(b.jsxs)("div",{className:"relative",children:[Object(b.jsx)(h,{onClick:function(){var e;(e=a.current).select(),e.setSelectionRange(0,99999),document.execCommand("copy"),m(!0),setTimeout((function(){return m(!1)}),1e3)},children:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"fill-current",viewBox:"0 0 24 24",children:Object(b.jsx)("path",{d:"M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"})})}),Object(b.jsx)("div",{className:"".concat(O?"opacity-100 translate-x-0 ease-in":"opacity-0 -translate-y-2 ease-out"," absolute left-1/2 transform -translate-x-1/2 mt-2 bg-lightblue-300 shadow-lg w-min p-2 rounded transition transition-all"),children:"Copied to clipboard!"})]}),Object(b.jsx)(h,{className:"ml-4",onClick:function(){y(!0),c([].concat(Object(i.a)(t),[{label:"",values:[""]}]))},children:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"fill-current",viewBox:"0 0 24 24",children:Object(b.jsx)("path",{d:"M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"})})})]})})]})})},x=function(e){var t=e.label,c=e.options,a=e.cycling,l=void 0!==a&&a,r=Object(n.useState)(0),s=Object(o.a)(r,2),i=s[0],u=s[1];return Object(n.useEffect)((function(){if(l){var e=setTimeout((function(){var e=0;if(c.length>1)do{e=Math.floor(Math.random()*c.length)}while(e===i);u(e)}),100);return function(){return clearTimeout(e)}}}),[i,c.length,l]),Object(b.jsxs)("div",{className:"p-4",children:[Object(b.jsx)("label",{className:"text-xs uppercase text-gray-700 tracking-wide block min-h-4 py-1",children:t||Object(b.jsx)("span",{children:"\xa0"})}),Object(b.jsxs)("div",{className:"relative h-16 overflow-hidden rounded text-2xl shadow-inner bg-gradient-to-b from-gray-900 to-gray-600 text-lightblue-400",children:[Object(b.jsx)("ul",{className:"transition transition-transform duration-100",style:{transform:"translateY(-".concat(4*i,"rem)")},children:c.map((function(e,t){return Object(b.jsx)("li",{children:Object(b.jsx)("p",{className:"p-4 whitespace-nowrap",children:e})},t)}))}),Object(b.jsx)("div",{"aria-hidden":!0,className:"absolute w-full h-1/2 bg-gradient-to-b from-gray-200 to-gray-500 opacity-25",style:{top:"2px",left:"2px",width:"calc(100% - 4px"}})]})]})},O=function(e){var t=e.fields,c=Object(n.useState)(!1),a=Object(o.a)(c,2),l=a[0],r=a[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"flex",children:t.map((function(e,t){var c=e.label,n=e.values;return Object(b.jsx)(x,{label:c,options:n,cycling:l},t)}))}),Object(b.jsx)("button",{type:"button",className:"mt-4 px-3 py-2 rounded border-2 border-gray-500 focus:outline-none bg-gray-300 hover:bg-lightblue-200 focus:bg-gray-200 text-gray-700",onClick:function(){r(!0),setTimeout((function(){r(!1)}),2500)},children:"Generate"})]})},m=c(11),v=function(){var e=Object(n.useState)(m),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){var e,t=[],c=new URLSearchParams(window.location.search),n=Object(s.a)(c.entries());try{for(n.s();!(e=n.n()).done;){var l=e.value;t.push({label:l[0],values:JSON.parse(l[1])})}}catch(r){n.e(r)}finally{n.f()}t.length>0&&a(t)}),[a]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"flex flex-col items-center w-min m-auto p-4 rounded-lg  bg-gradient-to-t from-gray-400 to-gray-300 shadow-xl",children:Object(b.jsx)(O,{fields:c})}),Object(b.jsx)(g,{fields:c,onChange:a})]})};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root"))},8:function(e,t,c){}},[[17,1,2]]]);
//# sourceMappingURL=main.674d5f7a.chunk.js.map