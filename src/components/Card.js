import React,{useContext,useState, useEffect} from 'react';
import styled from 'styled-components';
// import imgCardPrueva from '../utils/img/img_card_hulk.jpg';
import star from '../utils/img/star_black.png';
import Modal from '../components/Modal';

// import {HeroContext} from '../context/ContextApp';

import useModal from '../customHooks/useModal';
// import Hero from '../views/hero/Hero';

import {urlImg} from  '../controller/general';


const CardContainers = styled.div`
  display: grid;
  background-image: url(${(props)=> props.bg});
  background-position: 0px 0px;
  background-repeat: no-repeat;
  background-size: contain;
  opacity: 1;
 
  .favorite{
    justify-self: end;
  }
  .favorite img{
    height: 30px;
  }
  .title{
    justify-self: start;
    align-self: end;
  }
`

const Card = (props) =>{
  const  [hero , setHero] = useState({})
  // const hero = useContext(HeroContext);
  // console.log(hero);
  const {name, thumbnail} = props.character;
  const {isShowing, toggle} = useModal();

  useEffect(()=>{
    setHero(urlImg(thumbnail))
  },[])


  // const showModa =()=>{
  //   console.log('abrinedo modal');
  //   return <Modal modalShow={true}/>
    
  // }
  
  return(

    
    <CardContainers bg = {hero} onClick={toggle}>
      
      <div className="favorite">
        <img src={star} alt='derir a favoritos'/>
      </div>
      <div className="title">
        {name}
      <Modal
        isShowing={isShowing}
        hide={toggle}
        img={hero}
        name={name}

      />
      </div>
     
     </CardContainers>  
    
  )
}
export default Card;