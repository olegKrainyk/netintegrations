import React from 'react'
import H2 from '../../H2/H2'
import ObliqueTop from '../../ObliqueTop/ObliqueTop'
import rs1 from './../../../img/support/rs1.png'
import AdditionalText from '../../AdditionalText/AdditionalText'


const RemoteSupport = () => {
    return (
        <div>
            <H2 isDropdown={true} h2Text='Remote support' h2Dropdown='One can hardly deny the advantages of remote support services. It allows any technician to assist a customer or a partner and solve any problem as if being side-by-side.' />


            {/* // */}

            <div className='page-block first'>
                <ObliqueTop num='first' />
                <div className='page-block-text content-center'>
                    <div className='page-block-text-flex' data-aos="fade-right" data-aos-duration="1000" data-aos-anchor-placement='top'>
                    
                        <div className='page-block-text-flex-text'>
                            <ul>
                                <li>Only trusted and official tools</li>
                                <li>Cost reduction and time-saving (all transport-related expenses are reduced; no need in the company’s helpdesk)</li>
                                <li>Our partners’ convenience competent specialists</li>
                                <li>Remote hardware and software support</li>
                            </ul>
                        </div>
                        <div className='page-block-text-flex-img'>
                            <img src={rs1} alt='dver' />
                        </div>
                    </div>

                    <AdditionalText className='mrg-top' isBold={false} text='The tools allow live chat, VoIP, desktop sharing, file transferring and synchronizing, command line, or guest accessibility.   
                            NetIntegrations, Inc. is trusted worldwide due to lasting reliability and increased clients’ satisfaction as a result of our professional work. 
                            It is our support that you can always count on. You do not need to wait for an appropriate time. 
                            ' />
                    <AdditionalText isBold={true} text='You may solve the most complicated task more effectively: faster reliably, seamlessly, and securely. Connect in seconds to our IT support team and get our help immediately.' />
                </div>
            </div>
        </div >
    )
}

export default RemoteSupport
