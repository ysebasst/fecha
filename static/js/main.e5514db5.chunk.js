(this.webpackJsonpfecha=this.webpackJsonpfecha||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(0),s=c.n(a),o=c(4),r=c.n(o),i=(c(10),c(11),c(2));var u=function(){var e=Object(a.useState)("Lunes"),t=Object(i.a)(e,2),c=t[0],s=t[1],o=Object(a.useState)("1 Enero 2000"),r=Object(i.a)(o,2),u=r[0],b=r[1],d=Object(a.useState)("00:00:00"),g=Object(i.a)(d,2),j=g[0],l=g[1],h=Object(a.useRef)(),O=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"],f=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];function v(){var e=new Date,t=O[e.getDay()],c=e.getDate()<10?"0".concat(e.getDate()):e.getDate(),n=f[e.getMonth()],a=e.getFullYear(),o=e.getHours()>12?e.getHours()-12:e.getHours();o=o<10?"0".concat(o):o;var r=e.getMinutes()<10?"0".concat(e.getMinutes()):e.getMinutes(),i=e.getSeconds()<10?"0".concat(e.getSeconds()):e.getSeconds();s("".concat(t)),b("".concat(c," ").concat(n," ").concat(a)),l("".concat(o,":").concat(r,":").concat(i)),0===e.getMinutes()&&e.getSeconds()%2===0?h.current.classList.add("en-punto"):h.current.classList.remove("en-punto")}return Object(a.useEffect)((function(){setInterval(v,500)})),Object(n.jsxs)("div",{className:"content fecha-hora",ref:h,children:[Object(n.jsx)("div",{className:"dia-semana",children:c}),Object(n.jsx)("div",{className:"fecha",children:u}),Object(n.jsx)("div",{className:"hora",children:j})]})};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(u,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.e5514db5.chunk.js.map