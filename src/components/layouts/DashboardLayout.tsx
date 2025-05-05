
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/navigation/Sidebar";
import ChatBot from "@/components/chatbot/ChatBot";
import { useState } from "react";

const DashboardLayout = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-gray-100 p-4">
        <Outlet />
      </main>
      <ChatBot isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
    </div>
  );
};

export default DashboardLayout;
