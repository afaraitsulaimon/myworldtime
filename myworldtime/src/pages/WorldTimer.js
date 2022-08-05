import React, { useState } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';


const WorldTimer = ({locations}) => {

    let [optionValue, setOptionValue] = useState();



    const handleSelectValue = (e) => {
            setOptionValue(e.target.value);
          
    }

  


  return (
    <Container>
            <Header style>Select Location</Header>
            {optionValue}
          
            <SelectHolder>
                <Form>
            <Select onChange={handleSelectValue}>
            <option>Select One Location</option>
                {locations?.map((local,index) => {
                    return <option key={index} value={local}>{local}</option>
                })}
                </Select>

                <Button type='submit'>

                    
                <Link to="/display-time" state={{ item:optionValue }}>Check Time</Link>
                </Button>
                </Form>
            </SelectHolder>

    </Container>
  )
}


const Container = styled.div`
    width:100%;
    height:80vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const Header = styled.h2`
    text-align:center;
    color:blue;

`;

const SelectHolder = styled.div`
    width:40vw;
    height:90%;
    background-color:rgb(0,0,255,0.3);
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:5px;
`;

const Form = styled.form`
width:100%;
    height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;
const Select = styled.select`

    width:50%;
    height:40px;
    text-align:center;
    margin-bottom:20px;
    border-radius:3px;

    &:focus{
        background-color:skyblue;
        color:white;

    }
`;
   




const Button = styled.button`

    width:10em;
    height:3em;
    background-color:skyblue;
    border-radius:4px;
    border:none;
    color:white;
    font-weight:700;
    cursor:pointer;

    &:hover{
        background-color:white;
        border:2px solid skyblue;
        color:skyblue;


    }
`;
export default WorldTimer