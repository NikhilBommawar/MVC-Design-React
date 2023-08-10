
import './buttons.css'

function Buttons(props){

    function handle(){
        console.log("clicked")
    }
    
   return <>
      
       <button type="button" role='button' onClick= {props.clickHandler}
               id={props.id} className={props.class}
               >
              {props.title}
             </button>
    </>
}   

export default Buttons;