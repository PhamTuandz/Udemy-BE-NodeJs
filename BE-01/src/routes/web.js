const express = require('express');
const {
  getHomePage,
  createUer,
  getCreateUserPage
} = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomePage);
router.get('/create', getCreateUserPage);
router.post('/create-user', createUer);

module.exports = router;