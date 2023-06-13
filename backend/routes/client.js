const express = require("express");
const router = express.Router();

const { clientLogin, clientRegister } = require("../controllers/clientAuth");

router.post("/clientLogin", clientLogin);
router.post("/clientRegister", clientRegister);

module.exports = router; 
