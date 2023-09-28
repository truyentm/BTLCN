const express = require('express');
const router = express.Router();

// Định nghĩa route cho trang chủ
router.get('/', (req, res) => {
  const phoneNumber = '0966551795'; // 
  res.render('index', { phoneNumber });
});


module.exports = router;
