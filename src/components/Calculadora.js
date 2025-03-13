import React, { useState } from "react";

export default function Calculadora() {
  const [numero, setNumero]             = useState(0);
  const [numeroAntigo, setNumeroAntigo] = useState(0);
  const [operador, setOperador]         = useState();

  function inserirNumero(e) {
    const input = e.target.value;
    if (input === ",") {
      setNumero(numero === 0 ? "0," : numero + ",");
    } else {
      setNumero(numero === 0 ? input : numero + input);
    }
  }

  function limpar() {
    setNumero(0);
  }

  function porcentagem() {
    setNumero(numero / 100);
  }

  function mudarSinal() {
    setNumero(numero > 0 ? -numero : Math.abs(numero));
  }

  function operadorHandler(e) {
    const operadorInput = e.target.value;
    setOperador(operadorInput);
    setNumeroAntigo(numero);
    setNumero(0);
  }

  function calcular() {
    const num1 = parseFloat(numeroAntigo.toString().replace(",", "."));
    const num2 = parseFloat(numero.toString().replace(",", "."));

    if (operador === "/") {
      setNumero(num1 / num2);
    } else if (operador === "X") {
      setNumero(num1 * num2);
    } else if (operador === "-") {
      setNumero(num1 - num2);
    } else if (operador === "+") {
      setNumero(num1 + num2);
    }
  }

  const displayNumero = numero.toString().replace(".", ",");

  return (
    <div style={{ width: '300px', margin: '50px auto', padding: '20px', borderRadius: '10px', backgroundColor: '#2e3b4e' }}>
        <div style={{backgroundColor: '#fff', padding: '10px', borderRadius: '5px', marginBottom: '10px'}}>
            <h1 style={{ textAlign: 'center', color: '' }}>{displayNumero}</h1>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
            <button style={buttonStyle} onClick={limpar}>AC</button>
            <button style={buttonStyle} onClick={mudarSinal}>+/-</button>
            <button style={buttonStyle} onClick={porcentagem}>%</button>
            <button style={buttonStyleOrange} onClick={operadorHandler} value="/">/</button>

            <button style={buttonStyle} onClick={inserirNumero} value={7}>7</button>
            <button style={buttonStyle} onClick={inserirNumero} value={8}>8</button>
            <button style={buttonStyle} onClick={inserirNumero} value={9}>9</button>
            <button style={buttonStyleOrange} onClick={operadorHandler} value="X">X</button>

            <button style={buttonStyle} onClick={inserirNumero} value={4}>4</button>
            <button style={buttonStyle} onClick={inserirNumero} value={5}>5</button>
            <button style={buttonStyle} onClick={inserirNumero} value={6}>6</button>
            <button style={buttonStyleOrange} onClick={operadorHandler} value="-">-</button>

            <button style={buttonStyle} onClick={inserirNumero} value={1}>1</button>
            <button style={buttonStyle} onClick={inserirNumero} value={2}>2</button>
            <button style={buttonStyle} onClick={inserirNumero} value={3}>3</button>
            <button style={buttonStyleOrange} onClick={operadorHandler} value="+">+</button>

            <button style={buttonStyle} onClick={inserirNumero} value={0}>0</button>
            <button style={buttonStyle} onClick={inserirNumero} value=",">,</button>
            <button style={buttonStyle}></button>
            <button style={buttonStyleOrange} onClick={calcular}>=</button>
        </div>
    </div>
  );
}

const buttonStyle = {
  padding: '20px',
  fontSize: '20px',
  backgroundColor: '#fff',
  border: '1px solid #ccc',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
  color: '#333'
};

const buttonStyleOrange = {
  ...buttonStyle,
  backgroundColor: '#ff8c00',
  color: '#fff'
};
