import React from 'react'
import { Link } from 'react-router-dom'


const MsgRegisterSucc = () => {

   
    return (
        <>
            <h4 class="text-3xl font-normal leading-normal mt-0 mb-2 text-green-800">
                User create successfuly Please check your email for validation
            </h4>
            <button><Link to='/login'>Login</Link></button>

        </>
    )
}

export default MsgRegisterSucc