import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';

export default function App() {
  return (
    <Router>
      <div className="text-gray-400 bg-gray-900 body-font">
        <main>
          <Routes>
            <Route
              path="/"
              element={(
                <Login />
            )}
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
