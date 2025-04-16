import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Herosection from '../component/Herosection'
import Videosection from '../component/videosection'
import Integrationsection from '../component/integrationsection'
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <Videosection/>
      <Integrationsection/>
      <Footer/>
    </div>
  );
}
