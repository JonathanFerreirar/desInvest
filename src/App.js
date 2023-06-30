import { getApi } from './api/api'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    console.log(getApi())
  }, [])
  return (
    <div className="App flex justify-center">
      <h1>Hello everyone welcome to React</h1>
      <h2>Idhjsadiosio</h2>
    </div>
  )
}

export { App }
