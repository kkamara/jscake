(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{103:function(e,t,a){},184:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(12),i=a.n(r),o=(a(103),a(128)),s=a(15),l=a(21),d=a.n(l),u=a(39),j=a(13),b=a(41),m=a.n(b),h=a(237),p=a(262),O=a(253),x=a(254),f=a(251),g=a(252),v=a(249),y=a(257),k=a(250),w=a(263),C=a(245),S=a(243),F=a(255),E=a(244),P="/api/v1/",N=a(118),T=a.n(N),B=a(115),D=a(232),I=a(236),M=a(2),q=function(e){var t=e.color,a=e.loading,n=e.override;return Object(M.jsxs)(c.a.Fragment,{children:[Object(M.jsx)(B.a,{children:Object(M.jsx)("title",{children:"JS Cake \ud83c\udf82"})}),Object(M.jsx)(D.a,{}),Object(M.jsx)(I.a,{maxWidth:"xs",children:Object(M.jsx)(T.a,{color:t||"#42f5ef",loading:a,css:"left: 100px; position: relative; top: 250px; ".concat(n),size:50})})]})},A=a(258),U=a(238),z=a(186),J=a(239),Y=a(119),R=a.n(Y),H=a(84),L=a.n(H),W={cursor:"pointer"},$=function(e){return Object(M.jsx)("img",{src:e.url,height:e.height||220})},G=Object(h.a)((function(e){return Object(p.a)({modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}})}));function K(e){var t=G();void 0===e.data&&e.setEnable(!1);return Object(M.jsx)("div",{children:Object(M.jsx)(A.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:t.modal,open:e.enable,onClose:function(){e.setEnable(!1)},closeAfterTransition:!0,BackdropComponent:U.a,BackdropProps:{timeout:500},children:Object(M.jsx)(z.a,{in:e.enable,style:{width:400},children:Object(M.jsxs)("div",{className:t.paper,children:[Object(M.jsx)($,{url:e.data.imageUrl}),Object(M.jsx)("h2",{id:"transition-modal-title",children:e.data.name}),Object(M.jsxs)("ul",{id:"transition-modal-description",children:[Object(M.jsxs)("li",{children:[e.data.yumFactor," rating"]}),Object(M.jsx)("li",{children:e.data.comment})]}),Object(M.jsxs)(J.a,{container:!0,children:[Object(M.jsx)(J.a,{item:!0,xs:11,children:Object(M.jsx)(J.a,{container:!0,children:Object(M.jsx)(R.a,{style:W,onClick:function(){e.setShowEditModal(!0)},fontSize:"large",color:"action"})})}),Object(M.jsx)(J.a,{item:!0,xs:1,children:Object(M.jsx)(J.a,{container:!0,children:Object(M.jsx)(L.a,{style:W,onClick:function(){e.setShowDeleteModal(!0)},fontSize:"large",color:"secondary"})})})]})]})})})})}var Q=a(260),V=a(242),X=a(240),Z=a(241),_=Object(h.a)((function(e){return Object(p.a)({modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}})}));function ee(e){var t=_(),a=c.a.useState(!1),n=Object(j.a)(a,2),r=n[0],i=n[1];void 0===e.data&&e.setEnable(!1);var o=function(){var t=Object(u.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!0!==r){t.next=11;break}return t.next=3,m.a.delete("".concat(P,"/cake/").concat(e.data.id));case 3:if(200!==t.sent.status){t.next=8;break}e.setCollection((function(t){return i(!1),e.setEnable(!1),t.filter((function(t){return t.id!==e.data.id}))})),t.next=9;break;case 8:throw new Error("Something went wrong");case 9:t.next=12;break;case 11:e.setEnable(!1);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(M.jsx)("div",{children:Object(M.jsx)(A.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:t.modal,open:e.enable,onClose:function(){e.setEnable(!1)},closeAfterTransition:!0,BackdropComponent:U.a,BackdropProps:{timeout:500},children:Object(M.jsx)(z.a,{in:e.enable,style:{width:400},children:Object(M.jsxs)("div",{className:t.paper,children:[Object(M.jsx)($,{url:e.data.imageUrl}),Object(M.jsxs)("h2",{id:"transition-modal-title",children:["Delete ",e.data.name]}),Object(M.jsxs)("ul",{id:"transition-modal-description",children:[Object(M.jsxs)("li",{children:[e.data.yumFactor," rating"]}),Object(M.jsx)("li",{children:e.data.comment})]}),Object(M.jsx)(J.a,{container:!0,children:Object(M.jsx)("form",{children:Object(M.jsxs)(X.a,{component:"fieldset",children:[Object(M.jsx)(Z.a,{component:"legend",children:"Are you sure you want to delete this?"}),Object(M.jsxs)(V.a,{"aria-label":"delete",name:"delete",value:r,onChange:function(e){switch(e.target.value){case"true":i(!0);break;case"false":i(!1)}},children:[Object(M.jsx)(S.a,{value:"true",control:Object(M.jsx)(Q.a,{checked:r}),label:"Yes"}),Object(M.jsx)(S.a,{value:"false",control:Object(M.jsx)(Q.a,{checked:!r}),label:"No"})]}),Object(M.jsxs)(J.a,{container:!0,children:[Object(M.jsx)(J.a,{item:!0,xs:11,children:Object(M.jsx)(J.a,{container:!0,children:Object(M.jsx)(E.a,{variant:"contained",color:"default",onClick:function(){e.setEnable(!1)},children:"Back"})})}),Object(M.jsx)(J.a,{item:!0,xs:1,children:Object(M.jsx)(J.a,{container:!0,children:Object(M.jsx)(E.a,{variant:"contained",color:"primary",onClick:o,children:"Submit"})})})]})]})})})]})})})})}var te=a(45),ae=a(33),ne=a(89),ce=a(88),re=a(261),ie=a(259),oe=a(187),se=Object(h.a)((function(e){return Object(p.a)({modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}})}));function le(e){var t=se(),a=c.a.useState(!1),n=Object(j.a)(a,2),r=n[0],i=n[1],o=c.a.useState(void 0),s=Object(j.a)(o,2),l=s[0],b=s[1],h=c.a.useState(!1),p=Object(j.a)(h,2),O=p[0],x=p[1],f=c.a.useState([]),g=Object(j.a)(f,2),v=g[0],y=g[1];void 0===e.data&&e.setEnable(!1);c.a.useEffect((function(){w()}),[e.data]);var k=function(){var t=Object(u.a)(d.a.mark((function t(){var a,n,c,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.data,n=new FormData,void 0!==l&&n.append("image",l),n.append("name",a.name),n.append("yumFactor",a.yumFactor.toString()),n.append("comment",a.comment),t.prev=6,t.next=9,m.a.patch("".concat(P,"cake/").concat(a.id),n);case 9:c=t.sent,r=c.data.data,b(!1),e.setEnable(!1),e.setData(r),e.setCollection((function(e){var t=Object(ne.a)(e);for(var n in t){t[n].id===a.id&&(t[n]=r)}return t})),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(6),y(t.t0.response.data.errors);case 20:case"end":return t.stop()}}),t,null,[[6,17]])})));return function(){return t.apply(this,arguments)}}(),w=function(){var t=[],a=e.data;3>a.name.length?t.push("The name field must be at least 3 characters."):30<a.name.length&&t.push("The name field must not exceed 30 characters."),3>a.comment.length?t.push("The comment field must be at least 3 characters."):50<a.comment.length&&t.push("The comment field must not exceed 30 characters.");var n="The yumFactor field must be between 1 - 5 inclusive.";!1===/^\d+$/.test(a.yumFactor.toString())?t.push("The yumFactor field must be an integer type."):(1>a.yumFactor||5<a.yumFactor)&&t.push(n),y((function(e){return[].concat(t)}))},C=function(t){var a=t.target,n=a.name,c=a.value;e.setData((function(e){return"yumFactor"===n?Object(ae.a)(Object(ae.a)({},e),{},Object(te.a)({},n,Number.parseInt(c))):Object(ae.a)(Object(ae.a)({},e),{},Object(te.a)({},n,c))}))};return Object(M.jsx)("div",{children:Object(M.jsx)(A.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:t.modal,open:e.enable,onClose:function(){e.setEnable(!1)},closeAfterTransition:!0,BackdropComponent:U.a,BackdropProps:{timeout:500},children:Object(M.jsx)(z.a,{in:e.enable,style:{width:400},children:Object(M.jsxs)("div",{className:t.paper,children:[Object(M.jsxs)("h2",{id:"transition-modal-title",children:["Edit ",e.data.name]}),Object(M.jsx)(J.a,{container:!0,children:Object(M.jsx)("form",{children:Object(M.jsxs)(X.a,{component:"fieldset",children:[v.length?v.map((function(e,t){return Object(M.jsx)(ie.a,{severity:"error",children:e},t)})):null,Object(M.jsx)(re.a,{id:"standard-required",name:"name",value:e.data.name,onChange:C,style:{width:335}}),Object(M.jsx)(re.a,{id:"standard-required",name:"yumFactor",type:"number",value:e.data.yumFactor,onChange:C}),Object(M.jsx)(re.a,{id:"standard-required",name:"comment",value:e.data.comment,onChange:C}),Object(M.jsx)("br",{}),Object(M.jsxs)(oe.a,{children:[Object(M.jsx)(Z.a,{component:"legend",children:"Upload new image?"}),Object(M.jsxs)(V.a,{"aria-label":"uploading image",name:"uploadingImage",value:r,onChange:function(e){switch(e.target.value){case"true":x(!0),i(!0);break;case"false":b(!1),i(!1),x(!1)}},children:[Object(M.jsx)(S.a,{value:"true",control:Object(M.jsx)(Q.a,{checked:r}),label:"Yes"}),Object(M.jsx)(S.a,{value:"false",control:Object(M.jsx)(Q.a,{checked:!r}),label:"No"})]})]}),r?Object(M.jsx)(M.Fragment,{children:Object(M.jsx)(ce.a,{open:O,onSave:function(e){b(e[0]),x(!1)},acceptedFiles:["image/jpeg","image/png"],showPreviews:!0,maxFileSize:5e6,onClose:function(){x(!1),b(!1)}})}):null,Object(M.jsx)("br",{}),Object(M.jsxs)(J.a,{container:!0,children:[Object(M.jsx)(J.a,{item:!0,xs:10,children:Object(M.jsx)(J.a,{container:!0,children:Object(M.jsx)(E.a,{variant:"contained",color:"default",onClick:function(){e.setEnable(!1)},children:"Back"})})}),Object(M.jsx)(J.a,{item:!0,xs:2,children:Object(M.jsx)(J.a,{container:!0,children:Object(M.jsx)(E.a,{variant:"contained",color:"primary",onClick:k,disabled:0<v.length,children:"Submit"})})})]})]})})})]})})})})}var de=Object(h.a)((function(e){return Object(p.a)({modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}})})),ue={name:"",comment:"",yumFactor:1,imageUrl:""};function je(e){var t=de(),a=c.a.useState(void 0),n=Object(j.a)(a,2),r=n[0],i=n[1],o=c.a.useState(!1),s=Object(j.a)(o,2),l=s[0],b=s[1],h=c.a.useState([]),p=Object(j.a)(h,2),O=p[0],x=p[1],f=c.a.useState(ue),g=Object(j.a)(f,2),v=g[0],y=g[1];c.a.useEffect((function(){w()}),[v]);var k=function(){var t=Object(u.a)(d.a.mark((function t(){var a,n,c,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=v,(n=new FormData).append("image",r),n.append("name",a.name),n.append("yumFactor",a.yumFactor.toString()),n.append("comment",a.comment),t.prev=6,t.next=9,m.a.post("".concat(P,"cake/create"),n);case 9:c=t.sent,o=c.data.data,i(!1),e.setEnable(!1),e.setCollection((function(e){return[o].concat(Object(ne.a)(e))})),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(6),x(t.t0.response.data.errors);case 19:case"end":return t.stop()}}),t,null,[[6,16]])})));return function(){return t.apply(this,arguments)}}(),w=function(e){var t=[],a=v;if(JSON.stringify(v)===JSON.stringify(ue)&&void 0===r)return x([]);void 0===e&&void 0===r&&t.push("Missing image field"),a.name?3>a.name.length?t.push("The name field must be at least 3 characters."):30<a.name.length&&t.push("The name field must not exceed 30 characters."):t.push("Missing name field."),a.comment?3>a.comment.length?t.push("The comment field must be at least 3 characters."):50<a.comment.length&&t.push("The comment field must not exceed 30 characters."):t.push("Missing comment field.");var n="The yumFactor field must be between 1 - 5 inclusive.";a.yumFactor?!1===/^\d+$/.test(a.yumFactor.toString())?t.push("The yumFactor field must be an integer type."):(1>a.yumFactor||5<a.yumFactor)&&t.push(n):t.push("Missing yumFactor field."),x((function(e){return[].concat(t)}))},C=function(e){var t=e.target,a=t.name,n=t.value;y((function(e){return"yumFactor"===a?Object(ae.a)(Object(ae.a)({},e),{},Object(te.a)({},a,Number.parseInt(n))):Object(ae.a)(Object(ae.a)({},e),{},Object(te.a)({},a,n))}))},S=function(){var e=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i(t[0]),b(!1),w(t[0]);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(M.jsx)("div",{children:Object(M.jsx)(A.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:t.modal,open:e.enable,onClose:function(){e.setEnable(!1)},closeAfterTransition:!0,BackdropComponent:U.a,BackdropProps:{timeout:500},children:Object(M.jsx)(z.a,{in:e.enable,style:{width:400},children:Object(M.jsxs)("div",{className:t.paper,children:[Object(M.jsx)("h2",{id:"transition-modal-title",children:"Add Cake"}),Object(M.jsx)(J.a,{container:!0,children:Object(M.jsx)("form",{children:Object(M.jsxs)(X.a,{component:"fieldset",children:[O.length?O.map((function(e,t){return Object(M.jsx)(ie.a,{severity:"error",children:e},t)})):null,Object(M.jsx)(re.a,{id:"standard-required",label:"Name",name:"name",value:v.name,onChange:C,style:{width:335}}),Object(M.jsx)(re.a,{id:"standard-required",label:"Yum Factor",name:"yumFactor",type:"number",value:v.yumFactor,onChange:C}),Object(M.jsx)(re.a,{id:"standard-required",label:"Comment",name:"comment",value:v.comment,onChange:C}),Object(M.jsx)("br",{}),Object(M.jsx)(E.a,{variant:"contained",color:void 0!==r?"primary":"default",onClick:function(){return b(!0)},style:{marginTop:15,marginBottom:15},children:"Upload image"}),Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),Object(M.jsx)(ce.a,{open:l,onSave:S,acceptedFiles:["image/jpeg","image/png"],showPreviews:!0,maxFileSize:5e6,onClose:function(){b(!1),i(!1)}}),Object(M.jsx)("br",{}),Object(M.jsxs)(J.a,{container:!0,children:[Object(M.jsx)(J.a,{item:!0,xs:10,children:Object(M.jsx)(J.a,{container:!0,children:Object(M.jsx)(E.a,{variant:"contained",color:"default",onClick:function(){e.setEnable(!1)},children:"Back"})})}),Object(M.jsx)(J.a,{item:!0,xs:2,children:Object(M.jsx)(J.a,{container:!0,children:Object(M.jsx)(E.a,{variant:"contained",color:"primary",onClick:k,disabled:0<O.length,children:"Submit"})})})]})]})})})]})})})})}function be(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}function me(e,t){return"desc"===e?function(e,a){return be(e,a,t)}:function(e,a){return-be(e,a,t)}}function he(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]})),a.map((function(e){return e[0]}))}var pe=[{id:"name",numeric:!1,disablePadding:!1,label:"Name"},{id:"comment",numeric:!0,disablePadding:!1,label:"Comment"},{id:"imageUrl",numeric:!1,disablePadding:!1,label:"Photo"},{id:"yumFactor",numeric:!0,disablePadding:!1,label:"Yum Factor"}];function Oe(e){var t=e.classes,a=(e.onSelectAllClick,e.order),n=e.orderBy,c=(e.numSelected,e.rowCount,e.onRequestSort);return Object(M.jsx)(v.a,{children:Object(M.jsx)(k.a,{children:pe.map((function(e){return Object(M.jsx)(f.a,{align:"left",padding:e.disablePadding?"none":"default",sortDirection:n===e.id&&a,children:Object(M.jsxs)(w.a,{active:n===e.id,direction:n===e.id?a:"asc",onClick:(r=e.id,function(e){c(e,r)}),children:[e.label,n===e.id?Object(M.jsx)("span",{className:t.visuallyHidden,children:"desc"===a?"sorted descending":"sorted ascending"}):null]})},e.id);var r}))})})}var xe=Object(h.a)((function(e){return Object(p.a)({root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}})}));var fe=function(){var e=xe(),t=c.a.useState("asc"),a=Object(j.a)(t,2),n=a[0],r=a[1],i=c.a.useState("name"),o=Object(j.a)(i,2),s=o[0],l=o[1],b=c.a.useState(0),h=Object(j.a)(b,2),p=h[0],v=h[1],w=c.a.useState(!0),N=Object(j.a)(w,2),T=N[0],B=N[1],D=c.a.useState(5),I=Object(j.a)(D,2),A=I[0],U=I[1],z=c.a.useState(!0),J=Object(j.a)(z,2),Y=J[0],R=J[1],H=c.a.useState([]),L=Object(j.a)(H,2),W=L[0],G=L[1],Q=c.a.useState(void 0),V=Object(j.a)(Q,2),X=V[0],Z=V[1],_=c.a.useState(!1),te=Object(j.a)(_,2),ae=te[0],ne=te[1],ce=c.a.useState(!1),re=Object(j.a)(ce,2),ie=re[0],oe=re[1],se=c.a.useState(!1),de=Object(j.a)(se,2),ue=de[0],be=de[1],pe=c.a.useState(!1),fe=Object(j.a)(pe,2),ge=fe[0],ve=fe[1],ye=function(){var e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("".concat(P,"cake/list"));case 2:if(200!==(t=e.sent).status){e.next=8;break}R(!1),G(t.data.data),e.next=9;break;case 8:throw new Error("Something went wrong");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(c.a.useEffect((function(){ye()}),[]),!0===Y)return Object(M.jsx)(q,{});if(!0===ue)return Object(M.jsx)(le,{setData:Z,setCollection:G,setEnable:be,enable:ue,data:X});if(!0===ie)return Object(M.jsx)(ee,{setCollection:G,setEnable:oe,enable:ie,data:X});if(!0===ae)return Object(M.jsx)(K,{setShowEditModal:be,setShowDeleteModal:oe,setEnable:ne,enable:ae,data:X});if(!0===ge)return Object(M.jsx)(je,{setCollection:G,setEnable:ve,enable:ge});var ke=A-Math.min(A,W.length-p*A);return Object(M.jsxs)("div",{className:e.root,children:[Object(M.jsxs)(C.a,{className:e.paper,children:[Object(M.jsx)(g.a,{children:Object(M.jsxs)(O.a,{className:e.table,"aria-labelledby":"tableTitle",size:T?"small":"medium","aria-label":"enhanced table",children:[Object(M.jsx)(Oe,{classes:e,numSelected:0,order:n,orderBy:s,onSelectAllClick:function(e){},onRequestSort:function(e,t){r(s===t&&"asc"===n?"desc":"asc"),l(t)},rowCount:W.length}),Object(M.jsxs)(x.a,{children:[he(W,me(n,s)).slice(p*A,p*A+A).map((function(e,t){var a="enhanced-table-checkbox-".concat(t);return Object(M.jsxs)(k.a,{hover:!0,onClick:function(t){return function(e,t){var a=W.find((function(e){var a=e.id;return t===a}));void 0!==a&&(Z(a),ne(!0))}(0,e.id)},role:"checkbox",tabIndex:-1,selected:!1,children:[Object(M.jsx)(f.a,{component:"th",id:a,scope:"row",padding:"none",children:e.name}),Object(M.jsx)(f.a,{children:e.comment}),Object(M.jsx)(f.a,{children:Object(M.jsx)($,{url:e.imageUrl,height:100})}),Object(M.jsx)(f.a,{children:e.yumFactor})]},e.id)})),ke>0&&Object(M.jsx)(k.a,{style:{height:(T?33:53)*ke},children:Object(M.jsx)(f.a,{colSpan:6})})]})]})}),Object(M.jsx)(y.a,{rowsPerPageOptions:[5,10,25],component:"div",count:W.length,rowsPerPage:A,page:p,onChangePage:function(e,t){v(t)},onChangeRowsPerPage:function(e){U(parseInt(e.target.value,10)),v(0)}})]}),Object(M.jsx)(S.a,{control:Object(M.jsx)(F.a,{checked:T,onChange:function(e){B(e.target.checked)}}),label:"Dense padding"}),Object(M.jsx)(E.a,{variant:"contained",color:"primary",onClick:function(){ve(!0)},children:"Create"})]})},ge=function(){return Object(M.jsx)("div",{id:"app",children:Object(M.jsx)(o.a,{children:Object(M.jsx)(s.c,{children:Object(M.jsx)(s.a,{path:"/",exact:!0,component:fe})})})})},ve=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,265)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(M.jsx)(c.a.StrictMode,{children:Object(M.jsx)(ge,{})}),document.getElementById("root")),ve()}},[[184,1,2]]]);
//# sourceMappingURL=main.48021556.chunk.js.map