import './App.css';
import BestSeller from './components/BestSeller';
import CurtainTypes from './components/CurtainTypes';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Rating from './components/Rating';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App bg-[#f4e6de]">
      <NavBar />
      <Home />
      <Rating />
      <CurtainTypes />
      <BestSeller />
      <Footer />
    </div>
  );
}

export default App;
