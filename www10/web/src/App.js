// Três conceitos principais do React
// Você sabe React?

// Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação. É uma função que retorna um conteúdo HTML. O nome dos componentes são identificados pela letra MAIUSCULA.

// Propriedade:Informações que um componente PAI passa para o componente FILHO . São quivaletens aos atributos do HTML. ex.: <Header title="Deshboard">

// Estado: Informações mantidas pelo componente (Lembrar: Imutabilidade). Função mantida, lida e atualizada pelo próprio componente.

// navigator.geolocation.getCurrentPosition = Função disponível em todos os navegadores que dispara uma caixa para o usuário perguntando se aceita disponibilizar sua localização.

// useState: função usada pelo react para criar um estado.
// useEffect: disparar uma função toda vez que uma informação alterar
import React, { useState, useEffect } from 'react';
import api from './services/api';


import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';


function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
    
      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
   
    const response = await api.post('/devs', data);

    // Remoção = .filter, Alteração = .map ...)
    setDevs([...devs, response.data]);

  }

  return (
    <div id='app'>
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
