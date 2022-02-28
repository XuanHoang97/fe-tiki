import React, {useState} from 'react';
import {Modal, ModalHeader, ModalBody } from 'reactstrap';

const Game = (props) => {

    const toggle =()=>{
        props.toggleParent();
    }

    return (
        <Modal isOpen={props.isOpen}  toggle={()=>toggle()} size="lg">
            <ModalHeader toggle={()=>toggle()}>Legends of league</ModalHeader>
            <ModalBody>
                <img src="https://dbk.vn/uploads/ckfinder/images/1-content/tang-fps-lol-1.jpg" className="w-100" alt="" />
                <div className='text-center mt-2'>
                    <button className="btn btn-primary" disabled>
                        <span className="spinner-border spinner-border-sm mr-2"></span>
                        Game đang trong quá trình phát triển...
                    </button>
                </div>
            </ModalBody>
        </Modal>
    )
}
export default Game;
