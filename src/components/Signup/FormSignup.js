import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
            ¡Comienza ahora esta nueva experiencia financiera! Crea tu cuenta en pocos pasos.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Nombre de Usuario</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Ingresa tu Nombre de Usuario'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Correo Electronico</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Ingresa tu Correo Electronico'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Contraseña</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Ingresa tu Contraseña'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirmar Contraseña</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirma tu Contraseña'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Registrate
        </button>
        <span className='form-input-login'>
          ¿Ya tienes una cuenta? <a href='\signin'>Ingresa Aquí</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;