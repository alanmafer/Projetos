import React from "react";
import { Routes , Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>    
            <Route path="/sobre" element={<About />}></Route> 
            <Route path="*" element={<NotFound />}></Route>           
            <Route path="/signin" element={<SignIn />}></Route> 
            <Route path="/signup" element={<SignUp />}></Route> 
        </Routes>
    );
}