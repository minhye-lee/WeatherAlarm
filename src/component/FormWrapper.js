import React from 'react'
import './css/FormWrapper.css'

const FormWrapper = ({children}) => (
    <div className="positioner">
        <div className="contents">
            {children}
        </div>
    </div>
)

export default FormWrapper;