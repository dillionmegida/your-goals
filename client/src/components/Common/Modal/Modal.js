import React from 'react';
import './Modal.css';

import Backdrop from '../Backdrop/Backdrop';

let Modal = props => {
    return (
        <React.Fragment>
            <Backdrop BackdropClicked={props.CloseModal} />  
            <section className='ModalSection'>
                <button onClick={props.CloseModal} className='BtnClose'>X</button>
                <input type='text' placeholder='Goal Title'/>
                <input type='text' placeholder='Goal Deadline'/>
            </section>
        </React.Fragment>
    );
};

export default Modal;