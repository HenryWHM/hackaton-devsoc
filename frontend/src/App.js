import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';
import SchedulePage from './pages/SchedulePage';
import SettingsPage from './pages/SettingsPage';
import { initialValue } from './context';
import { useState, useEffect } from 'react';
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
      };
      setters.setUserData(defaultUserData);
      localStorage.setItem('userData', JSON.stringify(defaultUserData));
    }
    setters.setLoading(false);
  }, []);

  if (getters.isLoading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
