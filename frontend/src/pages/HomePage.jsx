import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext, Context } from '../context';

const HomePage = () => {
  const { getters, setters } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div>
      <h1 className={`text-3xl font-bold underline ${getters.userData.mode === 'dark' ? 'text-lightText' : 'text-darkText'}`}>
        Home Page
      </h1>
      <button className="mt-4 p-2 bg-blue-500 text-white dark:bg-darkAccent rounded" onClick={() => navigate("/schedule")}>Go to Schedule Page</button>
      <button className="mt-4 p-2 bg-blue-500 text-white dark:bg-darkAccent rounded" onClick={() => navigate("/settings")}>Go to Settings Page</button>
    </div>
  )
}

export default HomePage