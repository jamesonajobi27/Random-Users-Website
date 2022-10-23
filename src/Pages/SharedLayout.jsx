import React from "react"
import { Outlet } from "react-router-dom"

export default function SharedLayout(){
  return(
    <section>
       <h1>Layyout</h1>
       <Outlet />
    </section>
  )
}
