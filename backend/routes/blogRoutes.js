const express = require("express");
const {
  handleCreateBlog,
  handleGetAllBlogs,
  handleToggleFeatureBlog,
  handleGetFeaturedBlog,
  handleDeleteBlog,
  handleEditBlog
} = require("../controller/blogController");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "blogPhoto" });

router.post("/createBlog", upload.single("imageFile"), handleCreateBlog);
router.get("/getAllBlogs", handleGetAllBlogs);
router.post("/togglefeature", handleToggleFeatureBlog);
router.get('/getFeaturedBlog',handleGetFeaturedBlog);
router.post('/delete',handleDeleteBlog);
router.put('/edit/:id',upload.single('imageFile'),handleEditBlog);

module.exports = router;
