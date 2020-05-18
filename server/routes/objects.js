const express = require("express");
const router = express.Router();
const objectsControllers = require("../controllers/objects");
router.get("", objectsControllers.getAllObjects);

module.exports = router;
