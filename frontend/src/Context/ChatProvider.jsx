import React, { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState();
  const [blogs,setBlogs] = useState([]);

  const getLoggedInUserInfo = async () => {
    const response = await fetch("http://localhost:4000/user", {
      method: "GET",
      credentials: "include",
    });
    const data = await response.json();
    setLoggedInUser(data[0]);
  };

  useEffect(() => {
    getLoggedInUserInfo();
  }, []);

  return (
    <UserContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        getLoggedInUserInfo,
        blogs,
        setBlogs
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
