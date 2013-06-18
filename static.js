var Static = require('node-static');

var file = new Static.Server('./www');
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    });
}).listen(8081);
