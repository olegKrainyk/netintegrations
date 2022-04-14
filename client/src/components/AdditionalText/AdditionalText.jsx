import React from 'react'

const AdditionalText = (props) => {
    return (
        <div className={`page-block-additionalText ${props.isBold ? 'bold-text' : null}`} data-aos="fade-right" data-aos-duration="1000" data-aos-anchor-placement='top'>
            {props.text}
        </div>
    )
}

export default AdditionalText
