import { Formik, Form } from 'formik'
import * as yup from 'yup';
// import { MyCheckbox } from '../components/MyCheckbox';
// import { MySelect } from '../components/MySelect';
// import { MyTextInput } from '../components/MyTextInput';

import { MyCheckbox, MyTextInput, MySelect } from '../components'


import '../styles/styles.css';


export const FormikAbstractionPage = () => {

  return (
    <div>
      <h1>Formik Basic Tutorial</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: ''
        }}
        onSubmit={ ( values ) => {
          console.log( values);
        }}
        validationSchema={ yup.object({
            firstName: yup.string()
                          .max(15, 'Debe de tener 15 caracteres o menos')
                          .required('Requerido'),
            lastName: yup.string()
                          .max(15, 'Debe de tener 15 caracteres o menos')
                          .required('Requerido'),
            email: yup.string().email('El correo no tiene un formato valido').required('Requerido'),
            terms: yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
            jobType: yup.string()
                        .notOneOf(['it-jr'], 'Esta opcion no es permitida')
                        .required('Requerido')
          })
        }
      >

        { formik => (
            <Form>
              <MyTextInput
                label='First name'
                name='firstName'
                placeholder='Fulano'
              />
              <MyTextInput
                label='Last name'
                name='lastName'
                placeholder='De tal'
              />
              <MyTextInput
                label='Email Address'
                name='email'
                type='email'
                placeholder='email@gmail.com'
              />

              <MySelect label='Job Type' name='jobType'>
                <option value="">Pick something</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-senior">IT Senior</option>
                <option value="it-jr">IT Jr.</option>
              </MySelect>

              <MyCheckbox
                label='Terms & Conditions'
                name='terms'
              />

              <button type='submit'>Send</button>
            </Form>
          )
        }


      </Formik>

    </div>
  );
};
