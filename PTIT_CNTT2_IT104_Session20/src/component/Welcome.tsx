import React, { useEffect } from 'react'

export default function Welcome() {
    useEffect(()=>{
        console.log("Component da duoc render lan dau")
    }, [])
  return (
    <div>
        <p>Chao mung ban den voi ung dung cua chung toi</p>
    </div>
  )
}
