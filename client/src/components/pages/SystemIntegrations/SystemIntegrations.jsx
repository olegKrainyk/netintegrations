import React from 'react'
import H2 from '../../H2/H2'
import si1 from './../../../img/netServ/si1.png'
import './../Pages.css'
import ObliqueTop from '../../ObliqueTop/ObliqueTop'
import H4 from '../../H4/H4'

const SystemIntegrations = (props) => {
    return (
        <div>
            <H2 className='content-center' isDropdown={true} h2Text='System integrations' h2Dropdown='Nowadays, in our connected world, there is an urge to understand the complexities of the IT-sphere. 
                For all businesses, it is vital to make sure that the technology is in line with your business tasks. 
                NetIntegration team guarantees you operational excellence regardless of the company’s size due to boosting efficiency in the process of system integration. IT system integrators, by connecting together different computing systems and software applications, make your network a coordinated whole. 
                It may concern the connection within a new system or between systems that already exist.
                ' />

                    {/* // */}

            <div className='page-block first'>
                <ObliqueTop num='first' />
                <div className='page-block-text content-center'>
                    <H4 text='Our IT engineers that provide integration services are capable of designing, developing, and integrating systems and applications, which will best run your business:' />
                    <div className='page-block-text-flex' data-aos="fade-right" data-aos-duration="1000" data-aos-anchor-placement='top'>
                        <div className='page-block-text-flex-text'>
                            <ul>
                                <li>the integration of applications and company’s system;</li>
                                <li>business planning: help organizations to make customers analytics;</li>
                                <li>enterprise content management: improving data exchange within the company that leads to making better work and efficiency;</li>
                                <li>data centers: ensuring information availability and response efficiency as well as the adaptation of a constantly growing infrastructure;</li>
                                <li>architecture services: people coordination and process arrangement that improve architecture functioning;</li>
                                <li>geospatial solutions;</li>
                                <li>information security infrastructure: implementing proactive and business-aligned security strategy that minimizes risk management;</li>
                                <li>mobile computing: developing production and service access as well as earning client loyalty by means of mobile solutions.</li>
                            </ul>
                        </div>
                        <div className='page-block-text-flex-img'>
                            <img src={si1} alt='dver' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SystemIntegrations
