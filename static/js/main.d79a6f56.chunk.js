(this["webpackJsonpparental-compensation"]=this["webpackJsonpparental-compensation"]||[]).push([[0],{143:function(e,n,r){e.exports=r(257)},224:function(e,n){},257:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),o=r(19),i=r.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=r(20),c=r(71),u=r(3),s=r.n(u),d=r(9),b=[{value:"",text:"V\xe4lj din l\xf6nemodell"},{value:"R\xf6rlig",text:"R\xf6rlig"},{value:"Stabil",text:"Stabil"}],p=[{value:"",text:"V\xe4lj v\xe4rdet fr\xe5n listan"},{value:"mer \xe4n ett \xe5r",text:"mer \xe4n ett \xe5r"},{value:"mer \xe4n tre \xe5r",text:"mer \xe4n tre \xe5r"}],m="F\xf6delse av ditt barn",f="Jag \xe4r en sammanh\xe4ngande anst\xe4llning p\xe5 Dynabyte i",h="Datum",g="Start Datum",y="Slut Datum",v="Basbelopp f\xf6r",x="L\xf6nemodell",D="Grundl\xf6n",E="Max 10 PBB 10%:",S="Max 15 PBB 90%:",O="\xd6verskjutande fast l\xf6n:",B="F\xf6r\xe4ldral\xf6n upp till 10 PBB:",j="F\xf6r\xe4ldral\xf6n \xf6ver 10 PBB:",w="Total f\xf6r\xe4ldral\xf6n/m\xe5n:",T={period:"Din f\xf6r\xe4ldraledighet m\xe5ste tas ut inom 24 m\xe5nader efter barnets f\xf6delse eller adoption.",minPeriod:"Perioden m\xe5ste vara mer \xe4n 30 dagar.",minSalary:"L\xf6nen m\xe5ste vara minst 30000 kr",employedMoreThanOneYear:"Dynabyte ers\xe4tter dig med upp till tv\xe5 m\xe5naders f\xf6r\xe4ldral\xf6n.",employedMoreThanThreeYear:"Dynabyte ers\xe4tter dig med upp till sex m\xe5naders f\xf6r\xe4ldral\xf6n."},C=Object(d.a)({},T,{notFoundPBB:"Tyv\xe4rr kunde inte hitta PBB f\xf6r ",statusIsRequired:"V\xe4lj v\xe4rdet fr\xe5n listan.",birthdayIsRequired:"Barn f\xf6delsedag f\xe4lt kr\xe4vs",startDateIsRequired:"Start datum \xe4r kr\xe4vs",endDateIsRequired:"Slut datum \xe4r kr\xe4vs",basicSalaryIsRequired:"Grundl\xf6n \xe4r kr\xe4vs",salaryModelIsRequiredsalary:"L\xf6nemodell \xe4r kr\xe4vs"}),I=Object(d.a)({},T,{employeeStatus:"F\xf6r att ta del av Dynabytes f\xf6r\xe4ldral\xf6nsers\xe4ttning beh\xf6ver du ha haft \n  en sammanh\xe4ngande anst\xe4llning p\xe5 Dynabyte i mer \xe4n ett \xe5r.",changePBB:"Du kan redigera PBB genom att aktivera f\xe4ltet"}),k=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r=e+"e"+n;return Number(Math.round(r)+"e-"+n)},P=r(39),A={text:"#3C3C3B",primary:"#DB3E77",secondary:Object(P.b)(.15,"#DB3E77"),lightSecondary:Object(P.b)(.3,"#DB3E77"),danger:Object(P.a)(.2,"#DB3E77"),white:"#FFFFFF",lightGray:"#f9f8fa",darkGray:"#CCCCCC"},R=function(e){return"@media only screen and (min-width: ".concat(e,"px)")},_=function(e){return"@media only screen and (max-width: ".concat(e,"px)")},M=function(e,n){return"@media only screen and (min-width: ".concat(e,"px) and (max-width: ").concat(n,"px)")},F=375,L=768,z=945,N=1024,Y={maxSizePhone:_(L),minSizeTabletAndUp:R(L),minSizeLaptopAndUp:R(N),maxSizeTablet:_(N),smallSize:_(F),mediumSize:M(F,z),customMinWidth:R,customMaxWidth:_,customRangeSize:M},H={fontFamily:"'Noto Sans',sans-serif",fontSmallSize:"14px",fontMedSize:"16px",fontBigSize:"20px"},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.15,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return"0 2px 4px rgba(0, 0, 0, ".concat(e,") ").concat(n)},U=function(e){return e.critera.birthday},G=function(e){return e.priceBase.duration.startDate},J=function(e){return e.priceBase.duration.endDate},V=function(e){return e.priceBase.pbb1},W=function(e){return e.priceBase.pbb2},K=function(e){return e.critera.compensationPeriod},X=function(e){return e.cards.loaded},Z=function(e){return e.critera.errors.status},$=function(e){return e.critera.errors.birthday},Q=function(e){return e.cards.data},ee=Object(c.a)([V,W,function(e){return e.salaryInfo.salaryModel||""},function(e){return e.salaryInfo.basicSalary||0}],(function(e,n,r,t){var a=[];return a[0]=ne(e,t,r),n>0&&(a[1]=ne(n,t,r)),a})),ne=function(e,n,r){var t=k("R\xf6rlig"===r?1.235*n:n),a=12*t,o=k(10*e),i=k(15*e),l=k(a>o?o*(.1/365*30):a*(.1/365*30)),c=a>o?k(Math.min(a,i)-o):0,u=k(c*(.9/365*30),2);return{ConvertedBasicSalary:t,max10PBB:o,max15PBB:i,excessFixedSalary:c,parentalSalaryUpto10PBB:l,parentalSalaryAbove10PBB:u,total:u<=0?l:k(l+u)}},re=Object(c.a)([Z,$,function(e){return e.priceBase.errors.startDate},function(e){return e.priceBase.errors.endDate},function(e){return e.priceBase.errors.pbb1},function(e){return e.priceBase.errors.pbb2},function(e){var n;return null===(n=e.salaryInfo.errors)||void 0===n?void 0:n.salaryModel},function(e){var n;return null===(n=e.salaryInfo.errors)||void 0===n?void 0:n.basicSalary}],(function(e,n,r,t,a,o,i,l){var c={statusError:e,birthdayError:n,sartDateError:r,endDateError:t,PBB1Error:a,PBB2Error:o,salaryModelError:i,basicSalaryError:l},u=[];return Object.entries(c).map((function(e){e[1]&&(void 0!==e[1]||""!==e[1])&&u.push(e[1])})),u})),te=r(141),ae={loaded:!0,data:[]},oe=r(21),ie=r(4),le=r(5);function ce(){var e=Object(ie.a)(["\n  border: 3px solid ",';\n  border-radius: 50%;\n  padding: 2px 4px 0;\n  margin-right: 10px;\n  font-size: 12px;\n  align-self: center;\n\n  &::before {\n    content: "X";\n    color: ',";\n    font-weight: bold;\n  }\n"]);return ce=function(){return e},e}var ue=le.b.span(ce(),A.danger,A.danger);function se(){var e=Object(ie.a)(["\n  color: ",";\n  font-size: ",";\n  ","\n"]);return se=function(){return e},e}var de=le.b.span(se(),A.danger,H.fontSmallSize,(function(e){var n=e.bg;return void 0!==n&&n?"margin-left: 15px":""}));function be(){var e=Object(ie.a)(["\n  margin-top: 10px;\n  margin-bottom: 15px;\n\n  display: flex;\n  align-items: center;\n\n  ","\n"]);return be=function(){return e},e}var pe=le.b.div(be(),(function(e){var n=e.bg;return void 0!==n&&n&&"\n      background: ".concat(A.secondary,";\n      border: 3px solid ").concat(A.primary,";\n      padding: 10px 5px;\n      \n      p {\n        font-weight: bold;\n        font-size: ").concat(H.fontMedSize,";\n      }\n    ")}));pe.Icon=ue,pe.Text=de;var me=pe,fe=function(e){var n=e.error,r=e.bg,t=Object(oe.a)(e,["error","bg"]);return a.a.createElement(me,{bg:r},a.a.createElement(me.Icon,null),a.a.createElement(me.Text,null,n,t.errors&&t.errors.length>0?t.errors.map((function(e,n){return a.a.createElement("p",{key:n},e)})):t.children))};function he(){var e=Object(ie.a)(["\n  position: absolute;\n  top: 26px;\n  ","\n  font-size: 14px;\n  padding: 15px 10px;\n  z-index: 10;\n  /*width: 350px;*/\n  display: none;\n  border: 2px solid ",";\n  background: ",";\n  color: ",';\n  white-space: pre;\n\n  &::before {\n    content: "";\n    width: 0;\n    height: 0;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-bottom: 10px solid ',";\n    position: absolute;\n    top: -10px;\n    ","\n  }\n"]);return he=function(){return e},e}var ge=le.b.p(he(),(function(e){return"right"===e.diraction?"right:1px":"left: -83px;"}),A.primary,A.secondary,A.white,A.primary,(function(e){return"right"===e.diraction?"right:12px":"left: 86px;"}));function ye(){var e=Object(ie.a)(["\n  background: ",";\n  padding: 0 7px;\n  border: 1px solid ",";\n  border-radius: 50%;\n  color: ",";\n  font-family: serif;\n  font-style: italic;\n  &:hover {\n    background: ",";\n    + "," {\n      display: block;\n    }\n  }\n"]);return ye=function(){return e},e}var ve=le.b.span(ye(),A.primary,A.secondary,A.white,A.secondary,ge);function xe(){var e=Object(ie.a)(["\n  position: relative;\n  width: 30px;\n"]);return xe=function(){return e},e}var De=le.b.div(xe());De.Icon=ve,De.Text=ge;var Ee=De,Se=function(e){var n=e.hintText,r=e.diraction,t=void 0===r?"left":r;return a.a.createElement(Ee,null,a.a.createElement(Ee.Icon,null,"i"),a.a.createElement(Ee.Text,{diraction:t},n))};function Oe(){var e=Object(ie.a)(["\n  margin: 60px auto;\n  font-size: 10px;\n  position: relative;\n  text-indent: -9999em;\n  border-top: 1.1em solid rgba(238, 39, 119, 0.2);\n  border-right: 1.1em solid rgba(238, 39, 119, 0.2);\n  border-bottom: 1.1em solid rgba(238, 39, 119, 0.2);\n  border-left: 1.1em solid #ee2777;\n  transform: translateZ(0);\n  animation: "," 1.1s infinite linear;\n\n  border-radius: 50%;\n  width: ","em;\n  height: ","em;\n\n  &:after {\n    border-radius: 50%;\n    width: 10em;\n    height: 10em;\n  }\n"]);return Oe=function(){return e},e}function Be(){var e=Object(ie.a)(["\n    0% {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  \n"]);return Be=function(){return e},e}var je=Object(le.c)(Be()),we=le.b.div(Oe(),je,(function(e){var n=e.size;return void 0===n?10:n}),(function(e){var n=e.size;return void 0===n?10:n}));function Te(){var e=Object(ie.a)(['\n  content: "";\n  position: absolute;\n  top: -3px;\n  left: 0px;\n  width: 28px;\n  height: 28px;\n  border-radius: 45px;\n  transition: 0.2s;\n  background: ',";\n  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);\n  border: 1px solid ",";\n"]);return Te=function(){return e},e}var Ce=le.b.span(Te(),(function(e){return e.isOn?A.primary:A.white}),A.white);function Ie(){var e=Object(ie.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  cursor: pointer;\n  width: 70px;\n  height: 25px;\n  border-radius: 100px;\n  position: relative;\n  transition: background-color 0.2s;\n  background: ",";\n  border: 1px solid ",";\n\n  &:active "," {\n    width: 60px;\n  }\n"]);return Ie=function(){return e},e}var ke=le.b.label(Ie(),A.darkGray,A.white,Ce);function Pe(){var e=Object(ie.a)(["\n  height: 0;\n  width: 0;\n  visibility: hidden;\n  position: absolute;\n\n  &:checked + "," {\n    background: ",";\n    "," {\n      left: 100%; /*calc(100% - 2px);*/\n      transform: translateX(-100%);\n      background: ",";\n    }\n  }\n"]);return Pe=function(){return e},e}var Ae=le.b.input.attrs({type:"checkbox"})(Pe(),ke,A.secondary,Ce,A.primary);function Re(){var e=Object(ie.a)(["\n  outline: none;\n"]);return Re=function(){return e},e}var _e=le.b.div(Re());_e.CheckBox=Ae,_e.Button=Ce,_e.Label=ke;var Me=_e,Fe=function(e){var n=e.name,r=e.isOn,t=e.handleToggle;return a.a.createElement(Me,{isOn:r},a.a.createElement(Me.CheckBox,{checked:r,onChange:t,id:n,name:n}),a.a.createElement(Me.Label,{htmlFor:n},a.a.createElement(Me.Button,null)))};function Le(){var e=Object(ie.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 6px;\n\n  "," {\n    min-height: 25px;\n  }\n\n  "," {\n    min-height: 35px;\n  }\n\n  label {\n    flex: 1;\n  }\n"]);return Le=function(){return e},e}var ze=le.b.div(Le(),Y.minSizeLaptopAndUp,Y.maxSizeTablet),Ne=function(e){var n=e.htmlFor,r=e.labelText,t=e.labelClass,o=e.hintText,i=e.children,l=e.handleToggle,c=e.toggleName,u=e.toggleState,s=void 0!==u&&u;Object(oe.a)(e,["htmlFor","labelText","labelClass","hintText","children","handleToggle","toggleName","toggleState"]);return a.a.createElement(ze,null,o&&a.a.createElement(Se,{hintText:o}),a.a.createElement("label",{htmlFor:n,className:t},r,i),c&&a.a.createElement(Fe,{isOn:s,name:c,handleToggle:l}))};function Ye(){var e=Object(ie.a)(["\n  height: 60px;\n  width: 100%;\n  text-align: center;\n  border: 1px solid ",";\n  background: #fff;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);\n  outline-color: ",";\n\n  &:disabled {\n    background: ",";\n    color: ",";\n    cursor: not-allowed;\n  }\n"]);return Ye=function(){return e},e}var He=le.b.input(Ye(),(function(e){return e.error?A.danger:"#eeeeee"}),A.primary,A.lightGray,A.darkGray);function qe(){var e=Object(ie.a)(["\n  width: 100%;\n"]);return qe=function(){return e},e}var Ue=le.b.div(qe());Ue.Label=Ne,Ue.Input=He;var Ge=Ue,Je=function(e){var n=e.labelText,r=e.labelClass,a=e.hintText,o=e.name,i=e.error,l=(e.type,Object(oe.a)(e,["labelText","labelClass","hintText","name","error","type"]));return t.createElement(Ge,null,n&&t.createElement(Ne,{htmlFor:o,labelText:n,labelClass:r,hintText:a,toggleName:l.toggleName,toggleState:l.toggleState,handleToggle:l.handleToggle}),t.createElement(Ge.Input,Object.assign({id:o,name:o},l,{error:!!i})),i&&t.createElement(me,null,t.createElement(me.Icon,null),t.createElement(me.Text,null,i)))},Ve=function(e){var n=e.value,r=e.text;return a.a.createElement("option",{value:n},r)};function We(){var e=Object(ie.a)(["\n  height: 60px;\n  width: 100%;\n  font-size: 1em;\n  text-align-last: center;\n  color: #000000;\n  border: 1px solid #eeeeee;\n  margin-bottom: 10px;\n  font-weight: 400;\n  padding-left: 25px;\n  box-shadow: ",";\n  background: ",";\n  outline-color: ",";\n"]);return We=function(){return e},e}var Ke=le.b.select(We(),q(),A.white,A.primary);function Xe(){var e=Object(ie.a)(["\n  width: 100%;\n"]);return Xe=function(){return e},e}var Ze=le.b.div(Xe());Ze.Label=Ne,Ze.Input=Ke;var $e=Ze,Qe=function(e){var n=e.labelText,r=e.labelClass,t=e.hintText,o=e.name,i=e.options,l=Object(oe.a)(e,["labelText","labelClass","hintText","name","options"]);return a.a.createElement($e,null,n&&a.a.createElement($e.Label,{htmlFor:o,labelText:n,labelClassName:r,hintText:t}),a.a.createElement($e.Input,Object.assign({name:o,id:o},l),i.map((function(e){return a.a.createElement(Ve,{key:e.value,value:e.value,text:e.text})}))),l.error&&a.a.createElement(fe,{error:l.error}))};function en(){var e=Object(ie.a)(["\n  display: grid;\n\n  "," {\n    grid-row-gap: 30px;\n    margin-bottom: 10px;\n\n    ","\n  }\n\n  "," {\n    grid-template-columns: repeat(",", 1fr);\n    grid-column-gap: 18px;\n    grid-row-gap: 10px;\n  }\n"]);return en=function(){return e},e}var nn=le.b.div(en(),Y.maxSizePhone,(function(e){var n=e.reqCol,r=void 0!==n&&n,t=e.col;return r?"grid-template-columns: repeat(".concat(t,", 1fr);"):""}),Y.minSizeTabletAndUp,(function(e){return e.col}));function rn(){var e=Object(ie.a)(["\n  display: grid;\n  grid-auto-rows: auto;\n  grid-row-gap: 40px;\n  width: 80vw;\n\n  "," {\n    width: 94vw;\n  }\n  "," {\n    width: 96vw;\n  }\n\n  margin-right: auto;\n  margin-left: auto;\n"]);return rn=function(){return e},e}var tn=le.b.div(rn(),Y.smallSize,Y.mediumSize);function an(){var e=Object(ie.a)(["\n  ","\n  ","\n  ","\n"]);return an=function(){return e},e}var on=le.b.h3(an(),(function(e){var n=e.mt,r=void 0===n?null:n;return r?"margin-top: ".concat(r,"px"):""}),(function(e){var n=e.md,r=void 0===n?null:n;return r?"margin-down: ".concat(r,"px"):""}),(function(e){var n=e.color,r=void 0===n?null:n;return r?"color: ".concat(r):""}));function ln(){var e=Object(ie.a)(["\n  padding: 10px 5px 5px;\n  display: flex;\n  justify-content: space-between;\n\n  &:not(:last-child) {\n    border-bottom: 1px solid #eeeeee;\n  }\n\n  &:hover {\n    background: ",";\n    color: ",";\n  }\n"]);return ln=function(){return e},e}function cn(){var e=Object(ie.a)(["\n  list-style: none;\n  padding: 15px;\n"]);return cn=function(){return e},e}var un=le.b.ul(cn()),sn=le.b.li(ln(),A.primary,A.white);function dn(){var e=Object(ie.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 15px;\n  font-size: 1.05em;\n  font-weight: bold;\n\n  background: ",";\n  color: ",";\n"]);return dn=function(){return e},e}var bn=le.b.div(dn(),A.primary,A.white);function pn(){var e=Object(ie.a)(["\n  height: 100%;\n  width: 100%;\n  border: 1px solid #eeeeee;\n  background: #fff;\n  box-shadow: ",";\n  transition: 0.4s;\n\n  &:hover {\n    transform: scale(1.02);\n    box-shadow: ",";\n  }\n"]);return pn=function(){return e},e}var mn=le.b.div(pn(),q(),q(.3));mn.Body=un,mn.ListItem=sn,mn.Footer=bn;var fn=mn,hn=Object(l.b)((function(e){return{pbb1:V(e),pbb2:W(e),cards:Q(e),loaded:X(e),errors:re(e),compensationPeriod:K(e)}}),null)((function(e){var n=e.cards,r=e.errors,t=e.loaded,o=e.compensationPeriod;return t?r&&r.length>0&&t?a.a.createElement(fe,{errors:r,bg:!0}):a.a.createElement(nn,{col:n&&2===n.length?2:1},o&&a.a.createElement(on,{md:5,color:A.primary},o),n&&n.map((function(e,n){return a.a.createElement(fn,{key:n},a.a.createElement(fn.Body,null,a.a.createElement(fn.ListItem,null,a.a.createElement("span",null,E),a.a.createElement("span",null,e.max10PBB)),a.a.createElement(fn.ListItem,null,a.a.createElement("span",null,S),a.a.createElement("span",null,e.max15PBB)),a.a.createElement(fn.ListItem,null,a.a.createElement("span",null,O),a.a.createElement("span",null,e.excessFixedSalary)),a.a.createElement(fn.ListItem,null,a.a.createElement("span",null,B),a.a.createElement("span",null,e.parentalSalaryUpto10PBB)),a.a.createElement(fn.ListItem,null,a.a.createElement("span",null,j),a.a.createElement("span",null,e.parentalSalaryAbove10PBB))),a.a.createElement(fn.Footer,null,a.a.createElement("span",null,w),a.a.createElement("span",null,e.total," kr")))}))):a.a.createElement(we,{size:5})})),gn="[CRITERIAS] SET_STATUS",yn="[CRITERIAS] SET_BIRTHDAY",vn={birthday:null,status:"",compensationPeriod:"",errors:{}},xn=r(38),Dn=r(58),En=function(e){var n=e.error,r=e.birthday,o=e.changeDateHandler,i=Object(t.useState)(!1),l=Object(xn.a)(i,2),c=l[0],u=l[1];return a.a.createElement("div",null,a.a.createElement(Ne,{htmlFor:"child-birthday",hintText:I.period,labelText:m}),a.a.createElement(Dn.SingleDatePicker,{date:r,onDateChange:o,focused:c,onFocusChange:function(){return u(!c)},id:"child-birthday",placeholder:"Datum",displayFormat:"YYYY-MM-DD",hideKeyboardShortcutsPanel:!0,showDefaultInputIcon:!0,showClearDate:!0,numberOfMonths:1,isOutsideRange:function(e){return e.isAfter(s()())||e.isBefore(s()().subtract(2,"years"))}}),n&&a.a.createElement(fe,{error:n}))},Sn=function(e){var n=e.changeSalaryHandler,r=Object(oe.a)(e,["changeSalaryHandler"]);return a.a.createElement(Qe,{name:"salary-type",options:p,labelText:f,hintText:I.employeeStatus,onChange:n,error:r.error})},On=Object(l.b)((function(e){return{birthday:U(e),statusError:Z(e),birthdayError:$(e)}}),(function(e){return{changeSalaryHandler:function(n){return e(function(e){return function(n){var r="mer \xe4n ett \xe5r"===e?I.employedMoreThanOneYear:"mer \xe4n tre \xe5r"===e?I.employedMoreThanThreeYear:"";n({type:gn,status:e,error:""===e?C.statusIsRequired:"",compensationPeriod:r})}}(n))},changeDateHandler:function(n){return e((r=n,function(e){e({type:yn,birthday:r,error:null===r?C.birthdayIsRequired:""})}));var r}}}))((function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(nn,{col:2},a.a.createElement(Sn,{error:e.statusError,changeSalaryHandler:function(n){return e.changeSalaryHandler(n.target.value)}}),a.a.createElement(En,{changeDateHandler:e.changeDateHandler,birthday:e.birthday,error:e.birthdayError})))})),Bn="[PRICE_BASE] SET_PBB1",jn="[PRICE_BASE] SET_PBB2",wn="[PRICE_BASE] SET_END_DATE",Tn={2020:47300,2019:46500,2018:45500,2017:44800},Cn=function(e){return function(n){n({type:Bn,pbb1:e,error:e?"":C.notFoundPBB})}},In=function(e){return function(n){n({type:jn,pbb2:e,error:e?"":C.notFoundPBB})}},kn=function(e){return function(n,r){var t=r().priceBase.duration.startDate,a=e?s()(e).diff(t,"days")<=29?C.minPeriod:"":C.endDateIsRequired;n({type:wn,endDate:e,error:a})}},Pn=function(e,n){return function(r){var t=s()(e).year(),a=s()(n).year(),o=s()(e).isSame(n,"year");e||n||(r(In(0)),r(kn(n))),n||r(function(e){return function(n,r){var t=r().critera.birthday,a=s()(e).isBetween(s()(t),s()(t).add(2,"years").subtract(29,"days")&&t&&e)?C.period:e?"":C.startDateIsRequired;n({type:"[PRICE_BASE] SET_START_DATE",startDate:e,error:a})}}(e)),n&&(r(kn(n)),isNaN(t)||r(Cn(Tn[t])),o||isNaN(t)||isNaN(a)||r(In(Tn[a])))}},An={pbb1:Tn[s()().year()],pbb2:0,duration:{startDate:null,endDate:null,countOfDays:void 0},errors:{startDate:"",endDate:"",pbb1:"",pbb2:""}},Rn=function(e){var n=e.birthday,r=e.startDate,o=e.endDate,i=e.countOfDays,l=e.onDatesChanges,c=e.error,u=Object(t.useState)(null),d=Object(xn.a)(u,2),b=d[0],p=d[1];return a.a.createElement("div",null,a.a.createElement(Ne,{htmlFor:"startDate",labelText:h,hintText:I.minPeriod}),a.a.createElement(Dn.DateRangePicker,{startDate:r,startDateId:"startDate",endDate:o,endDateId:"endDate",onDatesChange:function(e){var n=e.startDate,r=e.endDate;return l(n,r)},focusedInput:b,onFocusChange:function(e){return p(e)},isOutsideRange:function(e){return e.isBefore(s()(n))||e.isAfter(s()(n).add(2,"years"))},showDefaultInputIcon:!0,displayFormat:"YYYY-MM-DD",startDatePlaceholderText:g,endDatePlaceholderText:y,hideKeyboardShortcutsPanel:!0,showClearDates:!0,reopenPickerOnClearDates:!0,numberOfMonths:window.innerWidth>=768?2:1}),a.a.createElement(nn,{col:2,reqCol:!0},c&&c.startDate&&a.a.createElement(fe,{error:c.startDate}),c&&c.endDate&&a.a.createElement(fe,{error:c.endDate})),i&&a.a.createElement(Ne,{labelText:1===i?i+" Dag":i+" Dagar"}))},_n=function(e){var n=Object(t.useState)(!1),r=Object(xn.a)(n,2),o=r[0],i=r[1],l=e.year,c=e.value,u=e.onChange,s=e.error;return a.a.createElement(Je,{disabled:!o,labelText:"".concat(v," ").concat(l),name:"basic-amount-".concat(l),value:c,onChange:function(e){return u(e.target.value)},hintText:I.changePBB,toggleName:"basic-amount-".concat(l),toggleState:o,handleToggle:function(){return i(!o)},error:s&&"".concat(s," ").concat(l)})},Mn=function(e){return e.priceBase.errors},Fn=function(e){var n=e.priceBase.duration,r=n.startDate,t=void 0===r?s()().year():r,a=n.endDate,o=s()(t).year()||s()().year(),i=s()(a).year(),l=[o];return!s()(t).isSame(a,"year")&&i&&(l[1]=i),l},Ln=function(e){var n=e.priceBase.duration,r=n.startDate,t=n.endDate;return r&&t&&t.diff(r,"days")},zn=Object(l.b)((function(e){return{birthday:U(e),startDate:G(e),endDate:J(e),years:Fn(e),pbb1:V(e),pbb2:W(e),countOfDays:Ln(e),errors:Mn(e)}}),(function(e){return{onPBB1ChangeHandler:function(n){return e(Cn(n))},onPBB2ChangeHandler:function(n){return e(In(n))},onDatesChanges:function(n,r){return e(Pn(n,r))}}}))((function(e){var n=e.birthday,r=e.startDate,t=e.endDate,o=e.onDatesChanges,i=e.countOfDays,l=e.pbb1,c=e.pbb2,u=e.onPBB1ChangeHandler,s=e.onPBB2ChangeHandler,d=e.years,b=e.errors;return a.a.createElement(nn,{col:2},a.a.createElement(Rn,{birthday:n,startDate:r,endDate:t,countOfDays:i,onDatesChanges:o,error:{startDate:b.startDate,endDate:b.endDate}}),a.a.createElement(nn,{col:2===d.length&&d[1]?2:1},a.a.createElement(_n,{year:d[0],value:l,error:b.pbb1,onChange:u}),2===d.length&&d[1]&&a.a.createElement(_n,{year:d[1],value:c,error:b.pbb2,onChange:s})))})),Nn={basicSalary:3e4,salaryModel:"",errors:{basicSalary:"",salaryModel:""}},Yn=r(140),Hn=Object(l.b)((function(e){var n,r;return{basicSalaryValue:e.salaryInfo.basicSalary,salaryModels:e.salaryInfo.salaryModel,errors:{salaryModel:null===(n=e.salaryInfo.errors)||void 0===n?void 0:n.salaryModel,basicSalary:null===(r=e.salaryInfo.errors)||void 0===r?void 0:r.basicSalary}}}),(function(e){return{basicSalaryChangeHandler:function(n){return e((r=n,function(e){return e({type:"[SALARY_INFO] SET_BASIC_SALARY",basicSalary:r,error:isNaN(r)?C.basicSalaryIsRequired:r<3e4?C.minSalary:""})}));var r},setSalaryModelChangeHandler:function(n){return e(function(e){return function(n,r){return n({type:"[SALARY_INFO] SET_SALARY_MODEL",salaryModel:e,error:""===e?C.salaryModelIsRequiredsalary:""})}}(n))}}}))((function(e){var n=e.errors,r=e.basicSalaryValue,t=e.basicSalaryChangeHandler,o=e.setSalaryModelChangeHandler;return a.a.createElement(a.a.Fragment,null,a.a.createElement(nn,{col:2},a.a.createElement(Qe,{name:"salary-type",options:b,labelText:x,onChange:function(e){return o(e.target.value)},error:n.salaryModel}),a.a.createElement(Je,{labelText:D,name:"baseSalary",value:r,onChange:function(e){return t(e.target.value)},hintText:I.minSalary,error:n.basicSalary})),a.a.createElement(Yn.a,{axis:"x",xstep:50,xmin:0,xmax:1e5,x:parseInt(r),onChange:function(e){var n=e.x;return t(n.toString())},styles:{track:{width:"100%",backgroundColor:"".concat(A.darkGray),height:15,borderRadius:10,boxShadow:"".concat(q(.15,"inset"))},active:{backgroundColor:"".concat(A.primary),borderRadius:10},thumb:{cursor:"pointer",width:30,height:30},disabled:{opacity:.5}}}))}));r(217),r(256);function qn(){var e=Object(ie.a)(["\n","\n\nhtml {\n  box-sizing: border-box;\n}\n\n\n*,*:before, *:after{\n  box-sizing: inherit;\n  font-family: ","\n}\n\nbody {\n  background:  ",";\n}\n\nh1, h2, h3, p {\n  margin: 0;\n  padding: 0;\n}\n\n::selection{\n  background: ",";\n  color: ","\n}\n\ninput, select{\n  font-weight: 400  !important;\n  font-size: 19px;\n}\n\n\n.CalendarDay__selected,\n.CalendarDay__selected:active,\n.CalendarDay__selected:hover {\n  background: "," !important;\n  border: 1px solid "," !important;\n}\n\n.CalendarDay__selected_span, .CalendarDay__hovered_span {\n  background: "," !important;\n  border: 1px solid "," !important;\n  color: "," !important;\n}\n\n.DateInput_input__focused {\n  border-bottom: 2px solid "," !important;\n}\n\n.DateRangePickerInput, .DateRangePicker,.SingleDatePicker ,.SingleDatePickerInput{\n  width: 100% !important;\n  box-shadow: ",";\n  height:60px;\n\n  .DateInput_input{\n    text-align: center  !important;\n    font-weight: 400  !important;\n    height: 58px;\n  }\n}\n\n.SingleDatePicker {\n  .SingleDatePickerInput{\n      display: flex;\n      \n    .DateInput{  \n      flex: 1;\n      \n    }\n  }\n}\n\n.DateRangePicker{\n  margin-bottom: 10px;\n\n  & + div{\n    /*position:absolute;*/\n    width: 100%;\n    text-align: center;\n    font-size: ",";\n  }\n}\n\n.DateRangePicker{\n  .DateRangePickerInput{\n    display: flex;\n    align-items: center;\n\n    .DateInput{\n      flex: 1;\n    }\n  }\n} \n"]);return qn=function(){return e},e}var Un=Object(le.a)(qn(),Object(P.c)(),H.fontFamily,A.lightGray,A.primary,A.white,A.primary,A.secondary,A.secondary,A.white,A.white,A.primary,q(),H.fontMedSize);s.a.updateLocale("sv",{months:["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],monthsShort:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],weekdays:["M\xe5ndag","Tisdag","Onsdag","Torsdag","Fredag","L\xf6rdag","S\xf6ndag"],weekdaysMin:["M\xe5n","Tis","Ons","Tor","Fre","L\xf6r","S\xf6n"]});var Gn=function(){return a.a.createElement(tn,null,a.a.createElement(Un,null),a.a.createElement(on,{mt:30},"Vad beh\xf6ver jag t\xe4nka p\xe5?"),a.a.createElement(On,null),a.a.createElement(on,null,"Prisbasbeloppet"),a.a.createElement(zn,null),a.a.createElement(Hn,null),a.a.createElement(hn,null))},Jn=r(26),Vn=r(138),Wn=r(139),Kn=Object(Jn.combineReducers)({critera:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case yn:return Object(d.a)({},e,{birthday:n.birthday,errors:Object(d.a)({},e.errors,{birthday:n.error})});case gn:return Object(d.a)({},e,{status:n.status,compensationPeriod:n.compensationPeriod,errors:Object(d.a)({},e.errors,{status:n.error})});default:return e}},priceBase:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:An,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Bn:return Object(d.a)({},e,{pbb1:n.pbb1,errors:Object(d.a)({},e.errors,{pbb1:n.error})});case jn:return Object(d.a)({},e,{pbb2:n.pbb2,errors:Object(d.a)({},e.errors,{pbb2:n.error})});case"[PRICE_BASE] SET_START_DATE":return Object(d.a)({},e,{duration:Object(d.a)({},e.duration,{startDate:n.startDate}),errors:Object(d.a)({},e.errors,{startDate:n.error})});case wn:return Object(d.a)({},e,{duration:Object(d.a)({},e.duration,{endDate:n.endDate}),errors:Object(d.a)({},e.errors,{endDate:n.error})});default:return e}},salaryInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Nn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"[SALARY_INFO] SET_BASIC_SALARY":return Object(d.a)({},e,{basicSalary:n.basicSalary,errors:Object(d.a)({},e.errors,{basicSalary:n.error})});case"[SALARY_INFO] SET_SALARY_MODEL":return Object(d.a)({},e,{salaryModel:n.salaryModel,errors:Object(d.a)({},e.errors,{salaryModel:n.error})});default:return e}},cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"LOAD_CARD":return{loaded:!1,data:[]};case"LOAD_CARD_SECCUSS":return Object(d.a)({},e,{loaded:!0,data:Object(te.a)(n.data)});case"LOAD_CARD_FIALURE":return Object(d.a)({},e,{loaded:!0,data:[]});default:return e}}}),Xn=[Wn.a,function(e){var n=e.dispatch;e.getState;return function(e){return function(r){if(e(r),!r.type.includes("LOAD_CARD"))return n((function(e,n){e({type:"LOAD_CARD"});var r=ee(n()),t=re(n());setTimeout((function(){if(t&&Object.keys(t).length>0)return e({type:"LOAD_CARD_FIALURE"});e(function(e){return{type:"LOAD_CARD_SECCUSS",data:e}}(r))}),700)}))}}}],Zn=Jn.applyMiddleware.apply(void 0,Xn),$n=Object(Jn.createStore)(Kn,Object(Vn.composeWithDevTools)(Zn));i.a.render(a.a.createElement(l.a,{store:$n},a.a.createElement(Gn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[143,1,2]]]);
//# sourceMappingURL=main.d79a6f56.chunk.js.map