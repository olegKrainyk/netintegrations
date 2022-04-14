import React from 'react'
import H2 from '../../H2/H2'
import hippa1 from './../../../img/secSer/hippa1.png'
import hippa2 from './../../../img/secSer/hippa2.png'
import ArrowDown from '../../ArrowDown/ArrowDown'
import ObliqueTop from '../../ObliqueTop/ObliqueTop'
import H4 from '../../H4/H4'

const HipaaSecurityAssessment = (props) => {
    return (
        <div>
            <H2 className='content-center' isDropdown={true} h2Text='HIPAA security assessment' h2Dropdown={<>With the implementation of new privacy regulations from the DHHS, everyone has the right to be informed and to control how his/her health information gets used.
            All HIPAA-covered entities must adhere to these regulations. Otherwise, any violation that occurs will be revealed during an audit by the Office for Civil Rights.
                <div className='mrg-top-sm'>As far as the threat of data breach is now very high, it is no longer a question of whether it may occur or not, but it is a matter of time.</div>
            </>} />

            {/* // */}

            <div className='page-block first white'>
                <ObliqueTop num='first' />
                <div className='page-block-text content-center'>
                    <H4 text='NetIntegrations, Inc. helps you avoid breaches and protect patients information by implementing the safeguards according to the demands of the HIPAA Rules, which are:' />
                    <div className='page-block-text-flex' data-aos="fade-right" data-aos-duration="1000" data-aos-anchor-placement='top'>
                        <div className='page-block-text-flex-text'>
                            <ul>
                                <li>Privacy rule (the protection of individual health information);</li>
                                <li>Security Rule (the establishment of security standards for electronic personal data); Breach Notification Rule (the requirements for providing notifications about any violation of unsecured data); </li>
                                <li>Patient Safety Rule (the safety of that part of the health information that is used to determine and improve patient care).</li>
                            </ul>
                        </div>
                        <div className='page-block-text-flex-img'>
                            <img src={hippa1} alt='dver' />
                        </div>
                    </div>
                </div>
                <ArrowDown next='second' />
            </div>

            {/* // */}

            <div className='page-block second'>
                <ObliqueTop num='second' />
                <div className='page-block-text content-center'>
                    <H4 text='Our specialists offer the following IT security services:' />
                    <div className='page-block-text-flex' data-aos="fade-right" data-aos-duration="1000" data-aos-anchor-placement='top'>
                        <div className='page-block-text-flex-text'>
                            <ul>
                                <li>on-site assessment of administrative and technical safety policies, approaches, procedures, systems, and network; </li>
                                <li>potential threats evaluation;</li>
                                <li>internal and external vulnerability audit;</li>
                                <li>checking the relevance of applications to the Security Rule.</li>
                            </ul>
                        </div>
                        <div className='page-block-text-flex-img'>
                            <img src={hippa2} alt='dver' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HipaaSecurityAssessment
