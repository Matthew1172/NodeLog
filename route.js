const express = require('express');
const router = express.Router();
const qs = require('querystring');

var msg = '';
router.post('/', (req, res, next) => {
    var jsonIn = '';
    req.on('data', (data) => {
        jsonIn += data;
    });

    req.on('end', () => {
        var postData = qs.parse(jsonIn);
        
        msg += postData.userKey;
        console.log(msg);

        //console.log(postData.userKey);

        res.status(200).json({
            m: "success"
        });
    });
});
module.exports = router;