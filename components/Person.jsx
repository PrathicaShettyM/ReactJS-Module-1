import './Person.css'

function Person(props){
    return(
        <div className="Card">
            <h1>Person Details</h1>
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
        </div>
    )
}
export default Person;