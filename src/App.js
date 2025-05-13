import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Feed from './Feed';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app-body">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
