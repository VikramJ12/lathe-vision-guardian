
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MessageCircle, X, Send, MinusCircle } from "lucide-react";

interface ChatBotProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

interface ChatMessage {
  id: number;
  text: string;
  isUser: boolean;
}

const ChatBot = ({ isOpen, setIsOpen }: ChatBotProps) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, text: "Hello! I'm your Lathe Vision Assistant. How can I help you with your lathe machine data analysis today?", isUser: false },
  ]);
  const [inputText, setInputText] = useState("");

  const handleSend = () => {
    if (!inputText.trim()) return;

    // Add user message
    const newMessage = { id: Date.now(), text: inputText, isUser: true };
    setMessages([...messages, newMessage]);
    setInputText("");

    // Simulate AI response (in real app, this would be an API call)
    setTimeout(() => {
      const botResponse = { 
        id: Date.now() + 1, 
        text: "I'm analyzing your query about lathe machine data. In a real implementation, I would connect to your backend to provide insights about machine performance, sensor data, and predicted maintenance needs.", 
        isUser: false 
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 rounded-full h-14 w-14 bg-industrial-blue hover:bg-blue-800 shadow-lg"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 w-80 sm:w-96 h-[500px] shadow-xl flex flex-col border-industrial-blue border-2">
      <div className="bg-industrial-blue text-white p-3 flex justify-between items-center rounded-t-lg">
        <h3 className="font-bold">Lathe Vision Assistant</h3>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-7 w-7 text-white hover:bg-blue-900">
            <MinusCircle className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-7 w-7 text-white hover:bg-blue-900">
            <X className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`mb-3 max-w-[85%] ${msg.isUser ? 'ml-auto' : 'mr-auto'}`}
          >
            <div 
              className={`p-3 rounded-lg ${
                msg.isUser 
                  ? 'bg-industrial-blue text-white rounded-br-none' 
                  : 'bg-gray-200 text-gray-800 rounded-bl-none'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      
      <div className="border-t p-3 flex gap-2 bg-white">
        <Input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Ask about your machine data..."
          className="flex-1"
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <Button onClick={handleSend} className="bg-industrial-blue hover:bg-blue-800">
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};

export default ChatBot;
