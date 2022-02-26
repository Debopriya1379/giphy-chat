import {React,useState} from 'react'
import './Main.css';
import { AddMsg } from './AddMsg';
import { Messages } from './Messages';
import { GifSearch } from './GifSearch';

export const Main = () => {
  const[openGifs,setOpenGifs]= useState(false);
  // const[msgText,setMsgText]= useState("");

  // const postTextMsg = (message)=>{
  //     localStorage.setItem('textmsg',JSON.stringify(message))
  // }

  return (
      <div className='Main'>
        <AddMsg setOpenGifs={setOpenGifs}/>
        {openGifs && <GifSearch setOpenGifs={setOpenGifs} />}
        <Messages/>
      </div>
  );
}
