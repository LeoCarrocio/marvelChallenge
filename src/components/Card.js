import React,{useState, useEffect} from 'react';
import styled from 'styled-components';

import star from '../utils/img/star_black.png';
import Modal from '../components/Modal';
import useModal from '../customHooks/useModal';
import {urlImg} from  '../controller/general';


const CardContainers = styled.div`
  display: grid;
  place-self: center;
  /* background-image: url(${(props)=> props.bg}); */
  /* background-position: 0px 0px;
  background-repeat: no-repeat;
  background-size: contain; */
  /* opacity: 1; */
 
  .favorite{
    justify-self: end;
  }
  .favorite img{
    height: 30px;
    position: relative;
    top: 35px;
  }
  .title{
    justify-self: start;
    align-self: end;
    color: white;
    font-size: 100%;;
    font-family: sans-serif;
    position: relative;
    bottom: 40px;
  }
  .imgCard img{
    border-radius: 9px;
  }
  
`

const Card = (props) =>{

  const [comics, setComics]=useState([])
  const  [hero , setHero] = useState({})
  const {name, thumbnail,id} = props.character;
  const key = props.index;
  const {isShowing, toggle} = useModal();

  useEffect(()=>{
    setHero(urlImg(thumbnail))
    setComics(props.character.comics.items);
  },[])
  
  return(

    <CardContainers bg = {hero} onClick={toggle}>
      <div className="favorite">
        <img src={star} alt='aderir a favoritos'/>
      </div>
      <div className="imgCard">
        <img src={hero}  alt ={name}/>
      </div>
      <div className="title">
        {name.substring(0,name.indexOf("(")!== -1 ? name.indexOf("("): name.length)}
      <Modal
        isShowing={isShowing}
        hide={toggle}
        img={hero}
        name={name}
        index ={key}
        comics= {comics}
        id ={id}
      />
      </div>
     </CardContainers>  
    
  )
}
export default Card;