import React from 'react'

const DarkModeToggle = ({ isDarkMode, onToggle }) => {
  return (
    <button onClick={onToggle}>
      {isDarkMode ? "Light" : "Dark"}
    </button>
  )
}

export default DarkModeToggle