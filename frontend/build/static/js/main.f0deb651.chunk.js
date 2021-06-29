(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{126:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(10),r=n.n(i),l=(n(59),n(81)),s=n(12),o=n(53),d=n.n(o),j=n(71),u=n(27),b=n(72),h=n(73),g=n.n(h),O=n(3),m=n(175),x=n(189),f=n(13),p=n(183),v=n(184),k=n(174),S=n(182),w=n(169),C=n(186),y=n(173),P=n(188),F=n(176),N=n(128),B=n(181),D=n(178),I=n(190),R=n(185),T=n(191),E=n(79),J=n.n(E),L=n(80),q=n.n(L),z=n(179),A=n(180),H=n(74),M="http://localhost:3000/api/".concat("v1","/"),U=n(77),W=n.n(U),Y=n(6),G=function(e){var t=e.color,n=e.loading,a=e.override;return Object(Y.jsx)(W.a,{color:t||"#42f5ef",loading:n,css:a,size:150})};function K(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function Q(e,t){return"desc"===e?function(e,n){return K(e,n,t)}:function(e,n){return-K(e,n,t)}}function V(e,t){var n=e.map((function(e,t){return[e,t]}));return n.sort((function(e,n){var a=t(e[0],n[0]);return 0!==a?a:e[1]-n[1]})),n.map((function(e){return e[0]}))}var X=[{id:"name",numeric:!1,disablePadding:!0,label:"Name"},{id:"comment",numeric:!0,disablePadding:!1,label:"Comment"},{id:"imageUrl",numeric:!1,disablePadding:!1,label:"Photo"},{id:"yumFactor",numeric:!0,disablePadding:!1,label:"Yum Factor"}];function Z(e){var t=e.classes,n=(e.onSelectAllClick,e.order),a=e.orderBy,c=(e.numSelected,e.rowCount,e.onRequestSort);return Object(Y.jsx)(w.a,{children:Object(Y.jsx)(y.a,{children:X.map((function(e){return Object(Y.jsx)(k.a,{align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:a===e.id&&n,children:Object(Y.jsxs)(P.a,{active:a===e.id,direction:a===e.id?n:"asc",onClick:(i=e.id,function(e){c(e,i)}),children:[e.label,a===e.id?Object(Y.jsx)("span",{className:t.visuallyHidden,children:"desc"===n?"sorted descending":"sorted ascending"}):null]})},e.id);var i}))})})}var $=Object(m.a)((function(e){return Object(x.a)({root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(f.d)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},title:{flex:"1 1 100%"}})})),_=function(e){var t=$(),n=e.numSelected;return Object(Y.jsxs)(F.a,{className:Object(O.a)(t.root,Object(b.a)({},t.highlight,n>0)),children:[n>0?Object(Y.jsxs)(N.a,{className:t.title,color:"inherit",variant:"subtitle1",component:"div",children:[n," selected"]}):Object(Y.jsx)(N.a,{className:t.title,variant:"h6",id:"tableTitle",component:"div",children:"Cakes"}),n>0?Object(Y.jsx)(I.a,{title:"Delete",children:Object(Y.jsx)(D.a,{"aria-label":"delete",children:Object(Y.jsx)(J.a,{})})}):Object(Y.jsx)(I.a,{title:"Filter list",children:Object(Y.jsx)(D.a,{"aria-label":"filter list",children:Object(Y.jsx)(q.a,{})})})]})},ee=Object(m.a)((function(e){return Object(x.a)({root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}})}));function te(){var e=ee(),t=c.a.useState("asc"),n=Object(u.a)(t,2),i=n[0],r=n[1],l=c.a.useState("name"),s=Object(u.a)(l,2),o=s[0],b=s[1],h=c.a.useState([]),O=Object(u.a)(h,2),m=O[0],x=O[1],f=c.a.useState(0),w=Object(u.a)(f,2),P=w[0],F=w[1],N=c.a.useState(!1),D=Object(u.a)(N,2),I=D[0],E=D[1],J=c.a.useState(5),L=Object(u.a)(J,2),q=L[0],U=L[1],W=c.a.useState(!0),K=Object(u.a)(W,2),X=K[0],$=K[1],te=c.a.useState([]),ne=Object(u.a)(te,2),ae=ne[0],ce=ne[1],ie=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("".concat(M,"cake/list"));case 2:if(200!==(t=e.sent).status){e.next=8;break}$(!1),ce(t.data.data),e.next=9;break;case 8:throw new Error("Something went wrong");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(c.a.useEffect((function(){ie()}),[]),!0===X)return Object(Y.jsxs)(a.Fragment,{children:[Object(Y.jsx)(H.a,{children:Object(Y.jsx)("title",{children:"JS Cake \ud83c\udf82"})}),Object(Y.jsx)(z.a,{}),Object(Y.jsx)(A.a,{maxWidth:"xs",children:Object(Y.jsx)(G,{})})]});var re=q-Math.min(q,ae.length-P*q);return Object(Y.jsxs)("div",{className:e.root,children:[Object(Y.jsxs)(B.a,{className:e.paper,children:[Object(Y.jsx)(_,{numSelected:m.length}),Object(Y.jsx)(S.a,{children:Object(Y.jsxs)(p.a,{className:e.table,"aria-labelledby":"tableTitle",size:I?"small":"medium","aria-label":"enhanced table",children:[Object(Y.jsx)(Z,{classes:e,numSelected:m.length,order:i,orderBy:o,onSelectAllClick:function(e){if(e.target.checked){var t=ae.map((function(e){return e.name}));x(t)}else x([])},onRequestSort:function(e,t){r(o===t&&"asc"===i?"desc":"asc"),b(t)},rowCount:ae.length}),Object(Y.jsxs)(v.a,{children:[V(ae,Q(i,o)).slice(P*q,P*q+q).map((function(e,t){var n,a=(n=e.name,-1!==m.indexOf(n)),c="enhanced-table-checkbox-".concat(t);return Object(Y.jsxs)(y.a,{hover:!0,onClick:function(t){return function(e,t){var n=m.indexOf(t),a=[];-1===n?a=a.concat(m,t):0===n?a=a.concat(m.slice(1)):n===m.length-1?a=a.concat(m.slice(0,-1)):n>0&&(a=a.concat(m.slice(0,n),m.slice(n+1))),x(a)}(0,e.name)},role:"checkbox","aria-checked":a,tabIndex:-1,selected:a,children:[Object(Y.jsx)(k.a,{component:"th",id:c,scope:"row",padding:"none",children:e.name}),Object(Y.jsx)(k.a,{align:"right",children:e.comment}),Object(Y.jsx)(k.a,{align:"right",children:Object(Y.jsx)("img",{src:e.imageUrl,height:100})}),Object(Y.jsx)(k.a,{align:"right",children:e.yumFactor})]},e.name)})),re>0&&Object(Y.jsx)(y.a,{style:{height:(I?33:53)*re},children:Object(Y.jsx)(k.a,{colSpan:6})})]})]})}),Object(Y.jsx)(C.a,{rowsPerPageOptions:[5,10,25],component:"div",count:ae.length,rowsPerPage:q,page:P,onChangePage:function(e,t){F(t)},onChangeRowsPerPage:function(e){U(parseInt(e.target.value,10)),F(0)}})]}),Object(Y.jsx)(R.a,{control:Object(Y.jsx)(T.a,{checked:I,onChange:function(e){E(e.target.checked)}}),label:"Dense padding"})]})}var ne=function(){return Object(Y.jsx)("div",{id:"app",children:Object(Y.jsx)(l.a,{children:Object(Y.jsxs)(s.d,{children:[Object(Y.jsx)(s.b,{path:"/",exact:!0,component:te}),Object(Y.jsx)(s.a,{to:"/404"})]})})})},ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,192)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(Y.jsx)(c.a.StrictMode,{children:Object(Y.jsx)(ne,{})}),document.getElementById("root")),ae()},59:function(e,t,n){}},[[126,1,2]]]);
//# sourceMappingURL=main.f0deb651.chunk.js.map