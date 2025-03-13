import React, { useState } from "react";

export default function Calculadora() {
  const [expressao, setExpressao] = useState("");
  const [resultado, setResultado] = useState("");

  function inserirNumero(e) {
    const valor = e.target.value;
    if (valor === "," && /[0-9]*,[0-9]*$/.test(expressao)) return;
    setExpressao((prev) => prev + valor);
  }

  function limpar() {
      setExpressao("");
      setResultado("");
  }

  function mudarSinal() {
    try {
        const valor = eval(expressao.replace(",", "."));
        setExpressao((valor * -1).toString().replace(".", ","));
        setResultado((valor * -1).toString().replace(".", ","));
    } catch {
        setResultado("Erro");
    }
  }

  function porcentagem() {
    try {
        const valor = eval(expressao.replace(",", "."));
        setExpressao((valor / 100).toString().replace(".", ","));
        setResultado((valor / 100).toString().replace(".", ","));
    } catch {
        setResultado("Erro");
    }
  }

  function operadorHandler(e) {
    const operador = e.target.value;
    if (expressao !== "" && !/[+\-*/]$/.test(expressao)) {
        setExpressao((prev) => prev + operador);
    }
  }

  function calcular() {
    try {
        const valor = eval(expressao.replace(/,/g, ".").replace("X", "*"));
        setResultado(valor.toString().replace(".", ","));
        setExpressao(valor.toString().replace(".", ","));
    } catch {
        setResultado("Erro");
    }
  }

  return (
    <div style={{ width: '300px', margin: '50px auto', padding: '20px', borderRadius: '10px', backgroundColor: '#2e3b4e' }}>
        <div style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
            <h2 style={{ textAlign: 'right', color: '#888', minHeight: '24px' }}>{expressao || "\u00A0"}</h2>
            <h1 style={{ textAlign: 'right' }}>{resultado || "0"}</h1>
        </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
          <button style={buttonStyle} onClick={limpar}>AC</button>
          <button style={buttonStyle} onClick={mudarSinal}>+/-</button>
          <button style={buttonStyle} onClick={porcentagem}>%</button>
          <button style={buttonStyleOrange} onClick={operadorHandler} value="/">/</button>

          <button style={buttonStyle} onClick={inserirNumero} value="7">7</button>
          <button style={buttonStyle} onClick={inserirNumero} value="8">8</button>
          <button style={buttonStyle} onClick={inserirNumero} value="9">9</button>
          <button style={buttonStyleOrange} onClick={operadorHandler} value="*">X</button>

          <button style={buttonStyle} onClick={inserirNumero} value="4">4</button>
          <button style={buttonStyle} onClick={inserirNumero} value="5">5</button>
          <button style={buttonStyle} onClick={inserirNumero} value="6">6</button>
          <button style={buttonStyleOrange} onClick={operadorHandler} value="-">-</button>

          <button style={buttonStyle} onClick={inserirNumero} value="1">1</button>
          <button style={buttonStyle} onClick={inserirNumero} value="2">2</button>
          <button style={buttonStyle} onClick={inserirNumero} value="3">3</button>
          <button style={buttonStyleOrange} onClick={operadorHandler} value="+">+</button>

          <button style={buttonStyle} onClick={inserirNumero} value="0">0</button>
          <button style={buttonStyle}onClick={inserirNumero}value=","disabled={/[\d]+\,[\d]*$/.test(expressao)}></button>
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
