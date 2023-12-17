import React from 'react'
import Card from './Card'


export default function Today(props) {
  return (
   <>
    <div className='  mt-8 w-full   rounded-3xl bg-gray-400  '>
      <h1 className='ml-4 text-white'>TODAY'S FORCAST</h1>
     
        
        
       <Card time={props.time} pic={props.pic} temp={props.temp}/>
        
        
      
    </div>
   
   </>
  )
}
