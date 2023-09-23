import React from 'react'
import flipkart from "../assets/flipkart.jpg"
import chatapp from "../assets/chatappimg.webp"
import gmail from "../assets/g-mailclone.jpg"
import webscrap from "../assets/webscraping.jpg"
const Portfolio = () => {
    const projectImages=[
        {
            id:1,
            src:flipkart,
            ref:"https://ecommerce-shop-123.netlify.app/",
            code:"https://github.com/chitrarasu1996/e-commerce.git"
        },
        {
            id:2,
            src:chatapp,
            ref:"https://chattify-app.netlify.app",
            code:"https://github.com/chitrarasu1996/chat-app-frontend.git"
        },
        {
            id:3,
            src:gmail,
            ref:"https://gmail-colone.netlify.app",
            code:"https://github.com/chitrarasu1996/gmail-clone-frontend.git"
        }
    ,
    {
        id:4,
        src:webscrap,
        ref:"https://web-scraping-123.netlify.app/",
        code:"https://github.com/chitrarasu1996/frontend-webscraping.git"
        
    }
    ]
  return (
<div name="projects" style={{height:"100%"}}  className='px-32 sm:px-52 py-32 h-full w-full
   bg-gradient-to-b from-black to-gray-800 text-white md:h-screen  '>
    <div className=' max-w-screen-lg  mx-auto flex flex-col justify-center h-full w-full'>
        <div>
            <p className='font-bold inline text-4xl border-b-4   border-gray-500'>
        Projects
          </p>
          <p className='py-9'>
some of my work here
          </p>
        
        </div>
<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8
px-12 sm:px-0'>
    {projectImages.map(({id,src,ref,code})=>(
        <div key={id} className=' shadow-md shadow-gray-600 rounded-lg'>
        <img
        className='rounded-md duration-100 hover:scale-105' src={src} alt='flikart'/>
        <div className='flex items-center justify-center'>
        <a href={ref}><button className='duration-105 hover:scale-105 w-1/2 px-4 py-6 mx-3'>Demo</button></a>  
       <a href={code}> <button className='duration-105 hover:scale-105 w-1/2 px-4 py-6 mx-3'>Code</button> </a>
        </div>
      
      </div>
    ))}
        
          </div>
    </div>
</div>
  )
}

export default Portfolio