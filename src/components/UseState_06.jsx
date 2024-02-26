import { useState } from "react"
import Btn from "./UseState_06_button";
import Btns from "./UseState_06_button2";

export default () => {

  const [valor, setValor] = useState(0)
  const [v1, setV1] = useState(0)
  const [v2, setV2] = useState(0)

  function diminuir(qtd){
    setValor(valor - qtd)
  }

  function adicionar(qtd){
    setValor(valor + qtd)
  }

  function addition1(qtd){
    setV1(v1 + qtd)
  }

  function addition2(qtd){
    setV2(v2 + qtd)
  }

  return (
    <>
      <h4>useState - Exercício 4</h4>
      <p>Valor: <strong>{valor}</strong></p>
      <p>Adição de valor {v1} + {v2}: <strong>{v1 + v2}</strong></p>
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
      <hr />
      <Btns func={addition1} valor={5} />
      <br />
      <br />
      <Btns func={addition2} valor={10} />
    </>
  )

}