import {React,useState} from 'react'
import Axios from 'axios';
import './GifSearch.css';
import {collection,addDoc} from 'firebase/firestore'


import db from '../firebase-config'


export const GifSearch = ({setOpenGifs}) => {

    const [gifurls,setGifurls] = useState([]);
    const [searchKey,setSearchKey] = useState("");

    const[msgUrl,setMsgUrl]= useState("");

    const addGifMsg = async()=>{
        const msgCollectionRef = collection(db,"messages")
        await addDoc(msgCollectionRef,{
            msgurl : msgUrl,             ////// check if the msgUrl is null
        });
    }

    const searchGifs = async(key)=>{
        try {
            const results = await Axios("https://api.giphy.com/v1/gifs/search",{
                    params: {
                        api_key : process.env.giphy_apikey,
                        limit: 10,
                        q:key
                    }
            });
            console.log(results.data.data);
            setGifurls(results.data.data);
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <div className='GifSearch'>
        <div className="searchModal">
            <input type="text" onChange={(e)=>setSearchKey(e.target.value)}/>
            <button onClick={()=>searchGifs(searchKey)}>search</button>

            <button onClick={()=>{
                setOpenGifs(false);
                setMsgUrl("");
            }}>close</button>

            <div className="gifs">
                {gifurls.map((gif)=>{
                    return(
                        <div id='selected_gif' key={gif.id}>
                            <img src={gif.images.fixed_height.url} alt="" onClick={()=>{setMsgUrl(gif.images.fixed_height.url)}} />
                        </div>
                    )
                })}
            </div>
            
            <button onClick={()=>{
                setOpenGifs(false);
                addGifMsg();
            }}>Post</button>
        </div>
    </div>
  )
}
