import React from 'react'
import H2 from '../../H2/H2'
import itous from './../../../img/support/itous.png'
import AdditionalText from '../../AdditionalText/AdditionalText'
import H4 from '../../H4/H4'
import ObliqueTop from '../../ObliqueTop/ObliqueTop'

const IToutsourcingServices = () => {
    return (
        <div>
            <H2 isDropdown={true} h2Text='IT outsourcing services' h2Dropdown={<>Technological innovations and customer expectations are the key points of successful business conduction in the modern world.
            Businesses are expected to offer goods and services of high quality and within the shortest possible time.
                <div className='mrg-top-sm'>Thus, innovative and efficient methods may boost your company, make it adaptive to changing conditions, and responsive to global growth. NetIntegrations’ clients always benefit from the flexibility and agility built into our IT outsourcing services and support of IT platforms.
                <div>We always seek for better decision to move from complicated and ineffective IT environments.</div></div>
            </>} />

            {/* // */}

            <div className='page-block first'>
                <ObliqueTop num='first' />
                <div className='page-block-text content-center'>
                    <H4 text='NetIntegrations, Inc. provide the following outsourced IT services:' />
                    <div className='page-block-text-flex' data-aos="fade-right" data-aos-duration="1000" data-aos-anchor-placement='top'>
                        <div className='page-block-text-flex-text'>
                            <ul>
                                <li>service desk: the introduction of remote or self-service capability allows reducing help desk costs by 40%;</li>
                                <li>workplace: improving user productivity with faster software, safer computing environment, network support, and mobility;</li>
                                <li>data center: lowering costs and mitigating risks due to better utilization, less complexity, and no staff turnover; </li>
                                <li>IT network monitoring: minimizing network downtime as well as maximizing its security by improving disclosure and reaction to prioritized security threats;</li>
                                <li>IT management and security services: the reduction of telecommunication costs by up to 20 percent, lowering hardware/software expenses up to 80%.</li>
                            </ul>
                        </div>
                        <div className='page-block-text-flex-img'>
                            <img src={itous} alt='dver' />
                        </div>
                    </div>
                    <AdditionalText isBold={false} text='NetIntegrations help our clients to get a single point of accountability through simplifying the network infrastructure. We take a service-oriented and business-led approach to all of the IT services that we provide.' />
                </div>
            </div>

        </div>
    )
}

export default IToutsourcingServices
