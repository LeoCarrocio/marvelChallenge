import React,{useState, useEffect} from 'react';

import {getFavoritos} from '../../localStorage/storage';



const Favorites = () =>{
  const [favoritos , setFaboritos] = useState();


  useEffect(()=>{
    setFaboritos(getFavoritos());
  },[])

  return(
    <div>
      {console.log(favoritos)}
      <h1>
        SOY Favorites
      </h1>
    </div>
  )



}
export default Favorites;