import React from 'react'
import Counter from './feature/counter/Counter'
import RandomState from './feature/counter/RandomState'
import Theme from './feature/counter/Theme.tsx'
import DisplayToggle from './feature/counter/DisplayToggle.tsx'
import DataView from './feature/counter/DataView.tsx'
import Sidebar from './feature/counter/Sidebar.tsx'
import LanguageSelector from './feature/counter/LanguageSelector.tsx'
import FavoritesList from './feature/counter/FavoritesList.tsx'


function App() {
  return (
    <div style={{display:"flex",textAlign:"center", alignContent:"center", justifyContent:"center"}}>
      {/* <Counter/>
      <RandomState/>
      <Theme/>
      <DisplayToggle />
      <DataView /> */}
      <Sidebar/>
      <LanguageSelector/>
      <FavoritesList/>
    </div>
  )
}

export default App