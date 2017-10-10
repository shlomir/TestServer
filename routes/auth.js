var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send({
        name: 'Shlomi',
        token: 'This is token'
    });
});

router.post('/', function (req, res, next) {
    let authParams = req.body;

    res.send({
        id: 7,
        userName: authParams.userName,
        firstName: 'Shlomi First name',
        lastName: 'Lahav',
        token: `This is the token for password: ${authParams.password}`,
    });
});

module.exports = router;
