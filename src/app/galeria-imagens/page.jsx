'use client'
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import GalleryViewer from '../components/Gallery';
import Image from 'next/image';
import imagemGaleria from "/public/img/galeria.jpg";

const Galeria = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [currentImage, setCurrentImage] = useState(1);
  const totalImagesToShow = showAllPhotos ? 19 : 2;

  const handleShowAllPhotos = () => {
    setShowAllPhotos(!showAllPhotos);
  };

  const handleImageClick = (index) => {
    setCurrentImage(index);
    setShowAllPhotos(true);
  };

  const handleViewerClose = () => {
    setShowAllPhotos(false);
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev % totalImagesToShow) + 1);
  };

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev - 2 + totalImagesToShow) % totalImagesToShow + 1);
  };

  const handleShowAllPhotosFromLast = () => {
    setShowAllPhotos(true);
    setCurrentImage(1); // Definir a imagem atual como a primeira
  };

  return (
    <div className='w-full h-[90vh]'>
      <NavBar isBlackBackground={true} />
      <Image src={imagemGaleria} className='w-full h-[500px] object-cover' style={{ filter: 'brightness(0.7)' }} />
      <div className='flex justify-center items-center'>
        <div className='absolute mx-auto left-0 right-0 w-full max-w-[600px] h-[400px] flex flex-col text-white p-4 text-center'>
          <h1 className='font-bold text-5xl '>GALERIA</h1>
          <hr className="mt-5 ml-52 w-40 border-b-4 border-yellow-400" />
        </div>
      </div>
      <div className='max-w-[1140px] m-auto w-full px-4 py-16'>
        <div className='grid sm:grid-cols-5 gap-4'>
          <div className='sm:col-span-3 col-span-2 row-span-2'>
            <img
              className='w-full h-full object-cover cursor-pointer'
              src='/img/galeria/galeria1.jpg'
              alt='/'
              onClick={() => handleShowAllPhotosFromLast()}
            />
            {showAllPhotos && (
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='text-white text-xl font-bold bg-black bg-opacity-50 p-4 rounded'>
                  Mostrar mais fotos
                </div>
              </div>
            )}
          </div>
          {[2, 3, 4, 5].map((index) => (
            <div key={index}>
              <img
                className={`w-full h-full object-cover cursor-pointer ${index === 5 ? 'relative' : ''}`}
                src={`/img/galeria/galeria${index}.jpg`}
                alt={`Foto ${index}`}
                onClick={() => handleImageClick(index)}
              />
            </div>
          ))}
        </div>
        {!showAllPhotos && (
          <div className='flex justify-center mt-8'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              onClick={handleShowAllPhotos}
            >
              Mostrar Mais Fotos
            </button>
          </div>
        )}
      </div>
      {showAllPhotos && (
        <GalleryViewer
          onClose={handleViewerClose}
          currentImage={currentImage}
          totalImages={5}
          onNext={handleNextImage}
          onPrev={handlePrevImage}
        />
      )}
      <Footer />
    </div>
  );
};

export default Galeria;
