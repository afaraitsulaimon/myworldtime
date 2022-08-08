import React from 'react'
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderHolder>
                <h1>Check your World Time</h1>

    </HeaderHolder>
  )
}


const HeaderHolder = styled.div`
  width:100%;

  h1{
    text-align:center;

    @media (max-width: 912px) and (min-width: 360px) {
      font-size:1.2em;
    }
  }




  @media (max-width: 912px) and (min-width: 360px) {
    width:100%;
    text-align:center;
  }
`;
export default Header