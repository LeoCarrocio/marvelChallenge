import React,{useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

// import Axios from 'axios';
// import Crypto from 'crypto-js';

import {fetchHeroes , fetchHero} from '../controller/fech';
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
  img-logo-favorites bottom{
    border: none;
  }
`


const Heder = () =>{
  const [hero , setHero] = useState('');
  let history = useHistory();

  const handleInput = (e) =>{
    let character = e.target.value;
    setHero(character);
  }
  
  const submit = (event) =>{
    event.preventDefault();
    if(hero.length >= 3){

      // const result = await fetchHeroes(hero);
      // console.log(result.data.data);
      history.push(`/serch/${hero}`);

    }
  }
 
  return(
    <div>
      <form onSubmit={submit}>
      <HederContainer >
        <div className='img-logo'>
          <Link to={'/'}>
            <img  className='img' src={logo} alt="logo"/>
          </Link>
        </div>
        <div className='seeker'>
          <img  src={lupa}  alt='buscar'/>
          <input onChange={handleInput} type="text" placeholder="Serch"/>
        </div>
        <div className='img-logo-favorites'>
          <Link to={'/favorites'}>
            <img className='img' src={star} alt="favorites"/>
          </Link>
        </div>
      </HederContainer >
      </form>
    </div>
  )
}
export default Heder;