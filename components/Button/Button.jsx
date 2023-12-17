import './Button.css'

function Button(props){
    return(
        <div className='btn'>
            <button onClick={props.onClick}>{props.text}</button>
        </div>
    )
}
export default Button;