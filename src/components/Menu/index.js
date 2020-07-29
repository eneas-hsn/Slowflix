import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a to="#">
                <img className="Logo" src={Logo} alt="SLOWFLIX LOGO"></img>
            </a>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>


        </nav>
    );
}

export default Menu;