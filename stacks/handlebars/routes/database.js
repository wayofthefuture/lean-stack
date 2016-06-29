let router = require('express').Router();


router.get('/', (req, res) => {
    let coll = req.database.getCollection('users');
    let users = coll.chain().simplesort('name').data();

    render(res, users);
});

router.get('/find/:search', (req, res) =>  {
    let search = req.params.search;

    let coll = req.database.getCollection('users');
    let users = coll.find({ name: { '$regex': new RegExp(search, 'i') } });

    render(res, users);
});

router.get('/structure', (req, res) =>  {
    let coll = req.database.getCollection('users');
    render(res, {}, coll);
});


function render(res, users, struct) {
    res.render('database', {
        title: 'Loki Database',
        users: users,
        struct: struct ? JSON.stringify(struct, null, 2) : ''
    });
}


module.exports = router;
