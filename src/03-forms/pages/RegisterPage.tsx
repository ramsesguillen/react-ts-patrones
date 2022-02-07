import {  FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

interface RegisterState {
  name: string;
  email: string;
  password1: string;
  password2: string;
}



export const RegisterPage = () => {

  const { onChange, email, name, password1, password2, resetForm, isValidEmail } = useForm<RegisterState>({
    name: '',
    email: '',
    password1: '',
    password2: ''
  });



  const onSubmit = ( event: FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
  }




  return (
    <div>
      <h1>Register Page</h1>

      <form noValidate onSubmit={ onSubmit }>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={ name }
          onChange={ onChange }
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />
        { name.trim().length <= 0 && <span>Este campo es necesario</span> }

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={ email }
          onChange={ onChange }
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />
        { !isValidEmail(email) && <span>Email no es válido</span>}


        <input
          type="password"
          placeholder="Password"
          name="password1"
          value={ password1 }
          onChange={ onChange }
          className={`${password1.trim().length <= 0 && 'has-error'}`}
        />
        { password1.trim().length <= 0 && <span>Este campo es necesario</span> }
        { password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña debe tener más de 6 caracteres</span> }

        <input
          type="password"
          placeholder="Confirm password"
          name="password2"
          value={ password2 }
          onChange={ onChange }
          className={`${password2.trim().length <= 0 && 'has-error'}`}
        />
        { password2.trim().length <= 0 && <span>Este campo es necesario</span> }
        { password2.trim().length > 0 && password1 !== password2 && <span>Las contraseñas deben ser iguales</span> }

        <button type='submit'>Register</button>
        <button type='button' onClick={ resetForm }>Reset</button>
      </form>
    </div>
  )
}

