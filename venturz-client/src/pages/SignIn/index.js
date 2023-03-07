import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'

import { signInRequest } from '../../store/modules/auth/actions'

import logo from '../../assets/images/logo.png'

const schema = Yup.object().shape({
    email: Yup.string().email('Insert a valid Email').required('Email is required'),
    name: Yup.string().required('Name is required'),
})

export default function SignIn() {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.auth.loading)

    function handleSubmit({ email, name }) {
        dispatch(signInRequest(email, name))
    }

    return (
        <>
            <img src={logo} alt="Venturz"></img>

            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="email" type="email" placeholder="E-mail" />
                <Input name="name" type="name" placeholder="Name" />
                <button type="submit">{loading ? 'Loading...' : 'Login'}</button>
                <Link to="/register">Create Account</Link>
            </Form>
        </>

    );
}
