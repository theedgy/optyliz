(this.webpackJsonpoptyliz=this.webpackJsonpoptyliz||[]).push([[0],{24:function(n,e,t){"use strict";t.r(e);var r,a,i,c,o,s,b,d,l,u,j,g,p,f,x,O,m,h,v,w,y,S=t(0),k=t.n(S),C=t(10),P=t.n(C),E=t.p+"static/media/logo.6ce24c58.svg",T=t(4),z=t(2),F=t(3),R=F.b.div(r||(r=Object(z.a)(["\n    display: flex;\n    flex-direction: column;\n    padding: var(--generalSpacing);\n"]))),B=F.b.h2(a||(a=Object(z.a)(["\n    text-align: center;\n"]))),I=F.b.form(i||(i=Object(z.a)(["\n    display: flex;\n    justify-content: center;\n    margin-bottom: var(--generalSpacing);\n"]))),D=F.b.input(c||(c=Object(z.a)(["\n    width: 80%;\n    height: 50px;\n    margin: 20px auto 0;\n    border: 0;\n    border-bottom: 2px solid #000;\n    font-size: 20px;\n    padding: 0 var(--generalSpacing);\n    border-radius: 0;\n"]))),V=t(1),A=function(n){var e=n.setValue,t=n.value;return Object(V.jsx)(I,{children:Object(V.jsx)(D,{placeholder:"Start typing to run search",defaultValue:t,onChange:function(n){return e(n.target.value)}})})},J=F.b.article(o||(o=Object(z.a)(["\n    display: flex;\n    align-items: center;\n    border: var(--generalBorder);\n    border-radius: var(--borderRadius);\n    padding: var(--generalSpacing);\n"]))),L=F.b.a(s||(s=Object(z.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: var(--generalSpacing);\n    flex: 1;\n    color: currentColor;\n    text-decoration: none;\n    transition: color 0.2s;\n\n    &:hover {\n        color: darkred;\n    }\n"]))),N=F.b.h2(b||(b=Object(z.a)(["\n    font-size: 20px;\n    font-weight: bold;\n    margin: 0;\n    text-align: center;\n"]))),X=F.b.span(d||(d=Object(z.a)(["\n    font-size: 12px;\n    color: grey;\n"]))),M=F.b.figure(l||(l=Object(z.a)(["\n    margin: 0;\n    line-height: 0;\n    width: 150px;\n\n    @media (max-width: 767px) {\n        width: 100px;\n    }\n\n    img {\n        max-width: 100%;\n    }\n"]))),U=function(n){var e=n.item;return Object(V.jsxs)(J,{children:["N/A"!==e.Poster&&Object(V.jsx)(M,{children:Object(V.jsx)("img",{src:e.Poster,alt:e.Title})}),Object(V.jsxs)(L,{href:"https://www.imdb.com/title/".concat(e.imdbID),target:"_blank",rel:"noopener noreferrer",children:[Object(V.jsx)(N,{children:e.Title}),Object(V.jsx)(X,{children:"".concat(e.Type," (").concat(e.Year,")")})]})]})},W=F.b.div(u||(u=Object(z.a)(["\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-gap: var(--generalSpacing);\n\n    @media (max-width: 1365px) {\n        grid-template-columns: repeat(3, 1fr);\n    }\n\n    @media (max-width: 1023px) {\n        grid-template-columns: repeat(2, 1fr);\n    }\n\n    @media (max-width: 767px) {\n        grid-template-columns: repeat(1, 1fr);\n    }\n"]))),Y=function(n){var e=n.items;return Object(V.jsx)(W,{children:e.map((function(n){return Object(V.jsx)(U,{item:n},n.imdbID)}))})},_=t(8),q=t.n(_),G=t(15),H=t(14),K=function(n){return Object.entries(n).map((function(n){return n.join("=")})).join("&")},Q=function(){var n=Object(H.a)(q.a.mark((function n(e){var t,r;return q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(window.location.protocol,"//www.omdbapi.com"),"b508fc3",n.next=4,fetch("".concat(t,"?").concat(K(Object(G.a)({apikey:"b508fc3"},e))));case 4:if((r=n.sent).ok){n.next=8;break}throw console.log(r.json()),new Error("Response not successful: ".concat(r));case 8:return n.next=10,r.json();case 10:return n.abrupt("return",n.sent);case 11:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),Z=Object(F.c)(j||(j=Object(z.a)(["\n    to {\n        transform: translateX(100%);\n    }\n"]))),$=F.b.div(g||(g=Object(z.a)(["\n    display: inline-block;\n    height: 200px;\n    position: relative;\n    overflow: hidden;\n    background-color: #dddbdd;\n    border-radius: var(--borderRadius);\n    margin-bottom: var(--generalSpacing);\n\n    &::after {\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        transform: translateX(-100%);\n        background: linear-gradient(\n            90deg,\n            rgba(255, 255, 255, 0) 0,\n            rgba(255, 255, 255, 0.4) 20%,\n            rgba(255, 255, 255, 0.8) 60%,\n            rgba(255, 255, 255, 0) 100%\n        );\n        animation: "," 2s infinite;\n    }\n"])),Z),nn=F.b.button(p||(p=Object(z.a)(["\n    padding: 5px;\n    background: transparent;\n    border-radius: 5px;\n    border: var(--generalBorder);\n    margin: var(--generalSpacing);\n    cursor: pointer;\n"]))),en=function(n){var e=n.direction,t=n.disabled,r=n.onClick;return Object(V.jsx)(nn,{onClick:r,disabled:t,children:e.toUpperCase()})},tn=F.b.div(f||(f=Object(z.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: var(--generalSpacing);\n"]))),rn=F.b.span(x||(x=Object(z.a)(["\n    font-weight: bold;\n    font-size: 14px;\n"]))),an=function(n){var e=n.currentPage,t=n.onPageChange,r=n.lastPage;return Object(V.jsxs)(tn,{children:[Object(V.jsx)(en,{direction:"prev",onClick:function(){return t("prev")},disabled:1===e}),Object(V.jsx)(rn,{children:e}),Object(V.jsx)(en,{direction:"next",onClick:function(){return t("next")},disabled:r})]})},cn=function(){var n=Object(S.useState)([]),e=Object(T.a)(n,2),t=e[0],r=e[1],a=Object(S.useState)(!1),i=Object(T.a)(a,2),c=i[0],o=i[1],s=Object(S.useState)(!1),b=Object(T.a)(s,2),d=b[0],l=b[1],u=Object(S.useState)(""),j=Object(T.a)(u,2),g=j[0],p=j[1],f=Object(S.useState)(1),x=Object(T.a)(f,2),O=x[0],m=x[1],h=Object(S.useState)(0),v=Object(T.a)(h,2),w=v[0],y=v[1],k=function(n,e){var t=Object(S.useState)(n),r=Object(T.a)(t,2),a=r[0],i=r[1];return Object(S.useEffect)((function(){var t=setTimeout((function(){return i(n)}),e||500);return function(){clearTimeout(t)}}),[n,e]),a}(g,500);return Object(S.useEffect)((function(){k||(r([]),l(!1))}),[k]),Object(S.useEffect)((function(){k&&m(1)}),[k]),Object(S.useEffect)((function(){k&&(o(!0),Q({s:k,page:O}).then((function(n){"True"===n.Response?(r(n.Search),l(!1)):(r([]),n.Error&&l(n.Error)),y(parseInt(n.totalResults,10)||0),o(!1)})))}),[k,O]),Object(V.jsxs)(R,{children:[Object(V.jsx)(A,{value:g,setValue:p}),c&&!t.length&&!d&&Object(V.jsx)($,{}),d&&Object(V.jsx)(B,{children:d}),t.length>0&&Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(Y,{items:t}),w&&w>10&&Object(V.jsx)(an,{currentPage:O,lastPage:w<=10*(O-1)+t.length,onPageChange:function(n){return m((function(e){return"next"===n?e+1:"prev"===n&&e>1?e-1:1}))}})]})]})},on=Object(F.c)(O||(O=Object(z.a)(["\n    from {\n        transform: rotate(0deg);\n    }\n    to {\n        transform: rotate(360deg);\n    }\n"]))),sn=Object(F.a)(m||(m=Object(z.a)(["\n body {\n   margin: 0;\n   padding: 0;\n   font-family: sans-serif;\n   \n   --borderRadius: 10px;\n   --generalSpacing: 15px;\n   --generalBorder: 1px solid rgba(0, 0, 0, 0.2);\n }\n"]))),bn=F.b.div(h||(h=Object(z.a)(["\n    display: grid;\n    grid-auto-rows: 50px 100% 50px;\n"]))),dn=F.b.header(v||(v=Object(z.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: baseline;\n    padding: 10px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n"]))),ln=F.b.a(w||(w=Object(z.a)(["\n    display: flex;\n    align-items: center;\n    white-space: nowrap;\n    text-decoration: none;\n    color: currentColor;\n    font-weight: bold;\n"]))),un=F.b.img(y||(y=Object(z.a)(["\n    max-width: 100%;\n    max-height: 30px;\n    animation: "," infinite 20s linear;\n"])),on);var jn=function(){return Object(V.jsxs)(bn,{children:[Object(V.jsx)(dn,{children:Object(V.jsxs)(ln,{href:"/",children:[Object(V.jsx)(un,{src:E,className:"App-logo",alt:"logo"}),"From Poland With Dev"]})}),Object(V.jsx)(cn,{})]})},gn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,25)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,i=e.getLCP,c=e.getTTFB;t(n),r(n),a(n),i(n),c(n)}))};P.a.render(Object(V.jsxs)(k.a.StrictMode,{children:[Object(V.jsx)(sn,{}),Object(V.jsx)(jn,{})]}),document.getElementById("root")),gn()}},[[24,1,2]]]);
//# sourceMappingURL=main.8175cfac.chunk.js.map