import "./LogIn.css";
import React, { useState } from "react";
import { ReactComponent as WaveTop } from "../statics/wave_top.svg";

const Ingreso = () => {
    const url_mientras =
        "https://steamuserimages-a.akamaihd.net/ugc/942826643706462589/BDE05CCADD81935640D1AE18FB8FB54A84D41BD9/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false";
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [formErrors, setFormErrors] = useState({});
    const maxLengthEmail = 50;
    const maxLengthPassword = 15;
    const handleSubmit = async (e) => {
        e.preventDefault();
        const isFormValid = await validateForm();
        if (isFormValid) {
            console.log("Formulario válido");
        } else {
            console.log("Formulario inválido. Revise los campos.");
        }
    };

    const validateForm = async () => {
        const isEmailValid = await validateEmail(formData.email);
        const isPasswordValid = await validatePassword(formData.password);
        return isEmailValid && isPasswordValid;
    };

    const validateEmail = async (email) => {
        let emailError = "";
        if (!email.trim()) {
            emailError = "Por favor, escriba su correo electrónico.";
        }
        setFormErrors((prevErrors) => ({ ...prevErrors, email: emailError }));
        return !emailError;
    };

    const validatePassword = async (password) => {
        let passwordError = "";
        if (!password.trim()) {
            passwordError = "Por favor, escriba su contraseña.";
        }
        setFormErrors((prevErrors) => ({ ...prevErrors, password: passwordError }));
        return !passwordError;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (name === "email") {
            validateEmail(value);
        }
        if (name === "password") {
            validatePassword(value);
        }
    };

    const handleCopy = (e) => {
        e.preventDefault();
    };
    const handlePaste = (e) => {
        e.preventDefault();
    };

    return (
        <div className="container-main" >
            <div className="container-2">
                <div className="wave-top">
                    <WaveTop />
                </div>

                <div id="logo-pawsly"></div>
                <div className="title">Iniciar Sesion</div>

                <form onSubmit={handleSubmit} className="form">
                    <div className="text-inputs">
                        <input
                            type="text"
                            id="email"
                            className="email"
                            name="email"
                            placeholder="Correo"
                            value={formData.email}
                            onChange={handleChange}
                            onCopy={handleCopy}
                            onPaste={handlePaste}
                            maxLength={maxLengthEmail}
                            autoComplete="off"
                            aria-autocomplete="none"
                        />
                        {formErrors.email && (
                            <div className="error">{formErrors.email}</div>
                        )}
                        <input
                            type="password"
                            className="password"
                            name="password"
                            placeholder="Contraseña"
                            value={formData.password}
                            onChange={handleChange}
                            maxLength={maxLengthPassword}
                            autoComplete="off"
                            aria-autocomplete="none"
                        />
                        {formErrors.password && (
                            <div className="error">{formErrors.password}</div>
                        )}
                    </div>
                    <button
                        id="button-in"
                        type="submit"
                    >
                        Iniciar
                    </button>
                </form>

                <div className="text-in">
                    <a className="term-text-in" href={url_mientras}>
                        ¿Ya tienes una cuenta? Dale clic aquí
                    </a>
                    <br />
                    <a className="term-text-in" href={url_mientras}>
                        <b>O ingresa con:</b>
                    </a>
                </div>

                <div className="logos-in">
                    <div id="google"></div>
                    <div id="facebook"></div>
                </div>
                <div className="dogs-bottom">
                    <div className="dog-bottom-left"></div>
                    <div className="dog-bottom-center"></div>
                    <div className="cat-bottom-right"></div>
                </div>
            </div>
        </div>
    );

};
export default Ingreso;