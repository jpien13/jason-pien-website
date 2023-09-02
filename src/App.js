import React from 'react'
import { Navbar } from './components';
import { About, Blog, Footer} from './containers';
import './App.css';
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Blog />
      <Footer />
    </div>
  )
}

export default App