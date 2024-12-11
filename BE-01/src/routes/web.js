const express = require('express');
const {
  getHomePage,
  createUer
} = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomePage);
router.post('/create-user', createUer);

module.exports = router;