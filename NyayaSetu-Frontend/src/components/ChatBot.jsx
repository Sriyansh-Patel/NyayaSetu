// components/ChatBot.jsx
import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, Loader2, CornerDownRight } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello. How can I assist you today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const chatRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { id: Date.now(), text: input, sender: 'user' }]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });
      const data = await response.json();
      setMessages((prev) => [...prev, { id: Date.now() + 1, text: data.output || "No response.", sender: 'bot' }]);
    } catch (error) {
      setMessages((prev) => [...prev, { id: Date.now() + 1, text: "I'm having trouble connecting to the secure server.", sender: 'bot' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div ref={chatRef} className="fixed bottom-6 right-6 z-50 font-sans">
      <button onClick={() => setIsOpen(!isOpen)} className="w-14 h-14 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 active:scale-95">
        {isOpen ? <X size={24} className="mx-auto" /> : <MessageCircle size={24} className="mx-auto" />}
      </button>

      <div className={`absolute bottom-20 right-0 w-[350px] h-[500px] bg-slate-900/90 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
          <h3 className="text-white text-sm font-semibold">Legal Assistant</h3>
        </div>
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`px-4 py-3 rounded-2xl text-sm ${msg.sender === 'user' ? 'bg-indigo-600 text-white rounded-br-none' : 'bg-slate-800 text-slate-200 rounded-bl-none'}`}>{msg.text}</div>
            </div>
          ))}
          {isLoading && <div className="bg-slate-800 p-3 rounded-2xl w-fit"><Loader2 className="animate-spin text-slate-400" size={20} /></div>}
        </div>
        <div className="p-4 border-t border-white/5">
          <div className="relative flex items-center">
            <input value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSend()} placeholder="Ask anything..." className="w-full bg-slate-800 text-white rounded-xl py-3 pl-4 pr-12 text-sm focus:outline-none" />
            <button onClick={handleSend} className="absolute right-2 text-indigo-400"><CornerDownRight size={18} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;