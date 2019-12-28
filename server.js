const expressFunction = require('express');
const expressApp = expressFunction();


expressApp.get('/', function(req, res){
    res.send('Hello World');

});

expressApp.get('/api/resource', function(req, res) {

    var myJson = {
        name: 'Jan',
        id: 1
    };

    res.send(myJson);
});

const port = process.env.PORT || 4100;

expressApp.listen(port, function(){

    console.log('Listening on PORT 4100');

});