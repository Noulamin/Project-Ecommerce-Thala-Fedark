import axios from 'axios'
import React, { useState } from 'react'
import Submit from '../components/Submit'
import { useNavigate } from 'react-router-dom'
import Input from '../components/Input'



const ForgetPassword = () => {
  const navigate = useNavigate()
  // const [email, setEmail] = useState('')
  const [mess, setMess] = useState('')
  const [error, setError] = useState(false)
  const [formData, setFormData] = useState({ email: '' })
  const { email } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const url = 'http://localhost:8080/api/auth/forgetpassword'
  const data = { email }

  const hundelSubmit = (e) => {
    e.preventDefault();

    if (formData.email.length === 0) {
      setError(true)
    }

    axios.post(url, data, { withCredentials: true })
      .then((res) => {
        console.log(res)
        // navigate('/message')

      }).catch((err) => {
        console.log(err.response.data.err);
        setMess(err.response.data.err)
      })
  }

  return (
    <>
      <div className="contain py-16">
        <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
          <form onSubmit={(e) => hundelSubmit(e)}>
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
            </div>
            <Submit />

          </form>
        </div>
      </div>
    </>
  )
}

export default ForgetPassword