import React from "react";
import {Helmet} from "react-helmet";
import Image from "../../assets/images/coronavirus.svg";
class Application extends React.Component {
  render () {
    return (
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Anl-virus</title>
                <meta name="msvalidate.01" content="AE72042242E3FA7FF419652FD3C545C0" />
                <meta name="keywords" content="oms,who,coronavirus,covid-19,anal-virus,corona tracker,anal-vir"/>
                <!-- Primary Meta Tags -->
<title>Tracks coronavirus</title>
<meta name="title" content="Tracks coronavirus"/>
<meta name="description" content="tracks coronavirus cases in all around the world or a specific country with some faqs from who"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website"/>
<meta property="og:url" content="https://anal-virus.info/"/>
<meta property="og:title" content="Tracks coronavirus"/>
<meta property="og:description" content="tracks coronavirus cases in all around the world or a specific country with some faqs from who"/>
<meta property="og:image" content={Image}/>

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image"/>
<meta property="twitter:url" content="https://anal-virus.info/"/>
<meta property="twitter:title" content="Tracks coronavirus"/>
<meta property="twitter:description" content="tracks coronavirus cases in all around the world or a specific country with some faqs from who"/>
<meta property="twitter:image" content={Image}/>
            </Helmet>
            ...
        </div>
    );
  }
};