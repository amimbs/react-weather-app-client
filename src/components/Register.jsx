import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function Register() {

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: ""
  };

  const onSubmit = (data) => {
    console.log(data)
  }

  return (

    <div className="register">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className="formContainer">
          <label>First Name</label>
          <Field
            id="inputFirstName"
            name="firstName"
            placeholder="Ex: John" />

          <label>Last Name</label>
          <Field
            id="inputLastName"
            name="lastName"
            placeholder="Ex: Smith" />

          <label>Email</label>
          <Field
            id="inputEmail"
            name="email"
            placeholder="Ex: jsmithy@hotmail.com" />

          <label>User Name</label>
          <Field
            id="inputUserName"
            name="userName"
            placeholder="Ex: jsmith123" />

          <label>Pasword</label>
          <Field
            autoComplete="off"
            id="inputPassword"
            name="password"
            placeholder="Ex: jb007" />

          <button type="submit">Create Account</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Register