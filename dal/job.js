var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.GetAll = function(callback) {
    connection.query('SELECT acc_id, comp_id, f_name, l_name, comp_name, job_desc FROM UserJobView ORDER BY l_name DESC;',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            console.log(result);
            callback(false, result);
        }
    );
}


exports.GetByID = function(school_id, callback) {
    console.log(school_id);
    var query = 'SELECT acc_id, comp_id, f_name, l_name, comp_name, job_desc FROM UserJobView ORDER BY l_name DESC WHERE acc_id=' + acc_id;
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