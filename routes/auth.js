var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send({
        name: 'Shlomi',
        token: 'This is token'
    });
});

router.post('/authenticate', function (req, res, next) {
    let authParams = req.body;

    res.send({
        data: {
            id: 7,
            username: authParams.userName,
            firstname: 'Shlomi First name',
            lastname: 'Lahav',
            token: `This is the token for password: ${authParams.password}`
        }
    });
});

router.post('/logout', function (req, res, next) {
    let authParams = req.body;

    res.send({
        success: true
    });
});

module.exports = router;
