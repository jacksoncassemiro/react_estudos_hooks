import { useState, useEffect } from "react";

export default () => {

  const [paises, setPaises] = useState([])

  // https://restcountries.com/v3.1/all

  useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
      .then(resposta => resposta.json())
      .then(dados => setPaises(dados))
  },[])

  return (
    <>
      <h4>useState - Exercício 9 | UseEffect - Países</h4>
      <hr />
      <ul>
        {paises.map(pais => {
          return <li key={pais.cca2}>{pais.name.common}</li>
        })}
      </ul>
    </>
  )

}