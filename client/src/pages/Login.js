import React, { useState } from 'react'
import Input from '../components/Input'
import Submit from '../components/Submit'
import axios from 'axios'
import inputValidation from '../utils/InputValidation'
import { Link, useNavigate, useLocation } from 'react-router-dom'





const Register = () => {
    const [formData, setFormData] = useState({ email: '', password: '' })
    const { email, password } = formData
    const [error, setError] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    const [result, setResult] = useState('')

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const url = 'http://localhost:8080/api/auth/login'
    const data = { email, password }

    const handleSubmit = (e) => {
        e.preventDefault();
        // setError(inputValidation(values));

        if (formData.email.length == 0 || formData.password.length == 0) {
            setError(true)
        }


        axios.post(url, data)
            .then((res) => {
                console.log(res)
                // setResult(res.data)
                //   setMessage(true)
            }).catch((err) => {
                console.log(err)
                //   setAlert(err.response.data.message)
                //   setMessage(false)
            })
    }



    return (
        <>
            <div className="contain py-16">
                <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="space-y-2">
                            <div>
                                < Input
                                    title='Email'
                                    type='email'
                                    name='email'
                                    placeholder='youremail.@gmail.com'
                                    onChange={onChange}
                                    value={email}

                                />
                            </div>
                            {error && formData.email.length <= 0 ? <p style={{ 'color': 'red', fontSize: '12px' }}> Email can not be empty</p> : ''}
                        
                                <div>
                                    <div>
                                        < Input
                                            title='Password'
                                            type='password'
                                            name='password'
                                            placeholder='*******'
                                            onChange={onChange}
                                            value={password}
                                        />
                                    </div>
                                    {error && formData.password.length <= 0 ? <p style={{ 'color': 'red', fontSize: '12px' }}> Password can not be empty</p> : ''}
                                </div>
                        </div>
                        <Submit />
                        <Link style={{ fontSize: '12px', float : 'right' }} to='/forgetPassword' >  Mot de Passe Oublier</Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register