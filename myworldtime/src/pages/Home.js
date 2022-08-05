import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <Container>
     
      <AllHolder>

        <InnerAllHolder>
          
   
        <TakeIt>
          <span>Take it</span>
        </TakeIt>
        

        <NextOne>
            <HolderOfThe>
              <div><span>the</span></div> 
            </HolderOfThe>

            <ToAndOtherHolder>

              <ToAndLetStart>
                  <div className='forTo'><span>to</span></div>
                  <div className='forLetStart'><span><LinkWorldTimer to="/select-location">Let's start</LinkWorldTimer></span></div>
              </ToAndLetStart>

              <NextHolder>
                  <span>next</span>
              </NextHolder>

            </ToAndOtherHolder>
        </NextOne>
        <LevelHolder>
            <span>levels</span>
        </LevelHolder>
</InnerAllHolder>
      </AllHolder>

      <Circular>

</Circular>

<Diamond1>

</Diamond1>

<Diamond2>

</Diamond2>

    </Container>
  )
}

const Container = styled.div`
  width:100%;
  min-height:80vh;
  display:flex;
  justify-content:center;
  align-items:center;
  position:relative;
  border:1px solid orange;
  border-radius:5px;
`;

const Circular = styled.div`
  width:50px;
  height:50px;
  border:6px solid orange;
  border-radius:50%;
  position:absolute;
  top:21em;
  left:43.3em;
`;

const Diamond1 = styled.div`
width:10px;
  height:60px;
  background-color:orange;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
   transform: rotate(50deg);
   position:absolute;
   top:70px;
   left:25em;
`;

const Diamond2 = styled.div`
width:10px;
  height:60px;
  background-color:orange;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
   position:absolute;
   transform: rotate(-50deg);
   top:70px;
   left:25em;


`;


const AllHolder = styled.div`

width:50vw;
height:80vh;
color:#373b52;
display:flex;
justify-content:center;
align-items:center;
font-family: 'Mouse Memoirs', sans-serif;

`;

const InnerAllHolder = styled.div`
position:relative;
min-height:100%;

`;

const TakeIt = styled.div`
font-weight:200;
font-size:7em;
text-align:center;
letter-spacing: 3px;

`;

const NextOne= styled.div`
font-weight:400;
display:flex;
position:relative;

`;

const HolderOfThe = styled.div`

background-color:white;
width:120px;
height:80px;
border-radius:10px;
display:flex;
justify-content:center;
align-items:center;
border:2px solid #363b53;
position:absolute;
left:-4em;

div{
  width:97%;
height:97%;
background-color:#363b53;
display:flex;
justify-content:center;
align-items:center;
border-radius:10px;


span{

font-weight:400;
font-size:4em;
color:white;


}
}

`;


const ToAndOtherHolder = styled.div`
font-weight:400;
position:absolute;
left:5em;
`;

const ToAndLetStart = styled.div`

font-weight:400;
display:flex;
cursor:pointer;
position:relative;

.forTo{
font-weight:400;
font-size:5em;
color:#363b53;
position:absolute;
top:-0.4em;
left:-0.1em;

}

.forLetStart{
  width:120px;
  height:40px;
  background-color:white;
  border:1px solid #363b53;
  border-radius:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-weight:700;
font-size:0.8em;
color:#363b53;
font-family: Helvetica , Arial, sans-serif;
position:absolute;
left:4em;

}
`;

const NextHolder = styled.div`
font-family: 'Mouse Memoirs', sans-serif;

font-weight:400;
font-size:5em;
color:#363b53;
position:absolute;
top:0.3em;


`;

const LevelHolder = styled.div`
font-weight:400;
font-size:6em;
color:#363b53;
letter-spacing: 2px;
font-family: 'Mouse Memoirs', sans-serif;
position:absolute;
top:2.3em;
left:0.6em;


`;

const LinkWorldTimer = styled(Link)`

text-decoration:none;

color:#373b52;
`;

export default Home