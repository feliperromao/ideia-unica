import { useState } from 'react'

function Home() {
  return (
    <div>
      <h1>Pagina Inicial</h1>
      <Contador></Contador>
    </div>
  )
}

function Contador() {
  const [contador, setContador] = useState(1)
  function addContador() {
    setContador(contador + 1)
  }
  return (
    <div>
      <div>Contador: {contador}</div>
      <button onClick={addContador}>Adicionar</button>
    </div>
  )
}

export default  Home