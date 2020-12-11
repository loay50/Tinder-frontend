import React from 'react'
import './App.css';
import Header from "./Header"
import Footer from "./Footer"
import TinderCards from './TinderCards';


function App() {
  return (
    <div className="app">


      <Header />
      <TinderCards />
      <Footer />

      
    </div>
  );
}

export default App;
