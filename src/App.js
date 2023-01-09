import './App.css';
import React, {useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import ModeSwitch from './components/ModeSwitch';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  const[mode , setMode ] = useState("bg-light-subtle text-emphasis-light");
  const[switchText ,setSwitchText] = useState('Enable dark mode');
  const[navbarBg,setNavbarBg] = useState("navbar navbar-expand-lg navbar-dark bg-dark");

  const handleModeSwitch = (event)=>{
      let val=event.target.checked;
      if(val){
        setMode("bg-dark text-white");
        setSwitchText('Enable light mode');
        setNavbarBg("navbar navbar-expand-lg navbar-light bg-light");
      }
      else{
        setMode("bg-light-subtle text-emphasis-light");
        setSwitchText('Enable dark mode');
        setNavbarBg("navbar navbar-expand-lg navbar-dark bg-dark");
      }
  }

  /*const router = createBrowserRouter([
    {
      path: "/",
      element: <TextForm heading="Enter the text here to analyze"/>,
    },
    {
      path: "/about",
      element : <About />,
    },
  ]);*/

  return (
    <>
      <BrowserRouter>
        <div className={mode}>
        <Navbar title="TextUtils" navbarBg={navbarBg}/>
        <ModeSwitch handleModeSwitch={handleModeSwitch} switchText={switchText} />
        <div className="container my-3">
          {/*<TextForm heading="Enter the text here to analyze"/>*/}
          <Routes>
            <Route path="/" element={<TextForm heading="Enter the text here to analyze"/>} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
