import React, { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState();
  const [blogs, setBlogs] = useState([]);
  const [featuredBlog,setFeaturedBlog] = useState();

  const getLoggedInUserInfo = async () => {
    const response = await fetch("http://localhost:4000/user", {
      method: "GET",
      credentials: "include",
    });
    const data = await response.json();
    setLoggedInUser(data[0]);
  };

  const getAllBlogs = async () => {
    const response = await fetch("http://localhost:4000/blog/getAllBlogs", {
      method: "GET",
      credentials: "include",
    });
    const data = await response.json();
    setBlogs(data);
  };

  const getFeaturedBlog = async() => {
    const response = await fetch("http://localhost:4000/blog/getFeaturedBlog", {
      method: "GET",
      credentials: "include",
    });
    const data = await response.json();
    setFeaturedBlog(data);
  }

  useEffect(() => {
    getLoggedInUserInfo();
    getAllBlogs();
    getFeaturedBlog();
  }, []);

  return (
    <UserContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        getLoggedInUserInfo,
        blogs,
        setBlogs,
        getAllBlogs,
        featuredBlog,
        setFeaturedBlog,
        getFeaturedBlog
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
