import React from 'react'
import Button from './Botton'

const ButtonList = ({button_name}) => {

  console.log(button_name)

  return (
    <div className='flex'>
    <Button />
    <button className='text-sm font-bold px-4 py-1 bg-slate-200 rounded-md m-2'>All</button>
    <button className='text-sm font-bold px-4 py-1 bg-slate-200 rounded-md m-2'>React router</button>
    <button className='text-sm font-bold px-4 py-1 bg-slate-200 rounded-md m-2'>Computer Programming</button>
    <button className='text-sm font-bold px-4 py-1 bg-slate-200 rounded-md m-2'>Live</button>
    <button className='text-sm font-bold px-4 py-1 bg-slate-200 rounded-md m-2'>Music</button>
    <button className='text-sm font-bold px-4 py-1 bg-slate-200 rounded-md m-2'>News</button>
    <button className='text-sm font-bold px-4 py-1 bg-slate-200 rounded-md m-2'>Tariq Jamil</button>
    <button className='text-sm font-bold px-4 py-1 bg-slate-200 rounded-md m-2'>Stock Market</button>
    <button className='text-sm font-bold px-4 py-1 bg-slate-200 rounded-md m-2'>Motivation</button>
    <button className='text-sm font-bold px-4 py-1 bg-slate-200 rounded-md m-2'>REDUX</button>
    <button className='text-sm font-bold px-4 py-1 bg-slate-200 rounded-md m-2'>History</button>
    <button className='text-sm font-bold px-4 py-1 bg-slate-200 rounded-md m-2'>JavaScript</button>
    <button className='text-sm font-bold px-4 py-1 bg-slate-200 rounded-md m-2'>Islam</button>
    <button className='text-sm font-bold px-4 py-1 bg-slate-200 rounded-md m-2'>Web Devlopment</button>
    </div>
  )
}

export default ButtonList