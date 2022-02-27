import {React,useState,useEffect} from 'react'
import './Messages.css'
// import { SingleMsg } from './SingleMsg'
import { GifMsg } from './GifMsg'
import {collection,onSnapshot,orderBy,query} from 'firebase/firestore';


import db from '../firebase-config'


export const Messages = () => {

    const [Messages, setMessages] = useState([]);

    useEffect(() => {
        const getMessages =()=>{
            const q = query(collection(db,"messages"),orderBy('createdAt','desc'));
            onSnapshot(q, (snapshot)=>{
            // console.log(snapshot.docs)
            setMessages(snapshot.docs.map(
              (doc)=>({...doc.data(), id: doc.id })
            ));
          });
        };

        getMessages();
        // console.log(Messages);
    },[])

    return (
        <div className='Messages'>
            {
                Messages.map((msg)=>{
                    return(
                        <GifMsg key={msg.id} msg={msg}/>
                    )
                })
            }
        </div>
    )
}
