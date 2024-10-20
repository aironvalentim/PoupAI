import React from 'react';
import Navbar from './componentes/navbar';
import Dropdow from './componentes/dropdown';
import { useValor, ValorProvider } from './componentes/valorcontext';

const App: React.FC = () => (
  <div>
    <ValorProvider>
      <Navbar />
      <Dropdow />
    </ValorProvider>
  </div>
);

export default App;