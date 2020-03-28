import React from 'react';
import GeneralAnal from "./containers/GeneralAnal/GeneralAnal";
import ToolBar from "./components/ToolBar/ToolBar";
import Countries from "./containers/Countries/Countries";
import Daily from "./containers/Daily/Daily";
import Faq from "./containers/Faq/Faq";
import Footer from "./components/Footer/Footer";

const Layout = ()=>(
    <div>
    <ToolBar/>
    <Faq/>
    <GeneralAnal/>
    <Countries/>
     
    <Daily/>
    <Footer/>
    </div>
)

export default Layout;