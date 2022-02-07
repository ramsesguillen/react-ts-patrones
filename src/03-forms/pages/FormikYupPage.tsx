import { useFormik } from 'formik'
import * as yup from 'yup';

import '../styles/styles.css';


// interface FormValues {
//   firstName: string;
//   lastName: string;
//   email: string;
// }

export const FormikYupPage = () => {



  const { handleSubmit,errors, touched,
          getFieldProps,
  }  = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: yup.object({
      firstName: yup.string()
                    .max(15, 'Debe de tener 15 caracteres o menos')
                    .required('Requirido'),
      lastName: yup.string()
                    .max(15, 'Debe de tener 15 caracteres o menos')
                    .required('Requirido'),
      email: yup.string().email('El correo no tiene un formato valido').required('Requirido'),
    })
  });


  return (
    <div>
      <h1>Formik Basic Tutorial</h1>

      <form onSubmit={ handleSubmit } noValidate>
        <label htmlFor="FirstName">First Name</label>
        <input type="text"
          { ...getFieldProps('firstName') }
        />
        { touched.firstName && errors.firstName && <span>{ errors.firstName }</span>}


        <label htmlFor="lastName">Last Name</label>
        <input type="text"
          { ...getFieldProps('lastName') }
        />
        { touched.lastName && errors.lastName && <span>{ errors.lastName }</span>}


        <label htmlFor="email">Email Address</label>
        <input type="email"
          { ...getFieldProps('email') }
        />
        { touched.email && errors.email && <span>{ errors.email }</span>}

        <button type='submit'>Send</button>
      </form>
    </div>
  );
};
