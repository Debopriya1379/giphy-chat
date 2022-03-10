// import dotenv from 'dotenv'
// dotenv.config();
import {React,useState} from 'react'
import Axios from 'axios';
import './GifSearch.css';
import {collection,addDoc} from 'firebase/firestore'



import db from '../firebase-config'


export const GifSearch = ({setOpenGifs}) => {

    const [gifurls,setGifurls] = useState([]);
    const [searchKey,setSearchKey] = useState("");

    // const[msgUrl,setMsgUrl]= useState("");

    const addGifMsg = async(url)=>{
        const msgCollectionRef = collection(db,"messages")
        await addDoc(msgCollectionRef,{
            msgurl : url,             ////// check if the msgUrl is null
            createdAt : new Date().toLocaleTimeString()
        });
    }

    const searchGifs = async(key)=>{
        try {
            if (!key) {
                alert("Please search with a text");
            } else {
                const results = await Axios("https://api.giphy.com/v1/gifs/search",{
                    params: {
                        api_key : process.env.Giphy_Apikey,
                        limit: 10,
                        q:key
                    }
            });
            console.log(results.data.data);
            setGifurls(results.data.data);   
            }
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <div className='GifSearch'>
        <div className="searchModal">
            <input type="text" placeholder='search gif' onChange={(e)=>setSearchKey(e.target.value)}/>
            <button onClick={()=>searchGifs(searchKey)}>search</button>
            
            <p>Click on the gif to post after searching</p>

            <button onClick={()=>{
                setOpenGifs(false);
                // setMsgUrl("");
            }}>close</button>

            <div className="gifs">
                {gifurls.map((gif)=>{
                    return(
                        <div id='selected_gif' key={gif.id}>
                            <img src={gif.images.fixed_height.url} alt="" onClick={()=>{
                                // setMsgUrl(gif.images.fixed_height.url);
                                addGifMsg(gif.images.fixed_height.url);
                                setOpenGifs(false);
                                }} />
                        </div>
                    )
                })}
            </div>
            
            {/* <button onClick={()=>{
                setOpenGifs(false);
                addGifMsg();
            }}>Post</button> */}
        </div>
    </div>
  )
}
