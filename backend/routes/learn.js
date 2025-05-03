const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Learn endpoint');
});

module.exports = router;
