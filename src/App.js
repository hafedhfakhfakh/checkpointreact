import logo from './logo.svg';
import './App.css';
import Header from './Components/header';
import Nav from './nav';
import Login from './Components/login';
import image from "./img/228516-anime-tiger.jpg"; 
import Cars from './Components/Cars';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const car =[
    {
      id:Math.random(),
      brand:"renault",
      price:2000,
    },
    {
      id:Math.random(),
      brand:"BMW",
      price:3500,
    }
  ];
  const str="hello word";
  return (
    <div className="App" style={{ backgroundImage:`url(${image})`}}>
     
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
{/*   
   <Header></Header>

<h1>Login</h1>
<Login></Login> */}


<Cars kraheb={car} chaine={str}/>
     
    </div>
  );
}

export default App;
