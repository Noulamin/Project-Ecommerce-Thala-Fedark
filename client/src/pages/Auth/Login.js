import React, { useState } from 'react'
import Input from '../../components/Input'
import Submit from '../../components/Submit'
import axios from 'axios'
// import inputValidation from '../utils/InputValidation'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Header from '../../components/Header'
import NavBar from '../../components/NavBar'






const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const { email, password } = formData
  const [error, setError] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)
  const [result, setResult] = useState('')

  const navigate = useNavigate()
  const location = useLocation();
  const from =  location.state?.from || '/';

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const url = 'http://localhost:8080/api/auth/login'
  const data = { email, password }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setError(inputValidation(values));

    if (formData.email.length == 0 || formData.password.length == 0) {
      setError(true)
    }

    try {
      const res = await axios.post(url, data, { withCredentials: true });
      console.log(JSON.stringify(res?.data))
      console.log(res);
      const roles = res?.data?.role
      // const name = res?.data?.name;
      localStorage.setItem('role', roles)
      localStorage.setItem('email', email)
      navigate(from, { replace: true });
      console.log(from);

    } catch (err) {
      if (err.res?.status === 400) {
        // setErrMsg('Missing Username or Password');
      }

    }

  }



  return (
    <>
      <Header />
      <NavBar />
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
            <Link style={{ fontSize: '12px', float: 'right' }} to='/forgetPassword' >  Mot de Passe Oublier</Link>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login