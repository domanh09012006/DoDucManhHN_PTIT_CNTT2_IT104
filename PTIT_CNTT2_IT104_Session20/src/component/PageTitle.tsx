import React, { useState } from 'react'

function PageTitle() {
    const[title, setTitle] = useState("")
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const newTitle = event.target.value
        setTitle(newTitle)
        if(newTitle !== ""){
            document.title = newTitle
        }else{
            document.title = "Trang wed cua toi"
        }
    }
  return (
    <div>
        <form action="">
            <label htmlFor="">Chao mung den voi trang web</label>
            <input type="text" value={title} onChange={handleChange}/>
        </form>
    </div>
  )
}

export default PageTitle