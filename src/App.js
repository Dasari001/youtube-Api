import React, { useEffect, useState } from 'react'
import SearchBar from "./components/SearchBar"
import VideoPlay from './components/VideoPlay';
import VideoList from './components/VideoList';
import "./App.css";

const App = () => {

  let[videosData,setVideosData]=useState();
  console.log(videosData,"in app.js")
  let[selectedvideo,setSelectedvideo]=useState();
  console.log(selectedvideo, "is in app.js")

  useEffect(()=>{
    videosData&&
    setSelectedvideo(videosData[0])
  },[videosData])


  return (
    <div>
         <SearchBar addVideosData={setVideosData}/>
         <div className='videos'>
            <VideoPlay selectedvdo={selectedvideo}/>
            <VideoList vdoData={videosData} addSelectedVideo={setSelectedvideo}/>
         </div>
    </div>
  )
}

export default App
