import React, { useState } from 'react'
import ScrollToTop from 'react-scroll-up'
import { Link } from 'react-scroll'
import styled from 'styled-components'

const BtnUpS = styled.div`
.btn-up {
    position: fixed;
    bottom: 30px;
    right: 40px;
    font-size: 35px;
    background-color: var(--accent2-color);
    color: var(--main-color);
    width: 40px;
    height: 40px;
    text-align: center;
    border-radius: 50%;
    line-height: 35px;
    filter: drop-shadow(0 0 4px black);
}
.btn-up:hover {
    animation: ${({ up }) => up ? 'btnUp 0.8s' : 'btnUp-rep 0.8s'};
    animation-iteration-count: 1;
}

@keyframes btnUp {
    0% {
        transform: rotate(360deg);
        transition: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
}
@keyframes btnUp-rep {
    0% {
        transform: rotate(360deg);
        transition: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
}
`;


const BtnUp = () => {

    const [up, setUp] = useState(true)

    return (
        <BtnUpS up={up}>
            <ScrollToTop showUnder={500}>
                <Link className='btn-up' to='App' smooth={true} duration={100} onClick={() => setUp(!up)}>
                    &#9652;
                </Link>
            </ScrollToTop>
        </BtnUpS>

    )
}

export default BtnUp
