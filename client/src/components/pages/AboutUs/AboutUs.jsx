import React from 'react'
import H2 from '../../H2/H2'
import ObliqueTop from '../../ObliqueTop/ObliqueTop'
import AdditionalText from '../../AdditionalText/AdditionalText'

const AboutUs = () => {
    return (
        <div>
            <H2 h2Text='About Us' isDropdown={false} />

            {/* // */}


            <div className='page-block first'>
                <ObliqueTop num='first' />
                <div className='page-block-text content-center'>
                    <AdditionalText isBold={false} text={<><span className='bold-text underline'>NetIntegrations, Inc.</span> – is a <span className='bold-text underline'>network services company</span>, which provides reliable assistance in successful integration of new technologies to company’s network infrastructure, making them function efficiently with minimal cost and downtime.   Because most IT departments nowadays are forced to function in very heterogeneous environments, you have to make sure that their legacy systems continue providing reliable services while new technology is being phased in.   We offer full network service package to make the process of network design and maintenance easy for you and your employees. Companies with limited resources and technical expertise have found NetIntegrations as an effective IT outsourcing solution assisting in systems management and decision-making processes. Why us The company was founded by the group of System Engineers that combined their technical knowledge and years of experience in design and deployment of corporate IT infrastructures.
                    <div className='mrg-top'> We succeeded in <span className='underline bold-text'>IT network</span> and <span className='underline bold-text'>support</span> services, as well as set our priorities:<ul className='mrg-top' style={{ listStyleType: 'circle' }}>
                            <li>To help your company work out an optimal and cost-effective network infrastructure and maintain it with the best performance and minimum downtime</li>
                            <li>To ensure that your network is secured from outside attacks and remotely accessible by your employees</li>
                            <li>To evaluate your current network and help you migrate to new platform whether it will be “Cloud Base” or hosted at your facility</li>
                        </ul>
                        </div>
                    </>} />

                </div>
            </div>

        </div>
    )
}

export default AboutUs
