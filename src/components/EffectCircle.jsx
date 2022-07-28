import React, { useEffect, useState } from 'react';
import './circle.css';

function EffectCircle(props) {
  const [myColor, setMyColor] = useState(props.color);
  const [mySize, setMySize] = useState(props.size);

  console.log('%c Render Componente Circle', 'color: lightgreen');

  // sin array de "dependencias" => se ejecuta en cada actualización/render del componente
  useEffect(() => {
    console.log('%c Este UseEffect se llama en cada render', 'color: pink');
  });

  // array de dependencias vacío => efecto para el primer render o "montaje" del componente
  useEffect(() => {
    console.log('%c Este UseEffect una unica vez', 'color: lightblue');
    return () =>
      console.log('%c UseEffect desmontaje del componente', 'color: red');
  }, []);

  // Valores del "state" en el array de dependencias => el efecto se ejecuta cuando cambia el estado "myColor"
  useEffect(() => {
    console.log('%c UseEffect cuando cambia el color/size', 'color: yellow');
  }, [myColor]);

  // objeto de estilos para modificar el color/tamaño del <div>
  const styleCircle = {
    backgroundColor: myColor,
    width: mySize,
    height: mySize,
  };

  function changeColor() {
    setMyColor('darkblue');
  }

  function changeSize() {
    setMySize('70px');
  }

  function resetAll() {
    setMySize(props.size);
    setMyColor(props.color);
  }

  return (
    <div>
      <div className="circle" style={styleCircle} />
      <button onClick={changeColor}>Change Color</button>
      <button onClick={changeSize}>Change Size</button>
      <button onClick={resetAll}>Reset All</button>
    </div>
  );
}

export default EffectCircle;
