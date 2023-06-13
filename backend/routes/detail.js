const express = require("express");
const router = express.Router();
const {checkToken}=require("../middleware/workerAuthMiddleware");
const {workerDetail,customDetail,singleDetail}=require("../controllers/workerDetail");
// const {checkToken}=require("../middleware/workerAuthMiddleware");

router.get("/allWorker",workerDetail);
router.get("/:customDetail",customDetail);
router.get("/singleDetail/:workerId",checkToken,singleDetail);

module.exports = router;
