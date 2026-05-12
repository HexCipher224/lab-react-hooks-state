import React from 'react'
import {useState} from 'react';

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  // TODO: Implement dark mode toggle logic

      const toggleDarkMode = () => {
        setDarkMode(prev => !prev)
    }

  return (
      <button onClick={toggleDarkMode}>
        {darkMode ? ' Toggle Light Mode ' : ' Toggle Dark Mode '}</button>
  )
}

export default DarkModeToggle
