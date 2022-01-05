import React from 'react';
import {Modal, ModalHeader, ModalBody } from 'reactstrap';

const Calculator = (props) => {

    const toggle =()=>{
        props.toggleParent();
    }

    return (
        <Modal 
            isOpen={props.isOpen} 
            toggle={()=>toggle()} 
            size="md"
        >
            
            <ModalHeader toggle={()=>toggle()}>Máy tính bỏ túi</ModalHeader>
            <ModalBody>
                <div class="form-group">
                  <label>test</label>
                  <input type="text"  className="form-control" />
                </div>

            
            </ModalBody>
        </Modal>
    )
}
export default Calculator;
