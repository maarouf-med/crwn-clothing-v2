import { createContext, useState, useEffect } from "react";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase";

// the value you want to access
const UserContext = new createContext();

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user, displayName);
        console.log(user);
      }
      setCurrentUser(user);
    });
  }, [displayName]);

  const value = {
    currentUser,
    setCurrentUser,
    setDisplayName,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserProvider };

export { UserContext };
