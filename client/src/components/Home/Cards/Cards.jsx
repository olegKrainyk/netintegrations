import React from 'react'
import './Cards.css'


const Cards = (props) => {

    const cards = props.cards;

    const cardItems = cards.map(c =>
        <div key={c.id} className={`home-card ${c.side}`} data-aos='fade-right' data-aos-duration="700" data-aos-anchor-placement='top'>
            <div className='home-card-body'>
                <div className='card-body-info'>
                    <h3>{c.title}</h3>
                    <div className='home-card-text'>{c.text}</div>
                </div>
                <div className='home-card-img'><img src={c.img} alt='img' /><div></div></div>
            </div>
        </div>)

    return (
        <div id='homecards' className='home-cards content-center'>
            {cardItems}
        </div>
    )
}

export default Cards