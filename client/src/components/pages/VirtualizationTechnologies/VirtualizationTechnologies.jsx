import React from 'react'
import H2 from '../../H2/H2'
import vt1 from './../../../img/netServ/vt1.png'
import vt2 from './../../../img/netServ/vt2.png'
import ArrowDown from '../../ArrowDown/ArrowDown'
import H4 from '../../H4/H4'
import ObliqueTop from '../../ObliqueTop/ObliqueTop'

const VirtualizationTechnologies = () => {
    return (
        <div>
            <H2 isDropdown={true} h2Text='Virtualization technologies' h2Dropdown='Among several IT solutions that may significantly reduce the expenses of your company, the virtualization technologies are most effective. It gives the opportunity to run multiple operating systems and applications on one server faster and at lower costs.' />
           
           {/* // */}
           
            <div className='page-block first white'>
                <ObliqueTop num='first' />
                <div className='page-block-text content-center'>
                    <H4 text='NetIntegrations specialists will evaluate your existing infrastructure and deploy virtual environments in order to improve your network management services:' />
                    <div className='page-block-text-flex' data-aos="fade-right" data-aos-duration="1000" data-aos-anchor-placement='top'>
                        <div className='page-block-text-flex-text'>
                            <ul>
                                <li><span className='bold-text uppercase'>network virtualization:</span> splits up the available bandwidth into channels and makes them manageable;</li>
                                <li><span className='bold-text uppercase'>storage virtualization:</span> physical storage of devices from several networks into one to be managed from a central panel;</li>
                                <li><span className='bold-text uppercase'>server virtualization:</span> lets an application, guest operating system, or data storage be withdrawn from real underlying hardware or software by using a software layer (a hypervisor) as an emulation of the underlying hardware.
                                Thus, workloads begin to be deployed faster, performance rises, operations become automated; data virtualization: remove information details like location, format, etc.;
                                    </li>
                                <li><span className='bold-text uppercase'>desktop virtualization:</span> makes access to a desktop more secure and portable; application virtualization: separates the application layer away from the operating system.</li>
                            </ul>
                        </div>
                        <div className='page-block-text-flex-img'>
                            <img src={vt1} alt='dver' />
                        </div>
                    </div>
                </div>
                <ArrowDown next='second' />
            </div>

                {/* // */}

            <div className='page-block second'>
                <ObliqueTop num='second' />
                <div className='page-block-text content-center'>
                    <H4 text='The advantages of using VMware and Hyper-V (MS Windows):' />
                    <div className='page-block-text-flex' data-aos="fade-right" data-aos-duration="1000" data-aos-anchor-placement='top'>
                        <div className='page-block-text-flex-text'>
                            <ul>
                                <li>lowering costs for maintaining physical servers;</li>
                                <li>simplifying and speeding up managed network services;</li>
                                <li>minimizing or eliminating downtime;</li>
                                <li>increasing IT productivity, efficiency, agility, and responsiveness;</li>
                                <li>launching a true Software-Defined Data Center;</li>
                            </ul>
                        </div>
                        <div className='page-block-text-flex-img'>
                            <img src={vt2} alt='dver' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VirtualizationTechnologies;
