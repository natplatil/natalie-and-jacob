import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import ThingsToDo from './components/pages/ThingsToDo';
import MealChoices from './components/pages/MealChoices';

function App() {
  return (
    <>
      <Router basename="/natalie-and-jacob">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />
          <Route path='/thingstodo' element={<ThingsToDo />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/meal-choices' element={<MealChoices />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
