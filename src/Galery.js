import React, { useEffect, useState } from 'react'
import firebase from "firebase";

export const Galery = () => {

    let db = firebase.firestore();
    const [list, setList] = useState([]);

    useEffect(() => {
    db.collection("images").onSnapshot(function (querySnapshot) {
        setList(
        querySnapshot.docs.map((doc) => ({
            id: doc.id,
            url: doc.data().url,
            naziv: doc.data().naziv,
        }))
        );
    }); 
    }, [])
    
    return (
        <div >
             <h1 style={{textAlign : "center"}}>GALERY</h1>
             {list.map(obj  => 
                <div style= {{margin: 10, padding: 10, border: "solid black 1px", display: 'inline-block', borderRadius: "30px"}}>
                <p>{obj.naziv}</p>
                <img  src = {obj.url}
                width="500"
                height="500"
                alt="" />
                </div>
                )}
        </div>
    )
}
export default Galery