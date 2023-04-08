var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.post("/testatrigger", function (req, res) {
    avisoController.testatrigger(req, res);
});

module.exports = router;