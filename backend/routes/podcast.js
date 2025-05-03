const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Podcast endpoint');
});

module.exports = router;
