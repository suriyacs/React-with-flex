import React from 'react';
import logo from './logo.svg';
import MainComponent from './pages/maincomponent/MainComponent';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        GSM Shopping Mart        
      </header>
      <div className="content-container">
        <MainComponent /> 
      </div>
    </div>
  );
}

export default App;
