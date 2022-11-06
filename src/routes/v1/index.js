const express = require('express');

const router = express.Router();

// bu yönlendiriciye özel ara katman yazılım
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

// anasayfa rotası tanımla
router.get('/', (req, res) => {
    res.send('Node boilerplate home page')
})

module.exports = router;
