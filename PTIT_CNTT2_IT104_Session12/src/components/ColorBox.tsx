import React from 'react'

interface ColorB{
    colors: string;
}

export const ColorBox = ({colors}: ColorB) => {
  return (
    <>
        <div style = {{width:"100px", height:"100px", backgroundColor: colors, justifyContent: "center", alignItems:"center", textAlign:"center", display: "flex", marginRight:"20px"}}>
            <p>BOX</p>
        </div>  
    </>
    
  )
}
