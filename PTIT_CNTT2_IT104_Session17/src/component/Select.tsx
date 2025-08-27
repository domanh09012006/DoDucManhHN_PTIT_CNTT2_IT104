import React, { useState } from 'react'

function Select() {
    const[city, setCity] = useState("")
    const handleChange = (event) =>{
        setCity(event.target.value)
    }
  return (
    <div>
        <select name="" id="" value={city} onChange={handleChange}>
            <option value="Thai Binh">Thai Binh</option>
            <option value="Ha Noi">Ha Noi</option>
            <option value="Hai phong">Hai phong</option>
        </select>
        {city && <p>Thanh pho: {city}</p>}


    </div>
  )
}

export default Select