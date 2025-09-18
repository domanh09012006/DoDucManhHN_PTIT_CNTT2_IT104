import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ManagerPost from './component/ManagerPost'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/list-post" element={<ManagerPost />} />
          <Route path="*" element={<h2>404 - Không tìm thấy trang</h2>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App