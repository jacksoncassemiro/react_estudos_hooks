import { useState } from "react";
import "./UseState_04.css";
import Btn from "./UseState_05_button";

export default () => {

  const [valor, setValor] = useState(0)

  function atualiza(){
    setValor(10000)
  }

  return (
    <>
      <h4>useState - Exercício 3</h4>
      <p><strong>Valor: {valor}</strong></p>
      <br />
      <hr />
      <br />
      <Btn func={atualiza} />
    </>
  )
}