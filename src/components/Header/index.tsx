import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';
import './styles.css';

function Header() {
    return (
        <header className='header-container'>
            <h2>ADMINISTRAÇÃO FINANCEIRA</h2>

            <div className='buttons-div'>
                <Link to="/"><Button>Home</Button></Link>
                <Link to="/valor-presente"><Button>Valor presente</Button></Link>
                <Link to="/valor-futuro"><Button>Valor futuro</Button></Link>
                <Link to="/valor-presente-liquido"><Button>Valor presente líquido</Button></Link>
                <Link to="/payback"><Button>Payback</Button></Link>
                <Link to="/tir"><Button>TIR</Button></Link>
            </div>
        </header>
    );
}

export default Header;