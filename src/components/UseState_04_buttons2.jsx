import { useState } from "react";

export default ({ valorQuantidade }) => {

  const [valor, setValor] = useState(0)

  function diminuir(quantidade){
    if (valor === 0) return;
    setValor(valor - quantidade)
  }

  function aumentar(quantidade){
    if (valor === 20) return;
    setValor(valor + quantidade)
  }

  return (
    <>
      <div className="container__item">
        <p>Valor: {valor}</p>
        <div className="item__buttons">
          <button onClick={() => diminuir(valorQuantidade)}>-</button>
          <button onClick={() => aumentar(valorQuantidade)}>+</button>
        </div>
      </div>
    </>
  )
}