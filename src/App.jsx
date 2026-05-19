import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import CalendarCard from "./components/calendar/CalendarCard";
import TaskList from "./components/tasks/TaskList";
import FloatingButton from "./components/ui/FloatingButton";

export default function App() {
  return (
    <div className="min-h-screen flex bg-[#f5f7fb]">
      
      <Sidebar />

      <main className="flex-1 p-6">

        <Header />

        <div className="grid lg:grid-cols-3 gap-6 mt-6">

          <div className="lg:col-span-1">
            <CalendarCard />
          </div>

          <div className="lg:col-span-2">
            <TaskList />
          </div>

        </div>

      </main>

      <FloatingButton />

    </div>
  );
}