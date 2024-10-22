import React, { useState } from 'react';
import Navbar from './componentes/navbar';
import Dropdow from './componentes/dropdown';
import { useValor, ValorProvider } from './componentes/valorcontext';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1); 

  return (
    <div>
      <ValorProvider>
        <Navbar currentStep={currentStep} changeStep={setCurrentStep} />
        <Dropdow />
        <div>
        </div>
      </ValorProvider>
    </div>
  );
};

export default App;
