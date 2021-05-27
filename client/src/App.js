import './App.scss';
import Header from './components/Header/Header';
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer.jsx'
import { useState, useEffect, useCallback, useMemo } from 'react';
import { useTodosContext } from './contexts/todosContext';



function App() {

  console.log('Render component App')

  return (
    <div className="container py-5">
      <Header/>
      <Body />
      <Footer />
    </div>
  );
}

export default App;
