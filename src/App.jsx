import React from "react"
import './App.css'
import {BrowserRouter, Routes , Route} from "react-router-dom"
import SharedLayout from './Pages/SharedLayout'
// import Users from './Pages/Users.jsx'
import Home from  './Pages/Home.jsx'
import Error from './Pages/Errorpage.jsx'
import ErrorBoundary from "./Components/ErrorBoundary"
import { Suspense } from "react"
const LazyUsers = React.lazy(() => { return import("./Pages/Users")})


function App() {
 
  return (
    <BrowserRouter>
    <ErrorBoundary>
    <Routes>
      <Route path="/" element={<SharedLayout />} >
        <Route index element={<Home />}/>
           <Route path="Users" element={
            <Suspense fallback={<div className="Load">Loading...</div>}>
                <LazyUsers /> 
            </Suspense>
             } />
      </Route>
      <Route path="*" element={<Error />}/>
    </Routes>
    </ErrorBoundary>
    </BrowserRouter>
   
  )
}

export default App
