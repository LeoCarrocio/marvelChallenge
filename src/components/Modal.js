// import React,{ useState, useEffect } from "react";
// import styled from 'styled-components';

// const ModalContainers = styled.div`
//   width: 500px;
//   background: white;
//   border: 1px solid #ccc;
//   transition: 1.1s ease-out;
//   box-shadow: 
//     -2rem 2rem 2rem rgba(black, 0.2);
//   filter: blur(0);
//   transform: scale(1);  
//   opacity: 1;
//   visibility: visible;
//   &.off {
//     opacity: 0;
//     visibility: hidden;
//     filter: blur(8px);
//     transform: scale(0.33);
//     box-shadow: 1rem 0 0 rgba(black, 0.2);
//   }

// `


// const Modal = (props) => {
//   const [show ,setShow] = useState(false);


//   useEffect(()=>{
//     console.log();
//     setShow(props)
//   },[props, show]);

//   if(!show){
//     return null;          
//   }
//   return(
//     <ModalContainers>
//       <h1>
//         SOY Modal
//       </h1>
//     </ModalContainers>
    
//   )
// }
// export default Modal;

import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


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
  {console.log(data)}
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
        </div>
      </div>
      </ModalContainers>
    </React.Fragment>, document.body
  ) : null;

export default Modal;