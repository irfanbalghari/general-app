import React from 'react';
import './App.css';
import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';
import RoutesComponent from './components/app-routes';

function App() {
  return (
    <div className="App">
<AppHeader></AppHeader>
<RoutesComponent></RoutesComponent>
<AppFooter></AppFooter>
    </div>
    );
}

export default App;
