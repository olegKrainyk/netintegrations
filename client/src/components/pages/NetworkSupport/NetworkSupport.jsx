import React from 'react'
import H2 from '../../H2/H2'
import ns1 from './../../../img/support/ns1.png'
import ns2 from './../../../img/support/ns2.png'
import ArrowDown from '../../ArrowDown/ArrowDown'
import H4 from '../../H4/H4'
import AdditionalText from '../../AdditionalText/AdditionalText'
import ObliqueTop from '../../ObliqueTop/ObliqueTop'

const NetworkSupport = () => {
    return (
        <div>
            <H2 isDropdown={true} h2Text='Network Support' h2Dropdown='With computer technologies that change constantly, one needs to have reliable network support. NetIntegrations, Inc. is taking care of the architecture, maintenance, and secure operation of your network infrastructure 24/7.   Our IT support department suggests different approaches to network functioning, which depend on the owner’s needs and how complex the system is. Signing up for our services, you will receive highly experienced and continually trained computer specialists.' />

            {/* // */}


            <div className='page-block first white'>
                <ObliqueTop num='first' />
                <div className='page-block-text content-center'>
                    <H4 text='We help you with:' />
                    <div className='page-block-text-flex' data-aos="fade-right" data-aos-duration="1000" data-aos-anchor-placement='top'>
                        <div className='page-block-text-flex-text'>
                            <ul>
                                <li>upgrading your computer system;</li>
                                <li>increasing the buffer size in case of ‘slow’ server;</li>
                                <li>the need of supporting systems;</li>
                                <li>other IT computer problems.</li>
                            </ul>
                        </div>
                        <div className='page-block-text-flex-img'>
                            <img src={ns1} alt='dver' />
                        </div>
                    </div>
                    <AdditionalText className='mrg-top' isBold={true} text='What is more, NetIntegrations gives maintenance instructions for you to be able to monitor the network and run it with maximum efficiency. By using pre-determined intervals, we also help to minimize downtime.' />
                </div>
                <ArrowDown next='second' />
            </div>

            {/* // */}

            <div className='page-block'>
            <ObliqueTop num='second' />
                <div className='page-block-text content-center'>
                    <H4 text='Here is the list of our main services in network and computer support that we provide:' />
                    <div className='page-block-text-flex' data-aos="fade-right" data-aos-duration="1000" data-aos-anchor-placement='top'>
                        <div className='page-block-text-flex-text'>
                            <ul>
                                <li>analyzing, testing and evaluating existing systems; </li>
                                <li>repairing, supporting and training on-site assisting your network remotely;</li>
                                <li>installing and supporting hardware;</li>
                                <li>Installing and supporting software.</li>
                            </ul>
                        </div>
                        <div className='page-block-text-flex-img'>
                            <img src={ns2} alt='dver' />
                        </div>
                    </div>
                    <AdditionalText className='mrg-top' isBold={true} text='No matter how complex the problem is, you can be sure that our IT consultant will find the solution.' />
                </div>
            </div>
        </div>
    )
}

export default NetworkSupport
