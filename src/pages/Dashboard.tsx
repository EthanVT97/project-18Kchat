import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatInterface from '../components/chat/ChatInterface';
import './Dashboard.css';

// Interfaces
interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: Date;
  type: 'text' | 'link' | 'file';
  isBot?: boolean;
}

interface ChatHistory {
  date: Date;
  messages: Message[];
  unreadCount?: number;
}

interface Contact {
  id: string;
  name: string;
  status: 'online' | 'offline';
  lastSeen: Date;
  avatar?: string;
}

interface SearchFilters {
  date: string;
  name: string;
}

// Component
const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  // States
  const [activeTab] = useState<'dashboard' | 'messages' | 'contacts' | 'settings'>('messages');
  const [notifications, setNotifications] = useState<number>(3);
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({ date: '', name: '' });
  const [activeChat, setActiveChat] = useState<number>(-1);

  const [chatHistory] = useState<ChatHistory[]>([
    {
      date: new Date(),
      unreadCount: 2,
      messages: [
        { id: 'msg-1', sender: 'John Doe', content: 'Hello there!', timestamp: new Date(), type: 'text' },
        { id: 'msg-2', sender: 'Jane Smith', content: 'Meeting at 3 PM', timestamp: new Date(), type: 'text' },
      ],
    },
    {
      date: new Date(Date.now() - 86400000),
      unreadCount: 1,
      messages: [
        { id: 'msg-3', sender: 'John Doe', content: 'Previous messages', timestamp: new Date(Date.now() - 86400000), type: 'text' },
      ],
    },
  ]);

  const [contacts] = useState<Contact[]>([
    { id: 'contact-1', name: 'John Doe', status: 'online', lastSeen: new Date() },
    { id: 'contact-2', name: 'Jane Smith', status: 'offline', lastSeen: new Date(Date.now() - 5 * 60000) },
  ]);

  const userName = localStorage.getItem('userName') || 'User';

  // Handlers
  const handleSearch = (filters: SearchFilters) => {
    setSearchFilters(filters);
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userName');
      navigate('/login');
    }
  };

  // Memoized Filter
  const filteredHistory = useMemo(() => {
    return chatHistory.filter((history) => {
      const dateMatch =
        !searchFilters.date || history.date.toISOString().split('T')[0] === searchFilters.date;
      const nameMatch =
        !searchFilters.name ||
        history.messages.some((msg) =>
          msg.sender.toLowerCase().includes(searchFilters.name.toLowerCase())
        );
      return dateMatch && nameMatch;
    });
  }, [chatHistory, searchFilters]);

  // Notifications Countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setNotifications((prev) => Math.max(prev - 1, 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Render Tab Content
  const renderTabContent = () => {
    switch (activeTab) {
      case 'messages':
        return (
          <div className="messages-container">
            <div className="search-container">
              <input
                type="date"
                value={searchFilters.date}
                onChange={(e) => handleSearch({ ...searchFilters, date: e.target.value })}
                className="search-input"
              />
              <input
                type="text"
                placeholder="Search by name..."
                value={searchFilters.name}
                onChange={(e) => handleSearch({ ...searchFilters, name: e.target.value })}
                className="search-input"
              />
            </div>
            {filteredHistory.map((history, index) => (
              <div key={index} className="history-section">
                <h3>{history.date.toLocaleDateString()}</h3>
                <div className="messages-list">
                  {history.messages.map((message) => (
                    <div key={message.id} className="message-item">
                      <strong>{message.sender}</strong>
                      <p>{message.content}</p>
                      <span>{message.timestamp.toLocaleTimeString()}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {activeChat >= 0 && <ChatInterface />}
          </div>
        );
      case 'contacts':
        return (
          <div className="contacts-content">
            <h3>Contacts</h3>
            {contacts.map((contact) => (
              <div key={contact.id} className="contact-item">
                <strong>{contact.name}</strong>
                <span className={`status ${contact.status}`}>{contact.status}</span>
                <p>Last seen: {contact.lastSeen.toLocaleTimeString()}</p>
              </div>
            ))}
          </div>
        );
      case 'settings':
        return (
          <div className="settings-content">
            <h3>Settings</h3>
            <div className="settings-section">
              <h4>Profile</h4>
              <p>Username: {userName}</p>
            </div>
          </div>
        );
      default:
        return (
          <div className="dashboard-overview">
            <h3>Dashboard Overview</h3>
            <div className="stats">
              <div className="stat-item">
                <h4>Messages</h4>
                <p>{chatHistory.reduce((acc, curr) => acc + curr.messages.length, 0)}</p>
              </div>
              <div className="stat-item">
                <h4>Contacts</h4>
                <p>{contacts.length}</p>
              </div>
              <div className="stat-item">
                <h4>Notifications</h4>
                <p>{notifications}</p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>18K Chat</h1>
        <div className="header-right">
          <span className="notifications">{notifications}</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </header>
      <aside className="chat-history-sidebar">
        <div className="chat-history-header">
          <input
            type="text"
            className="chat-history-search"
            placeholder="Search conversations..."
            value={searchFilters.name}
            onChange={(e) => handleSearch({ ...searchFilters, name: e.target.value })}
          />
        </div>
        <div className="chat-history-list">
          {filteredHistory.map((history, index) => (
            <div
              key={index}
              className={`chat-history-item ${activeChat === index ? 'active' : ''}`}
              onClick={() => setActiveChat(index)}
            >
              <div className="chat-avatar">{history.messages[0].sender.charAt(0)}</div>
              <div className="chat-info">
                <div className="chat-name">{history.messages[0].sender}</div>
                <div className="chat-preview">{history.messages[0].content}</div>
              </div>
              <div className="chat-meta">
                <span className="chat-time">
                  {history.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
                {history.unreadCount && history.unreadCount > 0 && (
                  <span className="chat-badge">{history.unreadCount}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </aside>
      <main className="dashboard-content">{renderTabContent()}</main>
    </div>
  );
};

export default Dashboard;
