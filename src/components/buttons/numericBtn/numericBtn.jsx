import Buttons from "../button";

function NumericBtn(props){

    return <>
       
       <Buttons title={props.title} clickHandler = {props.clickHandler} id={props.id} class={props.class}></Buttons>
     
    </>
}

export default NumericBtn;