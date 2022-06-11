import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function Register() {

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: ""
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup
      .string()
      .required('First Name is a required field'),
    lastName: Yup
      .string()
      .required('Last name is a required field'),
    email: Yup
      .string()
      .email('Not a valid email')
      .required('Email is a required field'),
    userName: Yup
      .string()
      .min(6, 'Username must be 6 characters')
      .max(15, 'Username cannot exceed 15 characters')
      .required('Username is a required field'),
    password: Yup
      .string()
      .min(8, 'Password must be 6 characters')
      .max(20, 'Password cannot exceed 20 characters')
      .required('Password is a required field')
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      ),
    confirmPassword: Yup
      .string()
      .required("Please confirm your password")
      .when("password", {
        is: password => (password && password.length > 0 ? true : false),
        then: Yup.string().oneOf([Yup.ref("password")], "Password doesn't match")
      })
  })

  const onSubmit = (data) => {
    let user = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      userName: data.userName,
      password: data.password
    }

    axios.post("http://localhost:3001/register", user).then((res) => {
      console.log(res.request.status)
    })
  }

  return (

    <div className="register">
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form className="formContainer">
          <label> First Name </label>
          <ErrorMessage name="firstName" component="span" />
          <Field
            id="inputFirstName"
            name="firstName"
            placeholder="Ex: John" />

          <label> Last Name </label>
          <ErrorMessage name="lastName" component="span" />
          <Field
            id="inputLastName"
            name="lastName"
            placeholder="Ex: Smith" />

          <label> Email </label>
          <ErrorMessage name="email" component="span" />
          <Field
            id="inputEmail"
            name="email"
            placeholder="Ex: jsmithy@hotmail.com" />

          <label> Username </label>
          <ErrorMessage name="userName" component="span" />
          <Field
            id="inputUserName"
            name="userName"
            placeholder="Ex: jsmith123" />

          <label> Password </label>
          <ErrorMessage name="password" component="span" />
          <Field
            autoComplete="off"
            type="password"
            id="inputPassword"
            name="password"
            placeholder="Ex: jb007" />

          <label> Confirm Password </label>
          <ErrorMessage name="confirmPassword" component="span" />
          <Field
            autoComplete="off"
            type="password"
            id="inputConfirmPassword"
            name="confirmPassword"
            placeholder="Ex: jb007" />

          <button type="submit">Create Account</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Register