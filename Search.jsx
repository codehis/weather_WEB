import React, { useState } from 'react'
import Box1 from './Box1';
import Today from './Today';

import About from './About';
export default function Search() {
const[city,setCityName]=useState();
// const[finalCity,setfinalCity]=useState([]);
const[temp,setTemp]=useState();
const[name,setName]=useState();
const[cloud,setClouds]=useState();
const[pic,setPicture]=useState();
const[uv,setUv]=useState();
const[wind,setWind]=useState();
const[humidity,setHumidity]=useState();
const[state,setState]=useState()
const[Country,setCountry]=useState();
const[time,setTime]=useState();

const date = new Date();
const showTime = date.getHours() 
    + ':' + date.getMinutes() 
   

function cityName(e){
  setCityName(e.target.value)
}



const callApi=async(e)=>{
  
  
  try{
    e.preventDefault();
    const res=await fetch(`http://api.weatherapi.com/v1/current.json?key=b1ff411cf377492eac584358231412&q=${city}&aqi=no`)
   
   
    const data=await res.json();

    const {current,location}=data;
    const{text,icon}=current.condition;
    
 setState(location.region
  )
  setCountry(location.country)
    setName(location.name)
// setImage 

setPicture(icon)

    // setTEMPRETURE
    setTemp(current.temp_c)

    // setClouds
    setClouds(current.cloud)
    // setuv
    setUv(current.uv)


    setHumidity(current.humidity)
    setWind(current.wind_degree)
    console.log(current.wind_degree)
// alert(showTime.toLocaleTimeString("en-US", {hour12: true}))
    setTime(showTime)

    

  

   

  }
  catch{
    console.log("api error")
  }
 
}

  return (

    <>
    <div className=""> 
    <div className=' w-full flex justify-center border-transparent '>
   
   <input className='bg-gray-400 w-full p-4 text-white text-lg ' type="text" name="" placeholder='Search For City Name' onChange={cityName}/>
 <button className='border-2 w-20 h-16 bg-gray-400 ' onClick={callApi}>Search</button>

  </div>

  <div className=' flex justify-between mt-5 '>
      <div className=" ml-3">
        <h1 className='text-6xl'>{name}</h1>
        <p className=''>{state}     ,   {Country}</p>
        <h2 className='text-6xl'>{temp}*C</h2>
      </div>
      <div className="">
        <img  className='h-40 ' src={pic} alt="" />
      </div>
    </div>
    
    <Today time={time} temp={temp} pic={pic}/>
    <About  windd={wind} uv={uv} humidity={humidity} rain={cloud}/>
  </div>
 
   
    </>
    
     
  

  )
}
