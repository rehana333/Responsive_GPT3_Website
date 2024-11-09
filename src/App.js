import React from 'react';
import './App.css';
import {Blog, Features, Footer, Header,Possibility,What} from './containers';
import {Brand, Cta, Navbar} from './components';
const App = () => {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <What />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
