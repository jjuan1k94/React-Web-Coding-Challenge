(this["webpackJsonpreact-web-coding-challenge"]=this["webpackJsonpreact-web-coding-challenge"]||[]).push([[0],{135:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),i=n.n(o),c=n(23),l=n(20),s=n(16),u=n(57),m=n(7),d={loading:!1,error:null,stolenBikes:[],geoJsonStolenBikes:{},page:1},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_DATA":return Object(m.a)(Object(m.a)({},e),{},{loading:!0,error:null});case"ERROR_OCURRED":return Object(m.a)(Object(m.a)({},e),{},{loading:!1,error:t.payload});case"BIKES_RECEIVED":return Object(m.a)(Object(m.a)({},e),{},{loading:!1,stolenBikes:t.payload});case"CHANGE_PAGE":return Object(m.a)(Object(m.a)({},e),{},{page:t.payload});case"GEOJSON_BIKES_RECEIVED":return Object(m.a)(Object(m.a)({},e),{},{geoJsonStolenBikes:t.payload,loading:!1});default:return e}},f=n(9),g=n(24),b=n(136),h=n(137),E=n(138),v=n(139),y=n(140),w=n(58),O=n.n(w),_=n(11),x=n(6);function k(){var e=Object(_.a)([""]);return k=function(){return e},e}function j(){var e=Object(_.a)([""]);return j=function(){return e},e}function C(){var e=Object(_.a)(["\n  margin-left: 0.5rem;\n"]);return C=function(){return e},e}function N(){var e=Object(_.a)(["\n  height: 100px;\n"]);return N=function(){return e},e}function S(){var e=Object(_.a)(["\n  display: flex;\n  width: 100%;\n  overflow: hidden;\n  padding: 0.5rem 1rem;\n"]);return S=function(){return e},e}var I=x.b.div(S()),B=x.b.img(N()),D=x.b.div(C()),M=x.b.h3(j()),R=x.b.h5(k()),T=function(){return r.a.createElement(I,{className:"bg-light"},r.a.createElement(B,{src:O.a,alt:"logo-police"}),r.a.createElement(D,null,r.a.createElement(M,null,"Police Department of Berlin"),r.a.createElement(R,null,"Stolen bikes")))},P=Object(f.f)((function(e){var t=e.location,n=Object(a.useState)(!1),o=Object(g.a)(n,2),i=o[0],c=o[1];return r.a.createElement("header",null,r.a.createElement(T,null),r.a.createElement(b.a,{color:"light",light:!0,expand:"md"},r.a.createElement(l.b,{to:"/",className:"navbar-brand"},"Stolen bikes"),r.a.createElement(h.a,{onClick:function(){return c(!i)}}),r.a.createElement(E.a,{isOpen:i,navbar:!0},r.a.createElement(v.a,{className:"mr-auto",navbar:!0},r.a.createElement(y.a,null,r.a.createElement(l.b,{activeClassName:"font-weight-bold text-primary",isActive:function(){return"/"===t.pathname},className:"nav-link",to:"/"},"Home")),r.a.createElement(y.a,null,r.a.createElement(l.b,{activeClassName:"font-weight-bold text-primary",isActive:function(){return"/map"===t.pathname},className:"nav-link",to:"/map"},"Map"))))))})),J=x.b.div.withConfig({displayName:"styles__ContainerLayout",componentId:"sc-1eha06f-0"})([""]),Y=x.b.section.withConfig({displayName:"styles__Container",componentId:"sc-1eha06f-1"})([""]),q=(x.b.footer.withConfig({displayName:"styles__Footer",componentId:"sc-1eha06f-2"})([""]),function(e){var t=e.children;return r.a.createElement(J,{id:"layout"},r.a.createElement(P,null),r.a.createElement(Y,null,t))}),G=n(32),A=n.n(G),H=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"DD/MM/YYYY";return A.a.unix(e).format(t)},F=function(e,t){return A()(e,t).format("x")/1e3},L=n(157),V=n(145),z=n(141),K=n(142),Q=n(143),U=n(144);function W(){var e=Object(_.a)(["\n  width: 115px;\n"]);return W=function(){return e},e}function X(){var e=Object(_.a)(["\n  width: 100% !important;\n"]);return X=function(){return e},e}function Z(){var e=Object(_.a)(["\n  color: #007bff;\n  border-color: #007bff;\n  font-size: 1rem;\n  :focus {\n    border: 0;\n  }\n"]);return Z=function(){return e},e}function $(){var e=Object(_.a)(["\n  color: #007bff;\n  border-color: #007bff !important;\n  width: 100%;\n  padding: 0.5 rem 0;\n  :focus {\n    border-color: #0062cc;\n    outline-color: white;\n    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);\n  }\n"]);return $=function(){return e},e}function ee(){var e=Object(_.a)(["\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n"]);return ee=function(){return e},e}function te(){var e=Object(_.a)(["\n  margin-right: 0.5rem;\n  margin-bottom: 0;\n  text-align: center;\n  justify-content: center;\n"]);return te=function(){return e},e}var ne,ae=Object(x.b)(z.a)(te()),re=Object(x.b)(K.a)(ee()),oe=Object(x.b)(h.a)($()),ie=x.b.div(Z()),ce=Object(x.b)(Q.a)(X()),le=Object(x.b)(U.a)(W()),se=function(e){var t=e.addonText,n=e.innerRef,a=e.placeholder,o=void 0===a?"":a,i=e.name,c=e.type,l=void 0===c?"text":c,s=e.onKeyDown,u=void 0===s?function(){return""}:s;return r.a.createElement(ae,{className:"mb-2 mr-0 col-md-3"},r.a.createElement(ce,null,t&&r.a.createElement(L.a,{addonType:"prepend"},t),r.a.createElement(V.a,{innerRef:n,placeholder:o,name:i,id:i,type:l,onKeyDown:u})))},ue=r.a.createRef(),me=r.a.createRef(),de=r.a.createRef(),pe=function(e){var t=e.onSubmit,n=Object(a.useState)(!1),o=Object(g.a)(n,2),i=o[0],c=o[1],l=function(){var e=ue.current.value.trim(),n=me.current.value,a=de.current.value;t({textQuery:e,startDate:n,endDate:a})};return r.a.createElement(b.a,{light:!0,expand:"md",className:"justify-content-center"},r.a.createElement(oe,{onClick:function(){return c(!i)}},r.a.createElement(ie,null,"Filters")),r.a.createElement(E.a,{isOpen:i,className:"justify-content-center",navbar:!0},r.a.createElement(re,{inline:!0,className:"w-100"},r.a.createElement(se,{innerRef:ue,placeholder:"Search case descriptions",name:"textQuery",onKeyDown:function(e){"Enter"!==e.key&&13!==e.keyCode||(e.preventDefault(),l())}}),r.a.createElement(se,{type:"date",innerRef:me,name:"startDate",addonText:"From"}),r.a.createElement(se,{type:"date",innerRef:de,name:"endDate",addonText:"To"}),r.a.createElement(ae,{className:"mr-0 col-md-auto"},r.a.createElement(le,{color:"secondary",className:"mb-2 mr-2",onClick:function(){ue.current.value="",me.current.value="",de.current.value=""}},"Clean Filters"),r.a.createElement(le,{color:"primary",className:"mb-2 mr-2",onClick:l},"Find cases")))))},fe=n(146),ge=Object(x.b)(fe.a).withConfig({displayName:"styles__Card",componentId:"sc-5g8mw6-0"})(["box-shadow:rgba(55,55,55,0.3) 7px 7px 3px 0px;border:1px solid rgba(55,55,55,0.25);margin-bottom:0.5rem;"]),be=x.b.img.withConfig({displayName:"styles__Img",componentId:"sc-5g8mw6-1"})(["border:1px solid rgba(70,70,70,0.25);border-radius:0.25rem;height:150px;width:150px;cursor:pointer;"]),he=x.b.h5.withConfig({displayName:"styles__Title",componentId:"sc-5g8mw6-2"})(["text-decoration:underline;cursor:default;"]),Ee=x.b.p.withConfig({displayName:"styles__Paragraph",componentId:"sc-5g8mw6-3"})(["margin-bottom:0.5rem;cursor:default;"]),ve=x.b.span.withConfig({displayName:"styles__BoldText",componentId:"sc-5g8mw6-4"})(["font-weight:bold;"]),ye=n(152),we=n(150),Oe=n(151),_e=n(38),xe=n.n(_e),ke=n(156),je=n(147),Ce=n(148),Ne=n(149),Se="https://bikewise.org/api/v2",Ie=1,Be=100,De="Berlin, DE",Me=50,Re="theft",Te=x.b.img.withConfig({displayName:"styles__Img",componentId:"kcl1su-0"})(["margin-bottom:.5rem;width:100%;border:1px solid #ccc;"]),Pe=x.b.div.withConfig({displayName:"styles__ContainerMap",componentId:"kcl1su-1"})(["width:100%;height:500px;"]),Je=x.b.h6.withConfig({displayName:"styles__TitleData",componentId:"kcl1su-2"})(["margin-bottom:.3rem;"]),Ye=x.b.p.withConfig({displayName:"styles__TextData",componentId:"kcl1su-3"})(["margin-bottom:.3rem;"]),qe=n(12),Ge=n(13),Ae=(n(84),n(85),n(30)),He=n.n(Ae),Fe={maxZoom:18,attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery \xa9 <a href="https://www.mapbox.com/">Mapbox</a>',id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1},Le=function(e,t){var n,a=e.properties,r=a.description,o=a.occurred_at,i=a.title,c=document.createElement("div");c.innerHTML=r;var l=function(e,t,n){var a=document.createElement("div"),r=document.createElement("h6"),o=document.createElement("p"),i=document.createElement("img");return a.className="container-fluid text-center",a.id="popup-map-stolenbikes",r.innerHTML=e||"Unknown",r.className="title-popup-stolen-bikes",i.src=t||"https://upload.wikimedia.org/wikipedia/commons/5/5a/No_image_available_500_x_500.svg",i.className="thumb-popup-stolen-bikes",o.innerHTML='<span class="span-text-popup-stolen-bikes">Ocurred at</span> '.concat(n),a.appendChild(r),a.appendChild(i),a.appendChild(o),a}(i,null===(n=c.getElementsByTagName("img")[0])||void 0===n?void 0:n.src,o);t.bindPopup(l)},Ve=function(){function e(t,n){Object(qe.a)(this,e),this.leafletMap=null,this.htmlElement=t,this.rootView=n,this.renderMap=this.renderMap.bind(this),this.renderGeoJson=this.renderGeoJson.bind(this)}return Object(Ge.a)(e,[{key:"renderMap",value:function(){this.leafletMap||(this.leafletMap=He.a.map(this.htmlElement)),this.leafletMap.setView(this.rootView,13),He.a.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",Fe).addTo(this.leafletMap)}},{key:"renderGeoJson",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(He.a.geoJSON([e],{onEachFeature:Le,pointToLayer:function(e,t){return He.a.circleMarker(t,{radius:8,fillColor:"#007bff",color:"#000",weight:1,opacity:1,fillOpacity:.8})}}).addTo(this.leafletMap),t){var n=Object(g.a)(e.features[0].geometry.coordinates,2),a=n[0],r=n[1];this.leafletMap.setView([r,a],13)}}},{key:"DisposeElem",value:function(){this.leafletMap.off(),this.leafletMap.remove(),this.leafletMap=null}}]),e}(),ze=function(e){e?(ne=new Ve(e,[52.4985969,13.3783562])).renderMap():ne.DisposeElem()},Ke=n(65),Qe=n(33),Ue=n.n(Qe),We=n(64),Xe={shouldSort:!1,ignoreLocation:!0},Ze=De,$e=Me,et=Re,tt=Ie,nt=Be,at=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Ooops, something went wrong";return e({type:"ERROR_OCURRED",payload:t})},rt=function(e,t,n,a){n>199&&n<300?e({type:t,payload:a}):at(e)},ot=function(e){return Object.keys(e).filter((function(t){return e[t]})).map((function(t){return"".concat(t,"=").concat(e[t])})).join("&")},it=function(e){var t=e.page,n=void 0===t?tt:t,a=e.perPage,r=void 0===a?nt:a,o=Object(Ke.a)(e,["page","perPage"]);return function(e){var t=ot(Object(m.a)(Object(m.a)({},o),{},{page:n,per_page:r,proximity:Ze,proximity_square:$e,incident_type:et}));Ue.a.get("".concat(Se,"/incidents?").concat(t)).then((function(t){var n,a,r,i=t.data.incidents,c=t.status,l=(n=i,a=["title"],(r=o.query)?new We.a(n,Object(m.a)(Object(m.a)({},Xe),{},{keys:a})).search(r).map((function(e){return e.item})):n);rt(e,"BIKES_RECEIVED",c,l)})).catch((function(t){return at(e,t)})),function(e){e({type:"REQUEST_DATA"})}(e)}},ct=function(e){return{type:"CHANGE_PAGE",payload:e}},lt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var n=ot(Object(m.a)({proximity:Ze,proximity_square:$e,incident_type:et,all:!0},e));Ue.a.get("".concat(Se,"/locations/markers?").concat(n)).then((function(e){var n=e.data,a=e.status;rt(t,"GEOJSON_BIKES_RECEIVED",a,n)})).catch((function(e){return at(t,e)}))}},st=function(e){return function(t){var n=ot({proximity:Ze,proximity_square:$e,incident_type:et,all:!0,query:e,limit:1});Ue.a.get("".concat(Se,"/locations/markers?").concat(n)).then((function(e){var n=e.data,a=e.status;rt(t,"GEOJSON_BIKES_RECEIVED",a,n)})).catch((function(e){return at(t,e)}))}},ut=Object(c.b)((function(e,t){var n=e.geoJsonStolenBikes;return Object(m.a)(Object(m.a)({},t),{},{geoJsonStolenBikes:n})}),(function(){return function(e){return{actions:Object(s.b)({requestGeoJsonByTitle:st},e)}}}))((function(e){var t=e.isOpen,n=e.onClose,o=e.src,c=e.alt,l=e.geoJsonStolenBikes,s=e.actions,u=e.title,m=e.description,d=e.address,p=e.occurred_at,f=e.updated_at;return Object(a.useEffect)((function(){t&&s.requestGeoJsonByTitle(u)}),[t]),Object(a.useEffect)((function(){t&&ne&&ne.renderGeoJson(l,!0)}),[l]),t?i.a.createPortal(r.a.createElement(ke.a,{isOpen:t,toggle:n,centered:!0,size:"xl"},r.a.createElement(je.a,{toggle:n},u),r.a.createElement(Ce.a,null,r.a.createElement(Ne.a,{fluid:!0},r.a.createElement(we.a,null,r.a.createElement(Oe.a,{md:4},r.a.createElement(Te,{src:o,alt:c}),r.a.createElement(Je,null,"Description"),r.a.createElement(Ye,null,m||"No description"),r.a.createElement(Je,null,"Address"),r.a.createElement(Ye,null,d),r.a.createElement(Je,null,"Date stolen"),r.a.createElement(Ye,null,H(p)),r.a.createElement(Je,null,"Date reported"),r.a.createElement(Ye,null,H(f))),r.a.createElement(Oe.a,{md:8},r.a.createElement(Pe,{ref:ze})))))),document.getElementById("portal-root")):""})),mt=function(e){var t=e.title,n=e.description,o=e.address,i=e.occurred_at,c=e.updated_at,l=e.media,s=l.image_url_thumb,u=l.image_url,m=Object(a.useState)(!1),d=Object(g.a)(m,2),p=d[0],f=d[1],b=function(){console.log(p),f(!p)};return r.a.createElement(ge,null,r.a.createElement(ye.a,null,r.a.createElement(we.a,null,r.a.createElement(Oe.a,{md:"auto",className:"text-center"},r.a.createElement(be,{onClick:b,src:s||xe.a,alt:"thumb-bike-image"})),r.a.createElement(Oe.a,{md:!0},r.a.createElement(he,null,t),r.a.createElement(Ee,null,n||"No description"),r.a.createElement(Ee,null,r.a.createElement(ve,null,"Reported")," ",H(c)),r.a.createElement(Ee,null,r.a.createElement(ve,null,"Stolen")," ","".concat(H(i)," - ").concat(o))))),r.a.createElement(ut,Object.assign({isOpen:p,onClose:b,src:u||xe.a,alt:"bike-image"},{title:t,description:n,address:o,occurred_at:i,updated_at:c})))},dt=x.b.h6.withConfig({displayName:"styles__TitleTotal",componentId:"sc-1ar0gie-0"})(["width:100%;text-align:right;"]),pt=x.b.ul.withConfig({displayName:"styles__ContainerCards",componentId:"sc-1ar0gie-1"})(["margin:0px 10px;padding:0px;"]),ft=function(e){var t=e.bikes,n=e.total,a=void 0===n?"unknown":n;return r.a.createElement(r.a.Fragment,null,r.a.createElement(dt,null,"Total: ",r.a.createElement("span",null,a)),r.a.createElement(pt,null,t.map((function(e){return r.a.createElement(mt,Object.assign({key:e.id},e))}))))},gt=n(153),bt=n(154),ht=Object(x.b)(gt.a).withConfig({displayName:"styles__Pagination",componentId:"sc-1rgiunu-0"})(["width:fit-content;margin:auto;"]),Et=Object(x.b)(bt.a).withConfig({displayName:"styles__PaginationLink",componentId:"sc-1rgiunu-1"})(["flex:1;height:100%;"]),vt=x.b.div.withConfig({displayName:"styles__Container",componentId:"sc-1rgiunu-2"})([""]),yt=n(155),wt=function(e){var t=e.children,n=e.onClick,a=e.first,o=void 0!==a&&a,i=e.active,c=void 0!==i&&i,l=e.disabled,s=void 0!==l&&l;return r.a.createElement(yt.a,{disabled:s,active:c},r.a.createElement(Et,{first:o,onClick:n},t))},Ot=function(e){var t=e.page,n=e.totalPages,a=e.onChangePage,o=t-1,i=t+1;return r.a.createElement(vt,null,r.a.createElement(ht,{"aria-label":"Page navigation example"},r.a.createElement(wt,{first:!0,onClick:function(){return a(1)}},"<< First"),r.a.createElement(wt,{disabled:t<=1,onClick:function(){return a(o)}},"< Prev"),t>1&&r.a.createElement(wt,{onClick:function(){return a(o)}},o),r.a.createElement(wt,{active:!0},t),n>t&&r.a.createElement(wt,{onClick:function(){return a(i)}},i),r.a.createElement(wt,{disabled:t>=n,onClick:function(){return a(i)}},"Next >"),r.a.createElement(wt,{disabled:t>=n,onClick:function(){return a(n)}},"Last >>")))},_t=n(62),xt=x.b.div.withConfig({displayName:"styles__Container",componentId:"sc-11w77it-0"})(["width:100%;height:100%;text-align:center;display:flex;justify-content:center;align-items:center;"]),kt=Object(x.b)(_t.Spinner).withConfig({displayName:"styles__OrbitalSpinnerStyled",componentId:"sc-11w77it-1"})([""]),jt=function(){return r.a.createElement(xt,null,r.a.createElement(kt,{color:"#343a40"}))};function Ct(){var e=Object(_.a)(["\n  color: red;\n"]);return Ct=function(){return e},e}function Nt(){var e=Object(_.a)(["\n  color: red;\n"]);return Nt=function(){return e},e}var St=x.b.h2(Nt()),It=x.b.p(Ct());function Bt(){var e=Object(_.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return Bt=function(){return e},e}var Dt,Mt=x.b.div(Bt()),Rt=n(63),Tt=n.n(Rt),Pt=function(e){var t=e.children;return r.a.createElement(Mt,{className:"container row"},r.a.createElement("div",{className:"col-md-6 align-self-center"},r.a.createElement("img",{src:Tt.a})),r.a.createElement("div",{className:"col-md-6 align-self-center"},t))},Jt=function(e){var t=e.error;return r.a.createElement(Pt,null,r.a.createElement(St,null,"Ooops, :("),r.a.createElement(It,null,t))},Yt=function(){return r.a.createElement(Pt,null,r.a.createElement("h2",null,"Ooops, :("),r.a.createElement("p",null,"We couldn`t find a match for your query"))},qt=x.b.div.withConfig({displayName:"styles__Container",componentId:"rzt9x5-0"})(["display:flex;flex-flow:column;height:100%;padding:0 1rem;"]),Gt=x.b.div.withConfig({displayName:"styles__Header",componentId:"rzt9x5-1"})(["flex:0 1 auto;"]),At=x.b.div.withConfig({displayName:"styles__Body",componentId:"rzt9x5-2"})(["flex:1 1 auto;overflow-y:auto;"]),Ht=x.b.div.withConfig({displayName:"styles__Footer",componentId:"rzt9x5-3"})(["flex:0 1 50px;padding:1rem 0;"]),Ft=function(e,t){return Math.ceil(e.length/t)},Lt=function(e){var t,n,a=e.bikes,o=e.loading,i=e.error,c=e.page,l=e.lengthPage,s=e.total,u=e.onChangePage,m=e.onSearch;if(i)t=r.a.createElement(Jt,{error:i});else if(o)t=r.a.createElement(jt,null);else{var d=function(e,t,n){var a=(t-1)*n,r=a+n;return e.slice(a,r)}(a,c,l);d.length<1?t=r.a.createElement(Yt,null):(t=r.a.createElement(ft,{bikes:d,total:s}),n=r.a.createElement(Ot,{onChangePage:u,page:c,totalPages:Ft(a,l)}))}return r.a.createElement(qt,{id:"stolen-bikes-page"},r.a.createElement(Gt,null,r.a.createElement(pe,{onSubmit:m})),r.a.createElement(At,null,t),r.a.createElement(Ht,null,n))},Vt=Object(c.b)((function(e){var t=e.loading,n=e.error,a=e.stolenBikes;return{loading:t,error:n,page:e.page,lengthPage:e.lengthPage,stolenBikes:a}}),(function(e){return{actions:Object(s.b)({requestStolenBikes:it,requestPage:ct},e)}}))((function(e){var t=e.loading,n=e.error,o=e.stolenBikes,i=e.page,c=e.actions;Object(a.useEffect)((function(){c.requestStolenBikes({page:1,perPage:100})}),[c]);var l;return r.a.createElement(Lt,{bikes:o,page:i,lengthPage:10,total:(l=o,l.length>=100?"+".concat(100):l.length),onChangePage:function(e){console.log(e),c.requestPage(e)},onSearch:function(e){var t=e.textQuery,n=void 0===t?"":t,a=e.startDate,r=void 0===a?"":a,o=e.endDate,i=void 0===o?"":o,l=r?F(r,"YYYY-MM-DD").toString():void 0,s=i?F(function(e,t,n){var a=A()(e,t);return a.add(n,"days"),a.format(t)}(i,"YYYY-MM-DD",1),"YYYY-MM-DD").toString():void 0;console.log(i),c.requestStolenBikes({page:1,perPage:100,query:n,occurred_after:l,occurred_before:s})},loading:t,error:n})})),zt=x.b.div.withConfig({displayName:"styles__Container",componentId:"sc-93lgea-0"})(["width:100%;height:100%;position:relative;outline:none;padding:1rem 0;border:1px solid #ccc;"]),Kt=r.a.createRef(),Qt=Object(c.b)((function(e){return{error:e.error,loading:e.loading,geoJsonStolenBikes:e.geoJsonStolenBikes}}),(function(e){return{actions:Object(s.b)({requestGeoJsonStolenBikes:lt},e)}}))((function(e){var t=e.loading,n=e.error,o=e.actions,i=e.geoJsonStolenBikes;return Object(a.useEffect)((function(){o.requestGeoJsonStolenBikes(),(Dt=new Ve(Kt.current,[52.4985969,13.3783562])).renderMap()}),[o]),Object(a.useEffect)((function(){Dt.renderGeoJson(i)}),[i]),r.a.createElement(zt,{ref:Kt},t&&r.a.createElement(jt,null),n&&r.a.createElement(Jt,{error:n}))})),Ut=function(){return r.a.createElement(Pt,null,r.a.createElement("h1",null,"404"),r.a.createElement("h2",null,"UH OH! You're lost."),r.a.createElement("p",null,"The page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage."),r.a.createElement(l.b,{to:"/",isActive:function(){return!1},className:"btn btn-outline-secondary"},"HOME"))};function Wt(){var e=Object(_.a)(["\n    html,body{\n        height:100%;\n        margin:0;\n    }\n    #root {\n        height: 100%;\n        overflow:hidden;\n    }\n    #layout{\n        display: flex;\n        flex-flow: column;\n        height: 100%;\n    }\n    header {\n        flex: 0 1 auto;\n    }\n    section {\n        flex: 1 1 auto;\n        overflow-y:auto;\n        overflow-x:hidden;\n        padding: 0 2rem;\n    }\n    footer {\n        flex:0 1 0px;\n    }\n    ::-webkit-scrollbar {\n        width: 6px;\n    }\n    ::-webkit-scrollbar-thumb {\n        background-color: #007bff;    \n        border-radius: 4px;     \n    }\n    ::-webkit-scrollbar-thumb:hover {\n        background: #555; \n    }\n"]);return Wt=function(){return e},e}var Xt=Object(x.a)(Wt()),Zt=function(){return r.a.createElement(q,null,r.a.createElement(Xt,null),r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",component:Vt}),r.a.createElement(f.a,{exact:!0,path:"/map",component:Qt}),r.a.createElement(f.a,{path:"*",component:Ut})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(134);var $t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=[u.a],n=p,a=[];return Object(s.d)(n,e,s.c.apply(void 0,[s.a.apply(void 0,t)].concat(a)))}();i.a.render(r.a.createElement(c.a,{store:$t},r.a.createElement(l.a,{basename:"/React-Web-Coding-Challenge"},r.a.createElement(Zt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},38:function(e,t,n){e.exports=n.p+"static/media/bike.7424658f.svg"},58:function(e,t,n){e.exports=n.p+"static/media/logo_police.3c48b597.svg"},63:function(e,t,n){e.exports=n.p+"static/media/austronat.ba2101c6.svg"},66:function(e,t,n){e.exports=n(135)},85:function(e,t,n){}},[[66,1,2]]]);
//# sourceMappingURL=main.982cdf34.chunk.js.map