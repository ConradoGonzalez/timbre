import './App.css';
import CardComponent from './components/CardComponent';
import HeaderComponent from './components/HeaderComponent';
import NavbarComponent from './components/NavbarComponent';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <HeaderComponent />
      <CardComponent />
    </div>
  );
}

export default App;
