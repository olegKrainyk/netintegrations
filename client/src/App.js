import React, { useEffect } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Home from './components/Home/Home'
import './components/Header/Header.css'
import Header from './components/Header/Header'
import NetworkDesign from './components/pages/NetworkDesign/NetworkDesign'
import VirtualizationTechnologies from './components/pages/VirtualizationTechnologies/VirtualizationTechnologies'
import SystemIntegrations from './components/pages/SystemIntegrations/SystemIntegrations'
import NetworkSecurityAudit from './components/pages/NetworkSecurityAudit/NetworkSecurityAudit'
import HipaaSecurityAssessment from './components/pages/HipaaSecurityAssessment/HipaaSecurityAssessment'
import IntrusionPreventionSystem from './components/pages/IntrusionPreventionSystem/IntrusionPreventionSystem'
import FirewallProtection from './components/pages/FirewallProtection/FirewallProtection'
import IToutsourcingServices from './components/pages/IToutsourcingServices/IToutsourcingServices'
import NetworkSupport from './components/pages/NetworkSupport/NetworkSupport'
import RemoteSupport from './components/pages/RemoteSupport/RemoteSupport'
import AppleComputerSupport from './components/pages/AppleComputerSupport/AppleComputerSupport'
import Footer from './components/Footer/Footer'
import './components/pages/Pages.css'
import ContactUs from './components/pages/ContactUs/ContactUs'
import PreferredClients from './components/pages/PreferredClients/PreferredClients'
import AboutUs from './components/pages/AboutUs/AboutUs'
import BtnUp from './components/BtnUp/BtnUp'
import NotFound from './components/pages/NotFound/NotFound'
import ServicePlans from './components/pages/ServicePlans/ServicePlans'



// always last import
import './resp.css'

function App() {

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div className="App" id='App'>
      <div className='main-block'>
        <Header />
        <div className='img-bg'></div>
        <div className='content'>
          <Switch >
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />

            <Route path="/network-design" component={NetworkDesign} />
            <Route path="/virtualization-technologies" component={VirtualizationTechnologies} />
            <Route path="/system-integrations" component={SystemIntegrations} />

            <Route path="/network-security-audit" component={NetworkSecurityAudit} />
            <Route path="/hipaa-security-assessment" component={HipaaSecurityAssessment} />
            <Route path="/intrusion-prevention-system" component={IntrusionPreventionSystem} />
            <Route path="/firewall-protection" component={FirewallProtection} />

            <Route path="/it-outsourcing-services" component={IToutsourcingServices} />
            <Route path="/network-support" component={NetworkSupport} />
            <Route path="/remote-support" component={RemoteSupport} />
            <Route path="/apple-computer-support" component={AppleComputerSupport} />


            <Route path="/service-plans" component={ServicePlans} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/preferred-clients-options" component={PreferredClients} />
            <Route path="/about-us" component={AboutUs} />


            {/* not found page */}
            <Route component={NotFound} />

            
          </Switch>
        </div>
      </div>
      <Footer />

      <BtnUp />
    </div >
  );
}

export default App;





























//made by oleg @whyiamthere