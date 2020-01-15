import React from 'react';

// Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Estado: Informações que um componente PAI passa para o componente FILHO
// Propriedade

import Header from './Header';

function App() {
  return (
    <>
      <Header title="Titulo 1" />
      <Header title="Titulo 2" />
      <Header title="Titulo 3" />
    </>
  );
}

export default App;
