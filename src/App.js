import './App.css';
import CardComponent from './components/CardComponent';
import HeaderComponent from './components/HeaderComponent';
import Navbar2Component from './components/Navbar2Component';
import NavbarComponent from './components/NavbarComponent';
import NavbarComponent3 from './components/NavbarComponent3';

function App() {
  return (
    <div className="App">
      {/* <NavbarComponent /> */}
      {/* <Navbar2Component /> */}
      <NavbarComponent3 />
      <HeaderComponent />
      <CardComponent />
    </div>
  );
}

export default App;
