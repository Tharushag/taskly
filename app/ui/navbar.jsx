"use client";

import { useState } from "react";
import { montserrat } from "@/app/ui/fonts";
import Link from "next/link";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function NavBar() {

  const [nav, setNav] = useState(false);

  const openedNavStyles = "pt-12 pb-8 grid-rows-[1fr,1fr]";
  const closedNavStyles = "grid-rows-[0,0]";

  const handleNav = () => {
    setNav(!nav);
  }

  const btnStyle = `${montserrat.className} !font-normal !rounded-[20px] !py-3 !px-6 !text-xl !capitalize
   !shadow-none !hover:shadow-none !active:shadow-none`;

  return (
    <nav className="px-6 py-4 rounded-[25px] md:rounded-[30px] flex justify-between items-center relative z-50 mb-6">
      <Link className="font-semibold text-2xl flex items-center z-20" href="/">Taskly</Link>
      <IconButton aria-label="Menu" className="z-20 text-white md:hidden" onClick={handleNav}>
        <MenuIcon />
      </IconButton>
      <ul className={`bg-[#1E1E1E] grid md:flex absolute justify-center transition-all duration-400 inset-x-0 top-8 gap-4 md:p-0 flex-row md:static z-10 rounded-[20px] ${nav ? openedNavStyles : closedNavStyles}`}>
        <li className="flex justify-center overflow-hidden">
          <Link href="/login">
            <Button
              className={`${btnStyle} !bg-black/[.4] !hover:bg-black/[.4]`}
              variant="contained"
            >Login</Button>
          </Link>
        </li>
        <li className="flex justify-center overflow-hidden">
          <Link href="/sign-up">
            <Button
              className={`${btnStyle} !bg-[#EEEEEE]/[.8] !hover:bg-[#EEEEEE]/[.8] !text-black`}
              variant="contained"
            >Sign up</Button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;
