var express = require('express');
var app = express();
var port = 80;
var mysql = require('mysql');
var bodyParser = require('body-parser');

var con = mysql.createConnection({
	host: "192.99.70.100",
	port: "3306",
	user: "andrew_uc",
	password: "test123",
	database: "andrew"
});

con.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/"));

app.get('/forecast/:date', (req, res) => {
	con.query("select DATE_FORMAT(DATE, '%Y%m%d') as DATE, avg(tmin) as TMIN, avg(tmax) as TMAX " +
        	"from (" +
            "select tmin, tmax, date " +
            "from dailyweather " +
            "where (month(date)=month(date_add('" + req.params.date + "', interval 1 day)) and day(date)=day(date_add('" + req.params.date + "', interval 1 day))) " +
            "or (month(date)=month(date_add('" + req.params.date + "', interval 2 day)) and day(date)=day(date_add('" + req.params.date + "', interval 2 day))) " +
            "or (month(date)=month(date_add('" + req.params.date + "', interval 3 day)) and day(date)=day(date_add('" + req.params.date + "', interval 3 day))) " +
            "or (month(date)=month(date_add('" + req.params.date + "', interval 4 day)) and day(date)=day(date_add('" + req.params.date + "', interval 4 day))) " +
            "or (month(date)=month(date_add('" + req.params.date + "', interval 5 day)) and day(date)=day(date_add('" + req.params.date + "', interval 5 day))) " +
            "or (month(date)=month(date_add('" + req.params.date + "', interval 6 day)) and day(date)=day(date_add('" + req.params.date + "', interval 6 day))) " +
            "or (month(date)=month('" + req.params.date + "') and day(date)=day('" + req.params.date + "')) " +
            ") dw " +
            // ensure today or future date only
            "where date_format(now(), '%Y%m%d')<='" + req.params.date + "' " +
            "group by month(date), day(date) " +
            "order by date asc;",
    function (err, result, fields) {
    	if (err) throw err;
        res.status(201).send(result);
    });
});

app.post('/forecast', (req, res) => {
    con.query("select DATE_FORMAT(DATE, '%Y%m%d') as DATE, avg(tmin) as TMIN, avg(tmax) as TMAX " +
        	"from (" +
            "select tmin, tmax, date " +
            "from dailyweather " +
            "where (month(date)=month(date_add('" + req.body.date + "', interval 1 day)) and day(date)=day(date_add('" + req.body.date + "', interval 1 day))) " +
            "or (month(date)=month(date_add('" + req.body.date + "', interval 2 day)) and day(date)=day(date_add('" + req.body.date + "', interval 2 day))) " +
            "or (month(date)=month(date_add('" + req.body.date + "', interval 3 day)) and day(date)=day(date_add('" + req.body.date + "', interval 3 day))) " +
            "or (month(date)=month(date_add('" + req.body.date + "', interval 4 day)) and day(date)=day(date_add('" + req.body.date + "', interval 4 day))) " +
            "or (month(date)=month('" + req.body.date + "') and day(date)=day('" + req.body.date + "')) " +
            ") dw " +
            // ensure today or future date only
            "where date_format(now(), '%Y%m%d')<='" + req.body.date + "' " +
            "group by month(date), day(date) " +
            "order by date asc;",
    function (err, result, fields) {
    	if (err) throw err;
      res.status(201).send(result);
    });
});

app.delete('/historical/:date', (req, res) => {
    con.query("delete from dailyweather where date=" + req.params.date,
        function (err, result, fields) {
            if (err) throw err;
            res.status(201).end('Record ' + req.params.date + ' has been deleted!');
        });
});

app.post('/historical', (req, res) => {
	con.query("insert into dailyweather (date, tmin, tmax) "
    	+ "values ('" + req.body.date + "', '" + req.body.tmin + "', '" + req.body.tmax + "') "
    	+ "on duplicate key update "
    	+ "tmin='" + req.body.tmin + "', tmax='" + req.body.tmax + "';",
    	function (err, result, fields) {
      		if (err) throw err;
      		res.status(201).send("Success");
    	});
});

app.get('/historical/:date', (req, res) => {
	con.query("select * from dailyweather where date=" + req.params.date,
    	function (err, result, fields) {
      		if (err) throw err;
      		if (result.length == 0) {
        		res.sendStatus(404);
      		} 
      		else {
        		res.send(result);
      		}
    	});
});

app.get('/historical', (req, res) => {
	con.query("select date_format(date, '%Y%m%d') as DATE from dailyweather",
		function (err, result, fields) {
    	if (err) throw err;
    	res.send(result);
  		});
});

app.listen(80, () => {
	console.log('RESTful API server started on: ' + port);
});