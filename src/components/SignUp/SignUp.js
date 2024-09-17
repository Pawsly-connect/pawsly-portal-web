import React, { useState } from 'react';
import departamentosColombia from '../statics/departamentosColombia.json';
import Select, { components } from 'react-select';
import registerService from '../../service/authMngr/SignUpService';
import styles from './SignUp.module.css';
import houseIcon from '../statics/house_icon.svg';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Modal from '../Modal/Modal';

const optionsSet = new Set();

departamentosColombia.forEach((item) => {
  optionsSet.add(item.departamento);
});

const options = [...optionsSet].map((value) => ({
  value,
  label: value,
}));

const maxLengthName = 90;
const maxLengthEmail = 50;
const maxLengthPassword = 15;
const customStyles = {
  placeholder: (provided) => ({
    ...provided,
    textAlign: 'justify',
    fontFamily: 'Roboto, sans-serif',
  }),
  singleValue: (provided) => ({
    ...provided,
    fontFamily: 'Roboto, sans-serif', // Establece la fuente del texto
    fontSize: '16px', // Establece el tamaño de fuente del texto
    textAlign: 'justify',
    color: '#000000',
  }),
};
const CustomPlaceholder = (props) => (
  <components.Placeholder {...props}>
    <div className="custom-placeholder">
      <img src={houseIcon} alt="Icon" style={{ marginRight: '8px' }} />
      Ciudad
    </div>
  </components.Placeholder>
);

const CustomSingleValue = ({ children, ...props }) => (
  <components.SingleValue {...props}>
    <img src={houseIcon} alt="Icon" style={{ marginRight: '8px' }} />
    {children}
  </components.SingleValue>
);

