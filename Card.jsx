import React from 'react'

export default function Card(props) {
  return (
    <div>
       <div className="   w-full  border-t-2 flex-wrap flex ">
        <div className=" h-48 w-1/4 border-r-2   flex flex-col justify-center items-center ">
        
          <div className=" mt-5  ">
          <h1 className='text-lg'>{props.time}</h1>
           </div>
          <div className=" mt-5 w-1/2  ">
           <img className='h-10 w-full' src={props.pic} alt="" />
          </div>
          <div className=" mt-5  "> 
          <h1 className='text-2xl'>{props.temp}*C</h1>
          </div>   
          </div>
          <hr />
          <div className=" h-48 w-1/4 border-r-2  flex flex-col justify-center items-center ">
        
        <div className=" mt-5  ">
        <h1 className='text-lg'>{props.time}</h1>
         </div>
        <div className=" mt-5 w-1/2  ">
         <img  className='h-10 w-full'src={props.pic} alt="" />
        </div>
        <div className=" mt-5  "> 
        <h1 className='text-2xl'>{props.temp+2}*C</h1>
        </div>   
        </div>
        <hr />
           <div className=" h-48 w-1/4 border-r-2  flex flex-col justify-center items-center ">
        
           <div className=" mt-5  ">
           <h1 className='text-lg'>{props.time}</h1>
            </div>
           <div className=" mt-5 w-1/2  ">
            <img  className='h-10 w-full'src={props.pic} alt="" />
           </div>
           <div className=" mt-5  "> 
           <h1 className='text-2xl'>{props.temp+3}*C</h1>
           </div>   
           </div>
           <hr />
           <div className=" h-48 w-1/4 border-r-2  flex flex-col justify-center items-center ">
        
        <div className=" mt-5  ">
        <h1 className='text-lg'>{props.time}</h1>
         </div>
        <div className=" mt-5 w-1/2  ">
         <img  className='h-10 w-full'src={props.pic} alt="" />
        </div>
        <div className=" mt-5  "> 
        <h1 className='text-2xl'>{props.temp+5}*C</h1>
        </div>   
        </div>
        <hr />
       
        
        
      </div>
      



      </div>
    
  )
}
