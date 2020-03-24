import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactGa from "react-ga";
import Layout from "./Layout";
function App() {
  useEffect(()=>{
    ReactGa.initialize("UA-161446282-1");
    ReactGa.pageview("/");
  },[])
  
  return (
    <div className="App">
   <Layout/>
    </div>
  );
}

export default App;
