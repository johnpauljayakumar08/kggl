import logo from './logo.svg';
import './App.css';
import ScrollToTop from './ScrollToTop';
import 'bootstrap/dist/css/bootstrap.css'
import { Banner } from './Components/Banner/banner';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Menu } from './Components/Menu/Menu';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Aboutus } from './Components/About US/aboutus';
import { Services } from './Components/services/services';
import { ITandites } from './Components/services/itandites';
import { Ecommerce } from './Components/services/E-Commerce';
import { Intelligent } from './Components/services/Intelligent Platform';
import { Corportetraining } from './Components/services/Corporate Training';
import { Ktag } from './Components/services/K-TAG.';
import { Kpo } from './Components/services/kpo';
// import { Partner } from './Components/parttenr/partener';
import { Workwithus } from './Components/work with us/workwithus';
import { Credentials } from './Components/Credentials/Credentials';
import { Footer } from './Components/footer/footer';
import { Newsletter } from './Components/newsletter/newsletter';
import { Menunursing } from './Components/nursing/menu/menu';
import { Bannernursing } from './Components/nursing/Banner/banner';
import { Aboutnursing } from './Components/nursing/About/about';
import { Evolution } from './Components/nursing/evolution/evolution';
import { Howweare } from './Components/nursing/why choose Us/whychooseus';
import { Servicenursing } from './Components/nursing/services/service';
import { Contactourteam } from './Components/nursing/contact our team/contactoutteam';
import { Contactform } from './Components/nursing/call to action/contactform';
import { Footernursing } from './Components/nursing/footer/footer';
import AutoPopupModal from './Components/nursing/Autopopup/autopopup';
import { Bannerdm } from './Components/digital Marketing/Banner/bannerdm';
import { Aboutdm } from './Components/digital Marketing/Aboutus/about';
import { Servicesdm } from './Components/digital Marketing/services/servicesdm';
import { Whydm } from './Components/digital Marketing/why digital marketing/whydigitalmarketing';
import { Benefitsofdm } from './Components/digital Marketing/benefits of dm/benefitsofdm';
import { Whygldm } from './Components/digital Marketing/whygldm/whygldm';
import { Datadriven } from './Components/digital Marketing/data driven/datadriven';
import { Datadrivenfull } from './Components/digital Marketing/datadrivenfull/datadrivenfull';
import { Menudm } from './Components/digital Marketing/menu/menu';
import { Footerdm } from './Components/digital Marketing/footer/footer';
import { Contactformdm } from './Components/digital Marketing/contact form dm/contactformdm';
import AutoPopupModaldm from './Components/digital Marketing/Autopopup/autopopupdm';
import AutoPopupModalgl from './Components/Autopopup/autopopupgl';
import AboutSap from './Components/SAP/Aboutsap/Aboutsap';
import SapBanner from './Components/SAP/SapBanner/Sapbanner';
import Expertise from './Components/SAP/Expertise/Expertise';
import Solutions from './Components/SAP/Solution/Solution';
import { Menusap } from './Components/SAP/Menubar/Menubar';
import { Footersap } from './Components/SAP/Footer/Footersap';
import Carrous from './Components/SAP/Carrous/Carrous';
import { Contactformsap } from './Components/SAP/Contactformsap/Contactformsap';
import Autopopupsap from './Components/SAP/AutoPopupModalSap/Autopopupsap';
import Aboutpage from './Components/IT/Aboutpage/Aboutpage';
import {FooterIT} from './Components/IT/Footerforit/Footerit';
import {Menuit} from './Components/IT/menuit/menuit';
import Bannerit  from './Components/IT/Banner/Bannerit';
import Cardswipe from './Components/IT/Cardswipe/Cardswipe';
import Autopopupit from './Components/IT/Autopopup/Autopopupit';
import { Itcontactform } from './Components/IT/Itcontactform/Itcontactform';
import Swipingcard from './Components/digital Marketing/Cardswipe/Swipingcard';
import LocationForm from './Components/countryapi';
import ClientRegister from './Components/Clientregistration';
import { Mainstyledbanner } from './Components/styledbanner/styledbanner';

function App() {
  return (
      <>
          <BrowserRouter>
          <ScrollToTop/>
            <Routes>
              <Route path='/' element={[<Menu/>,<Banner/>,<Aboutus/>,<Workwithus/>,<Credentials/>,<Services/>,<Newsletter/>,<Footer/>,<AutoPopupModalgl/>]}/>
              <Route path='/healthcare' element={[<Menunursing/>,<Bannernursing/>,<Aboutnursing/>,<Evolution/>,<Howweare/>,<Servicenursing/>,<Contactourteam/>,<Contactform/>,<Footernursing/>,<AutoPopupModal/>]}/>
              <Route path='/digitalmarketing' element={[<Menudm/>,<Bannerdm/>,<Aboutdm/>,<Servicesdm/>,<Whydm/>,<Benefitsofdm/>,<Whygldm/>,<Datadriven/>,<Swipingcard/>,<Contactformdm/>,<Footerdm/>,<AutoPopupModaldm/>]}/>
              <Route path='/sap' element={[<Menusap/>,<SapBanner/>,<AboutSap/>,<Expertise/>,<Solutions/>,<Carrous/>,<Contactformsap/>,<Footersap/>,<Autopopupsap/>]}/>
              <Route path='/itservices' element={[<Menuit/>,<Bannerit/>,<Aboutpage/>,<Cardswipe/>,<Itcontactform/>,<FooterIT/>,<Autopopupit/>]}/>
            </Routes>
          </BrowserRouter>
          {/* <Mainstyledbanner/> */}
          
          

      </>
  );
}

export default App;
