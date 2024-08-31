import React, { useState } from 'react';
import {
  BrowserRouter as Router, Route, Routes, Navigate,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Chat from './components/Chat';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  return (
    <Router>
      <div className="text-gray-400 bg-gray-900 body-font">
        {/** global toaster */}
        <ToastContainer />
        <main>
          <Routes>
            <Route
              path="/"
              element={isAuthenticated ? <Chat /> : <Navigate to="/login" />}
            />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/login"
              element={<Login setAuth={setIsAuthenticated} />}
            />
            <Route
              path="/chat"
              element={isAuthenticated ? <Chat /> : <Navigate to="/login" />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
