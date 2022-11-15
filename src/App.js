import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'
import { useEffect } from 'react'

const App = () => {

const [squares, setSquares] = useState(Array(9).fill(null))
const [isX, setX] = useState(true)
const [winner, setWinner] = useState()
const [tieGame, setTieGame] = useState(false)
const emojis1 = ["X", "🧘🏼‍♀️", "⛳️", "🏑"]
const emojis2 = ["O", "📱", "💡", "🧮"]
const [selectEmoji1, setSelectEmoji1] = useState("X")
const [selectEmoji2, setSelectEmoji2] = useState("O")


const handleReset = () => {
  setSquares(Array(9).fill(null))
  setX(true)
  setWinner("")
  setTieGame(false)
}

const setselectEmoji1 = (e) => {
  console.log(e.target.value);
  setSelectEmoji1(e.target.value)
}

const setselectEmoji2 = (e) => {
  setSelectEmoji2(e.target.value)
}

const calculateWinner = (squares) =>  {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      setWinner(squares[a])
      return squares[a];
    }
  }  
  return null;
}

  const handleGame = (index) => {
    const newSquares = [...squares]
    if (calculateWinner(newSquares) || newSquares[index]) return
     newSquares[index] = isX ? selectEmoji1 : selectEmoji2
     console.log(selectEmoji1);
     console.log(selectEmoji2);

    setX(!isX)
    setSquares(newSquares)
  }

  const tie = (squares) => {
    if (!squares.includes(null))
      setTieGame(true)
  }

  useEffect(()=> {
    calculateWinner(squares)
    tie(squares)
  }, [squares])

  return (
    <div className='main'>
    <div className='header'>
      <h1>Tic Tac Toe</h1>
      <div className='playerSelect'>

        <label>Player 1:</label>
        <select onChange={setselectEmoji1}>
          {emojis1.map((item, index) => {
            return (
              <option value={item} key={index}>
                {item}
              </option>
            )
          })}
        </select>

        <label>Player 2:</label>
        <select onChange={setselectEmoji2}>
          {emojis2.map((item, index) => {
            return (
              <option value={item} key={index}>
                {item}
              </option>
            )
          })}
        </select>


      </div>
      {isX ? <h3>Player X</h3> : <h3>Player O</h3>}
    </div>
      
      <div className='gameboard'>
      {squares.map((value, index) => {
        return(
          <Square 
          value={value}
          index={index}
          key={index}
          handleGame={handleGame}
                />
          )
      })}
      </div> 
      <div className="button-div">
        <button onClick={handleReset}>Reset</button>
      </div>
      
      {winner ? <div className="winner">
        <h2>The Winner Is: {winner}</h2>
        </div> : <></>}  
        {tieGame ? <div className="winner">
        <h2>The Game is a Tie!</h2>
        </div> : <></>}  
    </div>
  )
}

export default App