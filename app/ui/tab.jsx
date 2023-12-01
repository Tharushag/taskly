"use client";

import { useState, useEffect } from 'react';

import clsx from 'clsx';
import Button from '@mui/material/Button';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';

import { montserrat } from '@/app/ui/fonts';

function Tab(props) {

  const handleInput = ({ target }) => setInput(target.value);

  const handleMouseOver = () => setHover(true);

  const handleMouseOut = () => setHover(false);

  const [hover, setHover] = useState(false);
  const [input, setInput] = useState(props.title);

  return (
    <div className="relative">
      <Button
        className={clsx(
          `${montserrat.className} text-white capitalize bg-[#2D2D2D] hover:bg-[#333333] rounded-2xl w-full pl-4 pr-3 py-3
          justify-start text-[1rem] font-light flex gap-4 box-border`,
          {
            "bg-[#3D3D3D]": props.active
          }
        )}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={() => { props.handleClick(props.id) }}
      >
        <input className="classic-input" value={input} onInput={handleInput} />

        <span
          className="bg-[#464646] rounded-xl flex items-center justify-center p-1 invisible pointer-events-none"
        >
          <DeleteOutlineRoundedIcon className="font-light" />
        </span>
      </Button>

      <span
        className={clsx(
          `bg-[#464646] rounded-xl flex items-center justify-center p-1 w-fit absolute right-3 top-3 opacity-60 hover:opacity-80
           active:opacity-100`,
          {
            "visible": hover,
            "invisible": !hover
          }
        )}
        aria-label="delete"
        role="button"
        tabIndex="0"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <DeleteOutlineRoundedIcon className="font-light" />
      </span>
    </div>
  )
}

export default Tab;
