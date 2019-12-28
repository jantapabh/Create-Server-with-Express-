const expressFunction = require('express');
const expressApp = expressFunction();


expressApp.get('/',function(req, res) {
    res.send('Hello Jan');
});

expressApp.listen(3000, function() {

    console.log('Listen on port 3000');
});
