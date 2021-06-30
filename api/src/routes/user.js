const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/users', userController.create);
router.get('/users/:id', userController.getUser);
router.patch("/users/:id/add-profile-picture", userController.updateImage);
router.patch("/users/:id/update-user-data", userController.updateUserData);

module.exports = router;
