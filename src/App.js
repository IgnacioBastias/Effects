import React from "react";
import "./style.css";
import EffectCircle from './components/EffectCircle';
import Caja from './components/Caja';

export default function App() {
  console.clear();  
  return (
    <div>
      <h1>Ciclo de Vida y useEffect ⚛</h1>              
        <Caja>
          <EffectCircle color="pink" size="80px"/>  
        </Caja>
      </div>
  );
}
