import React from 'react'

const VideoPlay = ({selectedvdo}) => {


  return (
    <div className='videoplay'>
      {
        selectedvdo&&
         <iframe 
             width="890" 
             height="500" 
             src={`https://www.youtube.com/embed/${selectedvdo.id.videoId}`}
             title="YouTube video player" />
      }
      {
        selectedvdo&&
      <h3>{selectedvdo.snippet.description}</h3>
      } 
    </div>
  )
}

export default VideoPlay