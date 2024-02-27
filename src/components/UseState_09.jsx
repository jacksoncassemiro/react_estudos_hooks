import { useState } from "react";
import "./UseState_09.css";

export default () => {

  const [status, setStatus] = useState(false);
  const classFundo1 = "fundo_1";
  const classFundo2 = "fundo_2";

  return (
    <>
      <h4>useState - Exercício 7 | Condições aplicando classes css</h4>
      <hr />
      <p className={`color ${status ? classFundo1 : classFundo2}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis impedit sapiente perferendis, id fugiat modi dolore asperiores veritatis nemo laboriosam rem, quisquam exercitationem illo mollitia. Magnam at reiciendis ad corrupti?</p>
      <br />
      <button onClick={() => setStatus(!status)}>Alterna fundo</button>

    </>
  )

}