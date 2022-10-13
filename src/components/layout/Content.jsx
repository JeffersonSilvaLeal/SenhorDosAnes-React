import './Content.css'
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from '../../views/examples/Home'
import About from '../../views/examples/About'
import NotFound from '../../views/examples/NotFound';
import SociedadeAnel from '../../views/examples/SociedadeAnel';
import AsDuasTorres from '../../views/examples/AsDuasTorres';
import ORetornoRei from '../../views/examples/ORetornoRei';


const Content = props => (

    <main className="Content">
        <Routes>
            <Route  path="/about" element={<About />} />
            <Route  path="/SociedadeAnel" element={<SociedadeAnel />} />
            <Route  path="/AsDuasTorres" element={<AsDuasTorres />} />
            <Route  path="/ORetornoRei" element={<ORetornoRei />} />
            <Route exact path="/" element={<Home />} />
            <Route  path="*" element={<NotFound />} />
        </Routes>
    </main>
)


export default Content
