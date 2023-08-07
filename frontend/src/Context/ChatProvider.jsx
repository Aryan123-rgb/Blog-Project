import React, { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState();
  const [blogs, setBlogs] = useState([]);
  const [featuredBlog, setFeaturedBlog] = useState();
  const [bookmarkedBlogs, setBookMarkedBlogs] = useState([]);

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

  const getFeaturedBlog = async () => {
    const response = await fetch("http://localhost:4000/blog/getFeaturedBlog", {
      method: "GET",
      credentials: "include",
    });
    const data = await response.json();
    setFeaturedBlog(data);
  };

  const getBookMarkedBlogs = async () => {
    const response = await fetch("http://localhost:4000/bookmark/", {
      method: "GET",
      credentials: "include",
    });
    const data = await response.json();
    const updatedBookmarkedBlogs = data.map((bookmark) => bookmark?.blog);
    setBookMarkedBlogs(updatedBookmarkedBlogs);
  };

  useEffect(() => {
    getLoggedInUserInfo();
    getAllBlogs();
    getFeaturedBlog();
    getBookMarkedBlogs();
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
        getFeaturedBlog,
        bookmarkedBlogs,
        setBookMarkedBlogs,
        getBookMarkedBlogs,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
