const express = require("express");
const {
  handleLoginUser,
  handleSignUpUser,
  handleGetLoggedInUser,
  handleLogoutUser,
  handleGetAllUserInfo
} = require("../controller/userController");
const multer = require("multer");
const upload = multer({ dest: "profilePhoto" });
const router = express.Router();

router.post("/login", handleLoginUser);
router.post("/signup", upload.single("profilePic"), handleSignUpUser);
router.get("/", handleGetLoggedInUser);
router.get("/allUserInfo", handleGetAllUserInfo);
router.post("/logout", handleLogoutUser);

module.exports = router;