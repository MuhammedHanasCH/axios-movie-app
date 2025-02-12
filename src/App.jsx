import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Navbar from './components/Navbar'
import MovieList from './components/Movielist'
import Footer from './components/Footer'
import About from './components/About'
import SearchBar from './components/Searchbar';


function App() {

  return (
    <div>
          <Router basename={import.meta.env.DEV ? '/' : '/axios-movie-app'}>
          <Header />
        <Navbar />
        <SearchBar onSearch={(query) => console.log(query)} />  {/* Add SearchBar */}

        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/about" element={<About />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
