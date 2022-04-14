import React from 'react'
import H2 from '../../H2/H2'
import ips1 from './../../../img/secSer/ips1.png'
import ips2 from './../../../img/secSer/ips2.png'
import ArrowDown from '../../ArrowDown/ArrowDown'
import H4 from '../../H4/H4'
import ObliqueTop from '../../ObliqueTop/ObliqueTop'
import AdditionalText from '../../AdditionalText/AdditionalText'

const IntrusionPreventionSystem = () => {
    return (
        <div>
            <H2 className='content-center' isDropdown={true} h2Text='Intrusion Prevention System' h2Dropdown={<>While protection from virtual attacks remains to be of high priority, it is important to make the right security assessment with the following tools.
            One should comprehend how Intrusion Defense or Prevention Systems function to make the right choice.
                <div className='mrg-top-sm'>Intrusion Prevention System (IPS), as well as Firewall, is the tool of control: it monitors a network for malicious activity due to certain rules. When IPS finds a ‘dangerous’ packet, it blocks it, if not – allows traffic through.</div>
            </>} />

            {/* // */}

            <div className='page-block first white'>
                <ObliqueTop num='first' />
                <div className='page-block-text content-center'>
                    <H4 text='Thus, the given system sits in-line and works as:' />
                    <div className='page-block-text-flex' data-aos="fade-right" data-aos-duration="1000" data-aos-anchor-placement='top'>
                        <div className='page-block-text-flex-text'>
                            <ul>
                                <li>an indicator of harmful activity;</li>
                                <li>an alarm and a data logging device;</li>
                                <li>a blocking tool when an intrusion is detected;</li>
                                <li>a data leak protection device.</li>
                            </ul>
                        </div>
                        <div className='page-block-text-flex-img'>
                            <img src={ips1} alt='dver' />
                        </div>
                    </div>
                </div>
                <ArrowDown next='second' />
            </div>

            {/* // */}

            <div className='page-block'>
                <ObliqueTop num='second' />
                <div className='page-block-text content-center'>
                    <AdditionalText isBold={true} text='In addition to this, an IPS corrects Cyclic Redundancy Check errors, prevents TCP sequencing issues, and cleans up problematic traffic.' />
                    <AdditionalText isBold={false} text='Another security tool in computer networking services is Intrusion Defense System, which functions differently than IPS. It may be considered as “visibility” tool. Sitting off aside from a network, an IDS monitors whole traffic and sends its analysis to IT support specialists.' />
                    <H4 text='The IDS helps to solve the following problems:' />
                    <div className='page-block-text-flex' data-aos="fade-right" data-aos-duration="1000" data-aos-anchor-placement='top'>
                        <div className='page-block-text-flex-text'>
                            <ul>
                                <li>violation of security policy; </li>
                                <li>elimination of viruses and infections; </li>
                                <li>defense from information leak (when it happens on purpose or by accident); </li>
                                <li>correction of wrong configuration settings of an app or a system (e.g. in case of firewall rules do not match policy);</li>
                                <li>a barrier to unauthorized access (users or apps).</li>
                            </ul>
                        </div>

                        <div className='page-block-text-flex-img'>
                            <img src={ips2} alt='dver' />
                        </div>
                    </div>
                    <AdditionalText isBold={true} text='If questions remain, the NetIntegrations’ IT support technician will consult you on any related issue.' />
                </div>
            </div>
        </div>
    )
}

export default IntrusionPreventionSystem
