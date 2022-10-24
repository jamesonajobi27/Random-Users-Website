import React from "react"
import { Outlet,Link } from "react-router-dom"


export default function SharedLayout(){
  return(
    <>
    <section className="Shared">
      <h1>RANDOM USERS GENERATOR</h1>
      <div>
       <Link className="link" to="/">Home</Link>
       <Link to="/Users" className="link" >Random users</Link>
       </div>
       </section>
       <Outlet />
       </>
  )
}
