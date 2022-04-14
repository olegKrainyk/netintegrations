import React from 'react'

const ObliqueTop = (props) => {
    return (
        <div className='page-block-top' id={props.num === 'second' ? 'page-block-top-second' : props.num === 'third' ? 'page-block-top-third' : 'page-block-top-first'} ></div>
    )
}

export default ObliqueTop
