import NavBar from "./components/NavBar";
import './App.css';
import Footer from "./components/pages/Footer";
import {BrowserRouter} from "react-router-dom";
import Routes from './Routes';


function App() {
  return (
    <>
        <BrowserRouter>
          <NavBar/>
          <Routes />
          <Footer/>
        </BrowserRouter>
        
      
    </>
  );
}

export default App;