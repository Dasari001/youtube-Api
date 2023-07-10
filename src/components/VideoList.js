import React from 'react'

const VideoList = ({vdoData,addSelectedVideo}) => {

  console.log(vdoData, "in videoList")

  return (
    <div className='videolist'>
        {
          vdoData&&
          vdoData.map((video)=>(
            <div onClick={()=>addSelectedVideo(video)}>
                <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
            </div>
          ))
        }
    </div>
  )
}

export default VideoList