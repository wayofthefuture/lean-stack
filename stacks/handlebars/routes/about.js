let router  = require('express').Router();


router.get('/', (req, res) => {
    res.render('about', { title: 'About Us' });
});


module.exports = router;
