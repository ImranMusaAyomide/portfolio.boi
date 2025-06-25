import './App.css';
import Header from './Header';
import HeroSection from './HeroSection';
import About from './About';
import ProofOfWork from './ProofOfWork'
import Tool from './Tool'
import Replace from './replace';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <About />
      <ProofOfWork/>
      <Tool />
      <Replace />      
      <Footer />
    </div>
  );
}

export default App;
