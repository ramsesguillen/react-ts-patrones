import { Formik, Form } from 'formik'
import * as yup from 'yup';
import { MyTextInput} from '../components'
import '../styles/styles.css';



export const RegisterFormikPage = () => {



  return (
    <div>
      <h1>Register Page</h1>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password1: '',
          password2: '',
        }}
        onSubmit={ ( values ) => {
          console.log( values);
        }}
        validationSchema={ yup.object({
            name: yup.string()
                          .min(2, 'Minimo dos caracteres')
                          .max(15, 'Debe de tener 15 caracteres o menos')
                          .required('Requerido'),
            email: yup.string().email('El correo no tiene un formato valido').required('Requerido'),
            password1: yup.string()
                          .min(6, 'Minimo 5 caracteres')
                          .required('Requerido'),
            password2: yup.string()
                          .oneOf([ yup.ref('password1')], 'Las contraseñas no coinciden')
                          .required('Requerido'),
          })
        }
      >

        { ({ handleReset }) => (
            <Form>
              <MyTextInput
                label='Name'
                name='name'
              />
              <MyTextInput
                label='Email Address'
                name='email'
                type='email'
              />
              <MyTextInput
                label='Password'
                name='password1'
                type='password'
              />
              <MyTextInput
                label='Confirm password'
                name='password2'
                type='password'
              />

              <button type='submit'>Send</button>
              <button type='button' onClick={ handleReset }>Reset</button>
            </Form>
          )
        }


      </Formik>
    </div>
  )
}

