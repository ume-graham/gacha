(this.webpackJsonpgacha=this.webpackJsonpgacha||[]).push([[0],{11:function(e){e.exports=JSON.parse('[{"label":"Feeling","values":["Whimsical","Sombre","Exciting","Relaxing","Stressful"]},{"label":"Mechanic","values":["Spawner","Lock and Key","Oscillation"]},{"label":"Genre","values":["Puzzle","Adventure","Platformer","Racing","Maze"]}]')},17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(9),l=n.n(r),s=(n(8),n(10)),o=n(3),i=n(2),u=n(4),j=n(0),b=function(e){var t=e.children,n=e.className,c=e.onClick;return Object(j.jsx)("button",{type:"button",className:"w-8 h-8 p-2 text-gray-100 bg-gray-700 hover:bg-gray-500 focus:bg-gray-500 focus:outline-none ".concat(n),onClick:c,children:t})},d=function(e){var t=e.field,n=e.onChange,a=t.label,r=t.values,l=Object(c.useState)(!1),s=Object(o.a)(l,2),d=s[0],h=s[1],x=function(e,c){return n(Object(u.a)(Object(u.a)({},t),{},{values:[].concat(Object(i.a)(r.slice(0,e)),[c.target.value],Object(i.a)(r.slice(e+1)))}))};return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"flex items-center",children:[Object(j.jsx)(b,{onClick:function(){return h(!d)},className:"rounded-l-md",children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"fill-current transform transition-transform ease-in-out ".concat(d?"rotate-90":"rotate-0"),viewBox:"0 0 24 24",children:Object(j.jsx)("path",{d:"M21 12l-18 12v-24z"})})}),Object(j.jsx)("input",{placeholder:"Category",value:a,onChange:function(e){return n(Object(u.a)(Object(u.a)({},t),{},{label:e.target.value}))},className:"w-52 text-gray-900 bg-gray-100 shadow-inner h-8 px-2"}),Object(j.jsx)(b,{onClick:function(){return n(null)},className:"rounded-r-md",children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"fill-current",viewBox:"0 0 24 24",children:Object(j.jsx)("path",{d:"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"})})})]}),Object(j.jsxs)("div",{className:"w-52 mx-8 bg-gray-100 transition-all duration-300 ease-in-out shadow overflow-y-hidden rounded-b-md",style:{height:"".concat(d?2*r.length+3:0,"rem")},children:[Object(j.jsx)("ul",{children:r.map((function(e,c){return Object(j.jsxs)("li",{className:"h-8 flex items-center justify-around px-2",children:[Object(j.jsx)("input",{value:e,onChange:function(e){return x(c,e)},className:"w-40 text-gray-900 px-2 shadow-inner rounded-full"}),Object(j.jsx)("button",{type:"button",className:"w-5 h-5 p-1 rounded-full text-gray-100 bg-red-800 hover:bg-red-600 focus:bg-red-600 focus:outline-none",onClick:function(){return e=c,n(Object(u.a)(Object(u.a)({},t),{},{values:[].concat(Object(i.a)(r.slice(0,e)),Object(i.a)(r.slice(e+1)))}));var e},children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"fill-current",viewBox:"0 0 24 24",children:Object(j.jsx)("path",{d:"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"})})})]},c)}))}),Object(j.jsx)("div",{className:"flex justify-end mx-3 my-2",children:Object(j.jsx)("button",{type:"button",className:"w-6 h-6 hover:text-gray-500 focus:text-gray-500 focus:outline-none",onClick:function(){return n(Object(u.a)(Object(u.a)({},t),{},{values:[].concat(Object(i.a)(r),[""])}))},children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"fill-current",viewBox:"0 0 24 24",children:Object(j.jsx)("path",{d:"M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"})})})})]})]})},h=function(e){var t=e.children,n=e.onClick;return Object(j.jsx)("button",{type:"button",className:"w-8 h-8 ml-4 hover:text-gray-500 focus:text-gray-500 focus:outline-none",onClick:n,children:t})},x=function(e){var t=window.location.href.split("?")[0],n=e.map((function(e){return"".concat(e.label,"=").concat(encodeURIComponent(JSON.stringify(e.values)))})).join("&");return"".concat(t,"?").concat(n)},f=function(e){var t=e.fields,n=e.onChange,a=Object(c.useRef)(null),r=Object(c.useState)(!1),l=Object(o.a)(r,2),s=l[0],u=l[1],b=function(e,c){n([].concat(Object(i.a)(t.slice(0,e)),Object(i.a)(c?[c]:[]),Object(i.a)(t.slice(e+1))))};return Object(j.jsx)("div",{className:"absolute right-0 top-0 bottom-0 shadow-lg transform transition transition-translate ease-in-out duration-300 ".concat(s?"translate-x-0":"translate-x-full"),children:Object(j.jsxs)("div",{className:"relative bg-gray-300 h-full text-gray-900 px-6 py-12 rounded-bl-lg",children:[Object(j.jsx)("button",{className:"absolute group w-10 h-10 top-0 left-0 shadow-lg -z-10 transform -translate-x-full bg-gray-300 rounded-l-md mt-6 p-2 focus:text-gray-500 focus:outline-none",onClick:function(){return u(!s)},children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"fill-current transition-transform transform rotate-0 group-hover:rotate-180",viewBox:"0 0 24 24",children:Object(j.jsx)("path",{d:"M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"})})}),Object(j.jsx)("ul",{children:t.map((function(e,t){return Object(j.jsx)("li",{className:"mb-4",children:Object(j.jsx)(d,{field:e,onChange:function(e){return b(t,e)}})},t)}))}),Object(j.jsx)("input",{className:"w-1 h-1 absolute right-0 transform translate-x-full","aria-hidden":!0,ref:a,value:x(t),readOnly:!0}),Object(j.jsx)("div",{className:"flex justify-end mt-6",children:Object(j.jsxs)("div",{children:[Object(j.jsx)(h,{onClick:function(){return(e=a.current).select(),e.setSelectionRange(0,99999),void document.execCommand("copy");var e},children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"fill-current",viewBox:"0 0 24 24",children:Object(j.jsx)("path",{d:"M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"})})}),Object(j.jsx)(h,{onClick:function(){n([].concat(Object(i.a)(t),[{label:"",values:[""]}]))},children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"fill-current",viewBox:"0 0 24 24",children:Object(j.jsx)("path",{d:"M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"})})})]})})]})})},g=function(e){var t=e.label,n=e.options,a=e.cycling,r=void 0!==a&&a,l=Object(c.useState)(0),s=Object(o.a)(l,2),i=s[0],u=s[1];return Object(c.useEffect)((function(){if(r){var e=setTimeout((function(){var e=0;if(n.length>1)do{e=Math.floor(Math.random()*n.length)}while(e===i);u(e)}),100);return function(){return clearTimeout(e)}}}),[i,n.length,r]),Object(j.jsxs)("div",{className:"p-4",children:[Object(j.jsx)("label",{className:"text-xs uppercase text-gray-700 tracking-wide block min-h-4 py-1",children:t||Object(j.jsx)("span",{children:"\xa0"})}),Object(j.jsxs)("div",{className:"relative h-16 overflow-hidden rounded text-2xl shadow-inner bg-gradient-to-b from-gray-900 to-gray-600 text-lightblue-400",children:[Object(j.jsx)("ul",{className:"transition transition-transform duration-100",style:{transform:"translateY(-".concat(4*i,"rem)")},children:n.map((function(e,t){return Object(j.jsx)("li",{children:Object(j.jsx)("p",{className:"p-4 whitespace-nowrap",children:e})},t)}))}),Object(j.jsx)("div",{"aria-hidden":!0,className:"absolute w-full h-1/2 bg-gradient-to-b from-gray-200 to-gray-500 opacity-25",style:{top:"2px",left:"2px",width:"calc(100% - 4px"}})]})]})},m=function(e){var t=e.fields,n=Object(c.useState)(!1),a=Object(o.a)(n,2),r=a[0],l=a[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"flex",children:t.map((function(e,t){var n=e.label,c=e.values;return Object(j.jsx)(g,{label:n,options:c,cycling:r},t)}))}),Object(j.jsx)("button",{type:"button",className:"mt-4 px-3 py-2 rounded border-2 border-gray-500 focus:outline-none bg-gray-300 hover:bg-lightblue-200 focus:bg-gray-200 text-gray-700",onClick:function(){l(!0),setTimeout((function(){l(!1)}),2500)},children:"Generate"})]})},v=n(11),O=function(){var e=Object(c.useState)(v),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e,t=[],n=new URLSearchParams(window.location.search),c=Object(s.a)(n.entries());try{for(c.s();!(e=c.n()).done;){var r=e.value;t.push({label:r[0],values:JSON.parse(r[1])})}}catch(l){c.e(l)}finally{c.f()}t.length>0&&a(t)}),[a]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"flex flex-col items-center w-min m-auto p-4 rounded-lg  bg-gradient-to-t from-gray-400 to-gray-300 shadow-xl",children:Object(j.jsx)(m,{fields:n})}),Object(j.jsx)(f,{fields:n,onChange:a})]})};l.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))},8:function(e,t,n){}},[[17,1,2]]]);
//# sourceMappingURL=main.5aec2891.chunk.js.map