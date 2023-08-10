import Buttons from "../button";

function FunctionBtn(props){

   
    // function handle(){
    //     console.log("clicked")
    // }

    return <>
      <Buttons title={props.title} clickHandler = {props.clickHandler} id={props.id} class={props.class}></Buttons>
      </>
}

export default FunctionBtn;