import React from 'react';
import './Form.css';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>¡Hemos recibido tu solicitud! Ya puedes iniciar sesión</h1>
      <img className='form-img-2' src={require('../../images/img-3.svg').default} alt='success' />
    </div>
  );
};

export default FormSuccess;