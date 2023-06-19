const express = require("express");
const router = express.Router();

const { clientLogin, clientRegister } = require("../controllers/clientAuth");
const { getClientDetail } = require("../controllers/clientDetail");
const {checkToken}=require("../middleware/clientAuthMiddleware");

router.post("/clientLogin", clientLogin);
router.post("/clientRegister", clientRegister);
router.get("/getClientDetail",checkToken,getClientDetail)

module.exports = router; 
