import React from 'react';
import Logo from '../../assets/img/Logo2.png';
import './Menu.css';
import Button from '../Button'
//import ButtonLink from './componetes/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
          <a href="/">
            <img className="Logo" src={Logo} alt="Vinilix Logo"/>
          </a>

          <Button as="a" className="ButtonLink" href="/">
            Novo Vídeo 
          </Button>
        </nav>
    );
}

export default Menu;