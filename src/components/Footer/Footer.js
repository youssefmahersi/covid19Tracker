import React from "react";
import { Button } from 'react-bootstrap';
const FooterPage = () => {
    const githubHandler= ()=>{
        window.location = "https://github.com/youssefmahersi/Anal-corona"
    }
  return (
    <footer className="p-3 mb-2 bg-light text-dark">
  <p>
    Data Confirmed from USA and
  Devolped by <a href="https://www.instagram.com/youssef_mahersi/" title="Youssef mahersi">Youssef mahersi</a></p>
  <Button variant="primary" onClick={githubHandler}>Source Code</Button>
  
</footer>
  );
}

export default FooterPage;