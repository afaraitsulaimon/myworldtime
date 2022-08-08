import React, { useEffect, useReducer } from 'react'
import {Link, useLocation} from "react-router-dom";
import styled from 'styled-components';
import moment from 'moment'
import tz from 'moment-timezone'
import '../App.css'


//the initial value of all our state is stored here inside the initialState

const initialState = {
  timeForLocation : {},
  time : "",
  date :  "",
  hrs : "",
  day : "",
}


//we used the reducer function here
// which takes 2 parameter, the state and the action performed
// the condition we are checking for is the action.type
// if the action.type is getTheTime
// then it will return to update the state , like this 
// ...state,
// timeForLocation : action.payload.data,  -- the timeForLocation is the name we gave a state, then we set a value for it 
// as action.payload.data ... the payload and the data is gotten from where we wrote the dispatch
// time: action.payload.theTime,
// date :  action.payload.theDate,
// hrs : action.payload.theHrs,
// day : action.payload.theDays,

const reducer = (state, action) => {

    switch(action.type){
      case "getTheTime":

        return {
          ...state,
          timeForLocation : action.payload.data,
          time: action.payload.theTime,
          date :  action.payload.theDate,
          hrs : action.payload.theHrs,
          day : action.payload.theDays,
        }
      default:
        return state;

    }
}

const DisplayTime = () => {

const location = useLocation();

const [state, dispatch] = useReducer(reducer, initialState);


// const [timeForLocation, setTimeForLocation] = useState({});

// const [time, setTime] = useState();

// const [date, setDate] = useState();

// const [hrs, setHrs] = useState();

// const [day, setDay] = useState();




        const fetchTimeForTheLocation = async() => {


            const url = `https://worldtimeapi.org/api/timezone/${location.state.item}`;

            const res = await fetch(url);


            const data = await res.json();

            //use the dispatch of the use Reducer to set the type , type : 'getTheTime', 
            //which will be used in the switch case of the reducer
            //Then the payload to hold the multiple values of the state we want to update
            // we can now update it in our reducer function at the top

            dispatch({type : 'getTheTime', payload: { data: data, theTime: moment(data.datetime).tz(location.state.item).format('HH:mm a'), theDate: moment(data.datetime).tz(location.state.item).format('LL'), theHrs: moment(data.datetime).tz(location.state.item).format('HH'), theDays:moment(data.datetime).tz(location.state.item).format('dddd')}})

      
            // setTimeForLocation(data);

            // setTime(moment(timeForLocation.datetime).tz(location.state.item).format('HH:mm a'))
            // setDate(moment(timeForLocation.datetime).tz(location.state.item).format('LL'))

            // setHrs(moment(timeForLocation.datetime).tz(location.state.item).format('HH'))

         

            // setDay(moment(timeForLocation.datetime).tz(location.state.item).format('dddd'))

        

        }


            useEffect(() => {
                fetchTimeForTheLocation();
            },[]);
            
  return (

    // then we use state.hrs or state. any value we have stored in the initial state to display it
    <Container className={state.hrs < 16 ? 'back1' : 'back2'}>

    <Header><p>Time For: {location.state.item}</p></Header>
    <TimeInformation>

                <p><span>Date</span> {state.date}</p>
                <p><span>Time</span> {state.time}</p>
                <p><span>Day</span> {state.day}</p>

        

    </TimeInformation>

    
          <ButtonHolder>
            <ButtonHolderBack><ButtonBack className='ButtonBack' to='/select-location'>Go back</ButtonBack></ButtonHolderBack>
            <ButtonHolderHome><ButtonHome className='ButtonHome' to='/'>Home</ButtonHome></ButtonHolderHome>
          </ButtonHolder>

    </Container>
  )
}


const Container = styled.div`
width:100%;
min-height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;





`;

const Header = styled.div`
width: 50%;
height:2em;
font-size:1.7em;
font-weight:600;
background-color:rgb(135,206,235,0.6);
color:white;
display:flex;
justify-content:center;
align-items:center;
font-family: 'Kanit', sans-serif;
`;

const TimeInformation = styled.div`
width: 50%;
height:70vh;
background-color:rgb(135,206,235,0.6);
margin-top:1em;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

p{
  display:flex;
  flex-direction:column;
  text-align:center;
  color:#0c499b;
  font-weight:500;
  font-family: 'Mouse Memoirs', sans-serif;
  font-size:0.9em;


  span{
    font-size:3em;
    letter-spacing:0.2em;
    font-weight:700;
    color:black;
    font-family: 'Permanent Marker', cursive;
  }
 
}

`;

const ButtonHolder = styled.div`
width:30%;
  display:flex;
  list-style:none;
  justify-content:space-around;
  align-items:center;
  margin-top:10px;
`;



const ButtonHolderHome = styled.div`

width:8em;
height:2.5em;
border-radius:5px;
border:2px solid #0c499b;
background:white;
display:flex;
justify-content:center;
align-items:center;

&:hover {

  background:#0c499b;
  cursor:pointer;
  box-shadow: 5px 10px 18px 10px white;
  border:2px solid white;


}

&:hover > .ButtonHome{

  background:#0c499b;
  color:white;


}
`;


const ButtonHome = styled(Link)`
   text-decoration:none;
   color:#0c499b;
   font-size:1.1em;
   font-weight:600;


`;

const ButtonHolderBack = styled.div`
width:8em;
height:2.5em;
border-radius:5px;
border:2px solid #0c499b;
background:white;
color:#0c499b;
display:flex;
justify-content:center;
align-items:center;

&:hover {

  background:#0c499b;
  cursor:pointer;
  border:2px solid white;
  box-shadow: 5px 10px 18px 10px white;


}

&:hover > .ButtonBack{

  background:#0c499b;
  color:white;


}

`;
const ButtonBack = styled(Link)`

color:#0c499b;
text-decoration:none;
font-size:1.1em;
font-weight:600;



`;

export default DisplayTime