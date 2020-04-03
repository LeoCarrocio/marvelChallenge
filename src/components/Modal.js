import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const ModalContainers = styled.div`
.modal-overlay { 
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: .5;
 }

.modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
}

.modal {
  z-index: 100;
  background: white;
  position: relative;
  margin: 1.75rem auto;
  border-radius: 3px;
  max-width: 600px;
  padding: 2rem;
}

.modal-header {
  display: flex;
  justify-content: flex-end;
}

.modal-close-button {
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  opacity: .3;
  cursor: pointer;
  border: none;
}

button {
  font-size: .9rem;
  font-weight: 700;
  border: none;
  border-radius: 3px;
  padding: .3rem 1rem;
  margin-left: .5rem;
}

.button-default {
  background: #247BA0;
  color: #fff;
}
.img-data{
  display: grid;

}
img{
  height: 22rem;

}
`

const Modal = ({ isShowing, hide , data}) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
      <ModalContainers>
      <div className="modal-overlay"/> 
      <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className="modal">
          <div className="modal-header">
            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="img-data">
           <img src={data.img} alt="favorites"/>
          </div>
          <p>
           {data.name}
          </p>
          <button type="button" >
          <Link to={`/hero/${data.id}`}>view hero</Link>
          </button>

        </div>
      </div>
      </ModalContainers>
    </React.Fragment>, document.body
  ) : null;

export default Modal;