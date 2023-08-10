import './display.css';

function Display(props){
   return  <input type="text" role="display" value={props.value} id={"display-"+props.id}></input>
}

export default Display;