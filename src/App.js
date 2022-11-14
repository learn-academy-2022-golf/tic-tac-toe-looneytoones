import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {

  const [squares, setSquares] = useState(Array(9).fill(null))

  return (
    <div className='main'>
    <div className='header'>
    <h1>Tic Tac Toe</h1>
    </div>
      
      <div className='gameboard'>
      {squares.map((value, index) => {
        return(
        <Square value={value}
                index={index}
                />
        )
      })}

      </div>    
    </div>
  )
}

export default App