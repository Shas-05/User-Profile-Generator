const express = require("express");
const router = express.Router();

const { generateProfile } = require("../Controller/profileControllers.js");

router.post("/", generateProfile);

module.exports = router;
