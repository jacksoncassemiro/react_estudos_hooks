import { useState } from "react"
import Btn from "./UseState_06_button";

export default () => {

  const [valor, setValor] = useState(0)

  function diminuir(qtd){
    setValor(valor - qtd)
  }

  function adicionar(qtd){
    setValor(valor + qtd)
  }

  return (
    <>
      <h4>useState - Exercício 4</h4>
      <p>Valor: <strong>{valor}</strong></p>
      <br />
      <hr />
      <Btn
        func={() => diminuir(5)}
        text={"D 5"}
      />
      <Btn
        func={() => adicionar(5)}
        text={"A 5"}
      />
      <hr />
      <Btn
        func={() => diminuir(10)}
        text={"D 10"}
      />
      <Btn
        func={() => adicionar(10)}
        text={"A 10"}
      />
    </>
  )

}