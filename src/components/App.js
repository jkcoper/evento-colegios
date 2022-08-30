import React from "react";
import Footer from "./Footer";
import TopBar from "./TopBar";
import Content
 from "./Content";

function App() {
  return (
    <div className="App">

        <div className="App-header">
        <div><TopBar/></div>
        <div><Content/></div>
        </div> 
        <Footer/>          
    </div>
  );
}

export default App;
