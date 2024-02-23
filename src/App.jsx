import React from "react";
import HookState1 from "./components/UseState_01"
// import { useState } from "react"

export default () => {

  // const [valor, setValor] = useState(0);

  // function aumentar(){
  //   setValor(v => v + 1)
  // }

  // function diminuir(){
  //   setValor(v => v - 1)
  // }

  return (
    <>
      {/* <h1>Valor: {valor}</h1> */}
      {/* <button onClick={aumentar}>Aumentar uma unidade</button>
      <button onClick={diminuir}>Diminuir uma unidade</button> */}
      <h1>React Hooks</h1>
      <HookState1 />
    </>
  )
}
