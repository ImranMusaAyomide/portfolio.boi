import './App.css';
import Header from './Header';
import HeroSection from './HeroSection';
import About from './About';
import ProofOfWork from './ProofOfWork'
import Tool from './Tool'
import Replace from './replace';
import Footer from './Footer';
import Chat from './Chat';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <About />
      <ProofOfWork/>
      <Tool />
      <Replace />      
      <Chat />
      <Footer />
    </div>
  );
}

export default App;
