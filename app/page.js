import SideBar from "@/app/ui/sidebar";
import Task from "@/app/ui/task";

export default function Home() {

  return (
    <div className="flex md:flex-row flex-col gap-6">
      <SideBar/>
      <Task />
    </div>
  )
}
