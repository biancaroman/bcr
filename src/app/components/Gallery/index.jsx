import React, { useState } from 'react';

const Gallery = ({ onClose, currentImage, totalImages, onNext, onPrev }) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80'>
      <div className='relative w-[80%] h-[80%] max-w-[800px] max-h-[600px]'>
        <img
          className='w-full h-full object-cover'
          src={`/img/galeria/galeria${currentImage}.jpg`}
          alt={`Foto ${currentImage}`}
        />
        <button className='absolute top-0 right-0 m-4 text-white text-2xl' onClick={onClose}>
          Fechar
        </button>
        {totalImages > 1 && (
          <>
            <button className='absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl' onClick={onPrev}>
              &#8249;
            </button>
            <button className='absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl' onClick={onNext}>
              &#8250;
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Gallery;
