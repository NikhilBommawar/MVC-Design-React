import FunctionBtn from "../buttons/functionBtn/functionBtn"
import NumericBtn from "../buttons/numericBtn/numericBtn";
import OperationBtn from "../buttons/operationBtn/operationBtn";
import Display from "../display/display";

import "./calculator.css"

import React, { useState } from "react";

function Calculator(props) {

    const [content, setContent] = useState(0);
    var [inputStack, setInputStack] = useState([]);


    var inputArray = [];


    // logic to return buttons starts here
    const numericArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];    // numbutton model
    const functionArray = ["AC", "DEL", "UNDO", "REDO"];                         // funbutton model
    const operatorArray = ["+", "-", "*", "/", "="];                              // opbutton model

    const numericElements = [];       // will contain all the numeric button returned by NumericButtons component
    const functionElements = [];         // will contain all the numeric button returned by NumericButtons component
    const operatorElements = [];         // will contain all the numeric button returned by NumericButtons component

    // click handle function - to be implemented

    // Button click handler
    function clickHandle(value, type) {

        if (type === "num") {    // if numBtn clicked
            value = content + value;
            setContent(value);
        }
        else if (type === "fun") {   // if funBtn clicked

            switch (value) {

                case "AC":
                    value = ""
                    setContent(value)
                    inputArray = [];
                    inputArray = [];
                    break;

                case "DEL":
                    if (content) {
                        value = content.slice(0, -1);
                        setContent(value)
                    }
                    break;

                case "UNDO":
                    value = "to be implemented"
                    setContent(value)
                    break;

                case "REDO":
                    value = "to be implemented"
                    setContent(value)
                    break;
            }


        }
        else {                         // if funBtn clicked
            if (value == "=") {         // if funBtn clicked is =
                inputStack.push({ "type": 'NUMBER', "value": content })
                console.log("input stack going to backend --> ", inputStack)
                console.log("result will be displayed")

                setContent("******* Result **********")

       }
            else {             // if funBtn clicked is any of (+,-,*,/)
                inputArray.push({ 'type': 'NUMBER', 'value': content })

                switch (value) {
                    case "+":
                        inputArray.push({ 'type': 'OPERATOR', 'value': "add" })
                        break;

                    case "-":
                        inputArray.push({ 'type': 'OPERATOR', 'value': "subtract" })
                        break;

                    case "*":
                        inputArray.push({ 'type': 'OPERATOR', 'value': "multiply" })
                        break;

                    case "/":
                        inputArray.push({ 'type': 'OPERATOR', 'value': "division" })
                        break;

                }

                setInputStack(inputStack => [...inputStack, ...inputArray]);
                value = "";
                setContent(value);
            }
        }

    }      // click handler ends here

    {
        functionArray.map((funBtn, index) => {        // create buttons for funArray
            functionElements.push(
                <FunctionBtn clickHandler={() => clickHandle(funBtn, "fun")} title={funBtn} id={"fnBtn_" + props.id + "_" + index} class="funBtn" />
            );
        })
    }

    {
        numericArray.map((numBtn, index) => {        // create buttons for funArray
            numericElements.push(
                <NumericBtn clickHandler={() => clickHandle(numBtn, "num")} title={numBtn} id={"numBtn_" + props.id + "_" + index} class="numBtn" />
            );
        })
    }

    {
        operatorArray.map((opBtn, index) => {        // create buttons for funArray
            operatorElements.push(
                <OperationBtn clickHandler={() => clickHandle(opBtn, "op")} title={opBtn} id={"opBtn_" + props.id + "_" + index} class="opBtn" />
            );
        })
    }

    return <>

        <div className="display">
            <Display value={content} id={props.id} />
        </div>
        <div className="row fnBtn-row">

            {functionElements}

        </div>
        <div className="row num-op-row">

            <div className="col-9 numerics">
                {numericElements}
            </div>
            <div className="col-3 operators">
                {operatorElements}
            </div>

        </div>
    </>
}




export default Calculator;
