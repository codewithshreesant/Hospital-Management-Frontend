import React from 'react';
import { Link } from 'react-router-dom'

function MedicalLogo() {
  return (
    <div className="flex items-center justify-center">
      <Link to='/'>
        <span className="text-blue-950 text-[2.5rem] mr-1">M</span>
        <span className="text-blue-950 text-[2.5rem] mr-1">E</span>
        <span className="text-blue-950 text-[2.5rem] mr-1">D</span>
        <span className="text-blue-950 text-[2.5rem] mr-1">D</span>
        <span className="text-sky-400 text-[2.5rem] mr-1">I</span>
        <span className="text-sky-400 text-[2.5rem] mr-1">C</span>
        <span className="text-sky-400 text-[2.5rem] mr-1">A</span>
        <span className="text-sky-400 text-[2.5rem] mr-1">L</span>
      </Link>
    </div>
  );
}

export default MedicalLogo;