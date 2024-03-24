import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, addBy } from '../../store/counterSlice'
function CounterPage() {
  
  const { count } = useSelector((state) => state.counter) // getter
  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }


  return (
    <div>
        <div style={{fontSize: '50px'}}>{count}</div>
        <div>
            <button type='button' style={{padding: '20px', margin: '10px'}} onClick={handleIncrement}>+1</button>
            <button type='button' style={{padding: '20px', margin: '10px'}} onClick={handleDecrement}>-1</button>
            <button onClick={() => dispatch(addBy(10))}>+10</button>
        </div>
    </div>
  )
}

export default CounterPage