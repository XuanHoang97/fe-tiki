import React, {useState} from 'react';
import {Modal, ModalHeader, ModalBody } from 'reactstrap';
import KeyPad from './KeyPad';
import Result from './Result';
import './Calculator.scss';

const Calculator = (props) => {
    const [result, setResult] = useState('');

    //key special
    const onClick = (button) => {
        if (button === "=") {
          calculate();
        } else if (button === "C") {
          reset();
        } else if (button === "CE") {
          backspace();
        } else {
            setResult(result + button);
        }
      };
      
    const calculate = () => {
        var checkResult = "";
        if (result.includes("--")) {
          checkResult = result.replace("--", "+");
        } else {
          checkResult = result;
        }
    
        try {
            setResult(eval(checkResult));
        } catch (e) {
            setResult("Error");
        }
      };
    
    const reset = () => {
        setResult("");
      };
    
    const backspace = () => {
        setResult(result.slice(0, -1));
      };

    const toggle =()=>{
        props.toggleParent();
    }

    return (
        <Modal isOpen={props.isOpen}  toggle={()=>toggle()} size="sm">
            <ModalHeader toggle={()=>toggle()}>Máy tính bỏ túi</ModalHeader>
            <ModalBody>
                <Result result={result} />
                <KeyPad onClick={onClick} />
            </ModalBody>
        </Modal>
    )
}
export default Calculator;
