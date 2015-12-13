var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.GetAll = function(callback) {

    var query = 'SELECT * FROM Resume_school;'
    console.log(query);

    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true, null);
                //return;
            }
            else {
                console.log(result);
                callback(false, result);
            }
        }
    );
}


exports.GetByID = function(school_id, callback) {
    console.log(school_id);
    var query = 'SELECT * FROM Resume_school WHERE sch_id=' + school_id;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}