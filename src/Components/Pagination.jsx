import React from "react"
import ReactPaginate from "react-paginate"


export default function Pagination(){

    let [RandomUsers, setRandomUsers] = React.useState([])
    const [loading, setLoading] = React.useState(false);


  React.useEffect(() => {
    setLoading(true)
    fetch("https://randomuser.me/api/?results=200")
    .then(res => res.json())
    .then(data =>  {
        setRandomUsers(data.results)
        setLoading(false)
      })

}, [])
   

  const [pageNumber, setPageNumber] = React.useState(0)

  const usersPerPage = 10
  const pagesVisited = pageNumber * usersPerPage

  const displayUsers =  RandomUsers.slice(pagesVisited, pagesVisited + usersPerPage )

  const pageCount = Math.ceil(RandomUsers.length / usersPerPage)
  
   const changepage = ({selected}) =>  {
      setPageNumber(selected)
   }
 

   // This is how I passed the data that will appear on the page, so it <Pagination /> does not 
   // control what appears on the Users Page.
   let User = displayUsers.map((user) => {
           
       return(
        <div className="BodyofUsers">
            <div className="Profile">
            <div>
                 <img src={user.picture.large} />
             </div>
         <section className="sectionContent">
             <div className="ProfileContent">
          <label htmlFor="Name">Name:</label>
          <h2 id="Name">{user.name.title + "" + user.name.first + "" + user.name.last }</h2>
         </div>
          <div className="ProfileContent">
         <label htmlFor="Phone">Phone:</label>
          <h2 id="Phone">{user.cell}</h2>
          </div>
          <div className="ProfileContent">
          <label htmlFor="Email">Email:</label>
          <h2 id="Email">{user.email}</h2>
          </div>
          <div className="ProfileContent">
          <label htmlFor="Birthday">Birthday:</label>
          <h2 id="Birthday">{user.dob.date.slice(0, 10)}</h2>
          </div>
          <div className="ProfileContent">
          <label htmlFor="Address">{"Address" + ':'}</label>
          <h2 id="Address">{user.location.state + "," + user.location.country }</h2>
          </div>
          </section>
        </div>
        </div>
       )

   })
     return(
      <div className="Pagination">
         {loading && <div className="Load">Loading..</div>}
          {User}
          {!loading && 
          <ReactPaginate 
       previousLabel={"Previous"}
        nextLabel={"Next"}
      pageCount={pageCount}
        onPageChange={changepage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previosBttn"}
        NextLinkClassName={"NextBttn"}
       activeLinkClassName={"paginationActive"}
        pageRangeDisplayed={5}
       marginPagesDisplayed={0}
       disabledLinkClassName={"disabled"}
       breakLabel={""}

       />  
                   }
          </div>
         
     ) 
}