const express = require("express");
const router = express.Router();


const {getRating,updateRating}=require("../controllers/rating");



router.post("/updateRating",updateRating);
router.get("/getRating",getRating);

module.exports = router;
