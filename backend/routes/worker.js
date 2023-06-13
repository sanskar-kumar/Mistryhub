const express = require("express");
const router = express.Router();


const { login,register} = require("../controllers/workerAuth");


router.post("/workerLogin", login);
router.post("/workerRegister",register);


module.exports = router;
