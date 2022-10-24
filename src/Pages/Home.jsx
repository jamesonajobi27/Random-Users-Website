import React from "react"
import { Link } from "react-router-dom";

export default function Home(){
  return(
    <div className="HomePage">
      <p>
          <span>Welcome,</span><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
         molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
         optio, eaque rerum! Provident similique accusantium nemo autem.
         </p>
         <Link to="/Users" className="Random">
         <div className="Random">
          <div>RANDOM USERS</div>
          <h3>On this page over 100 random users has been
            generated, enjoy.
          </h3>
         </div>
         </Link>
    </div>
  )
}
