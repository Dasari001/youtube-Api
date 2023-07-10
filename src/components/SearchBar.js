import React, { useEffect, useState } from 'react'
import axios from 'axios';

const SearchBar = ({addVideosData}) => {

  let[searchTerm,setSearchTerm] = useState("");
  console.log(searchTerm, "in searchbar");

  useEffect(()=>{
    searchHandler()
  },[])




 function searchHandler() {
  axios.get("https://www.googleapis.com/youtube/v3/search",{
                params: {
                    key: process.env.REACT_APP_YOUTUBE_KEY,
                    q: searchTerm,
                    maxResults: 30,
                    type: 'video',
                    part: 'snippet',
    
                }
 })
 .then(res=>addVideosData(res.data.items))
 .catch(err=>console.log(err))

}


  return (
    <div>
        <input type="text" placeholder='Search Videos' 
        onChange={(e)=>setSearchTerm(e.target.value)}/>
        <button onClick={searchHandler}>Search</button>
    </div>
  )
}

export default SearchBar;