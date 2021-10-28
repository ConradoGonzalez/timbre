import './App.css';
import CardComponent from './components/CardComponent';
import HeaderComponent from './components/HeaderComponent';
import NavbarComponent3 from './components/NavbarComponent3';
import Userinfo from './shared/userinfo.js';
import {useState} from 'react'

function App() {

  const [user, setUser] = useState('')

  const loggedUser = (username) => {
    setUser(username)
  }
  console.log(user);

  return (
    <div className="App">
      <NavbarComponent3 loggedUser={loggedUser}/>
      <HeaderComponent />
      <CardComponent />
    </div>
  );
}

export default App;
