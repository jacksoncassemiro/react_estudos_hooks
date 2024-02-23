export default ({text, func, item, valor}) => {

  return (
    <>
      <button onClick={() => func(item, valor)}>{text}</button>
    </>
  )
}