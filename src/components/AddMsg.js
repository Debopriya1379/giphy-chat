import {React,useState} from 'react'
import './AddMsg.css'
import {collection,addDoc} from 'firebase/firestore'

import db from '../firebase-config'

export const AddMsg = ({setOpenGifs}) => {

    const[msgText,setMsgText]= useState("");

    const addMsg = async()=>{
        const msgCollectionRef = collection(db,"messages")
        // console.log('first')
        await addDoc(msgCollectionRef,{
            msgtext : msgText,
            createdAt : new Date().toLocaleTimeString()
        });
        setMsgText("");
    }


  return (
    <div className="AddMsg">
        <input type="text" value={msgText} onChange={(e)=>setMsgText(e.target.value)} placeholder="type message" />
        <div className="Buttons">
            <button onClick={addMsg}>post</button>
            <button onClick={()=>setOpenGifs(true)}>add gif</button>
        </div>
    </div>
  )
}
