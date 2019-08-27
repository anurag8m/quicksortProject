import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Newfile from './components/Newfile';
import Test from './components/test.component.js';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Test} />

    </Router>
  );
}

export default App;
