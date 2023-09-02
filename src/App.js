import React from 'react'
import { CTA } from './components';
import { Footer, Blog, Header } from './containers';
import './App.css';
const App = () => {
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>  
    <CTA />
    <Blog />
    <Footer />
  </div>
}

export default App