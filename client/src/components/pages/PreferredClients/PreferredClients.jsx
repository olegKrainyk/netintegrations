import React from 'react'
import H2 from '../../H2/H2'
import ObliqueTop from '../../ObliqueTop/ObliqueTop'
import AdditionalText from '../../AdditionalText/AdditionalText'

const PreferredClients = () => {
    return (
        <div>
            <H2 h2Text='Preferred Clients' />

            {/* // */}

            <div className='page-block first'>
                <ObliqueTop num='first' />
                <div className='page-block-text content-center'>
                    <AdditionalText isBold={false} text={<>1-Day Service Response Leave a message with your problem description and get our recommendations within the same day   4-Hour Emergency Response Have a problem that requires urgent actions? Our specialists can handle any task     Discounted Rates <span className='bold-text underline'>NetIntegrations</span> offers both an individual plan for your project or ongoing IT support and a discount rate that will save your money     Fast Remote Support We are interested in fast, competent, and reliable results of our work for a long-lasting business partnership and communication     Scheduled Maintenance Avoiding serious problems with a network by using our “scheduled maintenance” service is always better choice than handling ones     Applications Support Our customer-oriented application experts can find the best tool or method to achieve your aim, whether it’s a routine quality control application or a sophisticated research project     Assigned Engineers Every <span className='bold-text underline'>NetIntegrations’</span> specialist is in charge of certain project or problem-solving. It helps to make communication process easy and efficient     Free Phone Support If you have any question concerning IT services or our work, feel free to ask. Our consultant is here for you <span className='bold-text underline'>Monday to Friday</span></>} />
                        

                </div>
            </div>

        </div>
    )
}

export default PreferredClients
