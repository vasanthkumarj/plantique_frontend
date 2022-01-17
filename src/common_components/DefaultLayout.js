import React from "react";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";

const DefaultLayout=()=>{
    return(
        <>
        <Header />
        <Content />
        <Footer />
        </>
    );
}


export default  DefaultLayout;