const Registro = () => {
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showConfirmEmail, setShowConfirmEmail] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [formErrors, setFormErrors] = useState({
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
    city: '',
    name: '',
    checkBox: '',
  });
  const [isButtonDisabled, setButton] = useState(true);
  const [isCheeked, setChecked] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
    city: '',
    name: '',
    checkBox: isCheeked,
  });

  const validateForm = () => {
    let errors = {
      email: '',
      confirmEmail: '',
      password: '',
      confirmPassword: '',
      city: '',
      name: '',
      checkBox: '',
    };
    errors.name = validateName();
    errors.email = validateEmail();
    errors.confirmEmail = validateConfirmEmail();
    errors.password = validatePassword();
    errors.confirmPassword = validateConfirmPassword();
    errors.checkBox = validateCheck();
    errors.city = validateCity();
    setFormErrors((formErrors) => ({ ...formErrors, ...errors }));
    const errorValues = Object.values(errors).filter((element) => element !== '');
    return errorValues.length === 0;
  };
  const validateCity = (city = formData.city) => {
    if (city.trim() === '') {
      return 'Seleccione la ciudad';
    }
    return '';
  };
  const validateName = (name = formData.name) => {
    if (name.trim() === '') {
      return 'Por favor, escriba su nombre.';
    }
    if (name.length < 10) {
      return 'Por favor, escriba su nombre completo.';
    }
    return '';
  };

  const validateConfirmPassword = (password = formData.confirmPassword) => {
    if (password && password.trim() === '') {
      return 'Por favor, confirme su contraseña.';
    }
    if (password && formData.password && password !== formData.password) {
      return 'Las contraseñas no coinciden';
    }
    return '';
  };

  const validateCheck = (check = formData.checkBox) => {
    if (!check) {
      return 'Por favor Acepte los terminos y condiciones';
    }
    return '';
  };

  const validatePassword = (password = formData.password) => {
    const passwordPattern = /^.*(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9])(?=\S{8,}).*$/;
    const isValidPassword = !passwordPattern.test(password);
    if (password.trim() === '') {
      return 'Por favor, cree su contraseña.';
    }
    if (password && formData.confirmPassword && password !== formData.confirmPassword) {
      return 'Las contraseñas no coinciden';
    }
    if (isValidPassword) {
      return 'Contraseña inválida. Use Mayuscula, miniscula, un caracter especial y debe tener un largo minimo de 8 caracteres.';
    }
    return '';
  };

  const validateEmail = (email = formData.email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailPattern.test(email)) {
      return 'Correo electrónico inválido';
    }
    if (email.trim() === '') {
      return 'Por favor, escriba su correo electrónico.';
    }
    if (formData.confirmEmail && email !== formData.confirmEmail) {
      return 'Los correos electrónicos no coinciden';
    }
    return '';
  };
  const validateConfirmEmail = (email = formData.confirmEmail) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailPattern.test(email)) {
      return 'Correo electrónico inválido';
    }
    if (email && email.trim() === '') {
      return 'Por favor, escriba su correo electrónico.';
    }
    if (formData.email && email !== formData.email) {
      return 'Los correos electrónicos no coinciden';
    }
    return '';
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setShowLoader(true);
      try {
        const request = await registerService(formData);
        if (request.isError) {
          console.error('Mostrar el error desde back: ', request);
        } else {
          console.log('Redirigir al dashboard');
        }
      } catch (error) {
        console.error('Mostrar error tecnico cliente: ', error);
      } finally {
        setShowLoader(false);
      }
    } else {
      setButton(true);
    }
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    let errors = {
      email: '',
      confirmEmail: '',
      password: '',
      confirmPassword: '',
      city: '',
      name: '',
      checkBox: '',
    };
    setFormData({ ...formData, [name]: value });

    if (name === 'email') {
      const isEmailNotEmpty = value.trim() !== '';
      setShowConfirmEmail(isEmailNotEmpty);
      errors.email = validateEmail(value);
    }
    if (name === 'confirmEmail') {
      errors.confirmEmail = validateConfirmEmail(value);
    }
    if (name === 'name') {
      let filteredValue = value.replace(/\d/g, '');
      setFormData({ ...formData, [name]: filteredValue });
      errors.name = validateName(value);
    }
    if (name === 'password') {
      const isPasswordNotEmpty = value.trim() !== '';
      setShowConfirmPassword(isPasswordNotEmpty);
      errors.confirmPassword = validatePassword(value);
    }
    if (name === 'confirmPassword') {
      errors.confirmPassword = validateConfirmPassword(value);
    }

    if (name === 'checkBox') {
      setFormData({ ...formData, [name]: checked });
      errors.checkBox = validateCheck(checked);
      setChecked(checked);
    }
    if (name === 'city') {
      errors.city = validateCity(value);
    }
    setFormErrors((formErrors) => ({ ...formErrors, ...errors }));
    const errorValues = Object.values(errors).filter((element) => element !== '');
    const dataValues = Object.values(formData).filter((element) => element !== '');
    if (errorValues.length === 0 && dataValues.length === 7) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const handleSelectChange = (selectedOption) => {
    setFormData({ ...formData, city: selectedOption.value });
    handleChange({ target: { name: 'city', value: selectedOption.value } });
  };
  const handleCopy = (e) => {
    e.preventDefault();
  };
  const handlePaste = (e) => {
    e.preventDefault();
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  return (
    <>
      <Header />
      <div className={styles['container-main']}>
        <Loader show={showLoader} />
        <div className={styles['container-1']}>
          <div className={styles['big-logo']}></div>
          <div className={styles['dogs']}></div>
        </div>

        <div className={styles['container-2']}>
          <div className={styles['logo-pawsly']}></div>
          <div className={styles['title']}>Regístrate</div>
          <div className={styles['section-text']}>
            Y haz parte de este gran proyecto que busca unirte a ti y a tu mascota con los mejores expertos.
          </div>

          <form onSubmit={handleSubmit} className="form">
            <div className={styles['text-inputs']}>
              <input
                type="text"
                id="name"
                name="name"
                className={`${styles['name']} ${styles['input-text-form']}`}
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
                maxLength={maxLengthName}
                autoComplete="off"
                aria-autocomplete="none"
              />
              {formErrors.name && <div className={styles['error']}>{formErrors.name}</div>}

              <Select
                name="city"
                className={`${styles['select-box']}`}
                onChange={handleSelectChange}
                options={options}
                isSearchable={true}
                components={{
                  Placeholder: CustomPlaceholder,
                  SingleValue: CustomSingleValue,
                }}
                autoComplete="off"
                aria-autocomplete="none"
                styles={customStyles}
              />

              {formErrors.city && <div className={`${styles['error']} ${styles['error-1']}`}>{formErrors.city}</div>}
              <input
                type="text"
                id="email"
                className={`${styles['email']} ${styles['input-text-form']} ${styles['email-1']}`}
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
              {formErrors.email && <div className={styles['error']}>{formErrors.email}</div>}
              {showConfirmEmail && (
                <input
                  type="text"
                  id="confirmEmail"
                  className={`${styles['email']} ${styles['input-text-form']}`}
                  name="confirmEmail"
                  placeholder="Confirme su correo"
                  value={formData.confirmEmail}
                  onCopy={handleCopy}
                  onPaste={handlePaste}
                  onChange={handleChange}
                  maxLength={maxLengthEmail}
                  autoComplete="off"
                  aria-autocomplete="none"
                />
              )}

              {formErrors.confirmEmail && <div className={styles['error']}>{formErrors.confirmEmail}</div>}
              <input
                type="password"
                className={`${styles['password']} ${styles['input-text-form']}`}
                name="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleChange}
                maxLength={maxLengthPassword}
                autoComplete="off"
                aria-autocomplete="none"
              />
              {formErrors.password && <div className={styles['error']}>{formErrors.password}</div>}
              {showConfirmPassword && (
                <input
                  type="password"
                  className={`${styles['password']} ${styles['input-text-form']}`}
                  name="confirmPassword"
                  placeholder="Confirme su Contraseña"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  maxLength={maxLengthPassword}
                  autoComplete="off"
                  aria-autocomplete="none"
                />
              )}
              {formErrors.confirmPassword && <div className={styles['error']}>{formErrors.confirmPassword}</div>}
            </div>

            <div className={styles['term']}>
              <label htmlFor="customCheckbox">
                <input
                  type="checkbox"
                  name="checkBox"
                  id="customCheckbox"
                  className={styles['custom-checkbox-input']}
                  onChange={handleChange}
                  checked={formData.checkBox}
                />
                <div className={styles['custom-checkbox']}>
                  <div className={styles['paw']}>
                    <div className={styles['paw-inner']}></div>
                    <div className={styles['paw-bottom']}></div>
                  </div>
                </div>
              </label>

              <div className={styles['term-text']}>
                ¿Aceptas nuestros{' '}
                <span className={styles['link']} onClick={openModal}>
                  términos y <br /> condiciones
                </span>
                ?
              </div>
              <Modal isOpen={isModalOpen} closeModal={closeModal}>
                <h2>Términos y Condiciones</h2>
                <p>1. Aceptación de los Términos
Al acceder y utilizar este sitio web, aceptas y te comprometes a cumplir con los siguientes Términos y Condiciones. Si no estás de acuerdo con alguno de estos términos, te recomendamos no utilizar nuestro sitio web.

2. Uso del Sitio
Este sitio web y su contenido están destinados únicamente para el uso personal y no comercial de los usuarios. Está prohibido copiar, modificar, distribuir, transmitir, exhibir, ejecutar, reproducir, publicar, licenciar, crear trabajos derivados, transferir o vender cualquier contenido de este sitio sin autorización expresa.

3. Propiedad Intelectual
Todos los derechos de propiedad intelectual, incluidos los derechos de autor, marcas comerciales, nombres comerciales y otros derechos relacionados con el contenido de este sitio web, pertenecen a [Nombre de la empresa o titular del sitio] o a sus respectivos titulares. Está prohibido el uso no autorizado de cualquier contenido sin el permiso explícito del titular de los derechos.

4. Privacidad
Tu privacidad es importante para nosotros. Al usar este sitio web, aceptas nuestra política de privacidad, que establece cómo recopilamos, usamos y protegemos la información personal que nos proporcionas. Puedes consultar nuestra [Política de Privacidad] para obtener más información.

5. Exención de Responsabilidad
Este sitio web se proporciona "tal cual" sin ninguna garantía, expresa o implícita. [Nombre de la empresa o titular del sitio] no garantiza que la información en este sitio web sea precisa, completa o actual. No seremos responsables por cualquier daño o pérdida derivada del uso o la imposibilidad de uso de este sitio web.

6. Modificaciones
Nos reservamos el derecho de modificar o actualizar estos Términos y Condiciones en cualquier momento sin previo aviso. Es tu responsabilidad revisar estos términos periódicamente para estar al tanto de cualquier cambio.

7. Enlaces a Sitios Externos
Este sitio web puede contener enlaces a otros sitios que no son operados por [Nombre de la empresa o titular del sitio]. No somos responsables por el contenido o las prácticas de privacidad de estos sitios externos. Te recomendamos que leas los términos y condiciones de cada sitio que visites.

8. Ley Aplicable
Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes de [País], sin tener en cuenta sus disposiciones sobre conflictos de leyes.

9. Contacto
Si tienes alguna pregunta sobre estos Términos y Condiciones, puedes contactarnos a través de [correo electrónico o método de contacto].</p>
              </Modal>
            </div>
            {formErrors.checkBox && (
              <div className={styles['error']}>
                <br />
                {formErrors.checkBox}
              </div>
            )}
            <Button title="Crear cuenta" disabled={isButtonDisabled} type="submit" />
          </form>

          <div className={styles['text-in']}>
            <a className={styles['term-text-in']} href={'/#/login'}>
              ¿Ya tienes una cuenta? Dale clic aquí
            </a>
            <br />
            <div className={styles['term-text-in']}>
              <b>O ingresa con:</b>
            </div>
          </div>

          <div className={styles['logos-in']}>
            <div className={styles['google']}></div>
            <div className={styles['facebook']}></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Registro;
