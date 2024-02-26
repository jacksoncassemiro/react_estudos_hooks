import { useState } from "react"

export default ({func, valor}) => {

  return (
    <>
      <button onClick={() => func((-1) * valor)}>-</button>
      <button onClick={() => func(valor)}>+</button>
    </>
  )

}