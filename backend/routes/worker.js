const express = require("express");
const router = express.Router();


const { login,register} = require("../controllers/workerAuth");
const { getWorkerDetail } = require("../controllers/workerDetail");
const {checkToken} =require("../middleware/workerAuthMiddleware");

router.post("/workerLogin", login);
router.post("/workerRegister",register);
router.get("/getWorkerDetail",checkToken,getWorkerDetail);

module.exports = router;
