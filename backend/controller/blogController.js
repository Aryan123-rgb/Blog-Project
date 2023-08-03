const Blog = require("../models/Blog");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const secret = "!@#$%^&*()";

const handleCreateBlog = async (req, res) => {
  const { title, summary, description } = req.body;
  const token = req?.cookies.token;
  if (!token) {
    return;
  }
  let loggedUserId;
  if (req?.cookies.token) {
    const info = jwt.verify(token, secret);
    loggedUserId = info?.id;
  }
  console.log(req.body);
  console.log(title,summary,description);
  try {
    const blogDoc = await Blog.create({
      title: title,
      summary: summary,
      description: description,
      image: "blank for now",
      isFeatured: false,
      author: loggedUserId,
    });
    const blogInfo = await Blog.populate(blogDoc, {
      path: "author",
      select: "name email pic isAdmin",
    });
    res.json(blogDoc);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { handleCreateBlog };
