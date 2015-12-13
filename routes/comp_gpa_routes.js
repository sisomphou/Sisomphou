var express = require('express');
var router = express.Router();
var companyDal   = require('../dal/company');

router.get('/all', function(req, res) {
    companyDal.GetAll(function (err, result) {
            if (err) throw err;
            //NOTE: res.send() will return plain text to the browser.
            //res.send(result);

            //res.render() will return render the template provided
            res.render('displayAllComps.ejs', {rs: result});
        }
    );
});

router.get('/', function (req, res) {
    companyDal.GetByID(req.query.comp_id, function (err, result) {
            if (err) throw err;

            res.render('displayCompInfo.ejs', {rs: result, comp_id: req.query.comp_id});
        }
    );
});

module.exports = router;