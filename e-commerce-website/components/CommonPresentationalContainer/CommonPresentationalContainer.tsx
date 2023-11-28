import React from 'react'
import { Footer, Navbar } from '..'

const CommonPresentationalContainer = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='w-full h-full relative'>
        <Navbar />
        <div className='h-[calc(100%-100px)] p-4'>
        {children}
        </div>
        <Footer />
    </div>
  )
}

export default CommonPresentationalContainer