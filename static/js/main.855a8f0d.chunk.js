(this["webpackJsonpparental-compensation"]=this["webpackJsonpparental-compensation"]||[]).push([[0],{143:function(e,n,t){e.exports=t(257)},224:function(e,n){},257:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(20),i=t.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=t(19),c=t(71),u=t(2),d=t.n(u),s=t(9),b=[{value:"",text:"V\xe4lj din l\xf6nemodell"},{value:"R\xf6rlig",text:"R\xf6rlig"},{value:"Stabil",text:"Stabil"}],p=[{value:"",text:"V\xe4lj v\xe4rdet fr\xe5n listan"},{value:"mer \xe4n ett \xe5r",text:"mer \xe4n ett \xe5r"},{value:"mer \xe4n tre \xe5r",text:"mer \xe4n tre \xe5r"}],m="F\xf6delse av ditt barn",f="Jag \xe4r en sammanh\xe4ngande anst\xe4llning p\xe5 Dynabyte i",h="Datum",g="Start Datum",y="Slut Datum",v="Basbelopp f\xf6r",x="L\xf6nemodell",E="Grundl\xf6n",S="Max 10 PBB 10%:",D="Max 15 PBB 90%:",O="\xd6verskjutande fast l\xf6n:",B="F\xf6r\xe4ldral\xf6n upp till 10 PBB:",w="F\xf6r\xe4ldral\xf6n \xf6ver 10 PBB:",j="Total f\xf6r\xe4ldral\xf6n/m\xe5n:",T={period:"Din f\xf6r\xe4ldraledighet m\xe5ste tas ut inom 24 m\xe5nader efter barnets f\xf6delse eller adoption.",minPeriod:"Perioden m\xe5ste vara mer \xe4n 30 dagar.",minSalary:"L\xf6nen m\xe5ste vara minst 30000 kr",employedMoreThanOneYear:"Dynabyte ers\xe4tter dig med upp till tv\xe5 m\xe5naders f\xf6r\xe4ldral\xf6n.",employedMoreThanThreeYear:"Dynabyte ers\xe4tter dig med upp till sex m\xe5naders f\xf6r\xe4ldral\xf6n."},I=Object(s.a)({},T,{notFoundPBB:"Tyv\xe4rr kunde inte hitta PBB f\xf6r ",statusIsRequired:"V\xe4lj v\xe4rdet fr\xe5n listan.",birthdayIsRequired:"Barn f\xf6delsedag f\xe4lt kr\xe4vs",startDateIsRequired:"Start datum \xe4r kr\xe4vs",endDateIsRequired:"Slut datum \xe4r kr\xe4vs",basicSalaryIsRequired:"Grundl\xf6n \xe4r kr\xe4vs",salaryModelIsRequiredsalary:"L\xf6nemodell \xe4r kr\xe4vs"}),k=Object(s.a)({},T,{employeeStatus:"F\xf6r att ta del av Dynabytes f\xf6r\xe4ldral\xf6nsers\xe4ttning beh\xf6ver du ha haft \n  en sammanh\xe4ngande anst\xe4llning p\xe5 Dynabyte i mer \xe4n ett \xe5r.",changePBB:"Du kan redigera PBB genom att aktivera f\xe4ltet"}),C=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,t=e+"e"+n;return Number(Math.round(t)+"e-"+n)},P=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return 1===e?"".concat(e," Dag"):"".concat(e," Dagar ").concat(n)},A=function(e){return e.critera.birthday},R=function(e){return e.priceBase.duration.startDate},_=function(e){return e.priceBase.duration.endDate},M=function(e){return e.priceBase.pbb1},F=function(e){return e.priceBase.pbb2},L=function(e){return e.critera.compensationPeriod},z=function(e){return e.cards.loaded},N=function(e){return e.critera.errors.status},Y=function(e){return e.critera.errors.birthday},q=function(e){return e.cards.data},H=Object(c.a)([M,F,function(e){return e.salaryInfo.salaryModel||""},function(e){return e.salaryInfo.basicSalary||0}],(function(e,n,t,r){var a=[];return a[0]=U(e,r,t),n&&n>0&&(a[1]=U(n,r,t)),a})),U=function(e,n,t){var r=C("R\xf6rlig"===t?1.235*n:n),a=12*r,o=C(10*e),i=C(15*e),l=C(a>o?o*(.1/365*30):a*(.1/365*30)),c=a>o?C(Math.min(a,i)-o):0,u=C(c*(.9/365*30),2);return{ConvertedBasicSalary:r,max10PBB:o,max15PBB:i,excessFixedSalary:c,parentalSalaryUpto10PBB:l,parentalSalaryAbove10PBB:u,total:u<=0?l:C(l+u)}},G=Object(c.a)([N,Y,function(e){return e.priceBase.errors.startDate},function(e){return e.priceBase.errors.endDate},function(e){return e.priceBase.errors.pbb1},function(e){return e.priceBase.errors.pbb2},function(e){var n;return null===(n=e.salaryInfo.errors)||void 0===n?void 0:n.salaryModel},function(e){var n;return null===(n=e.salaryInfo.errors)||void 0===n?void 0:n.basicSalary}],(function(e,n,t,r,a,o,i,l){var c={statusError:e,birthdayError:n,sartDateError:t,endDateError:r,PBB1Error:a,PBB2Error:o,salaryModelError:i,basicSalaryError:l},u=[];return Object.entries(c).map((function(e){e[1]&&(void 0!==e[1]||""!==e[1])&&u.push(e[1])})),u})),J=t(141),V={loaded:!0,data:[]},W=t(26),K=t(4),X=t(5),Z=t(39),$={text:"#3C3C3B",primary:"#DB3E77",secondary:Object(Z.b)(.15,"#DB3E77"),lightSecondary:Object(Z.b)(.3,"#DB3E77"),danger:Object(Z.a)(.2,"#DB3E77"),white:"#FFFFFF",lightGray:"#f9f8fa",darkGray:"#CCCCCC"},Q=function(e){return"@media only screen and (min-width: ".concat(e,"px)")},ee=function(e){return"@media only screen and (max-width: ".concat(e,"px)")},ne=function(e,n){return"@media only screen and (min-width: ".concat(e,"px) and (max-width: ").concat(n,"px)")},te=375,re=768,ae=945,oe=1024,ie={maxSizePhone:ee(re),minSizeTabletAndUp:Q(re),minSizeLaptopAndUp:Q(oe),maxSizeTablet:ee(oe),smallSize:ee(te),mediumSize:ne(te,ae),customMinWidth:Q,customMaxWidth:ee,customRangeSize:ne},le={fontFamily:"'Noto Sans',sans-serif",fontSmallSize:"14px",fontMedSize:"16px",fontBigSize:"20px"},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.15,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return"0 2px 4px rgba(0, 0, 0, ".concat(e,") ").concat(n)};function ue(){var e=Object(K.a)(["\n  border: 3px solid ",';\n  border-radius: 50%;\n  padding: 2px 4px 0;\n  margin-right: 10px;\n  font-size: 12px;\n  align-self: center;\n\n  &::before {\n    content: "X";\n    color: ',";\n    font-weight: bold;\n  }\n"]);return ue=function(){return e},e}var de=X.b.span(ue(),$.danger,$.danger);function se(){var e=Object(K.a)(["\n  color: ",";\n  font-size: ",";\n  ","\n"]);return se=function(){return e},e}var be=X.b.span(se(),$.danger,le.fontSmallSize,(function(e){var n=e.bg;return void 0!==n&&n?"margin-left: 15px":""}));function pe(){var e=Object(K.a)(["\n  margin-top: 10px;\n  margin-bottom: 15px;\n\n  display: flex;\n  align-items: center;\n\n  ","\n"]);return pe=function(){return e},e}var me=X.b.div(pe(),(function(e){var n=e.bg;return void 0!==n&&n&&"\n      background: ".concat($.secondary,";\n      border: 3px solid ").concat($.primary,";\n      padding: 10px 5px;\n      \n      p {\n        font-weight: bold;\n        font-size: ").concat(le.fontMedSize,";\n      }\n    ")}));me.Icon=de,me.Text=be;var fe=me,he=function(e){var n=e.error,t=e.bg,r=Object(W.a)(e,["error","bg"]);return a.a.createElement(fe,{bg:t},a.a.createElement(fe.Icon,null),a.a.createElement(fe.Text,null,n,r.errors&&r.errors.length>0?r.errors.map((function(e,n){return a.a.createElement("p",{key:n},e)})):r.children))};function ge(){var e=Object(K.a)(["\n  position: absolute;\n  top: 26px;\n  font-size: 14px;\n  padding: 15px 10px;\n  z-index: 10;\n  display: none;\n  border: 2px solid ",";\n  background: ",";\n  color: ",";\n\n  "," {\n    min-width: 36vw;\n    max-width: 48vw;\n  }\n\n  "," {\n    min-width: 44vw;\n    max-width: 48vw;\n  }\n\n  ",' {\n    min-width: 87vw;\n    max-width: 95vw;\n  }\n\n  &::before {\n    content: "";\n    width: 0;\n    height: 0;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-bottom: 10px solid ',";\n    position: absolute;\n    top: -10px;\n    left: 5px;\n  }\n"]);return ge=function(){return e},e}var ye=X.b.p(ge(),$.primary,$.secondary,$.white,ie.minSizeLaptopAndUp,ie.maxSizeTablet,ie.maxSizePhone,$.primary);function ve(){var e=Object(K.a)(["\n  background: ",";\n  padding: 0 7px;\n  border: 1px solid ",";\n  border-radius: 50%;\n  color: ",";\n  font-family: serif;\n  font-style: italic;\n  &:hover {\n    background: ",";\n    + "," {\n      display: block;\n    }\n  }\n"]);return ve=function(){return e},e}var xe=X.b.span(ve(),$.primary,$.secondary,$.white,$.secondary,ye);function Ee(){var e=Object(K.a)(["\n  position: relative;\n  width: 30px;\n"]);return Ee=function(){return e},e}var Se=X.b.div(Ee());Se.Icon=xe,Se.Text=ye;var De=Se,Oe=function(e){var n=e.hintText;return a.a.createElement(De,null,a.a.createElement(De.Icon,null,"i"),a.a.createElement(De.Text,null,n))};function Be(){var e=Object(K.a)(["\n  margin: 60px auto;\n  font-size: 10px;\n  position: relative;\n  text-indent: -9999em;\n  border-top: 1.1em solid rgba(238, 39, 119, 0.2);\n  border-right: 1.1em solid rgba(238, 39, 119, 0.2);\n  border-bottom: 1.1em solid rgba(238, 39, 119, 0.2);\n  border-left: 1.1em solid #ee2777;\n  transform: translateZ(0);\n  animation: "," 1.1s infinite linear;\n\n  border-radius: 50%;\n  width: ","em;\n  height: ","em;\n\n  &:after {\n    border-radius: 50%;\n    width: 10em;\n    height: 10em;\n  }\n"]);return Be=function(){return e},e}function we(){var e=Object(K.a)(["\n    0% {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  \n"]);return we=function(){return e},e}var je=Object(X.c)(we()),Te=X.b.div(Be(),je,(function(e){var n=e.size;return void 0===n?10:n}),(function(e){var n=e.size;return void 0===n?10:n}));function Ie(){var e=Object(K.a)(['\n  content: "";\n  position: absolute;\n  top: -3px;\n  left: 0px;\n  width: 28px;\n  height: 28px;\n  border-radius: 45px;\n  transition: 0.2s;\n  background: ',";\n  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);\n  border: 1px solid ",";\n"]);return Ie=function(){return e},e}var ke=X.b.span(Ie(),(function(e){return e.isOn?$.primary:$.white}),$.white);function Ce(){var e=Object(K.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  cursor: pointer;\n  width: 70px;\n  height: 25px;\n  border-radius: 100px;\n  position: relative;\n  transition: background-color 0.2s;\n  background: ",";\n  border: 1px solid ",";\n\n  &:active "," {\n    width: 60px;\n  }\n"]);return Ce=function(){return e},e}var Pe=X.b.label(Ce(),$.darkGray,$.white,ke);function Ae(){var e=Object(K.a)(["\n  height: 0;\n  width: 0;\n  visibility: hidden;\n  position: absolute;\n\n  &:checked + "," {\n    background: ",";\n    "," {\n      left: 100%; /*calc(100% - 2px);*/\n      transform: translateX(-100%);\n      background: ",";\n    }\n  }\n"]);return Ae=function(){return e},e}var Re=X.b.input.attrs({type:"checkbox"})(Ae(),Pe,$.secondary,ke,$.primary);function _e(){var e=Object(K.a)(["\n  outline: none;\n"]);return _e=function(){return e},e}var Me=X.b.div(_e());Me.CheckBox=Re,Me.Button=ke,Me.Label=Pe;var Fe=Me,Le=function(e){var n=e.name,t=e.isOn,r=e.handleToggle;return a.a.createElement(Fe,{isOn:t},a.a.createElement(Fe.CheckBox,{checked:t,onChange:r,id:n,name:n}),a.a.createElement(Fe.Label,{htmlFor:n},a.a.createElement(Fe.Button,null)))};function ze(){var e=Object(K.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 6px;\n  ","\n\n  "," {\n    min-height: 25px;\n  }\n\n  "," {\n    min-height: 35px;\n  }\n\n  label {\n    flex: 1;\n  }\n"]);return ze=function(){return e},e}var Ne=X.b.div(ze(),(function(e){return e.isCenter?"text-align:center":""}),ie.minSizeLaptopAndUp,ie.maxSizeTablet),Ye=function(e){var n=e.htmlFor,t=e.labelText,r=e.isCenter,o=e.hintText,i=e.children,l=e.handleToggle,c=e.toggleName,u=e.toggleState,d=void 0!==u&&u;return a.a.createElement(Ne,{isCenter:r},o&&a.a.createElement(Oe,{hintText:o}),a.a.createElement("label",{htmlFor:n},t,i),c&&a.a.createElement(Le,{isOn:d,name:c,handleToggle:l}))};function qe(){var e=Object(K.a)(["\n  height: 60px;\n  width: 100%;\n  text-align: center;\n  border: 1px solid ",";\n  background: #fff;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);\n  outline-color: ",";\n\n  &:disabled {\n    background: ",";\n    color: ",";\n    cursor: not-allowed;\n  }\n"]);return qe=function(){return e},e}var He=X.b.input(qe(),(function(e){return e.error?$.danger:"#eeeeee"}),$.primary,$.lightGray,$.darkGray);function Ue(){var e=Object(K.a)(["\n  width: 100%;\n"]);return Ue=function(){return e},e}var Ge=X.b.div(Ue());Ge.Label=Ye,Ge.Input=He;var Je=Ge,Ve=function(e){var n=e.labelText,t=e.hintText,a=e.name,o=e.error,i=(e.type,Object(W.a)(e,["labelText","hintText","name","error","type"]));return r.createElement(Je,null,n&&r.createElement(Ye,{htmlFor:a,labelText:n,hintText:t,toggleName:i.toggleName,toggleState:i.toggleState,handleToggle:i.handleToggle}),r.createElement(Je.Input,Object.assign({id:a,name:a},i,{error:!!o})),o&&r.createElement(fe,null,r.createElement(fe.Icon,null),r.createElement(fe.Text,null,o)))},We=function(e){var n=e.value,t=e.text;return a.a.createElement("option",{value:n},t)};function Ke(){var e=Object(K.a)(["\n  height: 60px;\n  width: 100%;\n  font-size: 1em;\n  text-align-last: center;\n  color: #000000;\n  border: 1px solid #eeeeee;\n  margin-bottom: 10px;\n  font-weight: 400;\n  padding-left: 25px;\n  box-shadow: ",";\n  background: ",";\n  outline-color: ",";\n"]);return Ke=function(){return e},e}var Xe=X.b.select(Ke(),ce(),$.white,$.primary);function Ze(){var e=Object(K.a)(["\n  width: 100%;\n"]);return Ze=function(){return e},e}var $e=X.b.div(Ze());$e.Label=Ye,$e.Input=Xe;var Qe=$e,en=function(e){var n=e.labelText,t=e.hintText,r=e.name,o=e.options,i=Object(W.a)(e,["labelText","hintText","name","options"]);return a.a.createElement(Qe,null,n&&a.a.createElement(Qe.Label,{htmlFor:r,labelText:n,hintText:t}),a.a.createElement(Qe.Input,Object.assign({name:r,id:r},i),o.map((function(e){return a.a.createElement(We,{key:e.value,value:e.value,text:e.text})}))),i.error&&a.a.createElement(he,{error:i.error}))};function nn(){var e=Object(K.a)(["\n  display: grid;\n\n  "," {\n    grid-row-gap: 30px;\n    margin-bottom: 10px;\n\n    ","\n  }\n\n  "," {\n    grid-template-columns: repeat(",", 1fr);\n    grid-column-gap: 18px;\n    grid-row-gap: 10px;\n  }\n"]);return nn=function(){return e},e}var tn=X.b.div(nn(),ie.maxSizePhone,(function(e){var n=e.reqCol,t=void 0!==n&&n,r=e.col;return t?"grid-template-columns: repeat(".concat(r,", 1fr);"):""}),ie.minSizeTabletAndUp,(function(e){return e.col}));function rn(){var e=Object(K.a)(["\n  display: grid;\n  grid-auto-rows: auto;\n  grid-row-gap: 40px;\n  width: 80vw;\n\n  "," {\n    width: 94vw;\n  }\n  "," {\n    width: 96vw;\n  }\n\n  margin-right: auto;\n  margin-left: auto;\n"]);return rn=function(){return e},e}var an=X.b.div(rn(),ie.smallSize,ie.mediumSize);function on(){var e=Object(K.a)(["\n  ","\n  ","\n  ","\n"]);return on=function(){return e},e}var ln=X.b.h3(on(),(function(e){var n=e.mt,t=void 0===n?null:n;return t?"margin-top: ".concat(t,"px"):""}),(function(e){var n=e.md,t=void 0===n?null:n;return t?"margin-down: ".concat(t,"px"):""}),(function(e){var n=e.color,t=void 0===n?null:n;return t?"color: ".concat(t):""}));function cn(){var e=Object(K.a)(["\n  padding: 10px 5px 5px;\n  display: flex;\n  justify-content: space-between;\n\n  &:not(:last-child) {\n    border-bottom: 1px solid #eeeeee;\n  }\n\n  &:hover {\n    background: ",";\n    color: ",";\n  }\n"]);return cn=function(){return e},e}function un(){var e=Object(K.a)(["\n  list-style: none;\n  padding: 15px;\n"]);return un=function(){return e},e}var dn=X.b.ul(un()),sn=X.b.li(cn(),$.primary,$.white);function bn(){var e=Object(K.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 15px;\n  font-size: 1.05em;\n  font-weight: bold;\n\n  background: ",";\n  color: ",";\n"]);return bn=function(){return e},e}var pn=X.b.div(bn(),$.primary,$.white);function mn(){var e=Object(K.a)(["\n  height: 100%;\n  width: 100%;\n  border: 1px solid #eeeeee;\n  background: #fff;\n  box-shadow: ",";\n  transition: 0.4s;\n\n  &:hover {\n    transform: scale(1.02);\n    box-shadow: ",";\n  }\n"]);return mn=function(){return e},e}var fn=X.b.div(mn(),ce(),ce(.3));fn.Body=dn,fn.ListItem=sn,fn.Footer=pn;var hn=fn,gn=Object(l.b)((function(e){return{pbb1:M(e),pbb2:F(e),cards:q(e),loaded:z(e),errors:G(e),compensationPeriod:L(e)}}),null)((function(e){var n=e.cards,t=e.errors,r=e.loaded,o=e.compensationPeriod;return r?t&&t.length>0&&r?a.a.createElement(he,{errors:t,bg:!0}):a.a.createElement(a.a.Fragment,null,n&&n.length>0&&o&&a.a.createElement(ln,{md:5,color:$.primary},o),a.a.createElement(tn,{col:n&&2===n.length?2:1},n&&n.map((function(e,n){return a.a.createElement(hn,{key:n},a.a.createElement(hn.Body,null,a.a.createElement(hn.ListItem,null,a.a.createElement("span",null,S),a.a.createElement("span",null,e.max10PBB)),a.a.createElement(hn.ListItem,null,a.a.createElement("span",null,D),a.a.createElement("span",null,e.max15PBB)),a.a.createElement(hn.ListItem,null,a.a.createElement("span",null,O),a.a.createElement("span",null,e.excessFixedSalary)),a.a.createElement(hn.ListItem,null,a.a.createElement("span",null,B),a.a.createElement("span",null,e.parentalSalaryUpto10PBB)),a.a.createElement(hn.ListItem,null,a.a.createElement("span",null,w),a.a.createElement("span",null,e.parentalSalaryAbove10PBB))),a.a.createElement(hn.Footer,null,a.a.createElement("span",null,j),a.a.createElement("span",null,e.total," kr")))})))):a.a.createElement(Te,{size:5})})),yn="[CRITERIAS] SET_STATUS",vn="[CRITERIAS] SET_BIRTHDAY",xn={birthday:null,status:"",compensationPeriod:"",errors:{}},En=t(32),Sn=t(58),Dn=function(e){var n=e.birthdayError,t=e.birthday,o=e.changeDateHandler,i=Object(r.useState)(!1),l=Object(En.a)(i,2),c=l[0],u=l[1];return a.a.createElement("div",null,a.a.createElement(Ye,{htmlFor:"child-birthday",hintText:k.period,labelText:m}),a.a.createElement(Sn.SingleDatePicker,{date:t,onDateChange:o,focused:c,onFocusChange:function(){return u(!c)},id:"child-birthday",placeholder:"Datum",displayFormat:"YYYY-MM-DD",hideKeyboardShortcutsPanel:!0,showDefaultInputIcon:!0,showClearDate:!0,numberOfMonths:1,isOutsideRange:function(e){return e.isAfter(d()())||e.isBefore(d()().subtract(2,"years"))}}),n&&a.a.createElement(he,{error:n}))},On=function(e){var n=e.changeSalaryHandler,t=Object(W.a)(e,["changeSalaryHandler"]);return a.a.createElement(en,{name:"salary-type",options:p,labelText:f,hintText:k.employeeStatus,onChange:function(e){return n(e.target.value)},error:t.statusError})},Bn=function(e){return{birthday:A(e),statusError:N(e),birthdayError:Y(e)}},wn=function(e){return{changeSalaryHandler:function(n){return e(function(e){return function(n){var t="mer \xe4n ett \xe5r"===e?k.employedMoreThanOneYear:"mer \xe4n tre \xe5r"===e?k.employedMoreThanThreeYear:"";n({type:yn,status:e,error:""===e?I.statusIsRequired:"",compensationPeriod:t})}}(n))},changeDateHandler:function(n){return e((t=n,function(e){e({type:vn,birthday:t,error:null===t?I.birthdayIsRequired:""})}));var t}}},jn={EmployeeStatus:Object(l.b)(Bn,wn)(On),Birthday:Object(l.b)(Bn,wn)(Dn)},Tn="[PRICE_BASE] SET_PBB1",In="[PRICE_BASE] SET_PBB2",kn="[PRICE_BASE] SET_END_DATE",Cn={2020:47300,2019:46500,2018:45500,2017:44800},Pn=function(e){return function(n,t){var r=t().priceBase.duration.startDate,a=d()(r).year();n({type:Tn,pbb1:e,error:e?"":"".concat(I.notFoundPBB," ").concat(a)})}},An=function(e){return function(n,t){var r=t().priceBase.duration,a=r.startDate,o=r.endDate,i=d()(o).year(),l=d()(a).isSame(o,"year"),c=!e&&a&&o&&!l?"".concat(I.notFoundPBB," ").concat(i):"";n({type:In,pbb2:e,error:c})}},Rn=function(e){return function(n,t){var r=t().priceBase.duration.startDate,a=e?d()(e).diff(r,"days")+1<=29?I.minPeriod:"":I.endDateIsRequired;n({type:kn,endDate:e,error:a})}},_n=function(e,n){return function(t){var r=d()(e).year(),a=d()(n).year(),o=d()(e).isSame(n,"year");t(function(e){return function(n,t){var r=t().critera.birthday,a=d()(e).isBetween(d()(r),d()(r).add(2,"years").subtract(29,"days")&&r&&e)?I.period:e?"":I.startDateIsRequired;n({type:"[PRICE_BASE] SET_START_DATE",startDate:e,error:a})}}(e)),(!e&&!n||o)&&(t(Rn(n)),t(An(void 0))),!isNaN(r)&&e&&t(Pn(Cn[r]||0)),n&&(t(Rn(n)),o||isNaN(r)||isNaN(a)||t(An(Cn[a])))}},Mn={pbb1:Cn[d()().year()],pbb2:void 0,duration:{startDate:null,endDate:null,countOfDays:void 0},errors:{startDate:"",endDate:"",pbb1:"",pbb2:""}},Fn=function(e){return e.priceBase.errors},Ln=function(e){var n=e.priceBase.duration,t=n.startDate,r=void 0===t?d()().year():t,a=n.endDate,o=d()(r).year()||d()().year(),i=d()(a).year(),l=[o];return!d()(r).isSame(a,"year")&&i&&(l[1]=i),l},zn=function(e){var n=e.priceBase.duration,t=n.startDate,r=n.endDate,a=d()(t).year(),o=d()(r).year(),i=d()(t).isSame(r,"year"),l=d()(t).endOf("year"),c=d()(r).startOf("year"),u=t&&r&&r.diff(t,"days")+1,s=t&&r&&!i?"( ".concat(P(l.diff(t,"days")+1)," i ").concat(a," och ").concat(P(d()(r).diff(c,"days")+1)," i ").concat(o," )"):"";return u>0?P(u,s):void 0},Nn=function(e){return{birthday:A(e),startDate:R(e),endDate:_(e),years:Ln(e),pbb1:M(e),pbb2:F(e),countOfDays:zn(e),errors:Fn(e)}},Yn=function(e){return{onPBB1ChangeHandler:function(n){return e(Pn(n))},onPBB2ChangeHandler:function(n){return e(An(n))},onDatesChanges:function(n,t){return e(_n(n,t))}}},qn={Duration:Object(l.b)(Nn,Yn)((function(e){var n=e.birthday,t=e.startDate,o=e.endDate,i=e.countOfDays,l=e.onDatesChanges,c=e.errors,u=Object(r.useState)(null),s=Object(En.a)(u,2),b=s[0],p=s[1];return a.a.createElement("div",null,a.a.createElement(Ye,{htmlFor:"startDate",labelText:h,hintText:k.minPeriod}),a.a.createElement(Sn.DateRangePicker,{startDate:t,startDateId:"startDate",endDate:o,endDateId:"endDate",onDatesChange:function(e){var n=e.startDate,t=e.endDate;return l(n,t)},focusedInput:b,onFocusChange:function(e){return p(e)},isOutsideRange:function(e){return e.isBefore(d()(n))||e.isAfter(d()(n).add(2,"years"))},showDefaultInputIcon:!0,displayFormat:"YYYY-MM-DD",startDatePlaceholderText:g,endDatePlaceholderText:y,hideKeyboardShortcutsPanel:!0,showClearDates:!0,reopenPickerOnClearDates:!0,numberOfMonths:window.innerWidth>=768?2:1}),a.a.createElement(tn,{col:2,reqCol:""!==c.startDate&&""!==c.endDate},c&&c.startDate&&a.a.createElement(he,{error:c.startDate}),c&&c.endDate&&a.a.createElement(he,{error:c.endDate})),i&&a.a.createElement(Ye,{labelText:i,isCenter:!0}))})),BasicAmount:Object(l.b)(Nn,Yn)((function(e){var n=Object(r.useState)(!1),t=Object(En.a)(n,2),o=t[0],i=t[1],l=Object(r.useState)(!1),c=Object(En.a)(l,2),u=c[0],d=c[1],s=e.years,b=e.pbb1,p=e.pbb2,m=e.onPBB1ChangeHandler,f=e.onPBB2ChangeHandler,h=e.errors;return a.a.createElement(tn,{col:2===s.length&&s[1]?2:1},a.a.createElement(Ve,{disabled:!o,labelText:"".concat(v," ").concat(s[0]),name:"basic-amount-".concat(s[0]),value:b,onChange:function(e){return m(e.target.value)},hintText:k.changePBB,toggleName:"basic-amount-".concat(s[0]),toggleState:o,handleToggle:function(){return i(!o)},error:h&&h.pbb1}),2===s.length&&s[1]&&a.a.createElement(Ve,{disabled:!u,labelText:"".concat(v," ").concat(s[1]),name:"basic-amount-".concat(s[1]),value:p,onChange:function(e){return f(e.target.value)},hintText:k.changePBB,toggleName:"basic-amount-".concat(s[1]),toggleState:u,handleToggle:function(){return d(!u)},error:h&&h.pbb2}))}))},Hn={basicSalary:3e4,salaryModel:"",errors:{basicSalary:"",salaryModel:""}},Un=t(140),Gn=Object(l.b)((function(e){var n,t;return{basicSalaryValue:e.salaryInfo.basicSalary,salaryModels:e.salaryInfo.salaryModel,errors:{salaryModel:null===(n=e.salaryInfo.errors)||void 0===n?void 0:n.salaryModel,basicSalary:null===(t=e.salaryInfo.errors)||void 0===t?void 0:t.basicSalary}}}),(function(e){return{basicSalaryChangeHandler:function(n){return e((t=n,function(e){return e({type:"[SALARY_INFO] SET_BASIC_SALARY",basicSalary:t,error:isNaN(t)?I.basicSalaryIsRequired:t<3e4?I.minSalary:""})}));var t},setSalaryModelChangeHandler:function(n){return e(function(e){return function(n,t){return n({type:"[SALARY_INFO] SET_SALARY_MODEL",salaryModel:e,error:""===e?I.salaryModelIsRequiredsalary:""})}}(n))}}}))((function(e){var n=e.errors,t=e.basicSalaryValue,r=e.basicSalaryChangeHandler,o=e.setSalaryModelChangeHandler;return a.a.createElement(a.a.Fragment,null,a.a.createElement(tn,{col:2},a.a.createElement(en,{name:"salary-type",options:b,labelText:x,onChange:function(e){return o(e.target.value)},error:n.salaryModel}),a.a.createElement(Ve,{labelText:E,name:"baseSalary",value:t,onChange:function(e){return r(e.target.value)},hintText:k.minSalary,error:n.basicSalary})),a.a.createElement(Un.a,{axis:"x",xstep:50,xmin:0,xmax:1e5,x:parseInt(t),onChange:function(e){var n=e.x;return r(n.toString())},styles:{track:{width:"100%",backgroundColor:"".concat($.darkGray),height:15,borderRadius:10,boxShadow:"".concat(ce(.15,"inset"))},active:{backgroundColor:"".concat($.primary),borderRadius:10},thumb:{cursor:"pointer",width:30,height:30},disabled:{opacity:.5}}}))}));t(217),t(256);function Jn(){var e=Object(K.a)(["\n","\n\nhtml {\n  box-sizing: border-box;\n}\n\n\n*,*:before, *:after{\n  box-sizing: inherit;\n  font-family: ","\n}\n\nbody {\n  background:  ",";\n}\n\nh1, h2, h3, p {\n  margin: 0;\n  padding: 0;\n}\n\n::selection{\n  background: ",";\n  color: ","\n}\n\ninput, select{\n  font-weight: 400  !important;\n  font-size: 19px;\n}\n\n\n.CalendarDay__selected,\n.CalendarDay__selected:active,\n.CalendarDay__selected:hover {\n  background: "," !important;\n  border: 1px solid "," !important;\n}\n\n.CalendarDay__selected_span, .CalendarDay__hovered_span {\n  background: "," !important;\n  border: 1px solid "," !important;\n  color: "," !important;\n}\n\n.DateInput_input__focused {\n  border-bottom: 2px solid "," !important;\n}\n\n.DateRangePickerInput, .DateRangePicker,.SingleDatePicker ,.SingleDatePickerInput{\n  width: 100% !important;\n  box-shadow: ",";\n  height:60px;\n\n  .DateInput_input{\n    text-align: center  !important;\n    font-weight: 400  !important;\n    height: 58px;\n  }\n}\n\n.SingleDatePicker {\n  .SingleDatePickerInput{\n      display: flex;\n      \n    .DateInput{  \n      flex: 1;\n      \n    }\n  }\n}\n\n.DateRangePicker{\n  margin-bottom: 10px;\n\n  & + div{\n    /*position:absolute;*/\n    width: 100%;\n    text-align: center;\n    font-size: ",";\n  }\n}\n\n.DateRangePicker{\n  .DateRangePickerInput{\n    display: flex;\n    align-items: center;\n\n    .DateInput{\n      flex: 1;\n    }\n  }\n} \n"]);return Jn=function(){return e},e}var Vn=Object(X.a)(Jn(),Object(Z.c)(),le.fontFamily,$.lightGray,$.primary,$.white,$.primary,$.secondary,$.secondary,$.white,$.white,$.primary,ce(),le.fontMedSize);d.a.updateLocale("sv",{months:["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],monthsShort:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],weekdays:["M\xe5ndag","Tisdag","Onsdag","Torsdag","Fredag","L\xf6rdag","S\xf6ndag"],weekdaysMin:["M\xe5n","Tis","Ons","Tor","Fre","L\xf6r","S\xf6n"]});var Wn=function(){return a.a.createElement(an,null,a.a.createElement(Vn,null),a.a.createElement(ln,{mt:30},"Vad beh\xf6ver jag t\xe4nka p\xe5?"),a.a.createElement(tn,{col:2},a.a.createElement(jn.EmployeeStatus,null),a.a.createElement(jn.Birthday,null)),a.a.createElement(ln,null,"Prisbasbeloppet"),a.a.createElement(tn,{col:2},a.a.createElement(qn.Duration,null),a.a.createElement(qn.BasicAmount,null)),a.a.createElement(Gn,null),a.a.createElement(gn,null))},Kn=t(25),Xn=t(138),Zn=t(139),$n=Object(Kn.combineReducers)({critera:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case vn:return Object(s.a)({},e,{birthday:n.birthday,errors:Object(s.a)({},e.errors,{birthday:n.error})});case yn:return Object(s.a)({},e,{status:n.status,compensationPeriod:n.compensationPeriod,errors:Object(s.a)({},e.errors,{status:n.error})});default:return e}},priceBase:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Mn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Tn:return Object(s.a)({},e,{pbb1:n.pbb1,errors:Object(s.a)({},e.errors,{pbb1:n.error})});case In:return Object(s.a)({},e,{pbb2:n.pbb2,errors:Object(s.a)({},e.errors,{pbb2:n.error})});case"[PRICE_BASE] SET_START_DATE":return Object(s.a)({},e,{duration:Object(s.a)({},e.duration,{startDate:n.startDate}),errors:Object(s.a)({},e.errors,{startDate:n.error})});case kn:return Object(s.a)({},e,{duration:Object(s.a)({},e.duration,{endDate:n.endDate}),errors:Object(s.a)({},e.errors,{endDate:n.error})});default:return e}},salaryInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Hn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"[SALARY_INFO] SET_BASIC_SALARY":return Object(s.a)({},e,{basicSalary:n.basicSalary,errors:Object(s.a)({},e.errors,{basicSalary:n.error})});case"[SALARY_INFO] SET_SALARY_MODEL":return Object(s.a)({},e,{salaryModel:n.salaryModel,errors:Object(s.a)({},e.errors,{salaryModel:n.error})});default:return e}},cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"LOAD_CARD":return{loaded:!1,data:[]};case"LOAD_CARD_SUCCESS":return Object(s.a)({},e,{loaded:!0,data:Object(J.a)(n.data)});case"LOAD_CARD_FIALURE":return Object(s.a)({},e,{loaded:!0,data:[]});default:return e}}}),Qn=[Zn.a,function(e){var n=e.dispatch;e.getState;return function(e){return function(t){if(e(t),!t.type.includes("LOAD_CARD"))return n((function(e,n){var t=H(n()),r=G(n()),a=n().critera,o=a.status,i=a.birthday,l=n().priceBase,c=l.pbb1,u=l.duration,d=n().salaryInfo.salaryModel;""!==o&&i&&c>0&&u.startDate&&u.endDate&&""!==d&&(e({type:"LOAD_CARD"}),setTimeout((function(){if(r&&r.length>0)return e({type:"LOAD_CARD_FIALURE"});e(function(e){return{type:"LOAD_CARD_SUCCESS",data:e}}(t))}),700))}))}}}],et=Kn.applyMiddleware.apply(void 0,Qn),nt=Object(Kn.createStore)($n,Object(Xn.composeWithDevTools)(et));i.a.render(a.a.createElement(l.a,{store:nt},a.a.createElement(Wn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[143,1,2]]]);
//# sourceMappingURL=main.855a8f0d.chunk.js.map