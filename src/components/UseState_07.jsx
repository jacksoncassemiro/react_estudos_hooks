import { useState } from "react"
import Btns from "./UseState_07_buttons";

export default () => {

  const [array, setArray] = useState([0,0,0])

  function updateArray(valor, index){
    const up = [...array];
    up[index] += valor;
    setArray(up)
  }

  return (
    <>
      <h4>useState - Exercício 5</h4>
      <p>Index 0: <strong>{array[0]}</strong></p>
      <br />
      <Btns 
        func={updateArray}
        index={0}
      />
      <hr />
      <p>Index 1: <strong>{array[1]}</strong></p>
      <br />
      <Btns 
        func={updateArray}
        index={1}
      />
      <hr />
      <p>Index 2: <strong>{array[2]}</strong></p>
      <br />
      <Btns 
        func={updateArray}
        index={2}
      />
      <hr />     
    </>
  )

}