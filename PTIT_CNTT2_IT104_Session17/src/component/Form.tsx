import React, { useState } from 'react'

function Form() {
    const[title, setTitle] = useState("")
    const handleChange = (event) => {
        setTitle(event.target.value)
    };

  return (
    <div>
        <input type="text" value={title} onChange={handleChange} />
        <p>{title}</p>
    </div>
  )
}

export default Form