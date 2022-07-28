import React, { useState , useEffect } from "react";

function Caja(props) {

  const [ circles, setCircles ] = useState(props.children)

  function desmontar(){
    setCircles([])
  }

  return (
    <div 
      style={{borderColor: props.color}} 
      id="caja" 
      className="caja"
    >    
       {circles}
       <button onClick={desmontar}>X</button>
    </div>
  );
}

export default Caja;
