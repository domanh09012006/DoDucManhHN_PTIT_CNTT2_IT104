import React, { useState } from 'react'

function CounText () {
    const[coun, setCoun] = useState("")
    const handleChange = (event) =>{
        setCoun(event.target.value)
    }
  return (
    <div>
        <input type="text" value={coun} onChange={handleChange} />
        <p>So ki tu: {coun.length}</p>
    </div>
  )
}

export default CounText 