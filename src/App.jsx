
import './App.css'
import {BrowserRouter, Routes , Route} from "react-router-dom"
import SharedLayout from './Pages/SharedLayout'
import Users from './Pages/Users.jsx'
import Home from  './Pages/Home.jsx'
import Error from './Pages/Errorpage.jsx'

function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SharedLayout />} >
        <Route index element={<Home />}/>
        <Route path="Users" element={<Users />}/>
      </Route>
      <Route path="*" element={<Error />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App