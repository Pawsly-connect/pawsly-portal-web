import React, { useState } from 'react';
import './SignUp.css';
import logo_pawsly from '../statics/logo_pawsly.svg';

const Registro = () => {



    return (
        <div className="container-main">
            <div className="wave-container-top-left">
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="wave-svg-top">
                    <defs>
                        <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3E51FF"/>
                            <stop offset="100%" stopColor="#252F99"/>
                        </linearGradient>
                    </defs>
                    <path d="M150.36,-5.41 C-10.84,150.67 400.28,68.72 10.08,211.48 L0.00,210.00 L0.00,0.00 Z"/>
                </svg>
            </div>
            <div className="container-1">
                <div className="big-logo">
                </div>
                <div className="dogs">
                </div>
            </div>

            <div className="container-2">
                <div className="wave-top">
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="drop">
                        <defs>
                            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="15%" stop-color="#3E51FF"/>
                                <stop offset="100%" stop-color="#252F99"/>
                            </linearGradient>
                        </defs>
                        <path d="M245.77,-3.44 C376.12,120.89 376.12,120.89 500.00,49.98 L500.00,0.00 L338.88,-6.39 Z"
                              style={{stroke: 'none', fill: 'url(#wave-gradient)'}}/>
                    </svg>
                </div>

                <img id="logo-pawsly" src={logo_pawsly} alt="Mi SVG feliz"/>
                <div className="title">Regístrate</div>
                <div className="section-text">
                    Y haz parte de este gran proyecto que busca unirte a ti y a tu mascota con los mejores expertos.
                </div>
                <div className="text-inputs">
                    <input type="text" id="email" placeholder="Correo"/>
                    <input type="text" id="name" placeholder="Nombre"/>
                    <input type="text" id="city" placeholder="Ciudad"/>
                    <input type="text" id="password" placeholder="Contraseña"/>
                </div>
                <div className="term">
                    <label htmlFor="customCheckbox">
                        <input type="checkbox" id="customCheckbox"/>

                        <div className="custom-checkbox"></div>
                    </label>

                    <a id="term-text"
                       href="https://steamuserimages-a.akamaihd.net/ugc/942826643706462589/BDE05CCADD81935640D1AE18FB8FB54A84D41BD9/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false">
                        ¿Aceptas nuestros <b>terminos y <br/> condiciones</b>?
                    </a>
                </div>
                <button id="button-create">Crear Cuenta</button>
                <div className="text-in">
                    <a className="term-text-in"
                       href="https://steamuserimages-a.akamaihd.net/ugc/942826643706462589/BDE05CCADD81935640D1AE18FB8FB54A84D41BD9/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false">
                        ¿Ya tienes una cuenta? dale clic aqui
                    </a>
                    <br/>
                    <a className="term-text-in"
                       href="https://steamuserimages-a.akamaihd.net/ugc/942826643706462589/BDE05CCADD81935640D1AE18FB8FB54A84D41BD9/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false">
                        <b>O ingresa con:</b>
                    </a>
                </div>
                <div className="logos-in">
                    <div className="logo-google logo"></div>
                    <div className="logo-facebook logo"></div>
                </div>
                <div className="wave-container">
                    <svg width="500" height="150" viewBox="0 0 500 150" preserveAspectRatio="none" className="wave-svg">
                        <defs>
                            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="15%" stop-color="#3E51FF"/>
                                <stop offset="100%" stop-color="#252F99"/>
                            </linearGradient>
                        </defs>
                        <path d="M0,49.98 C201.75,-124.81 389.67,290.63 500,49.98 L500,150 L0,150 Z"/>
                    </svg>
                </div>


            </div>


        </div>
    );
};

export default Registro;
