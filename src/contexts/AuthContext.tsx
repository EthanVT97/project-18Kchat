import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id?: string;
  name?: string;
  email?: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (token: string, userData: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check if the user is logged in on mount
    const token = localStorage.getItem('authToken');
    if (token) {
      const userData = {
        id: localStorage.getItem('userId') || undefined,
        name: localStorage.getItem('userName') || undefined,
        email: localStorage.getItem('userEmail') || undefined,
      };
      setIsAuthenticated(true);
      setUser(userData);
    }
  }, []);

  const login = (token: string, userData: User) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('userId', userData.id || '');
    localStorage.setItem('userName', userData.name || '');
    localStorage.setItem('userEmail', userData.email || '');
    setIsAuthenticated(true);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
