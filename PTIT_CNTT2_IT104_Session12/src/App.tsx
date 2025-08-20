import AdminIndex from "./components/Bai6/AdminIndex"
import UserLayout from "./components/Bai7/UserLayout"
import UserList from "./components/Bai8/UserList"
import { Calculation } from "./components/Calculation"
import { ColorBox } from "./components/ColorBox"
import { FormatName } from "./components/FomatName"
import ListCourse from "./components/ListCourse"
import { UserInfo } from "./components/UserInfo"

function App() {

  return (
    <>
      <ListCourse/>
      <h1>Bai4</h1>
      <div style={{display: "flex"}}>
        <ColorBox colors="red"/>
        <ColorBox colors="blue"/>
        <ColorBox colors="green"/>
      </div>
      <Calculation/>
      <UserInfo/>
      <FormatName/>
      <AdminIndex/>
      <UserLayout/>
      <UserList/>
    </>
      
  )
}

export default App
