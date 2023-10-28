(this["webpackJsonpdrawing-react-canvas"]=this["webpackJsonpdrawing-react-canvas"]||[]).push([[0],{100:function(e,t,a){},213:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(89),c=a.n(l),o=(a(100),a(12)),i=a(94),s=(a(85),a(23)),m=(a(88),a(38)),u=function(){var e=s.a.firestore(),t=Object(n.useState)(!1),a=Object(o.a)(t,2),l=a[0],c=a[1],u=Object(n.useState)("handdrawn"),d=Object(o.a)(u,2),f=d[0],h=d[1],g=Object(n.useState)("#000000"),p=Object(o.a)(g,2),b=p[0],E=p[1],v=Object(n.useState)("empty"),w=Object(o.a)(v,2),y=w[0],N=w[1],j=Object(n.useState)(),O=Object(o.a)(j,2),C=O[0],k=O[1],S=Object(n.useState)(""),x=Object(o.a)(S,2),I=x[0],z=x[1],R=Object(n.useState)(""),M=Object(o.a)(R,2),T=M[0],D=M[1],F=Object(n.useState)([0,0]),L=Object(o.a)(F,2),Y=Object(o.a)(L[0],2),A=Y[0],G=Y[1],P=L[1],U=Object(n.useRef)(),B=Object(n.useRef)();Object(n.useEffect)((function(){!function(){var e=U.current;e.width=500,e.height=500,e.style.backgroundColor="lightblue";var t=e.getContext("2d");t.lineWidth=3,B.current=t;var a=new Image;a.src=C,a.onload=function(){t.drawImage(a,0,0,500,500)}}()}),[C]);var q=Object(n.useState)(),J=Object(o.a)(q,2),K=J[0],W=J[1];return Object(n.useEffect)((function(){e.collection("images").onSnapshot((function(e){W(e.docs.map((function(e){return{id:e.id,url:e.data().url,naziv:e.data().naziv}})))}))}),[]),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("div",{className:"row align-items-end",style:{backgroundColor:"lightblue",border:"2px solid black",borderRadius:5}},r.a.createElement("div",{className:"form-group col-12 col-md-6 col-sm-12 col-xs-12"},r.a.createElement(i.a,{color:b,onChangeComplete:function(e){E(e.hex)}})),r.a.createElement("div",{className:"form-group col-12 col-md-6 col-sm-12 col-xs-12"},r.a.createElement("form",{className:"form-inline"},r.a.createElement("input",{type:"text",className:"form-control",style:{width:"30%"},value:T,onChange:function(e){return D(e.target.value)},required:!0}),r.a.createElement("button",{className:"form-control",style:{width:"30%"},onClick:function(t){t.preventDefault(),e.collection("images").onSnapshot((function(e){W(e.docs.map((function(e){return{id:e.id,url:e.data().url}})))}));var a=U.current.getContext("2d");B.current=a;for(var n=new Image,r=0;r<K.length;r++)K[r].naziv==T&&(n.src=K[r].url,D(""));n.onload=function(){a.drawImage(n,0,0,500,500)}}},"Get")),r.a.createElement("input",{type:"file",style:{color:"transparent"},onChange:function(e){void 0!=e.target.files[0]&&k(URL.createObjectURL(e.target.files[0]))}}),r.a.createElement(m.b,{to:"/galery"},r.a.createElement("button",{className:"form-control",style:{width:"40%"}},"Gallery"))),r.a.createElement("div",{className:"form-group col-12"},r.a.createElement("form",{className:"form-inline"},r.a.createElement("input",{type:"text",className:"form-control",style:{width:"50%"},value:I,onChange:function(e){return z(e.target.value)},required:!0}),r.a.createElement("button",{className:"form-control",onClick:function(t){t.preventDefault();for(var a=U.current,n=0;n<K.length;n++)if(console.log(K[n].naziv,I),K[n].naziv==I)return z(""),alert("Ime je zauzeto"),0;e.collection("images").add({url:a.toDataURL("image/png"),naziv:I}).then((function(e){console.log("Document written with ID: ",e.id)})).catch((function(e){console.error("Error adding document: ",e)})),z("")},style:{width:"30%"}},"Save")),r.a.createElement("form",{className:"form-inline"},r.a.createElement("label",{className:"form-control"},"Selection:"),r.a.createElement("label",{className:"form-control",htmlFor:"selection"},"Hand drawn"),r.a.createElement("input",{className:"form-control",type:"radio",id:"selection1",checked:"handdrawn"===f,onChange:function(){return h("handdrawn")}}),r.a.createElement("label",{className:"form-control",htmlFor:"selection"},"Line"),r.a.createElement("input",{className:"form-control",type:"radio",id:"selection2",checked:"line"===f,onChange:function(){return h("line")}}),r.a.createElement("label",{className:"form-control",htmlFor:"selection"},"Rectangle"),r.a.createElement("input",{className:"form-control",type:"radio",id:"selection3",checked:"rectangle"===f,onChange:function(){return h("rectangle")}}),r.a.createElement("label",{className:"form-control",htmlFor:"selection"},"Circle"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{className:"form-control",type:"radio",id:"selection4",checked:"circle"===f,onChange:function(){return h("circle")}})),r.a.createElement("form",{className:"form-inline"},r.a.createElement("label",{className:"form-control"},"Style:"),r.a.createElement("label",{className:"form-control",htmlFor:"style"},"Full"),r.a.createElement("input",{className:"form-control",type:"radio",id:"style1",checked:"full"===y,onChange:function(){return N("full")}}),r.a.createElement("label",{className:"form-control",htmlFor:"style"},"Empty"),r.a.createElement("input",{className:"form-control",type:"radio",id:"style2",checked:"empty"===y,onChange:function(){return N("empty")}}),r.a.createElement("button",{className:"form-control",onClick:function(e){e.preventDefault();var t=U.current,a=t.getContext("2d"),n=document.createElement("canvas");n.width=t.width,n.height=t.height,n.getContext("2d").drawImage(t,0,0),a.clearRect(0,0,t.width,t.height),a.translate(250,250);var r=.5*Math.PI;a.rotate(r),a.drawImage(n,-t.width/2,-t.height/2),a.rotate(-r),a.translate(-t.width/2,-t.height/2)},style:{width:"30%"}},"Rotate")))),r.a.createElement("br",null),r.a.createElement("canvas",{onMouseDown:function(e){var t=e.nativeEvent;U.current.getContext("2d").strokeStyle=b;var a=t.offsetX,n=t.offsetY;P([a,n]),B.current.beginPath(),"line"==f&&B.current.moveTo(a,n),c(!0)},onMouseUp:function(e){var t=e.nativeEvent,a=t.offsetX,n=t.offsetY;"line"==f&&(B.current.moveTo(A,G),B.current.lineTo(a,n),B.current.stroke()),"rectangle"==f&&B.current.rect(A,G,a-A,n-G),"circle"==f&&B.current.arc(A,G,Math.sqrt((a-A)*(a-A)+(n-G)*(n-G)),0,2*Math.PI),"full"==y?(B.current.fillStyle=b,B.current.fill()):B.current.stroke(),B.current.closePath(),c(!1)},onMouseMove:function(e){var t=e.nativeEvent;if(l){var a=t.offsetX,n=t.offsetY;console.log(a,n),"handdrawn"==f&&(B.current.lineTo(a,n),B.current.stroke())}},ref:U}),r.a.createElement("button",{className:"form-control",onClick:function(){var e=U.current.getContext("2d");e.fillStyle="lightblue",e.fillRect(0,0,500,500)},style:{width:"10%"}},"Clear"))},d=a(7),f=function(){var e=s.a.firestore(),t=Object(n.useState)([]),a=Object(o.a)(t,2),l=a[0],c=a[1];return Object(n.useEffect)((function(){e.collection("images").onSnapshot((function(e){c(e.docs.map((function(e){return{id:e.id,url:e.data().url,naziv:e.data().naziv}})))}))}),[]),r.a.createElement("div",null,r.a.createElement("h1",{style:{textAlign:"center"}},"GALERY"),l.map((function(e){return r.a.createElement("div",{style:{margin:10,padding:10,border:"solid black 1px",display:"inline-block",borderRadius:"30px"}},r.a.createElement("p",null,e.naziv),r.a.createElement("img",{src:e.url,width:"500",height:"500",alt:""}))})))};var h=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(m.a,{basename:"/drawing-app"},r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/",element:r.a.createElement(u,null)}),r.a.createElement(d.a,{path:"/galery",element:r.a.createElement(f,null)}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.initializeApp({apiKey:"AIzaSyBxAYVIJMzGSREaKbuxlTfzTEhLOYTS8Uc",authDomain:"popravni-858bb.firebaseapp.com",projectId:"popravni-858bb",storageBucket:"popravni-858bb.appspot.com",messagingSenderId:"301054610390",appId:"1:301054610390:web:f706b41e8534961c597277",measurementId:"G-971PKE7T8T"}),c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},95:function(e,t,a){e.exports=a(213)}},[[95,1,2]]]);
//# sourceMappingURL=main.ae50be3e.chunk.js.map