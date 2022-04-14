import React, { useState } from 'react'
import styled from 'styled-components'


const H2S = styled.div`

    padding-left: 80px;
    margin-bottom: 150px;
    margin-top: 30px;

    @keyframes h2-dropdown {
        0% {
            transform: translateY(-40px);
            opacity: 0;
            pointer-events: none;
        }
        100% {
            transform: translateY(0);
            pointer-events: none;
            opacity: 1;
        }
    }

    h2 {
        font-size: 36px;
        color: var(--accent1-color);
        font-weight: 700;
        display: inline-block;
        padding: 10px 15px;
        cursor: pointer;
    }
    .h2-content {
        display: ${ ({ open }) => open ? 'block' : 'none'};
        animation: ${({ open }) => open ? 'h2-dropdown 0.8s' : 'none'};
        animation-iteration-count: 1;
        padding: 10px;
        margin-right: 70px;
        font-size: 17px;
    }
    .h2-triangle {
        display: inline-block;
        font-size: 33px;
        transition: cubic-bezier(0.175, 0.885, 0.32, 1.275);
        transition-duration: 0.5s;
        margin-left: 4px;
        color: ${({ open }) => open ? 'var(--main-color)' : 'var(--accent1-color)'};
        transform: ${({ open }) => open ? 'rotate(180deg)' : 'rotate(0)'} ;
    }

`;

const H2 = (props) => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (

        <H2S open={open} className='h2s content-center'>
            <h2 data-aos="fade-right" data-aos-delay="300" data-aos-duration="200" onClick={handleClick}>
                {props.h2Text}{props.isDropdown ? <span className='h2-triangle'>&#9662;</span> : ''}
            </h2>
            {props.isDropdown ? <div className='h2-content'>{props.h2Dropdown}</div> : null}
        </H2S>
    )
}

export default H2
