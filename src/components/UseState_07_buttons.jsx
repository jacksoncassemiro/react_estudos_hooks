export default ({func, index}) => {

  return (
    <>
      <button onClick={() => func(-1, index)}>-</button>   
      <button onClick={() => func(1, index)}>+</button>   
    </>
  )

}