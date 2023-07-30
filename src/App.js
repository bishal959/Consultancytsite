
import './App.css';
import  Navbar from './components/Navbar'
import  Home from './components/Home'
import  Main from './components/Main'
import  Slider from './components/Swiper'
import TestimonialsSlider from './components/Testimonial'

import Footer from './components/Footer/Footer'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Main/>
      <Slider />
      
      <TestimonialsSlider/>
      
      <Footer />

    
    </div>
    
  );
}

export default App;
