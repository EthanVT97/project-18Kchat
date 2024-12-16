import React, { useState, useEffect } from 'react';
import './Chatbot.css';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{text: string, sender: 'bot' | 'user', timestamp: string}>>([]);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    // Send welcome message when chat is opened
    if (isOpen && messages.length === 0) {
      const welcomeMessage = {
        text: "👋 Hi there! Welcome to 18KChat. How can I help you today?",
        sender: 'bot' as const,
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const newMessage = {
      text: userInput,
      sender: 'user' as const,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages([...messages, newMessage]);
    setUserInput('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        text: "Thanks for your message! Our team will get back to you soon.",
        sender: 'bot' as const,
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <button 
        className="chat-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h3>18KChat Support</h3>
          </div>
          
          <div className="messages-container">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`message ${message.sender}`}
              >
                <p>{message.text}</p>
                <span className="timestamp">{message.timestamp}</span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="chat-input">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;