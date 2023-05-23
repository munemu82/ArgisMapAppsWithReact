import logo from "./logo.svg";
import "./App.css";
import Menu from 'react-navigation-menu'
import MyMap from "./components/MyMap"
import Navbar from './components/Navbar'
import Home from "./pages/Home";


function App() {
  return (
    <div>
      <Menu 
        brandColor1="rgb(21, 14, 49)"
        brandColor2="#248ec2"
        items={[
          ['Home', '/'],
          [
            'About', 'dropdown', [
              ['About Me', '/about-me'],
              ['About My Work', '/about-my-work']
            ]
          ],
          [
            'Shop', 'dropdown', [
              ['Pre-Fabricated', '/pre-fabricated'],
              ['Bespoke Apparel', '/bespoke-apparel']
            ]
          ],
          ['Contact', '/contact']
        ]}
        telephone="+33 7 87 20 70 34"
        email="peter@thepetersweeney.com"
        />
      <Navbar />
     <Home />
      
       
    </div>
  );
}

export default App;
