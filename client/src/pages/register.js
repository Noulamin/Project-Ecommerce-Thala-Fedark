import React, { useRef, useState } from 'react'
import Input from '../components/Input'
import Submit from '../components/Submit'



const Register = () => {
    const [formData, setFormData] = useState({ first_Name: '', last_Name: '', email: '', password: '', password2: '', phone_Number: '', city: '', adress: '' })
    const { first_Name, Last_Name, email, password, password2, phone_Number, city, adress } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <>
            <div className="contain py-16">
                <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
                    <form action="#" method="post">
                        <div className="space-y-2">
                            <div className='d-flex justify-content-between'>
                                <div >
                                    < Input
                                        title='First Name'
                                        type='text'
                                        name='first_Name'
                                        placeholder='Enter Your First Name'
                                        onChange={onChange}
                                    />
                                </div>
                                <div>
                                    < Input
                                        title='Last Name'
                                        type='text'
                                        name='last_Name'
                                        placeholder='Enter Your Last Name'
                                        onChange={onChange}
                                    />
                                </div>
                            </div>
                            <div>
                                < Input
                                    title='Email'
                                    type='email'
                                    name='email'
                                    placeholder='youremail.@gmail.com'

                                />
                                onChange = {onChange}
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    < Input
                                        title='Password'
                                        type='password'
                                        name='password'
                                        placeholder='*******'
                                        onChange={onChange}
                                    />
                                </div>
                                <div>
                                    < Input
                                        title='Confirme Password'
                                        type='password'
                                        name='password2'
                                        placeholder='*******'
                                        onChange={onChange}
                                    />
                                </div>
                            </div>
                            <div>
                                < Input
                                    title='Phone Number'
                                    type='text'
                                    name='phone_Number'
                                    placeholder="Enter Phone Number"
                                    onChange={onChange}
                                />
                            </div>
                            <div>
                                < Input
                                    title='Adresse'
                                    type='text'
                                    name='adress'
                                    placeholder='Enter Your Adresse'
                                    onChange={onChange}
                                />
                            </div>
                            <div>
                                < Input
                                    title='Ville'
                                    type='text'
                                    name='city'
                                    placeholder='Enter your Ville'
                                    onChange={onChange}
                                />
                            </div>
                        </div>

                        <Submit />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register