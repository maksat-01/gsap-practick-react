import React from 'react';
import "./style/style.scss"
import Photograph from "./components/Pages/Photograph/Photograph";
import Barber from "./components/Pages/Barber/Barber";
import Chef from "./components/Pages/Chef/Chef";
import {Route, Routes} from "react-router-dom";
import Pages from "./components/Pages/Pages";
const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Pages/>}/>
                <Route path="/Photograph" element={ <Photograph/>}/>
                <Route path="/Chef" element={<Chef/>}/>
                <Route path="/Barber" element={<Barber/>}/>
            </Routes>
        </div>
    );
};

export default App;