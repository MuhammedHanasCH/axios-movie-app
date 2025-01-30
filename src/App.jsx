import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import MovieList from './components/Movielist'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <MovieList/>
      <Footer/>
    </div>
  )
}

export default App
