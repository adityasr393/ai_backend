const express = require('express');
const router = express.Router();
const contactController = require('../controller/contactcontroller');
const userController = require('../controller/userController');

router.post("/login", userController.login);
router.post('/signup', userController.signup);
router.post('/contact', contactController.submitContactForm);
router.get("/getprofiledata/:id", userController.getprof);
router.put("/updateprofile/:id", userController.updateprof);
router.put("/updatestatus/:id",userController.updatestatus);

module.exports = router;