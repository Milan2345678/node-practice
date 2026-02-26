const express = require("express");
const router = express.Router();

const { getUser, postData } = require("../controllers/userController");

router.get("/data/:id", getUser);
router.post("/data", postData);

module.exports = router;