
import React from "react"
import Pagination from "../Components/Pagination.jsx"
import ReactPaginate from "react-paginate"

export default function Users(){

  let [RandomUsers, setRandomUsers] = React.useState([])

  React.useEffect(() => {
    fetch("https://randomuser.me/api/?results=200")
    .then(res => res.json())
    .then(data =>   setRandomUsers(data.results))
}, [])








   // This is how I passed the data that will appear on the page, so it <Pagination /> does not 
   // control what appears on the Users Page.
   let User = RandomUsers.map((user) => {
       return(
        <Pagination 
        user={user}
        />
       )

   })

  return(
    <div>
      <div>RandomUsers</div>
       {User}
    </div>
  
  
  )
}

