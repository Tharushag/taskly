"use client";

import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function Tab({ title, click, id, active }) {
  const [hover, setHover] = useState(0);

  const handleMouseOver = () => {
    setHover(1);
  }

  const handleMouseOut = () => {
    setHover(0)
  }

  const tabStyles = active ? "" : "opacity-50 hover:opacity-70";
  const btnStyles = hover ? "visible" : "invisible";

  return (
    <div 
      className={`flex justify-between items-center pl-4 pr-2 py-2 rounded-2xl w-full bg-[#333333] transition-all ${ tabStyles }`}
      role="button"
      tabIndex="0"
      onMouseOver={ handleMouseOver }
      onMouseOut={ handleMouseOut }
      onClick={ () => click(id) }
    >
      
      { title }
      
      <IconButton aria-label="Menu" className={`z-20 text-white ${ btnStyles }`}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
}

export default Tab;
