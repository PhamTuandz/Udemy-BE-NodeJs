const express = require('express');
const {
  getHomePage
} = require('../controllers/homeController');
const router = express.Router();

router.get('/', (req, res) => {
  getHomePage(req, res);

});

module.exports = router;