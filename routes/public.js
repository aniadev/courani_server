const express = require("express");
const demoCourses = require("../models/DemoCourse");
const router = express.Router();

// @route GET api/public/democourses
// @desc get courses
// @access Public
router.get("/democourses", async (req, res) => {
  try {
    const courses = await demoCourses.find();
    res.json({ success: true, courses: courses });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "SERVER ERROR" });
  }
});
// @route GET api/public/democourses//:limit
// @desc get courses
// @access Public
router.get("/democourses/:limit", async (req, res) => {
  try {
    let limit = req.params.limit;
    const courses = await demoCourses.find().limit(limit);
    res.json({ success: true, courses: courses });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "SERVER ERROR" });
  }
});
