// src/components/chat/ChatInterface.tsx

import React, { useState, useRef, useEffect, useMemo } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DroppableProvided,
  DraggableProvided,
} from 'react-beautiful-dnd';
import './ChatInterface.css';

interface ChatWindow {
  id: string;
  title: string;
  type: 'bot' | 'user' | 'group';
  messages: Message[];
}

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: Date;
  type: 'text' | 'link' | 'file';
  isBot?: boolean;
}

const ChatInterface: React.FC = () => {
  const [chatWindows, setChatWindows] = useState<ChatWindow[]>([]);
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatWindows]);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(chatWindows);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setChatWindows(items);
  };

  const createNewChat = (type: 'bot' | 'user' | 'group') => {
    const newChat: ChatWindow = {
      id: `chat-${Date.now()}`,
      title: `New ${type} Chat`,
      type,
      messages: [],
    };

    setChatWindows([...chatWindows, newChat]);
    setActiveChat(newChat.id);
  };

  const generateBotResponse = async (message: string): Promise<string> => {
    const responses = {
      hello: "Hi there! How can I help you today?",
      help: "I can assist you with: \n- Chat features\n- Navigation\n- Basic questions",
      weather: "I'm sorry, I can't check the weather right now.",
      bye: "Goodbye! Have a great day!",
      default: "I'm not sure how to respond to that. Can you rephrase?",
    };

    const lowercaseMsg = message.toLowerCase();

    if (lowercaseMsg.includes('hello')) return responses.hello;
    if (lowercaseMsg.includes('help')) return responses.help;
    if (lowercaseMsg.includes('weather')) return responses.weather;
    if (lowercaseMsg.includes('bye')) return responses.bye;

    return responses.default;
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || !activeChat) return;

    const currentChat = chatWindows.find((chat) => chat.id === activeChat);
    if (!currentChat) return;

    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      sender: 'You',
      content: inputMessage,
      timestamp: new Date(),
      type: inputMessage.startsWith('http') ? 'link' : 'text',
    };

    const updatedWindows = chatWindows.map((chat) => {
      if (chat.id === activeChat) {
        return {
          ...chat,
          messages: [...chat.messages, newMessage],
        };
      }
      return chat;
    });

    setChatWindows(updatedWindows);
    setInputMessage('');

    if (currentChat.type === 'bot') {
      setTimeout(async () => {
        const botResponse = await generateBotResponse(inputMessage);
        const botMessage: Message = {
          id: `msg-${Date.now()}`,
          sender: 'Bot',
          content: botResponse,
          timestamp: new Date(),
          type: 'text',
          isBot: true,
        };

        setChatWindows((prev) =>
          prev.map((chat) =>
            chat.id === activeChat
              ? { ...chat, messages: [...chat.messages, botMessage] }
              : chat
          )
        );
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const currentChat = useMemo(() => chatWindows.find((chat) => chat.id === activeChat), [chatWindows, activeChat]);

  return (
    <div className="chat-interface">
      <div className="chat-sidebar">
        <div className="chat-actions">
          <button onClick={() => createNewChat('bot')}>
            <i className="fas fa-robot"></i> New Bot Chat
          </button>
          <button onClick={() => createNewChat('user')}>
            <i className="fas fa-user"></i> New User Chat
          </button>
          <button onClick={() => createNewChat('group')}>
            <i className="fas fa-users"></i> New Group Chat
          </button>
        </div>

        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="chat-list">
            {(provided: DroppableProvided) => (
              <div
                className="chat-list"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {chatWindows.map((chat, index) => (
                  <Draggable key={chat.id} draggableId={chat.id} index={index}>
                    {(provided: DraggableProvided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`chat-item ${activeChat === chat.id ? 'active' : ''}`}
                        onClick={() => setActiveChat(chat.id)}
                      >
                        <i
                          className={`fas ${
                            chat.type === 'bot'
                              ? 'fa-robot'
                              : chat.type === 'user'
                              ? 'fa-user'
                              : 'fa-users'
                          }`}
                        ></i>
                        <span>{chat.title}</span>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>

      <div className="chat-content">
        {currentChat ? (
          <div className="active-chat">
            <div className="chat-messages">
              {currentChat.messages.map((message) => (
                <div
                  key={message.id}
                  className={`message ${message.type} ${message.isBot ? 'bot' : 'user'}`}
                >
                  <div className="message-sender">{message.sender}</div>
                  <div className="message-content">
                    {message.type === 'link' ? (
                      <a href={message.content} target="_blank" rel="noopener noreferrer">
                        {message.content}
                      </a>
                    ) : (
                      message.content
                    )}
                  </div>
                  <div className="message-timestamp">
                    {message.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="chat-input">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                rows={1}
                aria-label="Type your message here"
              />
              <button
                className="send-button"
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        ) : (
          <div className="no-chat-selected">
            <i className="fas fa-comments"></i>
            <p>Select a chat or create a new one</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatInterface;
