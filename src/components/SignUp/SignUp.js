import React, { useState } from 'react';
import './SignUp.css';
import logo_pawsly from '../statics/logo_pawsly.svg';

const Registro = () => {



    return (
        <div className="container-main">
            <div className="container-1">
                <div className="logo-grande">

                </div>
            </div>

            <div className="container-2">
                <div className="custom-shape-divider-top"></div>
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
                <div className="custom-shape-divider-bottom-1710964365">
                </div>
            </div>
        </div>
    );
};

export default Registro;
