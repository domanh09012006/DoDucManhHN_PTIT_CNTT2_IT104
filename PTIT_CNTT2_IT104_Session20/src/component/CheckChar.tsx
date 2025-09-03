import React, { useRef, useState } from 'react'


function CheckChar() {
    const [value, setValue] = useState("")
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setValue(event.target.value)
    }
  return (
    <div>
        <h2>NHap chuoi: </h2>
        <input type="text" value = {value} onChange={handleChange} />
        {value.length >5 &&(
            <p style={{color: "red"}}>Chuoi co do dai hon 5 ki tu</p>
        )}
    </div>    
  )
}

export default CheckChar