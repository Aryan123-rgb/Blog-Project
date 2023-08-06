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

const handleGetAllBlogs = async (req, res) => {
  try {
    const allBlogs = await Blog.find({}).sort({ createdAt: -1 });
    const blogInfo = await Blog.populate(allBlogs, {
      path: "author",
      select: "name email pic isAdmin",
    });
    res.json(allBlogs);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const handleToggleFeatureBlog = async (req, res) => {
  const { idToBeFeatured } = req.body;
  try {
    await Blog.findOneAndUpdate(
      { isFeatured: true },
      { $set: { isFeatured: false } }
    );

    const blogToBeFeatured = await Blog.findByIdAndUpdate(
      idToBeFeatured,
      { $set: { isFeatured: true } },
      { new: true }
    );

    if (!blogToBeFeatured) {
      return res.status(404).json({ error: "Blog not found" });
    }
    const blogInfo = await Blog.populate(blogToBeFeatured, {
      path: "author",
      select: "name email pic isAdmin",
    });
    res.json(blogToBeFeatured)
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const handleGetFeaturedBlog = async(req,res) => {
  try {
    const featuredBlog = await Blog.findOne({isFeatured:true});
    const blogInfo = await Blog.populate(featuredBlog, {
      path: "author",
      select: "name email pic isAdmin",
    });
    res.json(featuredBlog);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

const handleDeleteBlog = async(req,res) => {
  try {
    const {id} = req.body;
    await Blog.findByIdAndDelete(id);
    res.json('ok');
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

const handleEditBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);

    if (!blog) {
      res.status(404).json({ message: "Blog not found" });
    }
    blog.title = req.body.title;
    blog.summary = req.body.summary;
    blog.description = req.body.description;

    const updatedBlog = await blog.save();

    res.json(updatedBlog);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to update the blog" });
  }
};


module.exports = {
  handleCreateBlog,
  handleGetAllBlogs,
  handleToggleFeatureBlog,
  handleGetFeaturedBlog,
  handleDeleteBlog,
  handleEditBlog
};
