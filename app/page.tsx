import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Herosection from '../component/Herosection'
import Videosection from '../component/videosection'
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <Videosection/>
      <Footer/>
    </div>
  );
}
