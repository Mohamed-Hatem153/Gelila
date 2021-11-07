import Slideshow from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerSlider from './components/BannerSlider/BannerSlider';

function App() {
  return (
    <div className="App">
    <Navbar/>
      
      <BannerSlider />
    </div>
  );
}

export default App;
