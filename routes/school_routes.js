var express = require('express');
var router = express.Router();
var schoolDal   = require('../dal/school');

router.get('/all', function(req, res) {
    schoolDal.GetAll(
        function (err, result) {
            if (err) throw err;
            //NOTE: res.send() will return plain text to the browser.
            //res.send(result);

            //res.render() will return render the template provided
            res.render('displayAllSchools.ejs', {rs: result});
        }
    );
});

router.get('/', function (req, res) {
    schoolDal.GetByID(req.query.sch_id, function (err, result) {
            if (err) throw err;

            res.render('displaySchoolInfo.ejs', {rs: result, sch_id: req.query.sch_id});
        }
    );
});


module.exports = router;