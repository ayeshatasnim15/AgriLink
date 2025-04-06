import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]); // Registered users
  const [currentUser, setCurrentUser] = useState(null); // Logged in user

  const registerUser = (user) => {
    setUsers([...users, user]);
    setCurrentUser(user);
  };

  const loginUser = (email, password) => {
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) setCurrentUser(user);
    return !!user;
  };

  return (
    <UserContext.Provider value={{ users, currentUser, registerUser, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};
