import { useState, useEffect, useRef } from "react";

export default () => {

  const [valor, setValor] = useState(0)
  const renderInicial = useRef(true)
  
  useEffect(()=>{
    if(renderInicial.current){
      
      renderInicial.current = false;

    }else{
      console.log("Renderização apenas após a primeira renderização.")
    }
  },[valor])

  useEffect(() => {
    console.log("componente iniciado apenas na primeira renderização")
  },[])
  
  useEffect(() => {
    console.log("Execução do useState de valor")
  },[valor])
  
  console.log("componente renderizado ou alterado")

  return (
    <>
      <h4>useState - Exercício 8 | UseEffect</h4>
      <hr />
      <p>Valor: {valor}</p>
      <button onClick={() => setValor(preValor => preValor + 1)}>Adiciona</button>
    </>
  )

}