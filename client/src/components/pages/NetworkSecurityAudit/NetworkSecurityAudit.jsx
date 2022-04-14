import React from 'react'
import H2 from '../../H2/H2'
import nsa1 from './../../../img/secSer/nsa1.png'
import nsa2 from './../../../img/secSer/nsa2.png'
import ArrowDown from '../../ArrowDown/ArrowDown'
import H4 from '../../H4/H4'
import ObliqueTop from '../../ObliqueTop/ObliqueTop'
import AdditionalText from '../../AdditionalText/AdditionalText'

const NetworkSecurityAudit = () => {
    return (
        <div>
            <H2 className='content-center' isDropdown={true} h2Text='Network security audit' h2Dropdown={<>Networks are the process of constantly developing electronic communication between IT systems. To be able to control it and keep important information safe, one should focus on defined boundaries, with limited access to and from the Internet. <div className='mrg-top-sm'>NetIntegrations provide high-level security service to defend your network against unauthorized users, devices, and data as well as against insider threats.</div><div className='mrg-top-sm'> The task is to recognize and authenticate authorized users and control, to which they have access, also to identify malicious traffic or code and inform you of any suspicious activity. We update the system, ensure its performance, and check the effectiveness. Thus, you and your customers are assured that all information is securely protected. </div> </>} />

            {/* // */}

            <div className='page-block first white'>
                <ObliqueTop num='first' />
                <div className='page-block-text content-center'>
                    <H4 text='Our test on vulnerability to unauthorized attacks will help you:' />
                    <div className='page-block-text-flex' data-aos="fade-right" data-aos-duration="1000" data-aos-anchor-placement='top'>
                        <div className='page-block-text-flex-text'>
                            <ul>
                                <li>to evaluate the security level of the information system as a whole;</li>
                                <li>to find individual susceptibility;</li>
                                <li>to check the reliability of the existing mechanisms of protection.</li>
                            </ul>
                        </div>
                        <div className='page-block-text-flex-img'>
                            <img src={nsa1} alt='dver' />
                        </div>
                    </div>
                </div>
                <ArrowDown next='second' />
            </div>

                {/* // */}

            <div className='page-block second'>
                <ObliqueTop num='second' />
                <div className='page-block-text content-center'>
                    <H4 text='Testing network security results in:' />
                    <div className='page-block-text-flex' data-aos="fade-right" data-aos-duration="1000" data-aos-anchor-placement='top'>
                        <div className='page-block-text-flex-text'>
                            <ul>
                                <li>evaluating present safety condition;</li>
                                <li>identifying “weaknesses” of the system;</li>
                                <li>developing recommendations for security improvement;</li>
                                <li>suggesting measures and methods that could be applied;</li>
                                <li>preparing for a complex audit of the system.</li>
                            </ul>
                        </div>
                        <div className='page-block-text-flex-img'>
                            <img src={nsa2} alt='dver' />
                        </div>
                    </div>
                    <AdditionalText isBold={false} text='Our specialists help you to get an objective view on your big or small business network security, to keep safe public or private information, which is used daily to communicate and conduct transactions between individuals and businesses. Thus, you get an additional warranty and full technical support from the NetIntegrations for your business.' />
                </div>
            </div>
        </div>
    )
}

export default NetworkSecurityAudit
