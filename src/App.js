import './App.css';
import Hero from './Hero';
import Destination from './Destination';
import Navbar from './Navbar';
import Search from './Search';
import Footer from './Footer';
import Services from './Services';
import Contact from './Contact';


function App() {
  return (
    <div className="App">
      <Navbar/>
<Hero/>  
<Destination/> 
<Search/>
<Services/>

<Contact/>
<Footer/>
    </div>
  );
}

export default App;

