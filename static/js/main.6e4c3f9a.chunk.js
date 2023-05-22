(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var s=c(4),a=c.n(s),l=c(2),n=c(1),d=(c(9),c(10),c(0)),i=function(e){var t=e.todos,c=e.showModal,s=e.handleHide,a=e.selectedModal,l=t.map((function(e){var t=e.id,l=e.title,n=e.completed;return Object(d.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(d.jsx)("td",{className:"is-vcentered",children:t}),Object(d.jsx)("td",{className:"is-vcentered",children:n&&Object(d.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("td",{className:"is-vcentered is-expanded",children:Object(d.jsx)("p",{className:n?"has-text-success":"has-text-danger",children:l})}),Object(d.jsx)("td",{className:"has-text-right is-vcentered",children:Object(d.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){c(e),s(t)},children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"far ".concat(a===t?"fa-eye-slash":"fa-eye")})})})})]},t)}));return Object(d.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:" "})]})}),Object(d.jsx)("tbody",{children:l})]})},o=function(e){var t=e.select,c=e.search,s=e.value,a=e.clearSearch;return Object(d.jsxs)("form",{className:"field has-addons",children:[Object(d.jsx)("p",{className:"control",children:Object(d.jsx)("span",{className:"select",children:Object(d.jsxs)("select",{"data-cy":"statusSelect",onChange:t,children:[Object(d.jsx)("option",{value:"all",children:"All"}),Object(d.jsx)("option",{value:"active",children:"Active"}),Object(d.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(d.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(d.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:c}),Object(d.jsx)("span",{className:"icon is-left",children:Object(d.jsx)("i",{className:"fas fa-magnifying-glass"})}),s.length>0&&Object(d.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(d.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:a})})]})]})},j=(c(12),function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})}),r=function(e){var t=e.todo,c=e.closeModal,s=Object(n.useState)(null),a=Object(l.a)(s,2),i=a[0],o=a[1];return Object(n.useEffect)((function(){fetch("https://mate-academy.github.io/react_dynamic-list-of-todos/api/users/".concat(null===t||void 0===t?void 0:t.userId,".json")).then((function(e){return e.json()})).then((function(e){o(e)}))}),[i]),Object(d.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(d.jsx)("div",{className:"modal-background"}),i?Object(d.jsxs)("div",{className:"modal-card",children:[Object(d.jsxs)("header",{className:"modal-card-head",children:[Object(d.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(d.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(d.jsxs)("div",{className:"modal-card-body",children:[Object(d.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(d.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(d.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(d.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(d.jsx)("a",{href:"mailto:".concat(i.email),children:i.name})]})]})]}):Object(d.jsx)(j,{})]})},h=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(!1),h=Object(l.a)(a,2),b=h[0],u=h[1],m=Object(n.useState)(),O=Object(l.a)(m,2),x=O[0],f=O[1],v=Object(n.useState)([]),p=Object(l.a)(v,2),N=p[0],y=p[1],g=Object(n.useState)(""),S=Object(l.a)(g,2),k=S[0],w=S[1],C=Object(n.useState)(""),M=Object(l.a)(C,2),_=M[0],E=M[1],L=Object(n.useState)(0),B=Object(l.a)(L,2),I=B[0],T=B[1];Object(n.useEffect)((function(){fetch("https://mate-academy.github.io/react_dynamic-list-of-todos/api/todos.json").then((function(e){return e.json()})).then((function(e){s(e),y(e)}))}),[]),Object(n.useEffect)((function(){0===k.length&&0===_.length?y(c):y(c.filter((function(e){var t=e.title.toLowerCase().includes(k.toLowerCase()),c=0===_.length||"active"===_&&!1===e.completed||"completed"===_&&!0===e.completed||"all"===_&&!0;return t&&c})))}),[k,_]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("h1",{className:"title",children:"Todos:"}),Object(d.jsx)("div",{className:"block",children:Object(d.jsx)(o,{select:function(e){var t=e.target.value;E(t)},search:function(e){var t=e.target.value;w(t)},value:k,clearSearch:function(){w("")}})}),Object(d.jsxs)("div",{className:"block",children:[0===c.length&&Object(d.jsx)(j,{}),Object(d.jsx)(i,{todos:N,showModal:function(e){u(!0),f(e)},handleHide:function(e){T(e)},selectedModal:I})]})]})})}),b&&Object(d.jsx)(r,{todo:x,closeModal:function(){u(!1),T(0)}})]})};a.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.6e4c3f9a.chunk.js.map