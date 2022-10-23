import React from "react"
import "../Components/Pagination.css"


export default function Pagination(props){

    return(
        <div className="Profile">
            <div>
                <img src={props.user.picture.large} />
            </div>
            <div>
         <h2>{props.user.name.title + "" + props.user.name.first + "" + props.user.name.last }</h2>
         <h2>{props.user.cell}</h2>
         <h2>{props.user.email}</h2>
         <h2>{props.user.dob.date.slice(0, 10)}</h2>
         <h2>{props.user.location.state + "," + props.user.location.country }</h2>
          </div>
        </div>
    )
}