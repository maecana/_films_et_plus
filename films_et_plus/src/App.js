// Package / Dependency Imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Local Imports
import './App.css';
import Details from './components/Details';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';


function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/details/:id' element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
