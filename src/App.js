import { useEffect, useState } from 'react'
import Wordle from './components/Wordle'


const solutions = [
  {"id": 1, "word": "rahul"},
  {"id": 2, "word": "spade"},
  {"id": 3, "word": "pools"},
  {"id": 4, "word": "drive"},
  {"id": 5, "word": "relax"},
  {"id": 6, "word": "times"},
  {"id": 7, "word": "train"},
  {"id": 8, "word": "cores"},
  {"id": 9, "word": "pours"},
  {"id": 10, "word": "blame"},
  {"id": 11, "word": "banks"},
  {"id": 12, "word": "phone"},
  {"id": 13, "word": "bling"},
  {"id": 14, "word": "coins"},
  {"id": 15, "word": "hello"},
  {"id": 16, "word": "black"},
  {"id": 17, "word": "white"}
]


function App() {
  const [solution, setSolution] = useState(null)
  
  useEffect(() => {
      const randomSolution = solutions[Math.floor(Math.random()*solutions.length)]
      setSolution(randomSolution.word)
  }, [setSolution])

  return (
    <div className="App">
      <h1>Wordle (Lingo)</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  )
}

export default App
