import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import busca from "../../assets/busca.png"
import Inicio from '../../Pages/Inicio/Inicio'
import Doados from '../../Pages/Doados/Doados'
import QueroDoar from '../../Pages/QueroDoar/QueroDoar'

import "./HeaderStyle.scss"


export default function header(){
    return(
        <BrowserRouter>
        <header>
            <section id="boxLogo">
                <img src={logo} alt="imagem de um livro" />
                <h1>Livros Vai na Web</h1>
            </section>
            <nav id="boxMenu">
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/doados">Livros Doados</Link></li>
                    <li><Link to="/queroDoar">Quero Doar</Link></li>
                </ul>
            </nav>
            <div id="boxSearch"> 
                <input id="boxInput" type="text" 
                placeholder="O que você procura?" />
                <img src={busca} alt="" />
            </div>
        </header>
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/doados" element={<Doados/>}/>
            <Route path="/queroDoar" element={<QueroDoar/>}/>
        </Routes>
        </BrowserRouter>
    )
}