import { useState } from "react"

export default ({func, text}) => {

  return (
    <>
      <button onClick={func}>{text}</button>
    </>
  )

}