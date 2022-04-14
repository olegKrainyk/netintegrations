import React from 'react';
import './Home.css';
import arrdown from './../../img/arrow-down.png';
import { Link } from 'react-scroll';
import Cards from './Cards/Cards';
import cardImg1 from './../../img/home/card1.png';
import cardImg2 from './../../img/home/card2.png';
import cardImg3 from './../../img/home/card3.png';

function Home() {

    const cards = [
        {
            id: 1, 
            title: 'WHAT DO WE DO',
            text: 'NetIntegrations, Inc. business is to help companies successfully integrate technologies, making them function efficiently with minimum cost and downtime.',
            img: cardImg1,
            side: 'l'
        },
        {
            id: 2, 
            title: 'HOW WE DO IT',
            text: 'NetIntegrations was founded by group of System Engineers that brought in their technical knowledge and years of experience in design and deployment of corporate infrastructures. We can help your company design optimal and cost-effective network structure and maintain it with the best performance and minimum downtime. We will work with you to make sure that design and functionality of your network will be as friendly as possible for all of the workers. Your network will be secured from outside attacks and remotely accessible by your employees.',
            img: cardImg2,
            side: 'r'
        },
        {
            id: 3, 
            title: 'WHY CHOOSE US',
            text: 'Companies with limited resources and technical expertise found NetIntegrations as an IT outsourcing solution assisting in systems management and decision making processes.',
            img: cardImg3,
            side: 'l'
        }
    ]

    return (
        <div>
            <div className='home-block content-center'>
                <div className='home content-center'>
                    <div className='main-titles'>
                        <h1 data-aos="fade-right" data-aos-delay="900" data-aos-duration="400" data-aos-once='false'>NETintegrations</h1>
                        <h2 data-aos="fade-right" data-aos-delay="1100" data-aos-duration="400" data-aos-once='false'>The best solution for your network!</h2>
                    </div>
                    <div className='main-btn-wrapper'data-aos="fade-right" data-aos-delay="1500" data-aos-duration="300" data-aos-once='true' data-aos-anchor-placement='top'>
                        <Link className='main-btn' to='home-block-2' smooth={true} duration={80}>
                            Learn more
                            <img src={arrdown} alt="arr-down"></img>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='home-block-2' id='homeBlock2'>
                <Cards cards={cards} />
            </div>  
        </div>
    );
}

export default Home;