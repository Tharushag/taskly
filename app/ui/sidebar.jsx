"use client";

import { useState } from "react";
import Tab from "@/app/ui/tab";
import projects from "@/app/lib/placeholder";

function SideBar() {

  const handleClick = id => setActiveBtn(id);

  const [activeBtn, setActiveBtn] = useState(0);

  const titles = Object.keys(projects);
  const tabs = titles.map((title, id) => (
    <Tab 
      title={ title }
      key={ id }
      id={ id }
      click={ handleClick }
      active={ id === activeBtn ? 1 : 0 }
    />
  ));

  return (
    <div className="bg-[#1E1E1E] p-6 rounded-[25px] md:rounded-[30px] w-0 md:w-80 flex flex-col gap-4">
      { tabs }
    </div>
  );
}

export default SideBar;
