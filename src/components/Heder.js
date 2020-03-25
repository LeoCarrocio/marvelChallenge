import React from 'react';
import styled from 'styled-components';
import { colorHeder } from '../styles/generalConstantStyles.js';

import logo from '../utils/img/marvel-logo.png';
import star from '../utils/img/star_white.png';
import lupa from '../utils/img/lupa.png';


const HederContainer = styled.div`
  background: ${colorHeder};
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 108px auto 35px 47px;
  align-items: center;
  
  .img-logo{
    grid-column: 1 / 2;
   
  }
  .img{
    height: 35px;
  }
  .seeker{
    grid-column: 2 / 3;
  }
  .seeker img{
    height: 23px;
  }
  input{
    width: 300px;
    height: 30px;
    border: 0;
    text-align: inherit;
    padding: 8px;
    font-size: 20px;
    color: black;
  }
  input:focus {
    outline: none;
  }

  input:hover{
    border:none;
  }
  .img-logo-favorites{
    grid-column: 3 / 4;
    height: 35px;
  }

`


const Heder = () =>{

  return(
    <div>
      <HederContainer >
        <div className='img-logo'>
          <img  className='img' src={logo} alt="logo"/>
        </div>
        <div className='seeker'>
          <img  src={lupa}  alt='buscar'/>
          <input type="text" placeholder="Buscar"/>
        </div>
        <div className='img-logo-favorites'>
          <img className='img' src={star} alt="favorites"/>
        </div>
      </HederContainer >
    </div>
  )
}
export default Heder;