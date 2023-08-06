const express = require("express");
const {
  handleCreateBlog,
  handleGetAllBlogs,
  handleToggleFeatureBlog,
  handleGetFeaturedBlog,
  handleDeleteBlog
} = require("../controller/blogController");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "blogPhoto" });

router.post("/createBlog", upload.single("imageFile"), handleCreateBlog);
router.get("/getAllBlogs", handleGetAllBlogs);
router.post("/togglefeature", handleToggleFeatureBlog);
router.get('/getFeaturedBlog',handleGetFeaturedBlog);
router.post('/delete',handleDeleteBlog);


module.exports = router;
