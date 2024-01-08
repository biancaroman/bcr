import React from 'react'
import NavBar from '../components/NavBar'
import Image from 'next/image'
import Footer from "../components/Footer";

import imagemContato from "/public/img/quem-somos.jpg"

import imagemMissao from "/public/img/missao.jpg"
import imagemVisao from "/public/img/visao.jpg"
import imagemValores from "/public/img/valores.jpg"

const somos = () => {
  return (
    <div className='w-full h-[90vh]'>
        <NavBar isBlackBackground={true} />
        <Image src={imagemContato} className='w-full h-[400px] object-cover' style={{ filter: 'brightness(0.7)' }} />
        <div className='flex justify-center items-center'>
        <div className='absolute mx-auto left-0 right-0 w-full max-w-[600px] h-[300px] flex flex-col text-white p-4 text-center'>
  <h1 className='font-bold sm:text-5xl text-4xl'>QUEM SOMOS</h1>
  <hr className=" hidden sm:block  mt-5 ml-52 w-40 border-b-4 border-yellow-400 " />
</div>

        </div>
        <div className="lg:pl-80 lg:pr-80 text-center md:text-left mt-12 text-gray-500">
          <p className="p-3 text-lg">
          A BCR Construções Incorporações e Participações Ltda, uma empresa de construção renomada e confiável. Temos o prazer de oferecer serviços de alta qualidade, contando com equipes de mão de obra qualificada e arquitetos prontos para atendê-los da melhor forma possível.
          </p>
          <p className="p-3 text-lg">
          Nosso compromisso é entregar projetos de construção com excelência, garantindo a satisfação dos nossos clientes. Além disso, nossos gestores possuem vasta experiência e alta qualificação, assegurando a eficiência e o sucesso em cada empreendimento.
          </p>
          <p className="p-3 text-lg">
          Não apenas especializados na construção de residências, espaços comerciais e galpões, mas também comprometidos com a excelência em reformas gerais. Nosso objetivo é atender às necessidades específicas de cada cliente, assegurando sempre a mais alta qualidade em todos os projetos. Dessa forma, dedicamo-nos a transformar os sonhos de nossos clientes em uma tangível e satisfatória realidade.
          </p>
          <p className="p-3 text-lg">
          Estamos sempre empenhados em superar expectativas, buscando a inovação e aprimoramento contínuo em todas as etapas do processo construtivo.
          </p>
          <p className="p-3 text-lg">Somos o resultado de diferentes competências e conhecimentos, motivados pelo desejo de transformar o mercado de reformas e construções. Nossa inspiração, parte do respeito e carinho, que dedicamos a cada cliente e seus projetos. </p>
          <p className="p-3 text-lg">
          Agradecemos a oportunidade de apresentar a BCR Construções Incorporações e Participações Ltda e estamos à disposição para discutir futuras parcerias e projetos.
          </p>
        </div>
        <div className="flex flex-wrap mt-5 justify-center">
        <div className="sm:w-1/4 mx-4 my-8 text-center group overflow-hidden hover:opacity-70 transition-all duration-300">
    <Image src={imagemMissao} className='w-full h-[300px] object-cover transform scale-100 group-hover:scale-105'/>
    <h1 className="text-xl font-bold mt-4">MISSÃO</h1>
    <p className="text-sm mt-4 text-left text-gray-500">
        A missão da BCR é criar espaços que vão além das expectativas dos nossos clientes, por meio da aplicação de tecnologias avançadas, práticas sustentáveis e um planejamento minucioso em todas as etapas da construção. Nosso objetivo é proporcionar conforto, segurança e qualidade de vida em cada empreendimento entregue.
    </p>
</div>

            <div className="sm:w-1/4 mx-4 my-8 text-center group overflow-hidden hover:opacity-70 transition-all duration-300">
            <Image src={imagemVisao} className='w-full h-[300px] object-cover transition-transform transform hover:opacity-70 hover:scale-105'/>
            <h1 className="text-xl font-bold mt-4 ">VISÃO</h1>
            <p className="text-sm mt-4 text-left text-gray-500">
            Nossa visão é ser líder no setor, reconhecidos pelo nosso compromisso com a inovação, sustentabilidade e eficiência construtiva.
              </p>
            </div>
            <div className="sm:w-1/4 mx-4 my-8 text-center group overflow-hidden hover:opacity-70 transition-all duration-300">
            <Image src={imagemValores} className='w-full h-[300px] object-cover transition-transform transform hover:opacity-70 hover:scale-105'/>
            <h1 className="text-xl font-bold mt-4 ">VALORES</h1>
            <p className="text-sm mt-4 text-left text-gray-500">
            Nossos valores fundamentam-se na transparência, ética e respeito ao cliente. Valorizamos o trabalho em equipe, incentivando a capacitação e valorização dos nossos colaboradores, além de estarmos sempre em busca de soluções inovadoras para superar desafios. 
              </p>
            </div>
          </div>
          <Footer/>
    </div>
  )
}

export default somos