import React from 'react';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'

import { signUpRequest } from '../../store/modules/auth/actions'

import logo from '../../assets/images/logo.png'

const schema = Yup.object().shape({
  name: Yup.string().required('Name is Required'),
  email: Yup.string().email('Insert a valid Email').required('Email is required'),
})


export default function SignUp() {
  const dispatch = useDispatch()

  function handleSubmit({ name, email }) {
    dispatch(signUpRequest(name, email))
  }
  return (
    <>
      <img src={logo} alt="Venturz"></img>

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Name" />
        <Input name="email" type="email" placeholder="E-mail" />
        <button type="submit">Create Account</button>
        <Link to="/">SignIn</Link>
      </Form>
    </>

  );
}
