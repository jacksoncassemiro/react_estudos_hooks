import { useState } from "react";
import "./UseState_04.css";
import Btn from "./UseState_04_buttons";
import Items from "./UseState_04_buttons2";

export default () => {

  const [contadores, setContadores] = useState({
    c1: 0,
    c2: 0,
    c3: 0
  })

  function aumentar(item, valor) {

    if (contadores[item] === 20) return;

    setContadores({
      ...contadores,
      [item]: contadores[item] + valor
    })

  }

  function diminuir(item, valor) {

    if (contadores[item] === 0) return;

    setContadores({
      ...contadores,
      [item]: contadores[item] - valor
    })

  }

  return (
    <>
      <h4>useState - Exercício 2</h4>
      <div className="container">
        <Items valorQuantidade={1} />
        <hr />
        <Items valorQuantidade={5} />
        <hr />
        <Items valorQuantidade={10} />
      </div>
      <div className="container">
        <div className="container__item">
          <p>Valor: {contadores.c1}</p>
          <div className="item__buttons">
            <Btn
              text="-"
              func={diminuir}
              item="c1"
              valor={1}
            />
            <Btn
              text="+"
              func={aumentar}
              item="c1"
              valor={1}
            />
          </div>
        </div>
        <hr />
        <div className="container__item">
          <p>Valor: {contadores.c2}</p>
          <div className="item__buttons">
            <Btn
              text="-"
              func={diminuir}
              item="c2"
              valor={5}
            />
            <Btn
              text="+"
              func={aumentar}
              item="c2"
              valor={5}
            />
          </div>
        </div>
        <hr />
        <div className="container__item">
          <p>Valor: {contadores.c3}</p>
          <div className="item__buttons">
            <Btn
              text="-"
              func={diminuir}
              item="c3"
              valor={10}
            />
            <Btn
              text="+"
              func={aumentar}
              item="c3"
              valor={10}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container__item">
          <p>Valor: {contadores.c1}</p>
          <div className="item__buttons">
            <button onClick={() => diminuir("c1", 1)}>-</button>
            <button onClick={() => aumentar("c1", 1)}>+</button>
          </div>
        </div>
        <hr />
        <div className="container__item">
          <p>Valor: {contadores.c2}</p>
          <div className="item__buttons">
            <button onClick={() => diminuir("c2", 5)}>-</button>
            <button onClick={() => aumentar("c2", 5)}>+</button>
          </div>
        </div>
        <hr />
        <div className="container__item">
          <p>Valor: {contadores.c3}</p>
          <div className="item__buttons">
            <button onClick={() => diminuir("c3", 10)}>-</button>
            <button onClick={() => aumentar("c3", 10)}>+</button>
          </div>
        </div>
      </div>
    </>
  )
}