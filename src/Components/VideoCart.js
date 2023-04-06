import React from 'react'

const VideoCart = ({ video}) => {

    console.log(video)

    const {snippet,statistics}=video;

    // const {thumbnails,localized}=snippet;
    // console.log(thumbnails)
  return (
    <div className='ml-12 mt-4'>
        <img className='rounded rounded-md' alt='youtube_vidio' src={snippet?.thumbnails?.medium?.url}/>
        <h1 className='font-bold font-sans text-md m-1 w-[300px]'>{snippet?.channelTitle}</h1>
        <h1 className=' font-sans text-sm text-gray-700 m-1 w-[300px]'>{snippet?.localized?.title}</h1>
        <div>
        <h1 className=' font-sans text-sm text-gray-700 m-1'>{statistics?.viewCount} Views</h1>
        </div>

    </div>
  )
}

export default VideoCart