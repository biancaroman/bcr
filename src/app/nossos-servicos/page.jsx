import React from 'react'
import NavBar from '../components/NavBar'
import ImageSlider from '../components/ImageSlider'
import Footer from '../components/Footer'
import imagemPortfolio from "/public/img/servicos.jpg"
import Image from 'next/image'


const servicos = () => {
  return (
    <section>
      <NavBar isBlackBackground={true} />
    <div className='w-full h-[90vh]'>
    <Image src={imagemPortfolio} className='w-full h-[400px] object-cover' style={{ filter: 'brightness(0.7)' }} />
        <div className='flex justify-center items-center'>
          <div className='absolute mx-auto left-0 right-0 w-full max-w-[600px] h-[300px] flex flex-col text-white p-4 text-center'>
          <h1 className='font-bold text-5xl '>NOSSOS SERVIÇOS</h1>
          <hr className="mt-5 ml-52 w-40 border-b-4 border-yellow-400" />
          
        </div>
      </div>
      <div>
        <ImageSlider/>
      </div>
      <Footer/>

    </div>

    </section>
  )
}

export default servicos