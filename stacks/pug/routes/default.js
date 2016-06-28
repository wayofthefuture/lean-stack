let router  = require('express').Router();


router.get('/', (req, res) => {
    res.render('default', {
        title: 'LEAN'
    });
});


module.exports = router;
