import React from 'react'
import H2 from '../../H2/H2'
import fw1 from './../../../img/secSer/fw1.png'
import fw2 from './../../../img/secSer/fw2.png'
import fw3 from './../../../img/secSer/fw3.png'
import ArrowDown from '../../ArrowDown/ArrowDown'
import AdditionalText from '../../AdditionalText/AdditionalText'
import ObliqueTop from '../../ObliqueTop/ObliqueTop'
import H4 from '../../H4/H4'


const FirewallProtection = () => {
    return (
        <div>
            <H2 isDropdown={false} h2Text='Firewall protection' />


            {/* // */}

            <div className='page-block first white'>
            <ObliqueTop num='first' />
                <div className='page-block-text content-center'>
                    <div className='page-block-text-flex' data-aos="fade-right" data-aos-duration="1000" data-aos-anchor-placement='top'>
                        <div className='page-block-text-flex-text'>

                            Firewall, as a web security system, keeps your network safe by filtering small units (packets) of incoming information: letting it through or discarding unknown traffic due to an applied rule set.
                            Once connected to cyberspace, any computer constantly sends and receives data.
                            That is why everyone needs firewall protection to keep private information like a password or bank account numbers in secret.
                            <div className='mrg-top'>
                                This protection may be software and hardware.
                                While the first one functions as protection from the network and prevents unauthorized access or attempted intrusions from the network, then a hardware firewall (e.g. a router) averts unsecured appliance and allows exchanging trusted data among a computer and the web sources
                            </div>
                        </div>
                        <div className='page-block-text-flex-img'>
                            <img src={fw1} alt='dver' />
                        </div>
                    </div>
                </div>
                <ArrowDown next='second' />
            </div>

            {/* // */}

            <div className='page-block'>
            <ObliqueTop num='second' />
                <div className='page-block-text content-center'>
                    <H4 text='The software firewall:' />
                    <div className='page-block-text-flex' data-aos="fade-right" data-aos-duration="1000" data-aos-anchor-placement='top'>
                        <div className='page-block-text-flex-text'>
                            <ul>
                                <li>protects your computer from infected devices on your network by controlling the access on a per-application basis;</li>
                                <li>draws your attention when an app on your device tries to connect to the Internet (you have a chance to reject the connection of the application).</li>
                            </ul>
                        </div>
                        <div className='page-block-text-flex-img'>
                            <img src={fw2} alt='dver' />
                        </div>
                    </div>
                </div>
                
                <div className='page-block-text content-center mrg-top'>
                    <H4 text='The hardware firewall:' />
                    <div className='page-block-text-flex' data-aos="fade-right" data-aos-duration="1000" data-aos-anchor-placement='top'>
                        <div className='page-block-text-flex-text'>
                            <ul>
                                <li>stays apart from a computer: it can’t be hurt with a worm (even when your software was); </li>
                                <li>can administer а large centrаlized network by configuring settings from a single device.</li>
                            </ul>
                        </div>
                        <div className='page-block-text-flex-img'>
                            <img src={fw3} alt='dver' />
                        </div>
                    </div>
                    <AdditionalText className='mrg-top' isBold={false} text='Both security systems scan and discover unknown devices and analyze a huge amount of events. It’s highly recommended to use at least one type of firewall.
                        All resulting logs must be accurately and constantly evaluated and sometimes specialists’ help is needed.' />
                    <AdditionalText isBold={true} text='The NetIntegrations suggests PC support either regularly or as one-time guidance. We care about the safety of your data!' />
                </div>
            </div>
        </div>
    )
}

export default FirewallProtection
