import React from 'react'
import SevenDays from './SevenDays'

export default function About(props) {
  return (
   <>
    <div className=' mt-4  w-full flex flex-col  rounded-3xl bg-gray-400 '>
      <div className="ml-4">
<h1>Air Conditions</h1>
      </div>
      <div className="  h-1/2 w-full flex flex-wrap ">
        <div className="  w-1/2">
<div className="flex ">
    <img className='w-1/4' src="https://cdn-icons-png.flaticon.com/128/1843/1843544.png" alt="" />
    <h1 className='ml-4'>Humidity</h1>
</div>
<div className=" flex justify-center"> 
<h1 className='text-4xl'>{props.humidity}</h1></div>
<hr />
        </div>
        <div className=" w-1/2">
        <div className="flex ">
    <img className='w-1/4' src="https://cdn-icons-png.flaticon.com/128/1843/1843544.png" alt="" />
    <h1 className='ml-4'>Wind</h1>
</div>
<div className=" flex justify-center"> 
<h1 className='text-4xl'>{props.windd}</h1></div>
<hr />
        </div>
        <div className=" w-1/2">
        <div className="flex ">
    <img className='w-1/4' src="https://cdn-icons-png.flaticon.com/128/1843/1843544.png" alt="" />
    <h1 className='ml-4'>Chance of Rain</h1>
</div>
<div className=" flex justify-center"> 
<h1 className='text-4xl'>{props.rain}%</h1></div>
<div className=""></div>
        </div>
        <div className=" w-1/2">
        <div className="flex ">
    <img className='w-1/4' src="https://cdn-icons-png.flaticon.com/128/1843/1843544.png" alt="" />
    <h1 className='ml-4'>UV Index</h1>
</div>
<div className=" flex justify-center"> 
<h1 className='text-4xl'>{props.uv}</h1></div>
<div className=""></div>
        </div>
      </div>
    </div>
    <SevenDays/>
   </>
  )
}
