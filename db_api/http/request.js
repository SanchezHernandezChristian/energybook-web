var http = require('http');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();

function getData(url) {
    parser.on('error', function (err) { console.log('Parser error', err); });
    return new Promise((resolve, reject) => {

        var data = '';
        http.get(url, function (res) {
            if (res.statusCode >= 200 && res.statusCode < 400) {
                res.on('data', function (data_) { data += data_.toString(); });
                res.on('end', function () {
                    parser.parseString(data, function (err, result) {
                        resolve(result);
                        reject(err);
                    });
                });
            }
        });
    });
}


module.exports = { getData };