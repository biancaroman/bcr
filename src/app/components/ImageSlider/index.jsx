'use client'

import React, { useState } from 'react';

const HoverCard = ({ text, instagramLink, whatsappLink, facebookLink, tiktokLink }) => (
  <div className="absolute inset-0 bg-gradient-to-b from-gray-500/20 to-black flex flex-col items-center lg:justify-center text-white opacity-0 hover:opacity-100 transition-all duration-200">
    <p className="lg:text-md text-sm lg:text-center lg:m-20 m-5">{text}</p>
    <div className="flex lg:mt-4 space-x-4">
      <a href={instagramLink}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      </a>
      <a href={facebookLink}>
      <svg xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
      </a>
      <a href={whatsappLink}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>
      <a href={tiktokLink}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72c.02 1.48-.04 2.96-.04 4.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11 1.04-1.36 1.75c-.21.51-.15 1.07-.14 1.61c.24 1.64 1.82 3.02 3.5 2.87c1.12-.01 2.19-.66 2.77-1.61c.19-.33.4-.67.41-1.06c.1-1.79.06-3.57.07-5.36c.01-4.03-.01-8.05.02-12.07"/></svg>
      </a>
    </div>
  </div>
);

const ServiceCard = ({ image, title, description, instagramLink, whatsappLink, facebookLink, tiktokLink, hoverText }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative h-96 w-full cursor-pointer overflow-hidden shadow-lg shadow-black/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img className="h-full w-full object-cover transition-all group-hover:scale-125" src={image} alt="" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-500/20 to-black">
        <div className="absolute inset-x-5 bottom-6">
          <div className="flex gap-3 text-white">
            <div>
              <p className="font-semibold text-xl text-gray-100">{title}</p>
              <p className="text-gray-300">{description}</p>
            </div>
          </div>
          <div className="flex justify-end gap-3 text-gray-200">
            <HoverCard instagramLink={instagramLink} whatsappLink={whatsappLink} facebookLink={facebookLink} tiktokLink={tiktokLink} text={hoverText} />
          </div>
        </div>
      </div>
      {isHovered && <HoverCard instagramLink={instagramLink} whatsappLink={whatsappLink} facebookLink={facebookLink} tiktokLink={tiktokLink} text={hoverText} />}
    </div>
  );
};

const ImageSlider = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-200 sm:flex-col md:flex-row">
    <div className="mx-auto max-w-6xl px-6 p-10">
      <div className="flex flex-wrap gap-10 justify-center">
          <ServiceCard
            image="/img/construcao3.jpg"
            title="Construções"
            description="Realize suas construções conosco"
            instagramLink="https://www.instagram.com/bcrconstrutora"
            whatsappLink="https://api.whatsapp.com/send?phone=11915939002"
            facebookLink="#"
            tiktokLink="#"
            hoverText=" seja de uma edificação ou de uma obra de arte, que são obras de maior porte destinadas a infraestrutura como pontes, viadutos ou túneis., algumas informações que devem constar no memorial descritivo de acordo com a ABNT:
            1. localização da obra.
            2. proprietário.
            3. detalhe de cada etapa da construção.
            4. alvenaria.
            5. acabamento.
            6. conceituação do projeto.
            7. normas adotadas para a realização dos cálculos.
            8. premissas básicas adotadas durante o projeto."
          />
          <ServiceCard
            image="/img/reformas.jpg"
            title="Reformas"
            description="Realize suas reformas conosco"
            instagramLink="https://www.instagram.com/bcrconstrutora"
            whatsappLink="https://api.whatsapp.com/send?phone=11915939002"
            facebookLink="#"
            tiktokLink="#"
            hoverText="Reforma é a forma, uma modificação na forma, na natureza ou no tamanho de algo, a fim de aprimorá-lo. Tambem pode ser realizado através de pequenos reparos, ou seja, aquilo que não estava agradável aos olhos do dono, e ou que ja tenha se passado muito tempo de sua construção inicial.
            Alvenaria 
            Elétrica 
            Hidráulica 
            Pintora etc tudo na área da construção civil 
            
            O que é reforma construção civil? Primeiramente, muitas edificações e construções comerciais ou residenciais precisam, em algum momento, de uma reforma. Dessa maneira, a reforma civil é uma espécie de serviço complexo e que precisa ser muito bem planejada antes de ser executada"
          />

          <ServiceCard
            image="/img/projetos.jpeg"
            title="Projetos Arquitetônicos"
            description="Desenvolvemos projetos personalizados"
            instagramLink="https://www.instagram.com/bcrconstrutora"
            whatsappLink="https://api.whatsapp.com/send?phone=11915939002"
            facebookLink="#"
            tiktokLink="#"
            hoverText="
            O projeto de obra é um instrumento crucial que compila informações relevantes desde a concepção até a entrega do espaço. Inclui cálculos estruturais, dimensionamento hidráulico e elétrico, disposição de ambientes, layout, cronograma de atividades e materiais necessários. Na BCR Construções, valorizamos a participação e influência do cliente na elaboração do projeto para atender às suas necessidades, garantindo segurança, qualidade e compromisso na execução da obra."
          />
          <ServiceCard
            image="/img/regularizacao.jpg"
            title="Regularização de Imóveis"
            description="Venha regularizar seus imóveis conosco"
            instagramLink="https://www.instagram.com/bcrconstrutora"
            whatsappLink="https://api.whatsapp.com/send?phone=11915939002"
            facebookLink="#"
            tiktokLink="#"
            hoverText="A regularização das edificações irregulares tem como objetivo legalizar construções erguidas sem prévia licença e à revelia da lei de zoneamento e do Código de Obras e Edificações."
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;