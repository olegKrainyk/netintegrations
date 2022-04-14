import React from 'react'
import H2 from '../../H2/H2'
import ObliqueTop from '../../ObliqueTop/ObliqueTop'
import acs1 from './../../../img/support/acs1.png'
import acs2 from './../../../img/support/acs2.png'
import ArrowDown from '../../ArrowDown/ArrowDown'
import AdditionalText from '../../AdditionalText/AdditionalText'
import H4 from '../../H4/H4'


const AppleComputerSupport = () => {
    return (
        <div>
            <H2 isDropdown={true} h2Text='Apple computer support' h2Dropdown='Official Apple repair and service are too expensive for you or hard to reach? Have problems with application support? Due to the popularity and universality of Apple products, it is quite understandable that everyone looks for available service 24/7 in case of any trouble.' />

            {/* // */}


            <div className='page-block first white'>
                <ObliqueTop num='first' />
                <div className='page-block-text content-center'>
                    <H4 text='NetIntegrations, Inc. offers you full Apple computer support, including:' />
                    <div className='page-block-text-flex' data-aos="fade-right" data-aos-duration="1000" data-aos-anchor-placement='top'>
                        <div className='page-block-text-flex-text'>
                            <ul>
                                <li>the repair of servers, workstations, laptops, tablets and much more; </li>
                                <li>our help in setting up a new or modifying your existing network;</li>
                                <li>working as the IT department for your company;</li>
                                <li>app support.</li>
                            </ul>
                        </div>
                        <div className='page-block-text-flex-img'>
                            <img src={acs1} alt='acs1' />
                        </div>
                    </div>
                    <AdditionalText className='mrg-top' isBold={false} text='When our help may be needed The well-elaborated network service infrastructure contains an automatic fallback server that is synchronized with the main one. In case of it going down, the main server will take over. 
                            Thus, OS X Server includes options that let you cluster servers together improving their reliability and efficiency.  
                            ' />
                </div>
                <ArrowDown next='second' />
            </div>

            {/* // */}

            <div className='page-block'>
                <ObliqueTop num='second' />
                <div className='page-block-text content-center'>
                    <H4 text='Apart from this, OS X Servers:' />
                    <div className='page-block-text-flex' data-aos="fade-right" data-aos-duration="1000" data-aos-anchor-placement='top'>
                        <div className='page-block-text-flex-text'>
                            <ul>
                                <li>allow you to fine-tune the network routing; </li>
                                <li>enable Web service plug-ins; </li>
                                <li>grant additional services, such as calendaring, VPN, centralized authentication via Open Directory, and databases like MySQL; </li>
                                <li>provide the tools needed to easily administer the server.</li>
                            </ul>
                        </div>
                        <div className='page-block-text-flex-img'>
                            <img src={acs2} alt='acs2' />
                        </div>
                    </div>
                    <AdditionalText className='mrg-top' isBold={true} text='You can rely on us for all your APPLE or mixed environment networking and PC support needs.' />
                </div>
            </div>
        </div>
    )
}

export default AppleComputerSupport
