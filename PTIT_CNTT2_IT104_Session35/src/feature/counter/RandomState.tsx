import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { random } from './randomSlice'
import type { RootState } from '../../store/store'

export default function RandomState() {
    const number = useSelector((state: RootState) => state.random.list)

    const dispatch = useDispatch()
  return (
    <div>
        <div>List:[{number + ','}]</div>
        <button onClick={()=>{dispatch(random())}}>Random Number</button>
    </div>
  )
}
