import './App.css';
import Header from './Header';
import Footer from './Footer';

import HeroSection from './HeroSection';
import About from './About';
import ProofOfWork from './ProofOfWork';
import Tool from './Tool';
import Replace from './replace';
import Chat from './Chat';

import DeveloperPage from './DeveloperPage';

function HomePage() {
  return (
    <>
      <HeroSection />
      <About />
      <ProofOfWork />
      <Tool />
      <Replace />
      <Chat />
    </>
  );
}

function App() {
  const isDeveloperPage = window.location.pathname === '/developer';

  return (
    <>
      <Header />

      {isDeveloperPage ? <DeveloperPage /> : <HomePage />}

      <Footer />
    </>
  );
}

export default App;
