"use client";

import { useState } from 'react';
import clsx from 'clsx';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

function Checkbox({onClick}) {
  const handleClick = () => {

    if (onClick) {
      onClick(!on);
    }
    setOn(!on);
  }

  const [on, setOn] = useState(false); 

  return (
    <span 
      className="bg-[#282828] hover:bg-[#2F2F2F] p-2 rounded-xl flex items-center justify-center cursor-pointer"
      onClick={handleClick}
    >
      <CheckRoundedIcon className={clsx(
        "text-base",
        { "invisible": !on },
      )} />
    </span>
  )
}

export default Checkbox;
