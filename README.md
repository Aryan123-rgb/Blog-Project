# BlogNest - A Blogging Platform

BlogNest is a full-stack blogging platform that allows users to create, read, update, and delete blog posts. It provides a user-friendly interface for authors to share their thoughts, experiences, and ideas with the world. Users can register, log in, and manage their own blogs, as well as bookmark their favorite posts for later reading.

## Screenshots

### Homepage

![Homepage](/images/homepage.png)
*Description: This screenshot shows the homepage of BlogNest, displaying featured blog posts and other posts.*

### Signup-Page

![Login](/images/Login.png)
*Description: This screenshot shows the login page. New user can log in as a guest user to try all the functionality of project.*


![UpdatedHomePage](/images/UpdatedHomePage.png)
*Description: This screenshot shows the homepage of BlogNest, displaying featured blog posts and other posts after user signs up.*

### Blog Creation

![Blog Creation](/images/CreateBlog.png)
*Description: This screenshot shows the blog creation page, where users can create new blog posts.*

### Blog Details

![Blog Details](/images/blog-details.png)
*Description: This screenshot shows the details page of a blog, displaying the full content of the blog post.*


## Features

- User Authentication: Users can register and log in to access the full features of the platform. Authentication is secured using JSON Web Tokens (JWT) for enhanced security.

- Create and Manage Blogs: Registered users can create, edit, and delete their own blog posts. They can add a title, summary, description, and even upload an image to make their blog visually appealing.

- Bookmark Favorite Blogs: Users can bookmark their favorite blog posts to read them later. This feature ensures that users can easily find and read their preferred content.

- Admin Privileges: Admin have the authority to manage all blog posts on the platform. This includes the ability to edit and delete any blog post.

- Featured Blogs: Admin users can feature blogs, making them more prominent and accessible to a wider audience.

- Responsive Design: BlogNest is designed to work seamlessly on various devices, including desktops, tablets, and smartphones.

## Technologies Used

- Frontend: React, Chakra UI, React Router, Axios

- Backend: Node.js, Express.js, MongoDB, Mongoose

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/Aryan123-rgb/Blog-Project.git
cd Blog-Project
```
2. Install dependencies:

Frontend
```bash
cd frontend
npm install
```

Backend
```bash
cd backend
npm install
```

3. Run The Application

Start the backend
```bash
cd backend
node index.js
```

Start the frontend
```bash
cd frontend
npm start
```

The application will be started on localhost 3000