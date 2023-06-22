const express = require("express");
const router = express.Router();


const { login,register} = require("../controllers/workerAuth");
const { getWorkerDetail, updateWorkerDetail } = require("../controllers/workerDetail");
// const {checkToken} =require("../middleware/workerAuthMiddleware");

router.post("/workerLogin", login);
router.post("/workerRegister",register);
router.get("/getWorkerDetail",getWorkerDetail);
router.post("/updateWorkerDetail",updateWorkerDetail)

module.exports = router;
 