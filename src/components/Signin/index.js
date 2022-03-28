import React from 'react'
import { 
    FormWrap,
    Container,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text
 } from './SigninElements'
 import './signin.css';

const SignIn = () => {
  return (
      <Container>
        <FormWrap>
            <Icon to="/">FinanzApp</Icon>
            <FormContent>
                <Form>
                    <FormH1>Ingresa a tu Cuenta</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required/>
                    <FormLabel htmlFor='for'>Contraseña</FormLabel>
                    <FormInput type='password' required/>
                    <FormButton type='submit'><a href='/finance'>Continuar</a></FormButton>
                    <Text>Olvide mi Contraseña</Text>
                </Form>
            </FormContent>
        </FormWrap> 
      </Container> 
  )
}

export default SignIn