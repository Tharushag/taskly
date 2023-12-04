"use client";

import { useState } from "react";

import IconButton from '@mui/material/IconButton';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Tab from "@/app/ui/tab";
import projects from "@/app/lib/placeholder";

function SideBar() {
  const handleClick = id => {
    setActiveTab(id);
  }

  const deleteProject = id => {
    setTitles(
      titles.filter((t, i) => i !== id)
    );

    setActiveTab(0);
  }

  const addProject = () => setTitles([...titles, '']);

  const [activeTab, setActiveTab] = useState(0);

  const [titles, setTitles] = useState(Object.keys(projects));

  const createTabs = () => {
    return titles.map((title, i) => (
      <Tab 
        title={title} 
        key={i} 
        id={i} 
        active={activeTab === i} 
        handleClick={handleClick} 
        del={deleteProject}  
      />
    ))
  }

  return (
    <div className="bg-[#1E1E1E] rounded-3xl min-w-[320px] p-6 h-[calc(100vh-172px)] overflow-y-auto hide-scrollbar 
    flex flex-col gap-4 box-border">
      {createTabs()}

      <IconButton 
        aria-label="add" 
        className="w-fit bg-[#2D2D2D] hover:bg-[#333333] rounded-2xl p-3"
        onClick={addProject}
      >
        <AddRoundedIcon className="text-white opacity-70 text-lg" />
      </IconButton>      
    </div>
  );
}

export default SideBar;
