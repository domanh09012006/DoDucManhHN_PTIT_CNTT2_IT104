import React, { useState } from 'react'

function Bai1() {
    const[name, setName] = useState("Nguyen Van a");
  return (
    <div>
        <p>Ho va ten: {name}</p>
    </div>
  )
}

export default Bai1