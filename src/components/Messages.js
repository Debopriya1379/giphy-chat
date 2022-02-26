import {React,useState,useEffect} from 'react'
import './Messages.css'
// import { SingleMsg } from './SingleMsg'
import { GifMsg } from './GifMsg'
import {collection,onSnapshot} from 'firebase/firestore';


import db from '../firebase-config'


export const Messages = () => {

    const [Messages, setMessages] = useState([]);

    useEffect(() => {
        const getMessages =()=>{
          onSnapshot(collection(db, "messages"), (snapshot)=>{
            // console.log(snapshot.docs)
            setMessages(snapshot.docs.map(
              (doc)=>({...doc.data(), id: doc.id })
            ));
          });
        };

        getMessages();
        console.log(Messages);
    },[])


    // const prevTextMsg=[
    //     {
    //         text: "Good Morning Everyone",
    //     },
    //     {
    //         text: "Hello everyone",
    //     },
    //     {
    //         text: "Hi folks",
    //     }
    // ];
    // const prevGifMsg=[
    //     {
    //         url: "https://i.giphy.com/media/l4pTsNgkamxfk2ZLq/200w.webp",
    //     },
    //     {
    //         url: "https://i.giphy.com/media/ZCNjymWszyazkph0z2/200.webp",
    //     },
    //     {
    //         url: "https://i.giphy.com/media/U4LJYD0Lu2zg7CNmjX/200w.webp",
    //     }
    // ]

    return (
        <div className='Messages'>
            {/* <SingleMsg msgText={prevTextMsg[0]} />
            <SingleMsg msgText={prevTextMsg[1]}/>
            <SingleMsg msgText={prevTextMsg[2]}/>
            <GifMsg msgGif={prevGifMsg[2]} />
            <GifMsg msgGif={prevGifMsg[1]}/> */}

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
