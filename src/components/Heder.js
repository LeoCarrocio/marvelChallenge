import React from 'react';
import styled from 'styled-components';
import { colorHeder } from '../styles/generalConstantStyles.js';







const HederStyled = styled.div`
  background: ${colorHeder};
`


const Heder = () =>{

  return(
    <div>
      <HederStyled>
        <h1>
          SOY Heder
        </h1>
      </HederStyled>
    </div>
  )



}
export default Heder;