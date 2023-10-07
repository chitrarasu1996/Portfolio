import React from 'react'

const Contact = () => {
  return (
    <div
    style={{paddingTop:"90px"}} 
    name="contact" className=' sm:px-52 px-32 w-full  text-white h-screen bg-gradient-to-b from-black to-gray-800 '>
        <div className='flex flex-col justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-6'>
               <p className='font-bold  text-4xl border-b-4 inline border-gray-400'>Contact</p>
               <p className='py-6'>Drop the message below form to touch with me</p>
            
            </div>

            <div style={{overflowX:"auto"}} className='flex justify-center items-center'>
                <form  method='post' action='https://getform.io/f/7bce23c4-11a3-4244-a902-e0893ef410ef' className='flex flex-col max-h-full sm:w-80 ' >
                    <input placeholder='enter your Name' 
                    className="p-2 text-white border-2 rounded-md bg-transparent focus:outline-none" name='name' type='text'/>
               
               <input placeholder='enter your email' 
                    className="p-2 my-4 border-2 text-white rounded-md bg-transparent focus:outline-none"
                     name='email' type='text'/>
               
               <textarea name='message'  placeholder='enter your message'  rows={10} className='  border-2 bg-transparent p-2 focus:outline-none'>

               </textarea>
               <button type='submit' className='
               bg-gradient-to-b rounded-md flex 
               items-center from-cyan-200 px-4  my-6 mx-auto
                text-white to-blue-500 duration-500 hover:scale-105'>Let's Talk</button>
                </form> 
            </div>
        </div>
    </div>
  )
}

export default Contact