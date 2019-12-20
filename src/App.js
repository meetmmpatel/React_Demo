import React from 'react';
import './App.css';
import MyHeader from './MyHeader'
import MyFooter from './MyFooter'
import MainSections from './MainSections'
import AboutState from './AboutState'
import StateWithBoolean from './StateWithBoolean'
import AboutSetState from './AboutSetState'

function App() {
  return (
    <div className="App">
      <MyHeader> </MyHeader>
      <MainSections></MainSections>
      <AboutState></AboutState>
      <StateWithBoolean></StateWithBoolean>
      <AboutSetState></AboutSetState>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;


