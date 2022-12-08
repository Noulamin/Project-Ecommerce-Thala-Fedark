import React from 'react'

const input = (props, onChange) => {
    return (
        <>
            <div className='mt-3'>
                <label className='form-label'>{props.title}</label>
                <input className="form-control inputs"
                    type={props.type}
                    name = {props.name}
                    onChange 
                    placeholder={props.placeholder} />
            </div>
        </>
    )
}

export default input