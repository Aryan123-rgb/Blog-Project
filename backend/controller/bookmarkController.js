const Bookmark = require("../models/Bookmark");
const jwt = require("jsonwebtoken");

const secret = "!@#$%^&*()";

const handleAddBookmarkBlog = async (req, res) => {
  const { idToBeBookmarked, loggedInUserId } = req.body;
  try {
    const existingBookmark = await Bookmark.findOne({
      user: loggedInUserId,
      blog: idToBeBookmarked,
    });
    if (existingBookmark) {
      res.json("Already Added");
      return;
    }
    const newBookmark = await Bookmark.create({
      user: loggedInUserId,
      blog: idToBeBookmarked,
    });
    const populatedBlog = await Bookmark.populate(newBookmark, {
      path: "user",
      select: "name email pic isAdmin",
    });

    const populatedBlogDoc = await Bookmark.populate(newBookmark, {
      path: "blog",
      select: "title summary description image isFeatured",
    });

    res.json(newBookmark);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "An error occurred while bookmarking the blog" });
  }
};

const handleDeleteBookmarkBlog = async (req, res) => {
  const { idToBeRemoved, loggedInUserId } = req.body;
  try {
    await Bookmark.findOneAndDelete({
      blog: idToBeRemoved,
      user: loggedInUserId,
    });
    res.json("ok");
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const handleGetAllBookmarkedBlogs = async (req, res) => {
  const token = req?.cookies.token;
  if (req?.cookies.token) {
    const info = jwt.verify(token, secret);
    const id = info?.id;
    try {
      const blogData = await Bookmark.find({user : id});
      
      const populatedBlog = await Bookmark.populate(blogData, {
        path: "user",
        select: "name email pic isAdmin",
      });
  
      const populatedBlogDoc = await Bookmark.populate(blogData, {
        path: "blog",
        select: "title summary description image isFeatured author",
        populate : {
          path : 'author',
          select : 'name email pic isAdmin',
        }
      });
      res.json(blogData);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  } else {
    res.status(400).json('ok');
  }
};

module.exports = {
  handleAddBookmarkBlog,
  handleDeleteBookmarkBlog,
  handleGetAllBookmarkedBlogs,
};
