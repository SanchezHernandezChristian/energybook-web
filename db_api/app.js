const express = require('express');
const app = express();
const cron = require('node-cron');
const response = require('./http/request');
const add_olus_db = require('./http/add_olus_db');
router = express.Router();

//settings
app.set('port', process.env.PORT || 4000);
var url_devices = "http://pureplasticecg.dyndns-web.com/services/user/devices.xml";

cron.schedule('*/5 * * * *', () => {
	response.getData(url_devices).then((data) => {
		add_olus_db.insertTotalValue(data);
	}, (error) => {
		console.log(error);
	});

	response.getData(url_devices).then((data) => {
		add_olus_db.insertPartialValue(data);
	}, (error) => {
		console.log(error);
	});
});

//start the server
app.listen(app.get('port'), function () {
	console.log('Server is running on Port', app.get('port'));
});