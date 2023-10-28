(this["webpackJsonpdrawing-react-canvas"]=this["webpackJsonpdrawing-react-canvas"]||[]).push([[0],{101:function(e,t,n){},214:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(90),o=n.n(c),l=(n(101),n(12)),i=n(57),s=n(95),u=(n(86),n(23)),m=(n(89),n(38)),d=function(){var e=u.a.firestore(),t=Object(a.useState)(!1),n=Object(l.a)(t,2),c=n[0],o=n[1],d=Object(a.useState)("handdrawn"),f=Object(l.a)(d,2),h=f[0],g=f[1],v=Object(a.useState)("#000000"),b=Object(l.a)(v,2),p=b[0],E=b[1],y=Object(a.useState)("empty"),w=Object(l.a)(y,2),j=w[0],N=w[1],O=Object(a.useState)(),C=Object(l.a)(O,2),k=C[0],S=C[1],x=Object(a.useState)(""),I=Object(l.a)(x,2),z=I[0],D=I[1],R=Object(a.useState)(""),L=Object(l.a)(R,2),M=L[0],T=L[1],Y=Object(a.useState)([0,0]),F=Object(l.a)(Y,2),A=Object(l.a)(F[0],2),G=A[0],P=A[1],U=F[1],X=Object(a.useRef)(),B=Object(a.useRef)();var q=function(e){var t=e.nativeEvent;if(c){var n=t.offsetX,a=t.offsetY;console.log(n,a),"handdrawn"==h&&(B.current.lineTo(n,a),B.current.stroke())}};Object(a.useEffect)((function(){!function(){var e=X.current;e.width=500,e.height=500,e.style.backgroundColor="lightblue";var t=e.getContext("2d");t.lineWidth=3,B.current=t;var n=new Image;n.src=k,n.onload=function(){t.drawImage(n,0,0,500,500)}}()}),[k]);var J,K=Object(a.useState)(),W=Object(l.a)(K,2),H=W[0],V=W[1];return document.body.addEventListener("touchstart",(function(e){var t=X.current;e.target==t&&(e.preventDefault(),J=e.touches[0].clientX,e.touches[0].clientY,Object(i.a)("isDrawing"),q(J))}),!1),document.body.addEventListener("touchend",(function(e){var t=X.current;e.target==t&&(e.preventDefault(),Object(i.a)("isDrawing"))}),!1),document.body.addEventListener("touchmove",(function(e){var t=X.current;e.target==t&&(e.preventDefault(),J=e.touches[0].clientX,e.touches[0].clientY,q(J))}),!1),Object(a.useEffect)((function(){e.collection("images").onSnapshot((function(e){V(e.docs.map((function(e){return{id:e.id,url:e.data().url,naziv:e.data().naziv}})))}))}),[]),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("div",{className:"row align-items-end",style:{backgroundColor:"lightblue",border:"2px solid black",borderRadius:5}},r.a.createElement("div",{className:"form-group col-12 col-md-6 col-sm-12 col-xs-12"},r.a.createElement(s.a,{color:p,onChangeComplete:function(e){E(e.hex)}})),r.a.createElement("div",{className:"form-group col-12 col-md-6 col-sm-12 col-xs-12"},r.a.createElement("form",{className:"form-inline"},r.a.createElement("input",{type:"text",className:"form-control",style:{width:"30%"},value:M,onChange:function(e){return T(e.target.value)},required:!0}),r.a.createElement("button",{className:"form-control",style:{width:"30%"},onClick:function(t){t.preventDefault(),e.collection("images").onSnapshot((function(e){V(e.docs.map((function(e){return{id:e.id,url:e.data().url}})))}));var n=X.current.getContext("2d");B.current=n;for(var a=new Image,r=0;r<H.length;r++)H[r].naziv==M&&(a.src=H[r].url,T(""));a.onload=function(){n.drawImage(a,0,0,500,500)}}},"Get")),r.a.createElement("input",{type:"file",style:{color:"transparent"},onChange:function(e){void 0!=e.target.files[0]&&S(URL.createObjectURL(e.target.files[0]))}}),r.a.createElement(m.b,{to:"/galery"},r.a.createElement("button",{className:"form-control",style:{width:"40%"}},"Gallery"))),r.a.createElement("div",{className:"form-group col-12"},r.a.createElement("form",{className:"form-inline"},r.a.createElement("input",{type:"text",className:"form-control",style:{width:"50%"},value:z,onChange:function(e){return D(e.target.value)},required:!0}),r.a.createElement("button",{className:"form-control",onClick:function(t){t.preventDefault();for(var n=X.current,a=0;a<H.length;a++)if(console.log(H[a].naziv,z),H[a].naziv==z)return D(""),alert("Ime je zauzeto"),0;e.collection("images").add({url:n.toDataURL("image/png"),naziv:z}).then((function(e){console.log("Document written with ID: ",e.id)})).catch((function(e){console.error("Error adding document: ",e)})),D("")},style:{width:"30%"}},"Save")),r.a.createElement("form",{className:"form-inline"},r.a.createElement("label",{className:"form-control"},"Selection:"),r.a.createElement("label",{className:"form-control",htmlFor:"selection"},"Hand drawn"),r.a.createElement("input",{className:"form-control",type:"radio",id:"selection1",checked:"handdrawn"===h,onChange:function(){return g("handdrawn")}}),r.a.createElement("label",{className:"form-control",htmlFor:"selection"},"Line"),r.a.createElement("input",{className:"form-control",type:"radio",id:"selection2",checked:"line"===h,onChange:function(){return g("line")}}),r.a.createElement("label",{className:"form-control",htmlFor:"selection"},"Rectangle"),r.a.createElement("input",{className:"form-control",type:"radio",id:"selection3",checked:"rectangle"===h,onChange:function(){return g("rectangle")}}),r.a.createElement("label",{className:"form-control",htmlFor:"selection"},"Circle"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{className:"form-control",type:"radio",id:"selection4",checked:"circle"===h,onChange:function(){return g("circle")}})),r.a.createElement("form",{className:"form-inline"},r.a.createElement("label",{className:"form-control"},"Style:"),r.a.createElement("label",{className:"form-control",htmlFor:"style"},"Full"),r.a.createElement("input",{className:"form-control",type:"radio",id:"style1",checked:"full"===j,onChange:function(){return N("full")}}),r.a.createElement("label",{className:"form-control",htmlFor:"style"},"Empty"),r.a.createElement("input",{className:"form-control",type:"radio",id:"style2",checked:"empty"===j,onChange:function(){return N("empty")}}),r.a.createElement("button",{className:"form-control",onClick:function(e){e.preventDefault();var t=X.current,n=t.getContext("2d"),a=document.createElement("canvas");a.width=t.width,a.height=t.height,a.getContext("2d").drawImage(t,0,0),n.clearRect(0,0,t.width,t.height),n.translate(250,250);var r=.5*Math.PI;n.rotate(r),n.drawImage(a,-t.width/2,-t.height/2),n.rotate(-r),n.translate(-t.width/2,-t.height/2)},style:{width:"30%"}},"Rotate")))),r.a.createElement("br",null),r.a.createElement("canvas",{onMouseDown:function(e){var t=e.nativeEvent;X.current.getContext("2d").strokeStyle=p;var n=t.offsetX,a=t.offsetY;U([n,a]),B.current.beginPath(),"line"==h&&B.current.moveTo(n,a),o(!0)},onMouseUp:function(e){var t=e.nativeEvent,n=t.offsetX,a=t.offsetY;"line"==h&&(B.current.moveTo(G,P),B.current.lineTo(n,a),B.current.stroke()),"rectangle"==h&&B.current.rect(G,P,n-G,a-P),"circle"==h&&B.current.arc(G,P,Math.sqrt((n-G)*(n-G)+(a-P)*(a-P)),0,2*Math.PI),"full"==j?(B.current.fillStyle=p,B.current.fill()):B.current.stroke(),B.current.closePath(),o(!1)},onMouseMove:q,ref:X}),r.a.createElement("button",{className:"form-control",onClick:function(){var e=X.current.getContext("2d");e.fillStyle="lightblue",e.fillRect(0,0,500,500)},style:{width:"10%"}},"Clear"))},f=n(7),h=function(){var e=u.a.firestore(),t=Object(a.useState)([]),n=Object(l.a)(t,2),c=n[0],o=n[1];return Object(a.useEffect)((function(){e.collection("images").onSnapshot((function(e){o(e.docs.map((function(e){return{id:e.id,url:e.data().url,naziv:e.data().naziv}})))}))}),[]),r.a.createElement("div",null,r.a.createElement("h1",{style:{textAlign:"center"}},"GALERY"),c.map((function(e){return r.a.createElement("div",{style:{margin:10,padding:10,border:"solid black 1px",display:"inline-block",borderRadius:"30px"}},r.a.createElement("p",null,e.naziv),r.a.createElement("img",{src:e.url,width:"500",height:"500",alt:""}))})))};var g=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(m.a,null,r.a.createElement(f.c,null,r.a.createElement(f.a,{path:"/",element:r.a.createElement(d,null)}),r.a.createElement(f.a,{path:"/galery",element:r.a.createElement(h,null)}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.initializeApp({apiKey:"AIzaSyBxAYVIJMzGSREaKbuxlTfzTEhLOYTS8Uc",authDomain:"popravni-858bb.firebaseapp.com",projectId:"popravni-858bb",storageBucket:"popravni-858bb.appspot.com",messagingSenderId:"301054610390",appId:"1:301054610390:web:f706b41e8534961c597277",measurementId:"G-971PKE7T8T"}),o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},96:function(e,t,n){e.exports=n(214)}},[[96,1,2]]]);
//# sourceMappingURL=main.d4f29769.chunk.js.map