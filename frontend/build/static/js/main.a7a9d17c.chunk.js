(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{101:function(e,t,a){},182:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(12),i=a.n(r),o=(a(101),a(126)),s=a(14),l=a(37),d=a.n(l),j=a(51),b=a(16),u=a(52),h=a.n(u),m=a(237),x=a(262),O=a(253),p=a(254),f=a(251),g=a(252),v=a(249),y=a(257),k=a(250),w=a(263),C=a(245),S=a(243),F=a(255),E=a(244),P="/api/v1/",N=a(116),B=a.n(N),T=a(113),D=a(232),I=a(236),A=a(5),M=function(e){var t=e.color,a=e.loading,n=e.override;return Object(A.jsxs)(c.a.Fragment,{children:[Object(A.jsx)(T.a,{children:Object(A.jsx)("title",{children:"JS Cake \ud83c\udf82"})}),Object(A.jsx)(D.a,{}),Object(A.jsx)(I.a,{maxWidth:"xs",children:Object(A.jsx)(B.a,{color:t||"#42f5ef",loading:a,css:"left: 100px; position: relative; top: 250px; ".concat(n),size:50})})]})},q=a(258),z=a(238),U=a(184),J=a(239),R=a(117),Y=a.n(R),H=a(80),L=a.n(H),W={cursor:"pointer"},$=function(e){return Object(A.jsx)("img",{src:e.url,height:e.height||220})},G=Object(m.a)((function(e){return Object(x.a)({modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}})}));function K(e){var t=G();void 0===e.data&&e.setEnable(!1);return Object(A.jsx)("div",{children:Object(A.jsx)(q.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:t.modal,open:e.enable,onClose:function(){e.setEnable(!1)},closeAfterTransition:!0,BackdropComponent:z.a,BackdropProps:{timeout:500},children:Object(A.jsx)(U.a,{in:e.enable,style:{width:400},children:Object(A.jsxs)("div",{className:t.paper,children:[Object(A.jsx)($,{url:e.data.imageUrl}),Object(A.jsx)("h2",{id:"transition-modal-title",children:e.data.name}),Object(A.jsxs)("ul",{id:"transition-modal-description",children:[Object(A.jsxs)("li",{children:[e.data.yumFactor," rating"]}),Object(A.jsx)("li",{children:e.data.comment})]}),Object(A.jsxs)(J.a,{container:!0,children:[Object(A.jsx)(J.a,{item:!0,xs:11,children:Object(A.jsx)(J.a,{container:!0,children:Object(A.jsx)(Y.a,{style:W,onClick:function(){e.setShowEditModal(!0)},fontSize:"large",color:"action"})})}),Object(A.jsx)(J.a,{item:!0,xs:1,children:Object(A.jsx)(J.a,{container:!0,children:Object(A.jsx)(L.a,{style:W,onClick:function(){e.setShowDeleteModal(!0)},fontSize:"large",color:"secondary"})})})]})]})})})})}var Q=a(260),V=a(242),X=a(240),Z=a(241),_=Object(m.a)((function(e){return Object(x.a)({modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}})}));function ee(e){var t=_(),a=c.a.useState(!1),n=Object(b.a)(a,2),r=n[0],i=n[1];void 0===e.data&&e.setEnable(!1);var o=function(){var t=Object(j.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!0!==r){t.next=11;break}return t.next=3,h.a.delete("".concat(P,"/cake/").concat(e.data.id));case 3:if(200!==t.sent.status){t.next=8;break}e.setCollection((function(t){return i(!1),e.setEnable(!1),t.filter((function(t){return t.id!==e.data.id}))})),t.next=9;break;case 8:throw new Error("Something went wrong");case 9:t.next=12;break;case 11:e.setEnable(!1);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(A.jsx)("div",{children:Object(A.jsx)(q.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:t.modal,open:e.enable,onClose:function(){e.setEnable(!1)},closeAfterTransition:!0,BackdropComponent:z.a,BackdropProps:{timeout:500},children:Object(A.jsx)(U.a,{in:e.enable,style:{width:400},children:Object(A.jsxs)("div",{className:t.paper,children:[Object(A.jsx)($,{url:e.data.imageUrl}),Object(A.jsxs)("h2",{id:"transition-modal-title",children:["Delete ",e.data.name]}),Object(A.jsxs)("ul",{id:"transition-modal-description",children:[Object(A.jsxs)("li",{children:[e.data.yumFactor," rating"]}),Object(A.jsx)("li",{children:e.data.comment})]}),Object(A.jsx)(J.a,{container:!0,children:Object(A.jsx)("form",{children:Object(A.jsxs)(X.a,{component:"fieldset",children:[Object(A.jsx)(Z.a,{component:"legend",children:"Are you sure you want to delete this?"}),Object(A.jsxs)(V.a,{"aria-label":"delete",name:"delete",value:r,onChange:function(e){switch(e.target.value){case"true":i(!0);break;case"false":i(!1)}},children:[Object(A.jsx)(S.a,{value:"true",control:Object(A.jsx)(Q.a,{checked:r}),label:"Yes"}),Object(A.jsx)(S.a,{value:"false",control:Object(A.jsx)(Q.a,{checked:!r}),label:"No"})]}),Object(A.jsxs)(J.a,{container:!0,children:[Object(A.jsx)(J.a,{item:!0,xs:11,children:Object(A.jsx)(J.a,{container:!0,children:Object(A.jsx)(E.a,{variant:"contained",color:"default",onClick:function(){e.setEnable(!1)},children:"Back"})})}),Object(A.jsx)(J.a,{item:!0,xs:1,children:Object(A.jsx)(J.a,{container:!0,children:Object(A.jsx)(E.a,{variant:"contained",color:"primary",onClick:o,children:"Submit"})})})]})]})})})]})})})})}var te=a(65),ae=a(66),ne=a(128),ce=a(127),re=a(261),ie=a(259),oe=a(185),se=Object(m.a)((function(e){return Object(x.a)({modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}})}));function le(e){var t=se(),a=c.a.useState(!1),n=Object(b.a)(a,2),r=n[0],i=n[1],o=c.a.useState(void 0),s=Object(b.a)(o,2),l=s[0],u=s[1],m=c.a.useState(!1),x=Object(b.a)(m,2),O=x[0],p=x[1],f=c.a.useState(["a","b","c"]),g=Object(b.a)(f,2),v=g[0],y=g[1];void 0===e.data&&e.setEnable(!1);c.a.useEffect((function(){console.log("here"),w()}),[e.data]);var k=function(){var t=Object(j.a)(d.a.mark((function t(){var a,n,c,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.data,n=new FormData,void 0!==l&&n.append("image",l),n.append("name",a.name),n.append("yumFactor",a.yumFactor.toString()),n.append("comment",a.comment),t.prev=6,t.next=9,h.a.patch("".concat(P,"cake/").concat(a.id),n);case 9:c=t.sent,r=c.data.data,u(!1),e.setEnable(!1),e.setData(r),e.setCollection((function(e){var t=Object(ne.a)(e);for(var n in t){t[n].id===a.id&&(t[n]=r)}return t})),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(6),y(t.t0.response.data.errors);case 20:case"end":return t.stop()}}),t,null,[[6,17]])})));return function(){return t.apply(this,arguments)}}(),w=function(){var t=[],a=e.data;3>a.name.length?t.push("The name field must be at least 3 characters."):30<a.name.length&&t.push("The name field must not exceed 30 characters."),3>a.comment.length?t.push("The comment field must be at least 3 characters."):50<a.comment.length&&t.push("The comment field must not exceed 30 characters.");var n="The yumFactor field must be between 1 - 5 inclusive.";!1===/^\d+$/.test(a.yumFactor.toString())?t.push("The yumFactor field must be an integer type."):(1>a.yumFactor||5<a.yumFactor)&&t.push(n),y((function(e){return[].concat(t)}))},C=function(t){var a=t.target,n=a.name,c=a.value;e.setData((function(e){return"yumFactor"===n?Object(ae.a)(Object(ae.a)({},e),{},Object(te.a)({},n,Number.parseInt(c))):Object(ae.a)(Object(ae.a)({},e),{},Object(te.a)({},n,c))}))};return Object(A.jsx)("div",{children:Object(A.jsx)(q.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:t.modal,open:e.enable,onClose:function(){e.setEnable(!1)},closeAfterTransition:!0,BackdropComponent:z.a,BackdropProps:{timeout:500},children:Object(A.jsx)(U.a,{in:e.enable,style:{width:400},children:Object(A.jsxs)("div",{className:t.paper,children:[Object(A.jsxs)("h2",{id:"transition-modal-title",children:["Edit ",e.data.name]}),Object(A.jsx)(J.a,{container:!0,children:Object(A.jsx)("form",{children:Object(A.jsxs)(X.a,{component:"fieldset",children:[v.length?v.map((function(e,t){return Object(A.jsx)(ie.a,{severity:"error",children:e},t)})):null,Object(A.jsx)(re.a,{id:"standard-required",name:"name",value:e.data.name,onChange:C,style:{width:335}}),Object(A.jsx)(re.a,{id:"standard-required",name:"yumFactor",type:"number",value:e.data.yumFactor,onChange:C}),Object(A.jsx)(re.a,{id:"standard-required",name:"comment",value:e.data.comment,onChange:C}),Object(A.jsxs)(oe.a,{children:[Object(A.jsx)(Z.a,{component:"legend",children:"Upload new image?"}),Object(A.jsxs)(V.a,{"aria-label":"uploading image",name:"uploadingImage",value:r,onChange:function(e){switch(e.target.value){case"true":p(!0),i(!0);break;case"false":u(!1),i(!1),p(!1)}},children:[Object(A.jsx)(S.a,{value:"true",control:Object(A.jsx)(Q.a,{checked:r}),label:"Yes"}),Object(A.jsx)(S.a,{value:"false",control:Object(A.jsx)(Q.a,{checked:!r}),label:"No"})]})]}),r?Object(A.jsx)(A.Fragment,{children:Object(A.jsx)(ce.a,{open:O,onSave:function(e){u(e[0]),p(!1)},acceptedFiles:["image/jpeg","image/png"],showPreviews:!0,maxFileSize:5e6,onClose:function(){p(!1),u(!1)}})}):null,Object(A.jsx)("br",{}),Object(A.jsxs)(J.a,{container:!0,children:[Object(A.jsx)(J.a,{item:!0,xs:10,children:Object(A.jsx)(J.a,{container:!0,children:Object(A.jsx)(E.a,{variant:"contained",color:"default",onClick:function(){e.setEnable(!1)},children:"Back"})})}),Object(A.jsx)(J.a,{item:!0,xs:2,children:Object(A.jsx)(J.a,{container:!0,children:Object(A.jsx)(E.a,{variant:"contained",color:"primary",onClick:k,disabled:0<v.length,children:"Submit"})})})]})]})})})]})})})})}function de(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}function je(e,t){return"desc"===e?function(e,a){return de(e,a,t)}:function(e,a){return-de(e,a,t)}}function be(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]})),a.map((function(e){return e[0]}))}var ue=[{id:"name",numeric:!1,disablePadding:!1,label:"Name"},{id:"comment",numeric:!0,disablePadding:!1,label:"Comment"},{id:"imageUrl",numeric:!1,disablePadding:!1,label:"Photo"},{id:"yumFactor",numeric:!0,disablePadding:!1,label:"Yum Factor"}];function he(e){var t=e.classes,a=(e.onSelectAllClick,e.order),n=e.orderBy,c=(e.numSelected,e.rowCount,e.onRequestSort);return Object(A.jsx)(v.a,{children:Object(A.jsx)(k.a,{children:ue.map((function(e){return Object(A.jsx)(f.a,{align:"left",padding:e.disablePadding?"none":"default",sortDirection:n===e.id&&a,children:Object(A.jsxs)(w.a,{active:n===e.id,direction:n===e.id?a:"asc",onClick:(r=e.id,function(e){c(e,r)}),children:[e.label,n===e.id?Object(A.jsx)("span",{className:t.visuallyHidden,children:"desc"===a?"sorted descending":"sorted ascending"}):null]})},e.id);var r}))})})}var me=Object(m.a)((function(e){return Object(x.a)({root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}})}));var xe=function(){var e=me(),t=c.a.useState("asc"),a=Object(b.a)(t,2),n=a[0],r=a[1],i=c.a.useState("name"),o=Object(b.a)(i,2),s=o[0],l=o[1],u=c.a.useState(0),m=Object(b.a)(u,2),x=m[0],v=m[1],w=c.a.useState(!0),N=Object(b.a)(w,2),B=N[0],T=N[1],D=c.a.useState(5),I=Object(b.a)(D,2),q=I[0],z=I[1],U=c.a.useState(!0),J=Object(b.a)(U,2),R=J[0],Y=J[1],H=c.a.useState([]),L=Object(b.a)(H,2),W=L[0],G=L[1],Q=c.a.useState(void 0),V=Object(b.a)(Q,2),X=V[0],Z=V[1],_=c.a.useState(!1),te=Object(b.a)(_,2),ae=te[0],ne=te[1],ce=c.a.useState(!1),re=Object(b.a)(ce,2),ie=re[0],oe=re[1],se=c.a.useState(!1),de=Object(b.a)(se,2),ue=de[0],xe=de[1],Oe=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(P,"cake/list"));case 2:if(200!==(t=e.sent).status){e.next=8;break}Y(!1),G(t.data.data),e.next=9;break;case 8:throw new Error("Something went wrong");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(c.a.useEffect((function(){Oe()}),[]),!0===R)return Object(A.jsx)(M,{});if(!0===ue)return Object(A.jsx)(le,{setData:Z,setCollection:G,setEnable:xe,enable:ue,data:X});if(!0===ie)return Object(A.jsx)(ee,{setCollection:G,setEnable:oe,enable:ie,data:X});if(!0===ae)return Object(A.jsx)(K,{setShowEditModal:xe,setShowDeleteModal:oe,setEnable:ne,enable:ae,data:X});var pe=q-Math.min(q,W.length-x*q);return Object(A.jsxs)("div",{className:e.root,children:[Object(A.jsxs)(C.a,{className:e.paper,children:[Object(A.jsx)(g.a,{children:Object(A.jsxs)(O.a,{className:e.table,"aria-labelledby":"tableTitle",size:B?"small":"medium","aria-label":"enhanced table",children:[Object(A.jsx)(he,{classes:e,numSelected:0,order:n,orderBy:s,onSelectAllClick:function(e){},onRequestSort:function(e,t){r(s===t&&"asc"===n?"desc":"asc"),l(t)},rowCount:W.length}),Object(A.jsxs)(p.a,{children:[be(W,je(n,s)).slice(x*q,x*q+q).map((function(e,t){var a="enhanced-table-checkbox-".concat(t);return Object(A.jsxs)(k.a,{hover:!0,onClick:function(t){return function(e,t){var a=W.find((function(e){var a=e.id;return t===a}));void 0!==a&&(Z(a),ne(!0))}(0,e.id)},role:"checkbox",tabIndex:-1,selected:!1,children:[Object(A.jsx)(f.a,{component:"th",id:a,scope:"row",padding:"none",children:e.name}),Object(A.jsx)(f.a,{children:e.comment}),Object(A.jsx)(f.a,{children:Object(A.jsx)($,{url:e.imageUrl,height:100})}),Object(A.jsx)(f.a,{children:e.yumFactor})]},e.id)})),pe>0&&Object(A.jsx)(k.a,{style:{height:(B?33:53)*pe},children:Object(A.jsx)(f.a,{colSpan:6})})]})]})}),Object(A.jsx)(y.a,{rowsPerPageOptions:[5,10,25],component:"div",count:W.length,rowsPerPage:q,page:x,onChangePage:function(e,t){v(t)},onChangeRowsPerPage:function(e){z(parseInt(e.target.value,10)),v(0)}})]}),Object(A.jsx)(S.a,{control:Object(A.jsx)(F.a,{checked:B,onChange:function(e){T(e.target.checked)}}),label:"Dense padding"}),Object(A.jsx)(E.a,{variant:"contained",color:"primary",children:"Create"})]})},Oe=function(){return Object(A.jsx)("div",{id:"app",children:Object(A.jsx)(o.a,{children:Object(A.jsx)(s.c,{children:Object(A.jsx)(s.a,{path:"/",exact:!0,component:xe})})})})},pe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,265)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(A.jsx)(c.a.StrictMode,{children:Object(A.jsx)(Oe,{})}),document.getElementById("root")),pe()}},[[182,1,2]]]);
//# sourceMappingURL=main.a7a9d17c.chunk.js.map