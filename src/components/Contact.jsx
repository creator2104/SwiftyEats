//rafce => short cut to create a component
import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center font-serif'>
    <div className='flex flex-col items-center justify-center my-4'>
        <h1 className='text-2xl'>Hi👋,I'm Vinit Prajapati 👩‍💻</h1>
        <p className='text-xl'>Frontend Developer</p>
    </div>
    <div className='flex flex-col items-center justify-center my-4 py-4'>
       <h1 className='text-2xl'>Connect with me</h1>
          <p><span className='font-semibold'>Gmail:</span> mr.vinitprajapati07@gmail.com</p>
          <p><span className='font-semibold'>Github:</span> https://github.com/creator2104/food-app-React-vite.git</p>
          <p><span className='font-semibold'>Linkedin:</span> https://Linkedin/vinitprajapati07 </p>
          {/* <button>Tap here</button> */}
    </div>
    </div>
   
  )
}

export default Contact