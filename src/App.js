import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactGa from "react-ga";
import Layout from "./Layout";
import AdSense from 'react-adsense';
function App() {
  useEffect(()=>{
    ReactGa.initialize("UA-161446282-1");
    ReactGa.pageview("/");
  },[])
  
  return (
    <div className="App">
   <Layout/>
   <AdSense.Google
  client='ca-pub-5666725616144116'
  slot='7806394673'
  style={{ display: 'block' }}
  layout='in-article'
  format='fluid'
/>
    </div>
  );
}

export default App;
