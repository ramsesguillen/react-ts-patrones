import { Formik, Form } from 'formik'
import * as yup from 'yup';
import { MySelect, MyTextInput} from '../components'
import formJson from '../data/custom-form.json';
import '../styles/styles.css';


const initialValues: { [key: string]: any } = {}
const requiredFields: { [key: string]: any } = {}

for (const input of formJson) {
  initialValues[ input.name ] = input.value;

  if ( !input.validations ) continue;

  let schema = yup.string();
  for (const rule of input.validations) {
    if ( rule.type === 'required' ) {
      schema = schema.required('Este campo es requerido');
    }
    if ( rule.type === 'minLength' ) {
      schema = schema.min((rule as any).value || 2, `Minimo de ${ (rule as any).value || 1}`);
    }
    if ( rule.type === 'email' ) {
      schema = schema.email('El correo no es valido');
    }
  }


  requiredFields[input.name] = schema;
}

const validationSchema = yup.object({ ...requiredFields })



export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={ initialValues }
        onSubmit={ ( values ) => {
          console.log( values);
        }}
        validationSchema={ validationSchema }
      >

        { () => (
            <Form>
              {
                formJson.map( ({ type, label, name, options }) => {

                  if ( type === 'input' || type === 'password' || type === 'email' ) {
                    return (
                      <MyTextInput
                        key={ name }
                        label={ label }
                        name={ name }
                        type={( type as any )}
                      />
                    )
                  } else if ( type === 'select' ) {
                    return (
                      <MySelect
                        key={ name }
                        label={ label }
                        name={ name }
                      >
                        <option value="">Select an option</option>
                        {
                          options?.map( ({id, label}) => (
                            <option key={id} value={ id }>{ label }</option>
                          ))
                        }
                      </MySelect>
                    )
                  }

                  throw new Error(`El type: ${ type }, no es soportado`);
                })
              }

              <button type='submit'>Send</button>
            </Form>
          )
        }


      </Formik>


    </div>
  );
};
