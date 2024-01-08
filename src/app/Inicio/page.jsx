'use client'

import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import VideoHome from "../components/VideoHome";
import imagemHome from "/public/img/home.jpg"
import Slider from "../components/Slider";
import "../entrada.css";
import Image from 'next/image'


const prediosZS = [
  {
    url: '/img/predioszs/gileade2.jpg',
    title: 'Zona Sul',
    link: 'https://residencialgileade.com.br',
  },
  {
    url: '/img/predioszs/gileade3.jpg',
    link: 'https://residencialgileade.com.br',
  },
  {
    url: '/img/predioszs/gileade4.jpg',
    link: 'https://residencialgileade.com.br',
  },
  {
    url: '/img/predioszs/gileade5.jpg',
    link: 'https://residencialgileade.com.br',
  },
];

const prediosZN = [
  {
    url: '/img/predioszn/prediozn3.jpg',
    title: 'Zona Norte',
  },
  {
    url: '/img/predioszn/prediozn2.jpg',
  },
  {
    url: '/img/predioszn/prediozn1.jpg',
  },
  {
    url: '/img/predioszn/prediozn4.jpg',
  },
  {
    url: '/img/predioszn/prediozn5.jpg',
  },
];

const prediosZL = [
  {
    url: '/img/predioszl/predioszl1.jpg',
    title: 'Zona Leste',
  },
  {
    url: '/img/predioszl/predioszl2.jpg',
  },
  {
    url: '/img/predioszl/predioszl3.jpg',
  },
  {
    url: '/img/predioszl/predioszl4.jpg',
  },
  {
    url: '/img/predioszl/predioszl5.jpg',
  },
  {
    url: '/img/predioszl/predioszl6.jpg',
  },
];

const sobradoZS = [
  {
    url: '/img/sobradozs/sobradozs1.jpg',
    title: 'Zona Sul',
  },
  {
    url: '/img/sobradozs/sobradozs2.jpg',
  },
  {
    url: '/img/sobradozs/sobradozs3.jpg',
  }
];

const sobradoZL = [
  {
    url: '/img/sobradozl/sobradozl1.jpg',
    title: 'Zona Leste',
  },
  {
    url: '/img/sobradozl/sobradozl2.jpg',
  },
  {
    url: '/img/sobradozl/sobradozl3.jpg',
  }
];

const sobradoSalto = [
  {
    url: '/img/sobradosalto/sobradosalto1.jpg',
    title: 'Salto',
  },
  {
    url: '/img/sobradosalto/sobradosalto3.jpg',
  },
  {
    url: '/img/sobradosalto/sobradosalto4.jpg',
  },
  {
    url: '/img/sobradosalto/sobradosalto5.jpg',
  },
  {
    url: '/img/sobradosalto/sobradosalto6.jpg',
  },
  {
    url: '/img/sobradosalto/sobradosalto7.jpg',
  },
];

const Inicio = () => {
  
  const [isVisible, setIsVisible] = useState(false);
  const videoUrl = "/video/videohome2.mp4";

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main>
      <section className="w-full ">
      <div className="sm:block lg:hidden xl:hidden">
        <Image src={imagemHome} className='w-full h-[550px] object-cover' style={{ filter: 'brightness(0.7)' }} />
      </div>
      <div className="hidden sm:hidden lg:block xl:block">
        <VideoHome videoUrl={videoUrl} />
      </div>
        <div className="max-w-screen m-auto ">
          <div className="absolute lg:top-[60%] md:top-[35%] top-[20%] w-full md:left-[50%] md:translate-x-[-50%] h-full flex flex-col p-4 sm:mt-[-10%] text-white">
            <CSSTransition
              in={isVisible}
              timeout={1500}
              classNames="surgir"
              unmountOnExit
            >
             <h1 className="font-bold lg:text-4xl md:text-3xl text-2xl text-center p-2">
                Venha construir seus sonhos conosco!
              </h1>
            </CSSTransition>
            <CSSTransition
              in={isVisible}
              timeout={1700}
              classNames="surgir"
              unmountOnExit
            >
              <h2 className="text-center lg:text-3xl md:text-2xl text-sm py-4 italic p-2">
                Expertise em construção civil e reformas com a qualidade que você merece!
              </h2>
            </CSSTransition>
            <CSSTransition
              in={isVisible}
              timeout={100}
              classNames="surgir"
              unmountOnExit
            >
              <p className="text-center text-sm lg:text-lg xl:text-xl p-4">
              A BCR Construções Incorporações e Participações Ltda, uma empresa de construção renomada e confiável. <br /> Temos o prazer de oferecer serviços de alta qualidade, contando com equipes de mão de obra qualificada <br /> e arquitetos prontos para atendê-los da melhor forma possível.
              </p>
            </CSSTransition>
            </div>
          </div>
            <div className="text-black text-center "> 
            <h1 className="text-3xl lg:text-4xl font-semibold mt-10">Breves Lançamentos</h1>  
            <p className="mt-4">Clique nas imagens abaixo para mais informações!</p>
            </div>
          < div className="flex flex-col lg:flex-row">
            <Slider images={prediosZS} />
            <Slider images={prediosZL}/>
            <Slider images={prediosZN}/>
          </div>
          < div className="flex flex-col lg:flex-row">
            <Slider images={sobradoZS}/>
            <Slider images={sobradoZL}/>
            <Slider images={sobradoSalto}/>
          </div>
      </section>
    </main>
  );
};

export default Inicio;


