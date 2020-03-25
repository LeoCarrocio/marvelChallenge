import React from 'react';
import styled from 'styled-components';
// import imgCardPrueva from '../utils/img/img_card_hulk.jpg';
import star from '../utils/img/star_black.png';


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
  const {name,img} = props.character;
  
  return(

      <CardContainers bg = {img} >
      <div className="favorite">
        <img src={star} alt='derir a favoritos'/>
      </div>
      <div className="title">
        {name}
      </div>
     </CardContainers>  
  )
}
export default Card;