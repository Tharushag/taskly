import { montserrat } from "@/app/ui/fonts";
import Link from "next/link";
import Button from '@mui/material/Button';

function NavBar() {

  const btnStyle = `${montserrat.className} !font-normal !rounded-[20px] !py-3 !px-6 !text-xl !capitalize
   !shadow-none !hover:shadow-none !active:shadow-none`;

  return (
    <nav className="px-6 py-4 rounded-[30px] flex justify-between">
      <Link className="font-semibold text-2xl flex items-center" href="/">Taskly</Link>
      <ul className="flex gap-4">
        <li>
          <Link href="/login">
            <Button
              className={`${btnStyle} !bg-black/[.4] !hover:bg-black/[.4]`}
              variant="contained"
            >Login</Button>
          </Link>
        </li>
        <li>
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
