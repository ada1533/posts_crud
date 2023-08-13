import React from 'react';
import Header from "./components/Body/Header"
import Footer from "./components/Body/Footer"
import MainRoutes from './MainRoutes';
import './App.css'

const App = () => {
  return (
    <div>
      <Header />
        <MainRoutes />
      <Footer/>
    </div>
  )
}

export default App