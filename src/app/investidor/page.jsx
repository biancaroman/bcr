'use client'

import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from '../components/NavBar';
import Image from 'next/image';
import imagemInvestidor from "/public/img/investidores2.jpg";
import Footer from '../components/Footer';

const Investidor = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [assunto, setAssunto] = useState('');
  const [valor, setValor] = useState('');
  const [retorno, setRetorno] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [camposInvalidos, setCamposInvalidos] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const camposObrigatorios = [
      { campo: 'nome', valor: nome },
      { campo: 'email', valor: email },
      { campo: 'telefone', valor: telefone },
      { campo: 'assunto', valor: assunto },
      { campo: 'valor', valor: valor },
      { campo: 'retorno', valor: retorno },
    ];

    const camposNaoPreenchidos = camposObrigatorios.filter(({ valor }) => !valor.trim());

    setCamposInvalidos(camposNaoPreenchidos);

    if (camposNaoPreenchidos.length > 0) {
      return;
    }

    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('email', email);
    formData.append('telefone', telefone);
    formData.append('assunto', assunto);
    formData.append('valor', valor);
    formData.append('retorno', retorno);
    formData.append('mensagem', mensagem);

    try {
      const response = await fetch('https://api.sheetmonkey.io/form/4LXUitxaGXs1QMHnatZMPs', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Formulário enviado com sucesso!');
        toast.success('Dados enviados com sucesso!', { position: 'bottom-center' });

        setNome('');
        setEmail('');
        setTelefone('');
        setAssunto('');
        setValor('');
        setRetorno('');
        setMensagem('');
      } else {
        console.error('Erro ao enviar formulário:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error.message);
    }
  };

  return (
    <div className='w-full h-[90vh]'>
      <NavBar isBlackBackground={true} />
      <Image src={imagemInvestidor} className='w-full lg:h-[500px] h-[400px] object-cover' style={{ filter: 'brightness(0.7)' }} />
      <div className='flex justify-center items-center'>
        <div className='absolute mx-auto left-0 right-0 w-full max-w-[600px] lg:h-[400px] h-[300px] flex flex-col text-white p-4 text-center'>
          <h1 className='font-bold sm:text-5xl text-4xl '>INVESTIDORES</h1>
          <hr className="hidden sm:block mt-5 ml-52 w-40 border-b-4 border-yellow-400" />
        </div>
      </div>
      <div className='max-w-[1140px] m-auto w-full p-4 py-16'>
        <h2 className='p-2 text-gray-700'>Seu dinheiro rendendo mais que banco</h2>
        <p className='p-2 text-gray-700 py-2'>
          Preencha o formulário a seguir, que retornaremos em breve!
        </p>
        <div className='grid'>
          <form onSubmit={handleSubmit}>
            <div className='grid'>
<input
  className={`border col-span-2 m-2 p-2 ${camposInvalidos.map(({ campo }) => campo === 'nome' && 'border-red-500').join(' ')}`}
  type='text'
  placeholder='Nome Completo'
  value={nome}
  onChange={(e) => setNome(e.target.value)}
/>
{camposInvalidos.map(({ campo, valor }) => campo === 'nome' && !valor.trim() && (
  <div key={campo} className="text-red-500 text-xs mt-1">
    *Campo obrigatório
  </div>
))}

<input
  className={`border col-span-2 lg:col-span-1  m-2 p-2${camposInvalidos.map(({ campo }) => campo === 'email' && 'border-red-500').join(' ')}`}
  type='email'
  placeholder='Email'
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
{camposInvalidos.map(({ campo, valor }) => campo === 'email' && !valor.trim() && (
  <div key={campo} className="text-red-500 text-xs mt-1">
    *Campo obrigatório
  </div>
))}

<input
  className={`border col-span-2 lg:col-span-1  m-2 p-2 ${camposInvalidos.map(({ campo }) => campo === 'telefone' && 'border-red-500').join(' ')}`}
  type='tel'
  placeholder='Telefone'
  value={telefone}
  onChange={(e) => setTelefone(e.target.value)}
/>
{camposInvalidos.map(({ campo, valor }) => campo === 'telefone' && !valor.trim() && (
  <div key={campo} className="text-red-500 text-xs mt-1">
    *Campo obrigatório
  </div>
))}

<input
  className={`border col-span-2 m-2 p-2 ${camposInvalidos.map(({ campo }) => campo === 'assunto' && 'border-red-500').join(' ')}`}
  type='text'
  placeholder='Assunto'
  value={assunto}
  onChange={(e) => setAssunto(e.target.value)}
/>
{camposInvalidos.map(({ campo, valor }) => campo === 'assunto' && !valor.trim() && (
  <div key={campo} className="text-red-500 text-xs mt-1">
    *Campo obrigatório
  </div>
))}

<input
  className={`border col-span-2 m-2 p-2 ${camposInvalidos.map(({ campo }) => campo === 'valor' && 'border-red-500').join(' ')}`}
  type='text'
  placeholder='Valor de Investimento'
  value={valor}
  onChange={(e) => setValor(e.target.value)}
/>
{camposInvalidos.map(({ campo, valor }) => campo === 'valor' && !valor.trim() && (
  <div key={campo} className="text-red-500 text-xs mt-1">
    *Campo obrigatório
  </div>
))}

<select
  className={`border col-span-2 m-2 p-4 h-12 text-gray-400${camposInvalidos.map(({ campo }) => campo === 'retorno' && 'border-red-500').join(' ')}`}
  value={retorno}
  onChange={(e) => setRetorno(e.target.value)}
>
  <option disabled value="">Retorno de Investimento</option>
  <option>15 meses</option>
  <option>24 meses</option>
  <option>36 meses</option>
</select>
{camposInvalidos.map(({ campo, valor }) => campo === 'retorno' && !valor.trim() && (
  <div key={campo} className="text-red-500 text-xs mt-1">
    *Campo obrigatório
  </div>
))}

{/* Adicione a seguinte linha para aplicar a mesma estilização ao campo select */}
{camposInvalidos.map(({ campo, valor }) => campo === 'retorno' && !valor.trim() && (
  <div key={campo} className="text-red-500 text-xs mt-1">
    *Campo obrigatório
  </div>
))}
              <textarea
                className={`border col-span-2 m-2 p-2 ${camposInvalidos.map(({ campo }) => campo === 'mensagem' && 'border-red-500').join(' ')}`}
                cols='30'
                rows='10'
                placeholder='Conte-nos um pouco mais sobre seu Investimento'
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
              ></textarea>

              <button className='col-span-2 bg-gray-300 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white py-2 px-4 rounded-md'>
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer position="bottom-center" autoClose={5000} />
      <Footer />
    </div>
  );
};

export default Investidor;