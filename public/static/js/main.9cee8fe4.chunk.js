(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,a,t){},104:function(e,a,t){},105:function(e,a,t){},138:function(e,a,t){},139:function(e,a,t){},147:function(e,a,t){},148:function(e,a,t){},149:function(e,a,t){},150:function(e,a,t){},151:function(e,a,t){},152:function(e,a,t){},154:function(e,a,t){},155:function(e,a,t){},174:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(42),o=t.n(r),c=(t(103),t(104),t(6)),s=(t(105),t(39)),m=t.n(s),i=t(24),u=t(33),p=t.n(u),d=t(19),E=t.n(d),b=Object(n.createContext)(),g=function(e){var a=Object(n.useState)(!1),t=Object(c.a)(a,2),r=t[0],o=t[1],s=Object(n.useState)("pusto"),m=Object(c.a)(s,2),i=m[0],u=m[1];return l.a.createElement(b.Provider,{value:[r,o,i,u]},e.children)},f=t(43),h=t(46),v=t.n(h),y=(t(106),t(108),{apiKey:"AIzaSyDpabHfz2uaYAn2J0b3hKJSTUbNRitvsqE",authDomain:"book-faster.firebaseapp.com",databaseURL:"https://book-faster.firebaseio.com",projectId:"book-faster",storageBucket:"book-faster.appspot.com",messagingSenderId:"398159551634",appId:"1:398159551634:web:5b9b5120fe4c7932"}),N=function e(){var a=this;Object(f.a)(this,e),this.createUserWithEmailAndPassword=function(e,t){return a.auth.createUserWithEmailAndPassword(e,t)},this.signInWithEmailAndPassword=function(e,t){return a.auth.signInWithEmailAndPassword(e,t)},this.signOut=function(){return a.auth.signOut()},this.passwordReset=function(e){return a.auth.sendPasswordResetEmail(e)},this.passwordUpdate=function(e){return a.auth.currentUser.updatePassword(e)},this.getDB=function(){return a.db},v.a.initializeApp(y),this.auth=v.a.auth(),this.db=v.a.firestore()},j=Object(n.createContext)(null),w=function(e){return l.a.createElement(j.Provider,{value:new N},e.children)},k=function(){var e=Object(n.useContext)(b),a=Object(c.a)(e,4),t=a[1],r=a[3],o=Object(n.useContext)(j);return l.a.createElement(i.b,{to:"/"},l.a.createElement(E.a,{variant:"outline-secondary",onClick:function(){o.signOut().then(function(){localStorage.setItem("booking-faster",null),setTimeout(function(){r("pusto"),t(!1)},50)})}},"Wyloguj si\u0119"))},O=function(){var e=Object(n.useContext)(b),a=Object(c.a)(e,1)[0];return l.a.createElement(m.a,{className:"navbar",expand:"lg"},l.a.createElement(m.a.Brand,{className:"logo"},"BOOK FASTER"),l.a.createElement(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(m.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(p.a,{className:"mr-auto"},l.a.createElement(p.a.Item,null,l.a.createElement(i.b,{to:"/",className:" navigation1"},"Strona G\u0142\xf3wna")),l.a.createElement(p.a.Item,null,a?l.a.createElement(i.b,{to:"/compare",className:" navigation1"},"Por\xf3wnaj"):"")),l.a.createElement(p.a,null,l.a.createElement(p.a.Item,{className:"option_nav"},a?l.a.createElement(i.b,{to:"/option",className:"navigation1"},"Konto"):""),l.a.createElement(p.a.Item,null,a?l.a.createElement(k,null):l.a.createElement(i.b,{to:"/login",className:" "},l.a.createElement(E.a,{variant:"outline-secondary"},"Zaloguj si\u0119"))))))},_=t(31),z=(t(138),t(20)),x=t.n(z),C=t(13),S=t.n(C),I=t(5),P=t.n(I),B=t(80),F=t.n(B),G=t(81),T=t.n(G),D=t(82),H=t.n(D),L=t(83),W=t.n(L),A=t(84),M=t.n(A),R=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"skos1"}),l.a.createElement(x.a,{fluid:!0,className:"m-0 p-0"},l.a.createElement(S.a,{className:"przedstawienie m-0 "},l.a.createElement("p",{className:"triangle"}),l.a.createElement(P.a,{className:"obraz pt-5"},l.a.createElement("img",{src:F.a,className:"mainpage_photo dane2_photo",alt:""})),l.a.createElement(P.a,{className:"text pt-5"},l.a.createElement("div",{className:"box-text"},l.a.createElement("div",{className:"title-text"},"Monitoruj ceny swojej konkurencji"),l.a.createElement("div",{className:"subText"},"Nasza strona dostarczy Ci informacje na temat cen, dost\u0119pno\u015bci i inne dane na temat twojej konkurencji"," "))))),l.a.createElement(x.a,{fluid:!0,className:"m-0 p-0"},l.a.createElement(S.a,{className:"skos2"},l.a.createElement(P.a,{md:4,className:"stats_column"},l.a.createElement("div",{className:"text-stat-box"},l.a.createElement("div",{className:"text-stat"},"Por\xf3wnuj otrzymane wyniki"),l.a.createElement("div",{className:"subText"},"Sprawd\u017a czy tw\xf3j obiekt jest ta\u0144szy czy dro\u017cszy w danym terminie oraz ilo\u015b\u0107 dost\u0119pnych obiekt\xf3w"))),l.a.createElement(P.a,{md:8},l.a.createElement("img",{src:T.a,alt:"",className:"stats mainpage_photo"})))),l.a.createElement(x.a,{fluid:!0,className:"m-0 p-0"},l.a.createElement(S.a,{className:"skos3"},l.a.createElement("p",{className:"triangle2"}),l.a.createElement(P.a,{md:3,className:"wyszukiwarka-text"},l.a.createElement("div",{className:"text-search-box"},l.a.createElement("div",{className:"text-stat"},"Wyszukuj wed\u0142ug kryteri\xf3w"),l.a.createElement("div",{className:"subText"},"Wyszukuj po nazwie, miejscowo\u015bci, dacie, d\u0142ugo\u015bci pobytu, ilo\u015bci go\u015bci oraz typie obiektu."))),l.a.createElement(P.a,{className:"wyszukiwarka",md:3},l.a.createElement("img",{src:H.a,alt:"",className:"mainpage_photo"})),l.a.createElement(P.a,{md:3,className:"wyszukiwarka-text"},l.a.createElement("div",{className:"text-search-box"},l.a.createElement("div",{className:"text-stat"},"Przegl\u0105daj statystyki"),l.a.createElement("div",{className:"subText"},"Sprawd\u017a \u015bredni\u0105 cen\u0119 za pobyt, ile obiekt\xf3w jest dost\u0119pnych w tym terminie oraz jaka jest cena za noc"))),l.a.createElement(P.a,{md:3,className:"srednie"},l.a.createElement("img",{src:W.a,alt:"",className:"mainpage_photo"}))),l.a.createElement(S.a,{className:"dane"},l.a.createElement(P.a,null,l.a.createElement("div",{className:"text-stat"},"Dane z serwisu")),l.a.createElement(P.a,{className:"booking_logo"},l.a.createElement("img",{src:M.a,alt:"logo_booking"})))))},U=t(3),J=t.n(U),Z=(t(139),function(){var e=Object(n.useContext)(b),a=Object(c.a)(e,4),t=a[2],r=a[3],o=Object(n.useContext)(j),s=Object(n.useState)(t.hotel),m=Object(c.a)(s,2),i=m[0],u=m[1],p=Object(n.useState)(t.place),d=Object(c.a)(p,2),g=d[0],f=d[1],h=Object(n.useState)(!1),v=Object(c.a)(h,2),y=v[0],N=v[1],w=function(e){var a=e.target.value;u(a)};return l.a.createElement(x.a,null,l.a.createElement(S.a,null,l.a.createElement(P.a,{className:"d-none d-sm-block"}),l.a.createElement(P.a,{className:"a"},l.a.createElement("p",{className:"optionPage_option_note"},y||""),l.a.createElement("p",{className:"optionPage_display_name"},"Witaj, ",void 0!==t?t.name:""),l.a.createElement(J.a,{onSubmit:function(e){e.preventDefault();var a=t.name,n=t.login;r({name:a,hotel:i,place:g,login:n}),o.getDB().collection("users").doc(n).set({name:a,login:n,hotel:i,place:g}).then(function(){N("Zmiany zosta\u0142y zachowane")})}},l.a.createElement(J.a.Group,{controlId:"formBasicEmail"},l.a.createElement(J.a.Label,{className:"optionPage_label"},"Nazwa twojego obiektu"),l.a.createElement(J.a.Control,{type:"text",placeholder:"Nazwa twojego obiektu",onChange:w,value:i}),l.a.createElement(J.a.Text,{className:"optionPage_undername"},"Wpisz nazw\u0119 swojego obiektu tutaj, dzi\u0119ki temu b\u0119dzie wyr\xf3\u017cniany przy wynikach wyszukiwania.")),l.a.createElement(J.a.Group,{controlId:"formBasicEmail"},l.a.createElement(J.a.Label,{className:"optionPage_label"},"Miejscowo\u015b\u0107"),l.a.createElement(J.a.Control,{as:"select",onChange:function(e){var a=e.target.value;f(a)},value:g},l.a.createElement("option",{value:""},"Miejscowo\u015b\u0107"),l.a.createElement("option",null,"Bia\u0142ka Tatrza\u0144ska"),l.a.createElement("option",null,"Bukowina Tatrza\u0144ska"),l.a.createElement("option",null,"Zakopane")),l.a.createElement(J.a.Text,{className:"optionPage_undername"},"W kt\xf3rej znajduje si\u0119 tw\xf3j obiekt")),l.a.createElement(J.a.Group,{controlId:"formBasicEmail"},l.a.createElement(J.a.Label,{className:"optionPage_label"},"Tw\xf3j Email"),l.a.createElement(J.a.Control,{type:"text",value:t.login,onChange:w})),l.a.createElement(E.a,{variant:"primary",type:"submit"},"Zatwierd\u017a zmiany"))),l.a.createElement(P.a,{className:"d-none d-sm-block"})))}),$=(t(67),function(e){var a=Object(n.useState)(""),t=Object(c.a)(a,2),r=t[0],o=t[1],s=Object(n.useState)(""),m=Object(c.a)(s,2),u=m[0],p=m[1],d=Object(n.useState)(0),g=Object(c.a)(d,2),f=g[0],h=g[1],v=Object(n.useContext)(j),y=Object(n.useContext)(b),N=Object(c.a)(y,4),w=N[1],k=N[3];return l.a.createElement("div",{className:"login_background"},l.a.createElement("span",{className:"login_logo"},"BOOK FASTER"),l.a.createElement("p",{className:"login_title"},"Zaloguj si\u0119"),l.a.createElement("p",{className:"error_login"},f||""),l.a.createElement(J.a,{onSubmit:function(a){a.preventDefault(),(""===r?(h("Email nie mo\u017ce by\u0107 pusty"),1):""===u&&(h("Has\u0142o nie mo\u017ce by\u0107 puste"),1))||v.signInWithEmailAndPassword(r,u).then(function(a){w(!0),null!=v.auth.currentUser&&v.getDB().collection("users").doc(r).get().then(function(e){k(e.data())}).catch(function(e){}),e.history.push("/compare")}).catch(function(e){!function(e){switch(e){case"auth/user-not-found":h("Nierozpoznano nazwy u\u017cytkownika");break;case"auth/wrong-password":h("Wprowadzone has\u0142o jest nieprawid\u0142owe");break;default:h("Spr\xf3buj raz jeszcze")}}(e.code)})},className:"login_form"},l.a.createElement(J.a.Group,{className:"login_group"},l.a.createElement(J.a.Label,{className:"label"},"Adres Email"),l.a.createElement(J.a.Control,{type:"email",placeholder:"Wprowad\u017a email",id:"email",onChange:function(e){var a=e.target.value;o(a)}})),l.a.createElement(J.a.Group,{className:"login_group"},l.a.createElement(J.a.Label,{className:"label"},"Has\u0142o"),l.a.createElement(J.a.Control,{type:"password",placeholder:"Has\u0142o",id:"password",onChange:function(e){var a=e.target.value;p(a)}})),l.a.createElement(E.a,{variant:"secondary",type:"submit"},"Zaloguj si\u0119")),l.a.createElement(i.b,{to:"/register",className:"login_link"},"Nie masz konta ? Zarejestruj si\u0119"),l.a.createElement(i.b,{to:"/passwordReset",className:"login_reset"},"Zapomnia\u0142e\u015b has\u0142a ?"))}),K=function(e){e.firebase.createUserWithEmailAndPassword(e.login,e.password).then(function(a){e.firebase.auth.currentUser.sendEmailVerification().then(function(){}).catch(function(e){console.log(e)}),q(e)}).catch(function(a){e.setError(a.message)})},q=function(e){e.firebase.getDB().collection("users").doc(e.login).set({name:e.name,login:e.login,hotel:e.hotel,place:e.place,valid_date:JSON.stringify(e.valid_date)}).then(function(){e.setUserAuth(!0),e.setUserInfo({name:e.name,hotel:e.hotel,place:e.place,login:e.login}),e.props_history.push("/compare")}).catch(function(e){console.error("Error writing document: ",e)})},Y=function(e){K(e)},Q=function(e){var a=Object(n.useState)(""),t=Object(c.a)(a,2),r=t[0],o=t[1],s=Object(n.useState)(""),m=Object(c.a)(s,2),i=m[0],u=m[1],p=Object(n.useState)(""),d=Object(c.a)(p,2),g=d[0],f=d[1],h=Object(n.useState)(""),v=Object(c.a)(h,2),y=v[0],N=v[1],w=Object(n.useState)(""),k=Object(c.a)(w,2),O=k[0],_=k[1],z=Object(n.useState)(""),x=Object(c.a)(z,2),C=x[0],S=x[1],I=Object(n.useState)(0),P=Object(c.a)(I,2),B=P[0],F=P[1],G=Object(n.useContext)(b),T=Object(c.a)(G,4),D=T[1],H=T[3],L=V(),W=Object(n.useContext)(j);return l.a.createElement("div",{className:"login_background"},l.a.createElement("span",{className:"login_logo"},"BOOK FASTER"),l.a.createElement("p",{className:"login_title"},"Zarejestruj si\u0119"),l.a.createElement("p",{className:"error_login"},B||""),l.a.createElement(J.a,{onSubmit:function(a){if(a.preventDefault(),!(""===g?(F("Has\u0142o nie mo\u017ce by\u0107 puste"),1):""===y?(F("Has\u0142o nie mo\u017ce by\u0107 puste"),1):g!==y?(F("Podane has\u0142o r\xf3\u017cni\u0105 si\u0119"),1):""===i?(F("Email nie mo\u017ce by\u0107 pusty"),1):""===O?(F("Hotel nie mo\u017ce by\u0107 pusty"),1):""===C?(F("Miejscowo\u015b\u0107 nie mo\u017ce by\u0107 puste"),1):""===r&&(F("Imi\u0119 nie mo\u017ce by\u0107 puste"),1)))try{Y({firebase:W,name:r,login:i,password:g,hotel:O,place:C,valid_date:L,setError:F,setUserAuth:D,setUserInfo:H,props_history:e.history})}catch(B){F(B)}},className:"login_form"},l.a.createElement(J.a.Group,{className:"login_group"},l.a.createElement(J.a.Label,{className:"label"},"Adres Email"),l.a.createElement(J.a.Control,{type:"email",placeholder:"Wprowad\u017a email",id:"email",onChange:function(e){var a=e.target.value;u(a)}})),l.a.createElement(J.a.Group,{className:"login_group"},l.a.createElement(J.a.Label,{className:"label"},"Imi\u0119"),l.a.createElement(J.a.Control,{type:"text",placeholder:"Twoje imi\u0119",id:"name",onChange:function(e){var a=e.target.value;o(a)}})),l.a.createElement(J.a.Group,{className:"login_group"},l.a.createElement(J.a.Label,{className:"label"},"Has\u0142o"),l.a.createElement(J.a.Control,{type:"password",placeholder:"Has\u0142o",id:"password1",onChange:function(e){var a=e.target.value;f(a)}})),l.a.createElement(J.a.Group,{className:"login_group"},l.a.createElement(J.a.Label,{className:"label"},"Potwierd\u017a has\u0142o"),l.a.createElement(J.a.Control,{type:"password",placeholder:"Has\u0142o",id:"password2",onChange:function(e){var a=e.target.value;N(a)}})),l.a.createElement(J.a.Group,{controlId:"formBasicEmail"},l.a.createElement(J.a.Label,{className:"label"},"Nazwa twojego obiektu"),l.a.createElement(J.a.Control,{type:"text",placeholder:"Nazwa twojego obiektu",onChange:function(e){var a=e.target.value;_(a)}}),l.a.createElement(J.a.Text,{className:"undername"},"Wpisz nazw\u0119 swojego obiektu tutaj, dzi\u0119ki temu b\u0119dzie wyr\xf3\u017cniany przy wynikach wyszukiwania.")),l.a.createElement(J.a.Group,{controlId:"formBasicEmail1"},l.a.createElement(J.a.Label,{className:"label"},"Miejscowo\u015b\u0107"),l.a.createElement(J.a.Control,{as:"select",onChange:function(e){var a=e.target.value;S(a)}},l.a.createElement("option",{value:""},"Miejscowo\u015b\u0107"),l.a.createElement("option",null,"Bia\u0142ka Tatrza\u0144ska"),l.a.createElement("option",null,"Bukowina Tatrza\u0144ska"),l.a.createElement("option",null,"Zakopane")),l.a.createElement(J.a.Text,{className:"undername"},"W kt\xf3rej znajduje si\u0119 tw\xf3j obiekt")),l.a.createElement(E.a,{variant:"secondary",type:"submit"},"Zarejestruj si\u0119")))},V=function(){var e=localStorage.getItem("time-bookfaster");return JSON.parse(e)},X=t(85),ee=function(e){var a=e.component,t=Object(X.a)(e,["component"]),r=Object(n.useContext)(b),o=Object(c.a)(r,1)[0];return l.a.createElement(_.b,Object.assign({},t,{render:function(e){return!0===o?l.a.createElement(a,e):l.a.createElement(_.a,{to:"/login"})}}))},ae=function(e){var a=Object(n.useContext)(b),t=Object(c.a)(a,4),r=t[0],o=t[1],s=t[2],m=t[3],i=function(e){var a=-(new Date(e.startTimeOfSession)-new Date);return parseInt(a)/36e5>1};if("pusto"!==s){var u=s;u.startTimeOfSession=new Date,localStorage.setItem("booking-faster",JSON.stringify(u))}return r||function(){var a=JSON.parse(localStorage.getItem("booking-faster"));null!==a&&(i(a)||(m(a),o(!0),setTimeout(function(){e.history.push("/compare")},50)))}(),l.a.createElement("div",null)},te=function(){var e=Object(n.useContext)(j),a=Object(n.useState)(""),t=Object(c.a)(a,2),r=t[0],o=t[1],s=Object(n.useState)(""),m=Object(c.a)(s,2),i=m[0],u=m[1];return l.a.createElement("div",{className:"login_background"},l.a.createElement("p",{className:"title"},"get Booked faster"),l.a.createElement("p",{className:"login_title"},"Zresetuj has\u0142o"),l.a.createElement("p",{className:"error_login"},r||""),l.a.createElement(J.a,{onSubmit:function(a){a.preventDefault(),e.passwordReset(i).then(function(){o("Na podany email zosta\u0142 wys\u0142any email do zresetowania has\u0142o")}).catch(function(e){o("Nie rozpoznano adresu email")})},className:"login_form"},l.a.createElement(J.a.Group,{className:"login_group"},l.a.createElement(J.a.Label,{className:"label"},"Adres Email"),l.a.createElement(J.a.Control,{type:"email",placeholder:"Wprowad\u017a email",id:"email",onChange:function(e){var a=e.target.value;u(a)}})),l.a.createElement(E.a,{variant:"secondary",type:"submit"},"Zresetuj has\u0142o")))},ne=t(94),le=t(18),re=t(86),oe=t(178),ce=t(41),se=t.n(ce),me=t(87),ie=t(95),ue=t(88),pe=t(96),de=(t(147),function(e){var a=Object(n.useContext)(Ue),t=Object(c.a)(a,1)[0],r=function(){return t.length>0},o=function(){return r()?e.value.price-t[0].price:e.value.departure},s={color:"red"},m={color:"green"};return l.a.createElement(x.a,{fluid:!0,className:"container_hotel"},l.a.createElement(S.a,{className:"my-0 py-2 row_hotel"},l.a.createElement(P.a,{className:"hotel_column",md:3},e.value.name),l.a.createElement(P.a,{className:"hotel_column",md:2},e.value.price," z\u0142"),l.a.createElement(P.a,{className:"hotel_column",md:2},e.value.place),l.a.createElement(P.a,{className:"hotel_column",md:2},e.value.arrival),l.a.createElement(P.a,{className:"hotel_column",style:function(){if(r())return o()>=0?m:s}(),md:2},o()),l.a.createElement(P.a,{className:"hotel_column",md:1},e.value.interval?e.value.interval:3)),l.a.createElement(S.a,{className:"my-0 py-2 row_hidden_hotel"},l.a.createElement(P.a,{className:"hotel_column",md:3},"Cena za dob\u0119: "),l.a.createElement(P.a,{className:"hotel_column",md:2},Math.round(e.value.price/e.value.interval)),l.a.createElement(P.a,{className:"hotel_column",md:2},"Twoja cena za dob\u0119: "),l.a.createElement(P.a,{className:"hotel_column",md:2},r()?Math.round(t[0].price/e.value.interval):"Nie jeste\u015b dost\u0119pny w podanym terminie")))}),Ee=(t(148),function(){var e=Object(n.useContext)(Re),a=Object(c.a)(e,2),t=a[0],r=a[1],o=Object(n.useContext)(b),s=Object(c.a)(o,3)[2],m=Object(n.useState)(t.name),i=Object(c.a)(m,2),u=i[0],p=i[1],d=t.date.split("-"),g=Object(n.useState)(d[2]),f=Object(c.a)(g,2),h=f[0],v=f[1],y=Object(n.useState)(d[1]),N=Object(c.a)(y,2),j=N[0],w=N[1],k=Object(n.useState)(d[0]),O=Object(c.a)(k,2),_=O[0],z=O[1],x=Object(n.useState)(t.interval),C=Object(c.a)(x,2),I=C[0],B=C[1],F=Object(n.useState)(s.place),G=Object(c.a)(F,2),T=G[0],D=G[1],H=Object(n.useState)(""),L=Object(c.a)(H,2),W=L[0],A=L[1],M=Object(n.useState)(t.numberOfGuest),R=Object(c.a)(M,2),U=R[0],Z=R[1],$=Object(n.useState)(t.accommodation_type),K=Object(c.a)($,2),q=K[0],Y=K[1],Q=function(e){var a=parseInt(e.target.id);Y(a)};return l.a.createElement(n.Fragment,null,l.a.createElement("button",{className:"Filter_closeClick",onClick:function(e){"none"===document.getElementById("myForm").style.display?document.getElementById("myForm").style.display="block":document.getElementById("myForm").style.display="none"}},l.a.createElement("i",{className:"far fa-caret-square-right Filter_close"})),l.a.createElement(J.a,{id:"myForm",onSubmit:function(e){e.preventDefault();var a=""===h?"":"".concat(_,"-").concat(j,"-").concat(h);(""===h&&""===j&&""===_||!(""===h?(A("Podaj dzie\u0144"),1):""===j?(A("Podaj miesi\u0105c"),1):""===_?(A("Podaj rok"),1):void 0))&&(A(""),r({name:u,place:T,interval:I,date:a,accommodation_type:q,numberOfGuest:U}))}},l.a.createElement("p",{className:"error_filter"},""!==W?W:null),l.a.createElement(J.a.Group,{controlId:"formBasicEmail"},l.a.createElement(J.a.Label,{className:"Filter_label"},"Nazwa obiektu"),l.a.createElement(J.a.Control,{type:"text",placeholder:"Nazwa obiektu",name:"name",onChange:function(e){var a=e.target.value;p(a)},value:u}),l.a.createElement(J.a.Text,{className:"Filter_underName"},"Tutaj wpisz nazw\u0119 obiektu, kt\xf3ry chcesz wyszuka\u0107")),l.a.createElement(J.a.Group,{controlId:"formBasicEmail1"},l.a.createElement(J.a.Label,{className:"Filter_label"},"Nazwa miejscowo\u015bci"),l.a.createElement(J.a.Control,{type:"text",placeholder:"Nazwa miejscowo\u015bci",name:"place",onChange:function(e){var a=e.target.value;D(a)},value:T}),l.a.createElement(J.a.Text,{className:"Filter_underName"},"Tutaj wpisz nazw\u0119 miejscowo\u015bci")),l.a.createElement(J.a.Label,{className:"Filter_label"},"Data Przyjazdu"),l.a.createElement(J.a.Row,null,l.a.createElement(J.a.Group,{as:P.a,controlId:"exampleForm.ControlSelect1"},l.a.createElement(J.a.Control,{as:"select",onChange:function(e){var a=e.target.value;v(a)},value:h},l.a.createElement("option",{value:""},"dzie\u0144"),l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"),l.a.createElement("option",null,"6"),l.a.createElement("option",null,"7"),l.a.createElement("option",null,"8"),l.a.createElement("option",null,"9"),l.a.createElement("option",null,"10"),l.a.createElement("option",null,"11"),l.a.createElement("option",null,"12"),l.a.createElement("option",null,"13"),l.a.createElement("option",null,"14"),l.a.createElement("option",null,"15"),l.a.createElement("option",null,"16"),l.a.createElement("option",null,"17"),l.a.createElement("option",null,"18"),l.a.createElement("option",null,"19"),l.a.createElement("option",null,"20"),l.a.createElement("option",null,"21"),l.a.createElement("option",null,"22"),l.a.createElement("option",null,"23"),l.a.createElement("option",null,"24"),l.a.createElement("option",null,"25"),l.a.createElement("option",null,"26"),l.a.createElement("option",null,"27"),l.a.createElement("option",null,"28"),l.a.createElement("option",null,"29"),l.a.createElement("option",null,"30"),l.a.createElement("option",null,"31"))),l.a.createElement(J.a.Group,{as:P.a,controlId:"exampleForm.ControlSelect2"},l.a.createElement(J.a.Control,{as:"select",onChange:function(e){var a=e.target.value;w(a)},value:j},l.a.createElement("option",{value:""},"miesi\u0105c"),l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"),l.a.createElement("option",null,"6"),l.a.createElement("option",null,"7"),l.a.createElement("option",null,"8"),l.a.createElement("option",null,"9"),l.a.createElement("option",null,"10"),l.a.createElement("option",null,"11"),l.a.createElement("option",null,"12")))),l.a.createElement(J.a.Row,null,l.a.createElement(J.a.Group,{as:P.a,controlId:"exampleForm.ControlSelect3"},l.a.createElement(J.a.Control,{as:"select",onChange:function(e){var a=e.target.value;z(a)},value:_},l.a.createElement("option",{value:""},"rok"),l.a.createElement("option",null,"2019"),l.a.createElement("option",null,"2020")))),l.a.createElement(J.a.Group,{controlId:"formBasicPassword"},l.a.createElement(J.a.Label,{className:"Filter_label"},"D\u0142ugo\u015b\u0107 pobytu"),l.a.createElement(J.a.Control,{as:"select",onChange:function(e){var a=parseInt(e.target.value);B(a)},value:I},l.a.createElement("option",null,"Wybierz d\u0142ugo\u015b\u0107 pobytu"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"5"))),l.a.createElement(J.a.Group,{controlId:"formBasicPassword"},l.a.createElement(J.a.Label,{className:"Filter_label"},"Liczba Go\u015bci"),l.a.createElement(J.a.Control,{as:"select",onChange:function(e){var a=e.target.value;Z(a)},value:U},l.a.createElement("option",null,"Wybierz ilo\u015b\u0107 go\u015bci"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"4"))),l.a.createElement("fieldset",null,l.a.createElement(J.a.Label,{className:"Filter_label"},"Typ obiektu"),l.a.createElement(J.a.Group,{as:S.a},l.a.createElement(P.a,{sm:6},[["Apartamenty",201],["Hotele",204],["Pensjonaty",216],["Pensjonaty B&B",208],["Hostele",203],["Domy Wakacyjne",220]].map(function(e){return l.a.createElement(J.a.Check,{className:"Filter_radioButton",type:"radio",label:e[0],name:"radioButton",id:e[1],onChange:Q,key:e[1],checked:q===e[1]?"checked":""})})),l.a.createElement(P.a,{sm:6},[["Kwatery Prywatne",222],["Kempingi",214],["Motele",205],["Gospodarstwa Agroturystyczne",210],["Wille",213]].map(function(e){return l.a.createElement(J.a.Check,{className:"Filter_radioButton",type:"radio",label:e[0],name:"radioButton",id:e[1],onChange:Q,key:e[1],checked:q===e[1]?"checked":""})})))),l.a.createElement(J.a.Row,null,l.a.createElement(J.a.Group,{as:P.a},l.a.createElement(E.a,{variant:"primary",type:"submit",className:"button"},"Szukaj")),l.a.createElement(J.a.Group,{as:P.a},l.a.createElement(E.a,{variant:"danger",onClick:function(e){e.preventDefault(),p("");var a=JSON.parse(localStorage.getItem("time-bookfaster"));v(a.day),w(a.month),z(a.year),B(3),D(s.place),r({name:"",place:s.place,interval:3,date:"".concat(a.year,"-").concat(a.month,"-").concat(a.day),accommodation_type:0,numberOfGuest:"2"}),document.getElementById("myForm").reset()},className:"button"},"Wyczy\u015b\u0107")))))}),be=(t(149),function(e){var a=0;if(0!==e.length){for(var t=0;t<e.length;t++)a+=parseInt(e[t].price,10);var n=e.length;return Math.round(a/n)}return 0}),ge=function(e){var a=0;if(0!==e.length){a=parseInt(e[0].price,10);for(var t=1;t<e.length;t++)a>e[t].price&&(a=parseInt(e[t].price,10))}return a},fe=function(e){var a=0;if(0!==e.length){a=parseInt(e[0].price,10);for(var t=1;t<e.length;t++)a<e[t].price&&(a=parseInt(e[t].price,10))}return a},he=function(e){return e.length>0?e.length:0},ve=function(e,a){if(e.length>0){for(var t=e,n=t.length,l=0,r=0;r<n;r++)l+=t[r].interval;return l/=n,Number.isInteger(l)?Math.round(a/l):"Ustal interwa\u0142"}},ye=function(e){var a=be(e.hotels),t=he(e.hotels),r=ge(e.hotels),o=fe(e.hotels),c=ve(e.hotels,a);return l.a.createElement(n.Fragment,null,l.a.createElement("button",{className:"Filter_closeClick",onClick:function(){"none"===document.getElementById("Stats").style.display?document.getElementById("Stats").style.display="block":document.getElementById("Stats").style.display="none"}},l.a.createElement("i",{className:"far fa-caret-square-right Filter_close"})),l.a.createElement(x.a,{className:"text-left",id:"Stats"},l.a.createElement(S.a,{className:"my-3 mx-1 row_number"},l.a.createElement(P.a,{lg:8,className:"stat_desc p-0"},"\u015arednia cena:"," "),l.a.createElement(P.a,{lg:4,className:"numbers p-0"},a)),l.a.createElement(S.a,{className:"my-3 mx-1 row_number"},l.a.createElement(P.a,{lg:8,className:"stat_desc p-0"},"Liczba obiekt\xf3w:"," "),l.a.createElement(P.a,{lg:4,className:"numbers  p-0"},t)),l.a.createElement(S.a,{className:"my-3 mx-1 row_number"},l.a.createElement(P.a,{lg:8,className:"stat_desc p-0"},"Cena najmniejsza:"," "),l.a.createElement(P.a,{lg:4,className:"numbers p-0"},r)),l.a.createElement(S.a,{className:"my-3 mx-1 row_number"},l.a.createElement(P.a,{lg:8,className:"stat_desc p-0"},"Cena najwi\u0119ksza:"," "),l.a.createElement(P.a,{lg:4,className:"numbers p-0"},o)),l.a.createElement(S.a,{className:"my-3 mx-1 row_number"},l.a.createElement(P.a,{lg:8,className:"stat_desc p-0"},"Cena za noc:"," "),l.a.createElement(P.a,{lg:4,className:"numbers p-0"},c))))},Ne=(t(150),function(e){var a=Object(n.useContext)(Ue),t=Object(c.a)(a,1)[0];return l.a.createElement(x.a,{fluid:!0,className:"desc_container"},l.a.createElement(S.a,{className:"my-3 titles "},l.a.createElement(P.a,{className:"m-0 p-0 desc_title",md:3,onClick:function(){return e.sort("nazwa")}},l.a.createElement("p",null,l.a.createElement("strong",{className:"text_desc"},"Nazwa obiektu"))),l.a.createElement(P.a,{className:"m-0 p-0 desc_title",md:2,onClick:function(){return e.sort("cena")}},l.a.createElement("p",null,l.a.createElement("strong",{className:"text_desc"},"Cena"))),l.a.createElement(P.a,{className:"m-0 p-0 desc_title",md:2,onClick:function(){return e.sort("miejscowo\u015b\u0107")}},l.a.createElement("p",null,l.a.createElement("strong",{className:"text_desc"},"Miejscowo\u015b\u0107"))),l.a.createElement(P.a,{className:"m-0 p-0 desc_title",md:2,onClick:function(){return e.sort("data przyjazdu")}},l.a.createElement("p",null,l.a.createElement("strong",{className:"text_desc"},"Data przyjazdu"))),t.length>0?l.a.createElement(P.a,{className:"m-0 p-0 desc_title",md:2,onClick:function(){return e.sort("cena")}},l.a.createElement("div",null,l.a.createElement("strong",{className:"text_desc"},"R\xf3\u017cnica"))):l.a.createElement(P.a,{className:"m-0 p-0 desc_title",md:2,onClick:function(){return e.sort("data wyjazdu")}},l.a.createElement("p",null,l.a.createElement("strong",{className:"text_desc"},"Data wyjazdu"))),l.a.createElement(P.a,{className:"m-0 p-0 desc_title",md:1,onClick:function(){return e.sort("dni")}},l.a.createElement("p",null,l.a.createElement("strong",{className:"text_desc"},"Dni")))))}),je=t(37),we=t.n(je),ke=(t(151),0),Oe=function e(a,t){var n=[];switch(void 0===e.turn&&(e.turn=1),e.turn=ke=-e.turn,a){case"nazwa":n=t.sort(_e);break;case"cena":n=t.sort(ze);break;case"miejscowo\u015b\u0107":n=t.sort(xe);break;case"data przyjazdu":n=t.sort(Ce);break;case"data wyjazdu":n=t.sort(Se);break;case"dni":n=t.sort(Ie);break;default:n=t}return n},_e=function(e,a){return e.name<a.name?ke:e.name>a.name?-ke:0},ze=function(e,a){return e.price<a.price?ke:e.price>a.price?-ke:0},xe=function(e,a){return e.place<a.place?ke:e.place>a.place?-ke:0},Ce=function(e,a){return e.arrival<a.arrival?ke:e.arrival>a.arrival?-ke:0},Se=function(e,a){return e.depart<a.depart?ke:e.depart>a.depart?-ke:0},Ie=function(e,a){return e.interval<a.interval?ke:e.interval>a.interval?-ke:0},Pe=(t(152),{display:"none"}),Be={display:"block"},Fe=function(){var e=Object(n.useContext)(Ue),a=Object(c.a)(e,1)[0];return l.a.createElement(we.a,{className:"jumbo_user mt-0 mb-2 p-1",style:a.length>0?Be:Pe},a.length>0?l.a.createElement(de,{value:a[0]}):"")},Ge=t(34),Te=t.n(Ge),De=function(e){for(var a=e.numberOfHotels,t=e.hotelPerPage,n=e.changePage,r=e.currentPage,o=[],c=function(e){o.push(l.a.createElement(Te.a.Item,{className:"mt-2",key:e,active:e===r,onClick:function(){return n((e-1)*t,e*t,e)}},e))},s=1;s<Math.ceil(a/t+1);s++)c(s);var m=(o.length-1)*t;return l.a.createElement(Te.a,null,l.a.createElement(Te.a.First,{className:"mt-2",onClick:function(){return n(0,t,1)}}),l.a.createElement(Te.a.Prev,{className:"mt-2",onClick:function(){return n((r-2)*t,(r-1)*t,r-1)}}),o.filter(function(e){return Math.abs(e.key-r)<2}),l.a.createElement(Te.a.Next,{className:"mt-2",onClick:function(){return n(r*t,(r+1)*t,r+1)}}),l.a.createElement(Te.a.Last,{className:"mt-2",onClick:function(){return n(m,a,o.length)}}))},He=(t(154),function(){return l.a.createElement("div",{className:"NoHotel_board"},"Nie znaleziono hoteli pasuj\u0105cych do podanych wymaga\u0144")}),Le=function(e){function a(e){var t;Object(f.a)(this,a),(t=Object(ie.a)(this,Object(ue.a)(a).call(this,e))).setDisplayed=function(e){var a=t.state;a.displayedHotels=e,a.currentPage=1,a.indexOfFirst=0,a.indexOfLast=10,t.setState(a)},t.changePage=function(e,a,n){var l=t.state;e<t.state.displayedHotels.length&&e>=0&&(l.currentPage=n,l.indexOfFirst=e,l.indexOfLast=a,t.setState(l))},t.sort=function(e){var a=Oe(e,t.state.displayedHotels),n=t.state.displayedHotels;n.displayedHotels=a,t.setState(n)};var n=e.hotels,l=n.length<10?n.length:10;return t.state={displayedHotels:n,currentPage:1,indexOfFirst:0,indexOfLast:l},t}return Object(pe.a)(a,e),Object(me.a)(a,[{key:"componentDidUpdate",value:function(e){if(e!==this.props){var a=this.props.hotels;this.setState({displayedHotels:a,currentPage:1,indexOfFirst:0,indexOfLast:10})}}},{key:"render",value:function(){return l.a.createElement(x.a,{fluid:!0,className:"mt-3"},l.a.createElement(S.a,{className:""},l.a.createElement(P.a,{lg:3,className:"m-0 filter_and_statistics"},l.a.createElement(we.a,{className:"filter_jumbotron py-3"},l.a.createElement(Ee,null)),l.a.createElement(we.a,{className:"statistic_jumbotron py-3"},this.state.displayedHotels?l.a.createElement(ye,{hotels:this.state.displayedHotels}):"")),l.a.createElement(P.a,{lg:9},l.a.createElement("div",{className:"date_field_box"},l.a.createElement(Fe,{userHotel:this.props.userHotel}),l.a.createElement(we.a,{className:"m-0 p-1 data_field"},l.a.createElement(Ne,{sort:this.sort}),this.state.displayedHotels.length>0?this.state.displayedHotels.slice(this.state.indexOfFirst,this.state.indexOfLast).map(function(e){return l.a.createElement(de,{value:e,key:e._id})}):l.a.createElement(He,null)),l.a.createElement(De,{numberOfHotels:this.state.displayedHotels.length,hotelPerPage:10,changePage:this.changePage,currentPage:this.state.currentPage})))))}}]),a}(l.a.Component),We=(t(155),function(){return l.a.createElement("div",{className:"loader_box"},l.a.createElement("div",{className:"loader_square"}),l.a.createElement("div",{className:"loader_text"},"Trwa \u0142adowanie"))});function Ae(){var e=Object(re.a)(["\n  query Hotel(\n    $name: String!\n    $place: String!\n    $date: String!\n    $interval: Int!\n    $accommodation_type: Int!\n    $numberOfGuest: String!\n  ) {\n    hotel(\n      name: $name\n      place: $place\n      arrival: $date\n      interval: $interval\n      accommodation_type: $accommodation_type\n      number_of_guests: $numberOfGuest\n    ) {\n      _id\n      name\n      arrival\n      departure\n      place\n      price\n      interval\n      accommodation_type\n      number_of_guests\n    }\n  }\n"]);return Ae=function(){return e},e}var Me=se()(Ae()),Re=Object(n.createContext)(),Ue=Object(n.createContext)(),Je=function(){var e=$e(),a=Object(n.useState)({name:"",place:"",interval:3,date:"".concat(e.year,"-").concat(e.month,"-").concat(e.day),accommodation_type:0,numberOfGuest:"2"}),t=Object(c.a)(a,2),r=t[0],o=t[1],s=r.name,m=r.place,i=r.date,u=r.interval,p=r.accommodation_type,d=r.numberOfGuest,E=Object(n.useContext)(b),g=Object(c.a)(E,3)[2],f=Object(oe.a)(Me,{variables:{name:s,place:m,date:i,interval:u,accommodation_type:p,numberOfGuest:d}}),h=f.loading,v=f.error,y=f.data;if(h)return l.a.createElement(We,null);if(v&&console.log("Query Error",v),y){var N=Ze(y.hotel,g.hotel);return l.a.createElement(Ue.Provider,{value:[N[1]]},l.a.createElement(Re.Provider,{value:[r,o]},l.a.createElement(Le,{hotels:N[0],userHotel:N[1]})))}return l.a.createElement("div",null)},Ze=function(e,a){var t=[],n=[];return e.length>0&&(n=e.filter(function(e){return e.name.trim()!==a}),t=e.filter(function(e){return e.name.trim()===a})),[n,t]},$e=function(){var e=localStorage.getItem("time-bookfaster");return JSON.parse(e)},Ke=t(93),qe=t.n(Ke),Ye=function(){return qe.a.get("https://cors-anywhere.herokuapp.com/http://worldclockapi.com/api/json/cet/now?callback=mycallback").then(function(e){if(null!==localStorage.getItem("time-bookfaster")){var a=new Date(e.data.currentDateTime),t=JSON.parse(localStorage.getItem("time-bookfaster"));t.year===a.getFullYear()&&t.month===a.getMonth()+1&&t.day===a.getDate()||localStorage.setItem("time-bookfaster",JSON.stringify({year:a.getFullYear(),month:a.getMonth()+1,day:a.getDate()}))}else{var n=new Date(e.data.currentDateTime);localStorage.setItem("time-bookfaster",JSON.stringify({year:n.getFullYear(),month:n.getMonth()+1,day:n.getDate()}))}}),l.a.createElement("div",null)},Qe=new ne.a({uri:"http://localhost:4000/graphql"});var Ve=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(i.a,null,l.a.createElement(Ye,null),l.a.createElement(g,null,l.a.createElement(_.d,null,l.a.createElement(_.b,{path:"/",component:ae})),l.a.createElement(w,null,l.a.createElement(_.d,null,l.a.createElement(_.b,{path:"/login",component:$}),l.a.createElement(_.b,{path:"/Register",component:Q}),l.a.createElement(_.b,{path:"/PasswordReset",component:te}),l.a.createElement(_.b,{path:"/",component:O})),l.a.createElement(_.d,null,l.a.createElement(_.b,{path:"/",exact:!0,component:R}),l.a.createElement(ee,{path:"/option",component:Z}),l.a.createElement(le.a,{client:Qe},l.a.createElement(ee,{path:"/compare",component:Je})),l.a.createElement(_.b,{path:"/c",component:R}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(Ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},67:function(e,a,t){},80:function(e,a,t){e.exports=t.p+"static/media/dane-mini.96cb4a2c.png"},81:function(e,a,t){e.exports=t.p+"static/media/dane-maxi.9a21bd82.png"},82:function(e,a,t){e.exports=t.p+"static/media/wyszukiwarka.20f77246.png"},83:function(e,a,t){e.exports=t.p+"static/media/Statystyki.b9c42281.png"},84:function(e,a,t){e.exports=t.p+"static/media/booking.e8931ac3.png"},98:function(e,a,t){e.exports=t(174)}},[[98,1,2]]]);
//# sourceMappingURL=main.9cee8fe4.chunk.js.map