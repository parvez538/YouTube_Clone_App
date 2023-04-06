import React from 'react'
import VideoCart from './VideoCart'
import { YOUTUBE_VIDEO_LIST_API } from '../Utils/Constant'
import { useState,useEffect } from 'react'

const VideoList = () => {

    const [video,SetVideo]=useState([]);
    // console.log(video)

    useEffect(()=>{
        getYoutubeVideo();
    },[])

    const  getYoutubeVideo = async ()=>{
        const data=await fetch(YOUTUBE_VIDEO_LIST_API);
        const json=await data.json();

        SetVideo(json.items)
    }
  return (
    <div className='flex flex-wrap mt-5 '>
    {video?.map(info =>  <VideoCart key={video?.contentDetails?.id} video={info} />)}
       
    </div>
  )
}

export default VideoList