import React from 'react'
import H2 from '../../H2/H2'
import nd1 from './../../../img/netServ/nd1.png'
import nd2 from './../../../img/netServ/nd2.png'
import nd3 from './../../../img/netServ/nd3.png'
import ArrowDown from '../../ArrowDown/ArrowDown'
import ObliqueTop from '../../ObliqueTop/ObliqueTop'
import H4 from '../../H4/H4'

const NetworkDesign = (props) => {

    return (
        <div className="network-design">
            <H2 isDropdown={true} h2Text='Network design' h2Dropdown='The aim of the network design is to plan the implementation of a computer network infrastructure,
             making it manageable and supportable;
             to launch a network that can adjust and scale to the requirements of new services.
              A work on any system starts with scope determination. 
            It is a vital stage in the further successful functioning of a network. 
            By preparing a blueprint for a design we separate problematic areas and describe the scope of the project.' />

            
            {/* // */}

            <div className='page-block first'>
                <ObliqueTop num='first' />
                <div className='page-block-text content-center'>
                    <H4 text='NetIntegrations approach to web design is to:' />
                    <div className='page-block-text-flex' data-aos="fade-right" data-aos-duration="1000" data-aos-anchor-placement='top'>
                        <div className='page-block-text-flex-text'>
                            <ul>
                                <li>always meet customers requirements</li>
                                <li>assess available resources</li>
                                <li>identify the issues that influence both the whole network and certain parts of it</li>
                            </ul>
                        </div>
                        <div className='page-block-text-flex-img'>
                            <img src={nd1} alt='dver' />
                        </div>
                    </div>
                </div>
                <ArrowDown next='second' />
            </div>

                {/* // */}

            <div className='page-block second white'>
                <ObliqueTop num='second' />
                <div className='page-block-text content-center'>
                    <H4 text='Network design for business (small or big) includes:' />
                    <div className='page-block-text-flex' data-aos="fade-right" data-aos-duration="1000" data-aos-anchor-placement='top'>
                        <div className='page-block-text-flex-text'>
                            <ul>
                                <li>making a logical scheme of the network</li>
                                <li>constructing a cabling</li>
                                <li>defining types, quantity and location of network devices</li>
                                <li>working on IP address organization', 'developing a network security system</li>
                            </ul>
                        </div>
                        <div className='page-block-text-flex-img'>
                            <img src={nd2} alt='dver' />
                        </div>
                    </div>
                </div>
                <ArrowDown next='third' />
            </div>

                {/* // */}

            <div className='page-block third'>
                <ObliqueTop num='third' />
                <div className='page-block-text content-center'>
                    <H4 text='Choosing NetIntegrations you may be sure that our fundamental tasks are to make a network:' />
                    <div className='page-block-text-flex' data-aos="fade-right" data-aos-duration="1000" data-aos-anchor-placement='top'>
                        <div className='page-block-text-flex-text'>
                            <ul>
                                <li><span className='bold-text uppercase'>scalable:</span> the ability to add new user groups and remote sites as well as to support a new app still keeping the same level of service to existing users</li>
                                <li><span className='bold-text uppercase'>available 24/7:</span> any problems that occur to a single link or some equipment should not influence significantly the whole working process</li>
                                <li><span className='bold-text uppercase'>safe:</span> security as a part of network design should be developed from the beginning, not after the network is launched (the placing of filters, firewalls, and other security devices)</li>
                                <li><span className='bold-text uppercase'>manageable:</span> it is important to observe the network functioning; even the most perfect network design needs professional computer support in the process</li>
                            </ul>
                        </div>
                        <div className='page-block-text-flex-img'>
                            <img src={nd3} alt='dver' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NetworkDesign