import { useState } from "react"

export default () => {

  const [status, setStatus] = useState(false);
  const [aba, setAba] = useState("1");

  function updateAba(e){
    const valor = e.target.value;
    setAba(valor);

    if(valor === "3"){
      setStatus(true);
    }else{
      setStatus(false);
    }
  }

  return (
    <>
      <h4>useState - Exercício 6 | Condições</h4>
      <hr />
      <p>Ativo: <strong>{status ? "Final da documentação ativa." : "Leitura inicial da documentação ativa."}</strong></p>
      <br />
      <label htmlFor="doc">Documentações</label>
      <br />
      <select onChange={(e) => updateAba(e)} id="doc">
        <option value="1">Aba 1</option>
        <option value="2">Aba 2</option>
        <option value="3">Aba 3</option>
      </select>
      
      {status && <p>Você concluiu a leitura total da documentação!</p>}
      {
        (aba === "1") ?
        (
          <p>Doc 1: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum similique minima impedit ducimus quas consequuntur architecto sit quibusdam. Culpa ratione labore commodi earum rerum. Labore ab mollitia animi dicta itaque!</p>
        )
        :
        (aba === "2") ?
        (
          <p>Doc 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, fuga? Voluptate, ex natus quaerat similique veniam sint soluta assumenda magni error beatae aliquid quam nulla, impedit reprehenderit asperiores, maiores sit?</p>
        )
        :
        (
          <p>Doc 3: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, fuga? Voluptate, ex natus quaerat similique veniam sint soluta assumenda magni error beatae aliquid quam nulla, impedit reprehenderit asperiores, maiores sit?</p>
        )
      }

    </>
  )

}