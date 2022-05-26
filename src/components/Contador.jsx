import React, { useState } from 'react'
import "./contador.css";

const Contador = () => {

    const [contador,setContador] = useState(0);

    const incrementarContador = () =>{
        if(contador >= 0){
            setContador(contador + 1);
        }
    };

    const decrementarContador = () =>{
        if(contador >= 1){
            setContador(contador -1);
        }
    };

  return (
    <>
        <div className='center'>
            <div className='contador'>
                <h1>{contador}</h1>
            </div>
            <div className='boton'>
                <button className='btn' onClick={decrementarContador}>
                    <i className='fas fa-minus'></i>
                </button>
                <button className='btn' onClick={incrementarContador}>
                    <i className='fas fa-plus'></i>
                </button>
            </div>
        </div>
    </>
  )
}

export default Contador