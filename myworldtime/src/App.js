import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import WorldTimer from "./pages/WorldTimer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import DisplayTime from "./pages/DisplayTime";

function App() { 
    const [locations, setLocations] = useState();

      useEffect(() => {

        const fetchAllLocation = async ()  => {
        
            const url = "http://worldtimeapi.org/api/timezone";
            const res = await fetch(url);
            const data = await res.json();

            localStorage.setItem('AllLocations', JSON.stringify(data));

            const theLocations = JSON.parse(localStorage.getItem('AllLocations'));


            setLocations(theLocations);
            };
            fetchAllLocation();
      },[]);

    return <div>
        <Header/>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/select-location" element={<WorldTimer locations={locations} />}/>
                <Route exact path="/display-time" element={<DisplayTime/>}/>

            </Routes>
        </BrowserRouter>
    </div>
 }

 export default App;