import './Menu.css'
import React from "react";

import { Link } from 'react-router-dom'


const Menu = props => (

    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Onde tudo começou</Link>
                </li>
                <li>
                    <Link to="/SociedadeAnel">Sociedade Do Anel</Link>
                </li>
                <li>
                    <Link to="/AsDuasTorres">As Duas Torres</Link>
                </li>
                <li>
                    <Link to="/ORetornoRei">o Retorno Do Rei</Link>
                </li>
                <li>
                    <Link to="/about">Sobre</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu