const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/users', userController.create);
router.get('/users/:id', userController.getUser);
router.post("/users/:id/add-profile-picture", userController.updateImage)

module.exports = router;
