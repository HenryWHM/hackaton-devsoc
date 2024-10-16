import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Context, useContext } from '../context';

const SettingsPage = () => {
  const { getters, setters } = useContext(Context);
  const navigate = useNavigate();

  const toggleMode = () => {
    setters.setUserData((prevUserData) => ({ ...prevUserData, mode: prevUserData.mode === 'light' ? 'dark' : 'light' }));
  };

  return (
    <div className={`min-h-screen ${getters.userData.mode === 'dark' ? 'bg-darkBackground text-lightText' : 'bg-lightBackground text-darkText'}`}>
      <h1 className={`text-3xl font-bold underline ${getters.userData.mode === 'dark' ? 'text-lightText' : 'text-darkText'}`}>Settings Page</h1>
      <button className="mt-4 p-2 bg-blue-500 text-white dark:bg-darkAccent rounded" onClick={() => navigate("/")}>Home</button>
      <br />
      <button className="mt-4 p-2 bg-blue-500 text-white dark:bg-darkAccent rounded" onClick={toggleMode}>
        {getters.userData.mode === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  )
}

export default SettingsPage