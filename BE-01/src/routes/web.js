const express = require('express');
const {
  getHomePage,
  addUser,
  getCreateUserPage,
  getEditUserPage,
  updateUser,
  deleteUser
} = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomePage);

// Create User
router.get('/create', getCreateUserPage);
router.post('/create-user', addUser);

// Edit User
router.get('/edit/:id', getEditUserPage);
router.post('/edit-user', updateUser);

//Delete User
router.post('/delete-user/:id', deleteUser);

module.exports = router;