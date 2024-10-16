import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';
import SchedulePage from './pages/SchedulePage';
import SettingsPage from './pages/SettingsPage';

function App() {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('mode')
    return savedMode ? savedMode : 'light'; // Default is 'light' if no saved theme
  });

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else if (mode === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('mode', mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`min-h-screen ${mode === 'dark' ? 'bg-darkBackground text-lightText' : 'bg-lightBackground text-darkText'}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage mode={mode} />} />
          <Route path="/schedule" element={<SchedulePage mode={mode} />} />
          <Route path="/settings" element={<SettingsPage mode={mode} toggleMode={toggleMode} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
