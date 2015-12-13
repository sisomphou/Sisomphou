var express = require('express');
var router = express.Router();
var jobDal   = require('../dal/job');

router.get('/all', function(req, res) {
    jobDal.GetAll(function (err, result) {
            if (err) throw err;
            //NOTE: res.send() will return plain text to the browser.
            //res.send(result);

            //res.render() will return render the template provided
            res.render('displayAllJobs.ejs', {rs: result});
        }
    );
});

router.get('/', function (req, res) {
    jobDal.GetByID(req.query.acc_id, function (err, result) {
            if (err) throw err;

            res.render('displayJobInfo.ejs', {rs: result, acc_id: req.query.acc_id});
        }
    );
});

module.exports = router;