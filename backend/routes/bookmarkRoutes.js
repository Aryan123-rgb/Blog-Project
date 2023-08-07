const express = require("express");
const {
  handleAddBookmarkBlog,
  handleDeleteBookmarkBlog,
  handleGetAllBookmarkedBlogs
} = require("../controller/bookmarkController");
const router = express.Router();

router.post("/addBookmark", handleAddBookmarkBlog);
router.post("/removeBookmark", handleDeleteBookmarkBlog);
router.get('/getAllBookmarkBlogs',handleGetAllBookmarkedBlogs);

module.exports = router;
