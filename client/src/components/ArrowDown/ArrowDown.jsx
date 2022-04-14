import React from 'react'
import arrdown from './../../img/arrow-down.png'
import { Link } from 'react-scroll'

const ArrowDown = (props) => {
    return (
        <>
            <Link className='page-down-btn' to={props.next === 'second' ? 'page-block-top-second' : 'page-block-top-third'} smooth={true} duration={50} data-aos="fade-right" data-aos-duration="1000" data-aos-anchor-placement='top'><img src={arrdown} alt="arr-down" ></img></Link>
        </>
    )
}

export default ArrowDown
