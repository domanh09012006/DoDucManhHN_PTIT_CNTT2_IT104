import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../store/store'
import { decrement, increment, reset } from './counterSlice'

export default function Counter() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()
  return (
    <div>
        <div>Count: {count}</div>
        <button onClick={()=> {dispatch(increment())}}>Increase</button>
        <button onClick={()=> {dispatch(decrement())}}>Decrease</button>
        <button onClick={()=> {dispatch(reset())}}>Reset</button>
    </div>
  )
}
