import React from 'react'

function Footer() {
  return (
<footer style={{ backgroundImage: "url('/img/footer.jpg')", backgroundSize: 'cover' }}>
  <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-24">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
        <a href='/'>
          <img src="/img/logobcr2.png" class="mr-5 h-44" alt="logo" style={{ filter: 'brightness(0%)' }}/>
        </a>
        <p class="max-w-xs mt-4 text-sm text-black">
        A BCR Construções e Incorporações vem desde 2016 transformando idéias e projetos em realidade com carinho e dedicação, se aperfeiçoando a cada dia pois amamos o que fazemos.
        </p>
        <div class="flex mt-8 space-x-6 text-gray-600">
          <a class="hover:opacity-75" href target="_blank" rel="noreferrer">
            <span class="sr-only"> Facebook </span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
          <a class="hover:opacity-75" href='https://www.instagram.com/bcrconstrutora"' target="_blank" rel="noreferrer">
            <span class="sr-only"> Instagram </span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
          </a>
          <a class="hover:opacity-75" href='https://api.whatsapp.com/send?phone=11915939002' target="_blank" rel="noreferrer">
            <span class="sr-only"> WhatsApp </span>
            <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
        </a>
          <a class="hover:opacity-75" href target="_blank" rel="noreferrer">
            <span class="sr-only"> TikTok </span>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72c.02 1.48-.04 2.96-.04 4.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11 1.04-1.36 1.75c-.21.51-.15 1.07-.14 1.61c.24 1.64 1.82 3.02 3.5 2.87c1.12-.01 2.19-.66 2.77-1.61c.19-.33.4-.67.41-1.06c.1-1.79.06-3.57.07-5.36c.01-4.03-.01-8.05.02-12.07"/></svg>
          </a>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p class="text-2xl border-b-4 border-black w-16">
            Links
          </p>
          <nav class="flex flex-col mt-6 space-y-6 text-md text-gray-500">
            <a class="hover:opacity-75" href='/'> Home </a>
            <a class="hover:opacity-75" href='/quem-somos'> Quem somos </a>
            <a class="hover:opacity-75" href='/galeria-imagens'> Galeria </a>
            <a class="hover:opacity-75" href='/contato'> Contato </a>
          </nav>
        </div>
        <div>
          <a class="text-2xl border-b-4 border-black w-16" href='/nossos-servicos'>
            Serviços
          </a>
          <nav class="flex flex-col mt-6 space-y-6 text-md text-gray-500">
            <a class="hover:opacity-75" href='#'> Construção </a>
            <a class="hover:opacity-75" href='#'> Reformas </a>
            <a class="hover:opacity-75" href='#'> Projetos</a>
            <a class="hover:opacity-75" href='#'> Regularização <br /> de imóveis </a>
          </nav>
        </div>
        <div>
          <p class="text-2xl border-b-4 border-black w-28">
            Contatos
          </p>
          <nav class="flex flex-col mt-6 space-y-6 text-md text-gray-500">
            <a class="hover:opacity-75" href='/contato'> Página de Contato </a>
            <a class="hover:opacity-75" href={`https://api.whatsapp.com/send?phone=11915939002`} target="_blank" rel="noreferrer" >Whatsapp</a>
            <a href={`mailto:faleconosco@bcrconstrutora.com.br`} className="hover:opacity-75" target="_blank" rel="noreferrer">E-mail</a>
          </nav>
        </div>
      </div>
    </div>
    <p class="mt-8 text-xs text-gray-800">
      © 2023 BCR Construções, Incorporações e Participações LTDA
    </p>
  </div>
</footer>
  )
}

export default Footer