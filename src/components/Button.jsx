
import React from 'react'
import { Link } from 'react-router-dom'

function Button({name, path}) {
  return (
    <button
      className="bg-blue-200 text-gray-800 font-semibold rounded-full px-6 py-2 hover:bg-blue-300 transition-colors duration-200"
    >
      <Link to={path}>{name}</Link>
    </button>
  )
}

export default Button