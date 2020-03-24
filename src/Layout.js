import React from 'react';

import GeneralAnal from "./containers/GeneralAnal/GeneralAnal";
import ToolBar from "./components/ToolBar/ToolBar";
import Countries from "./containers/Countries/Countries";
import Daily from "./containers/Daily/Daily";
import Footer from "./components/Footer/Footer";

const Layout = ()=>(
    <div>
    <ToolBar/>
    <GeneralAnal/>
    <Countries/>
     
    <Daily/>
    <Footer/>
    </div>
)

export default Layout;