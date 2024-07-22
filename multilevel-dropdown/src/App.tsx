import React from 'react';
import Navbar from "./components/Navbar";
import { menuItems } from './menuItems';
import './App.css'

const App: React.FC = () => {
  return (
    <header>
      <div className="nav-area">
        <a href="/#" className="logo">
          CodeSolution
        </a>
        <Navbar menuItems={menuItems} />
      </div>
    </header>
  );
};

export default App;
