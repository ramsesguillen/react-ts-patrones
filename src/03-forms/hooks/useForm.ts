import { useState, ChangeEvent } from "react";


export const useForm = <T>( initState: T  ) =>  {

  const [formData, setFormData] = useState( initState );


  const onChange = ( { target }: ChangeEvent<HTMLInputElement> ) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    });
  }


  const isValidEmail = ( email: string ) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }


  const resetForm = () => {
    setFormData({ ...initState });
  }


  return {
    ...formData,
    onChange,
    resetForm,
    isValidEmail
  };
}