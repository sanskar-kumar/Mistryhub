module.exports = app => {
    const workers = require("../controllers/controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/worker", workers.create);
  
  
  
    app.use('/api/tutorials', router);
  };