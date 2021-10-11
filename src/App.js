import './App.css';
import CardComponent from './components/CardComponent';
import HeaderComponent from './components/HeaderComponent';
import Navbar2Component from './components/Navbar2Component';
import NavbarComponent from './components/NavbarComponent';

function App() {
  return (
    <div className="App">
      {/* <NavbarComponent /> */}
      <Navbar2Component />
      <HeaderComponent />
      <CardComponent />
    </div>
  );
}

export default App;
