import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';
import SchedulePage from './pages/SchedulePage';
import SettingsPage from './pages/SettingsPage';
import { initialValue } from './context';
import Loading from './components/Loading';

function App() {
  const [userData, setUserData] = useState(initialValue.userData);
  const [isLoading, setLoading] = useState(initialValue.isLoading);

  const getters = { userData, isLoading };
  const setters = { setUserData, setLoading };

  // Retrieve user data from local storage
  useEffect(() => {
    setters.setLoading(true)
    const localStorageUserData = localStorage.getItem('userData');
    if (localStorageUserData) {
      setters.setUserData(JSON.parse(localStorageUserData));
    } else {
      // Set default user data if none exists in local storage
      let defaultUserData = {
        tasks: [],
        mode: "light",
      };
      setters.setUserData(defaultUserData);
      localStorage.setItem('userData', JSON.stringify(defaultUserData));
    }
    setters.setLoading(false);
  }, []);

  useEffect(() => {
    // Handle light/dark mode
    if (userData.mode === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      // Default is light mode if not saved theme
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [userData.mode]);

  if (getters.isLoading) {
    return <Loading />;
  }
  const toggleMode = () => {
    setUserData((prevUserData) => ({ ...prevUserData, mode: prevUserData.mode === 'light' ? 'dark' : 'light' }));
    // setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`min-h-screen ${userData.mode === 'dark' ? 'bg-darkBackground text-lightText' : 'bg-lightBackground text-darkText'}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage mode={userData.mode} />} />
          <Route path="/schedule" element={<SchedulePage mode={userData.mode} />} />
          <Route path="/settings" element={<SettingsPage mode={userData.mode} toggleMode={toggleMode} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
