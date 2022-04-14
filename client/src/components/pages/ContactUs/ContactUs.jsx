import React from 'react'
import H2 from '../../H2/H2'
import Form from '../../Form/Form'

const ContactUs = (props) => {
    return (
        <div>
            <H2 h2Text='ContactUs' isDropdown={false} h2Dropdown='Fiil out the form' />
            <Form />
        </div>
    )
}

export default ContactUs
