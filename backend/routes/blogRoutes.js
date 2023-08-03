const express = require("express");
const { handleCreateBlog } = require("../controller/blogController");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "blogPhoto" });


router.post("/createBlog",upload.single("imageFile"), handleCreateBlog);

module.exports = router;