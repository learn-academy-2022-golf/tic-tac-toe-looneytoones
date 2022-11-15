import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'
import { useEffect } from 'react'

const App = () => {

const [squares, setSquares] = useState(Array(9).fill(null))
const [isX, setX] = useState(true)
const [winner, setWinner] = useState()
const [tieGame, setTieGame] = useState(false)

const handleReset = () => {
  setSquares(Array(9).fill(null))
  setX(true)
  setWinner("")
  setTieGame(false)
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
     newSquares[index] = isX ? "X" : "O"
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