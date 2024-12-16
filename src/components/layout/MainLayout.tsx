import React, { ReactNode, useState } from 'react';
import { Navbar } from '../ui/Navbar';
import { useAuth } from '../../contexts/AuthContext';
import './MainLayout.css';
import '../../contexts/Toast.css';

interface MainLayoutProps {
  children: ReactNode;
}

interface Message {
  id: number;
  text: string;
  sender: string;
  timestamp: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { user } = useAuth();
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  // Mock data - replace with real data
  const chatList = [
    { id: 1, name: 'John Doe', lastMessage: 'Hello there!', timestamp: '10:30 AM' },
    { id: 2, name: 'Jane Smith', lastMessage: 'How are you?', timestamp: '09:15 AM' },
  ];

  const handleSendMessage = () => {
    if (!messageInput.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      text: messageInput,
      sender: user?.name || 'User',
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages([...messages, newMessage]);
    setMessageInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <Navbar />
      </header>
      
      <aside className="chat-history-sidebar">
        <div className="chat-history-header">
          <input 
            type="text"
            placeholder="Search chats..."
            className="chat-history-search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="chat-history-list">
          {chatList.map((chat) => (
            <div 
              key={chat.id}
              className={`chat-history-item ${selectedChat === chat.id ? 'active' : ''}`}
              onClick={() => setSelectedChat(chat.id)}
            >
              <div className="chat-avatar">{chat.name[0]}</div>
              <div className="chat-info">
                <div className="chat-name">{chat.name}</div>
                <div className="chat-preview">{chat.lastMessage}</div>
              </div>
              <div className="chat-meta">
                <span className="message-timestamp">{chat.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </aside>

      <main className="dashboard-content">
        {selectedChat ? (
          <div className="chat-interface">
            <div className="messages-list">
              {messages.map((message) => (
                <div key={message.id} className={`message ${message.sender === user?.name ? 'sent' : 'received'}`}>
                  <div className="message-content">{message.text}</div>
                  <div className="message-timestamp">{message.timestamp}</div>
                </div>
              ))}
            </div>
            <div className="chat-input-container">
              <textarea 
                className="chat-input"
                placeholder="Type a message..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button className="send-button" onClick={handleSendMessage}>
                Send
              </button>
            </div>
          </div>
        ) : (
          <div className="empty-state">
            <h2>Welcome, {user?.name || 'User'}!</h2>
            <p>Select a chat to start messaging</p>
          </div>
        )}
        {children}
      </main>
    </div>
  );
};

export default MainLayout;