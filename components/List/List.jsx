import './List.css'

function List({cars}){
    return(
        <div className="cars">
            <h1>List of Cars</h1>
            <ul>
                {cars.map((c)=>{
                    return <li key={c}>{c}</li>
                })}
            </ul>
        </div>
    )
}
export default List