"use client";

import { useState } from "react";

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
  }

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
    <div className="bg-[#1E1E1E] rounded-3xl w-80 p-6 h-[calc(100vh-172px)] overflow-y-auto hide-scrollbar 
    flex flex-col gap-4 box-border">
      {createTabs()}
    </div>
  );
}

export default SideBar;
