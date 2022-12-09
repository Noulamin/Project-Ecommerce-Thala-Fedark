import React, { useState } from 'react'
import Input from '../components/Input'
import Submit from '../components/Submit'
import axios from 'axios'
import inputValidation from '../utils/InputValidation'





const Register = () => {
    const [formData, setFormData] = useState({ first_Name: '', last_Name: '', email: '', password: '', password2: '', phone_Number: '', city: '', adress: '' })
    const { first_Name, last_Name, email, password, password2, phone_Number, city, adress } = formData
    const [error, setError] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    const [result, setResult] = useState('')

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const url = 'http://localhost:8080/api/auth/register'
    const data = { first_Name, last_Name, email, password, phone_Number, city, adress }

    const handleSubmit = (e) => {
        e.preventDefault();
        // setError(inputValidation(values));

        if (formData.first_Name.length == 0 || formData.last_Name.length == 0 || formData.email.length == 0 || formData.password.length == 0 || formData.password2.length == 0 || formData.phone_Number.length == 0 || formData.city.length == 0 || formData.adress.length == 0) {
            setError(true)
        }
        else if (formData.password != formData.password2) {
            setErrorPassword(true)
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
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <div >
                                        < Input
                                            title='First Name'
                                            type='text'
                                            name='first_Name'
                                            placeholder='Enter Your First Name'
                                            onChange={onChange}
                                            value={first_Name}
                                        />
                                    </div>
                                    {error && formData.first_Name.length <= 0 ? <p style={{ 'color': 'red', fontSize: '12px' }}> first Name can not be empty</p> : ''}
                                </div>
                                <div>
                                    <div>
                                        < Input
                                            title='Last Name'
                                            type='text'
                                            name='last_Name'
                                            placeholder='Enter Your Last Name'
                                            onChange={onChange}
                                            value={last_Name}
                                        />
                                    </div>
                                    {error && formData.last_Name.length <= 0 ? <p style={{ 'color': 'red', fontSize: '12px' }}> last Name can not be empty</p> : ''}
                                </div>
                            </div>
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
                            <div className='d-flex justify-content-between'>
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
                               <div>
                               <div>
                                    < Input
                                        title='Confirme Password'
                                        type='password'
                                        name='password2'
                                        placeholder='*******'
                                        onChange={onChange}
                                        value={password2}
                                    />
                                </div>
                                {error && formData.password2.length <= 0 ? <p className='m-0' style={{ 'color': 'red', fontSize: '12px' }}> Confirme password can not be empty</p> : ''}
                                {errorPassword ? <p style={{ 'color': 'red', fontSize: '12px' }}> Password is not match</p> : ''}
                               </div>
                            </div>
                            <div>
                                < Input
                                    title='Phone Number'
                                    type='text'
                                    name='phone_Number'
                                    placeholder="Enter Phone Number"
                                    onChange={onChange}
                                    value={phone_Number}
                                />
                            </div>
                            {error && formData.phone_Number.length <= 0 ? <p className='m-0' style={{ 'color': 'red', fontSize: '12px' }}> Phone number can not be empty</p> : ''}

                            <div>
                                < Input
                                    title='Adresse'
                                    type='text'
                                    name='adress'
                                    placeholder='Enter Your Adresse'
                                    onChange={onChange}
                                    value={adress}
                                />
                            </div>
                            {error && formData.adress.length <= 0 ? <p className='m-0' style={{ 'color': 'red', fontSize: '12px' }}> Adresse can not be empty</p> : ''}

                            <div>
                                < Input
                                    title='City'
                                    type='text'
                                    name='city'
                                    placeholder='Enter your City'
                                    onChange={onChange}
                                    value={city}
                                />
                            </div>
                            {error && formData.city.length <= 0 ? <p className='m-0' style={{ 'color': 'red', fontSize: '12px' }}> City can not be empty</p> : ''}

                        </div>

                        <Submit />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register