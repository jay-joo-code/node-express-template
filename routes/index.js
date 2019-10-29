var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.send({ 
      active: true
  })
});

router.use('/company', require('./companyRouter'));


module.exports = router;
