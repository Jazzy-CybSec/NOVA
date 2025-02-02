import React, {useState,useEffect} from 'react';
import nova from './nova.svg';
import './App.css';
import SignUp from './SignUp'; // SignUp component now handles both SignUp and LogIn
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  const [isAuthOpen, setAuthOpen] = useState(true);

  // Get the saved login status 
  useEffect(() => {
    document.addEventListener("login", (json) => {
      // Handle user data here
    });
  }, []);

  const closeAuth = () => {
    console.log("close auth called");
    setAuthOpen(false);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={nova} className="App-nova" alt="nova" />
          <p>Your personalized medical assistant.</p>
          
          {/* Show SignUp or LogIn depending on isAuthOpen */}
          {isAuthOpen ? (
            <SignUp />
          ) : (
            <Routes>
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          )}
        </header>
      </div>
    </Router>
  );
}

export default App;
