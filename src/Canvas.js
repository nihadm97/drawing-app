import React, { useRef, useState, useEffect } from "react";
import {CompactPicker} from "react-color";
import 'bootstrap/dist/css/bootstrap.min.css'
import firebase from "firebase";
import "firebase/firestore";
import {Link} from "react-router-dom"; 

export const Canvas = () => {
  let db = firebase.firestore();

  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState("handdrawn");
  const [tool1, setTool1] = useState("#000000");
  const [tool2, setTool2] = useState("empty");
  const [img, setImg] = useState();
  const [name, setName] = useState("");
  const [name1, setName1] = useState("");
  const [[x, y], coordinates] = useState([0,0]);
  const canvasRef = useRef();
  const contextRef = useRef();

  function changeColor(color){
    setTool1(color.hex);
  }
  
  const prepareCanvas = () => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight-140;
    const context = canvas.getContext("2d");
    context.lineWidth = 5;
    contextRef.current = context;
    const image = new Image();
    image.src = img
    image.onload = () => {
    context.drawImage(image, 0, 0, window.innerWidth, window.innerHeight-140);
    };
  };

  const startDrawing = ({ nativeEvent }) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.strokeStyle = tool1;
    const { offsetX, offsetY } = nativeEvent;
    coordinates([offsetX, offsetY]);
    contextRef.current.beginPath();
    if(tool=="line"){
    contextRef.current.moveTo(offsetX, offsetY);}
    setIsDrawing(true);
  };

  const finishDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    if(tool=="line"){
    contextRef.current.moveTo(x, y);
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
    }
    if(tool=="rectangle"){
    contextRef.current.rect(x, y, offsetX-x, offsetY-y);
    }
    if(tool=="circle"){
    contextRef.current.arc(x, y, Math.sqrt((offsetX-x)*(offsetX-x)+(offsetY-y)*(offsetY-y)), 0, 2 * Math.PI);
      }
    if(tool2=="full"){
    contextRef.current.fillStyle = tool1;
    contextRef.current.fill();} else
    contextRef.current.stroke();
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    console.log(offsetX, offsetY);
    if(tool=="handdrawn"){
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();}
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
  }
  useEffect(() => {
    prepareCanvas();
  }, [img]);

function addImage(e){
  e.preventDefault();
  const canvas = canvasRef.current;
  for (let i = 0; i < imageFirebase.length; i++) {
    console.log(imageFirebase[i].naziv, name);
    if(imageFirebase[i].naziv==name){
    setName("");
    alert("Ime je zauzeto");
    return 0;
    }}
  db.collection("images").add({
    url: canvas.toDataURL("image/png"),
    naziv: name
      })
        .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
    .catch((error) => {
        console.error("Error adding document: ", error);
      });
    setName("");
    }
    
const [imageFirebase, setImage] = useState();
function getImage(e) {
  e.preventDefault();
  db.collection("images").onSnapshot(function (querySnapshot) {
    setImage(
      querySnapshot.docs.map((doc) => ({
        id: doc.id,
        url: doc.data().url,
      }))
    );
  });
  const canvas = canvasRef.current;
  const context = canvas.getContext("2d");
  contextRef.current = context;
  const image = new Image();
  for (let i = 0; i < imageFirebase.length; i++) {
    if(imageFirebase[i].naziv==name1){
    image.src = imageFirebase[i].url;
    setName1("");
    } 
  }
  image.onload = () => {
  context.drawImage(image, 0, 0, window.innerWidth, window.innerHeight-140);
  }; 
}
useEffect(() => {
  db.collection("images").onSnapshot(function (querySnapshot) {
    setImage(
      querySnapshot.docs.map((doc) => ({
        id: doc.id,
        url: doc.data().url,
        naziv: doc.data().naziv
      }))
    );
  });
}, [])
  return (
    <div className="container" style={{marginLeft: -135}}>
    <div style={{backgroundColor: 'lightblue', border: '2px solid black', borderRadius: 10, padding: 10, width: window.innerWidth- 20, marginTop: 5}}>
    <CompactPicker color={tool1} onChangeComplete={changeColor} />
    <input type="file" style={{color: "transparent", marginLeft: 5}} onChange={(e) => {if(e.target.files[0]!=undefined) {setImg(URL.createObjectURL(e.target.files[0])) }}} />
    <Link to="/galery"><button className="form-control" style={{width:"5%", marginLeft: 250, marginTop: -5}}>Galery</button></Link>
    <form>
    <input type="text" className="form-control" style={{marginTop: -87, marginLeft: 1100, width:"10%"}} value={name} onChange={e => setName(e.target.value)} required />
    <button className="form-control" onClick={addImage} style={{width:"5%", marginLeft: 1235, marginTop: -7}}>Save</button>
    </form>
    <form>
    <input type="text" className="form-control" style={{marginTop: 7, marginLeft: 1100, width:"10%"}} value={name1} onChange={e => setName1(e.target.value)} required />
    <button className="form-control" onClick={getImage} style={{width:"5%", marginTop: 40, marginLeft: 1235}}>Get</button>
    </form>
    <div className="form-group" style={{float: "right", marginTop: -87, marginRight: 270}}>
    <form class="form-inline">
    <label className="form-control">Selection:</label>
    <label className="form-control" htmlFor="selection">Hand drawn</label>
    <input className="form-control" type="radio" id="selection1" checked={tool === "handdrawn"} onChange={() => setTool("handdrawn")}/> 
    <label className="form-control" htmlFor="selection">Line</label>
    <input className="form-control" type="radio" id="selection2" checked={tool === "line"} onChange={() => setTool("line")}/> 
    <label className="form-control" htmlFor="selection">Rectangle</label>
    <input className="form-control" type="radio" id="selection3" checked={tool === "rectangle"} onChange={() => setTool("rectangle")}/>
    <label className="form-control" htmlFor="selection">Circle</label><br></br><br></br>
    <input className="form-control" type="radio" id="selection4" checked={tool === "circle"} onChange={() => setTool("circle")}/>
    <label className="form-control" style={{marginLeft: 10}}>Style:</label>
    <label className="form-control" htmlFor="style">Full</label>
    <input className="form-control" type="radio" id="style1" checked={tool2 === "full"} onChange={() => setTool2("full")}/>
    <label className="form-control" htmlFor="style">Empty</label> 
    <input className="form-control" type="radio" id="style2" checked={tool2 === "empty"} onChange={() => setTool2("empty")}/> 
    </form>
    </div>
    <button className="form-control" style={{marginLeft: 370, width:"10%", marginTop: 40}} onClick={clearCanvas}>Clear</button>
    </div>
    <canvas
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
      ref={canvasRef}
    />
    </div>
  );
};

export default Canvas
