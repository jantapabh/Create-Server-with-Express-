const expressFunction = require('express');
const expressApp = expressFunction();


expressApp.get('/api/resource', function (req, res) {
    const myJson = {
        name: 'Jan',
        nickname: 'Joajan'
    };
    res.send(myJson);
    // console.log(myJson);
});

expressApp.listen(3000, function () {

    console.log('Listen on port 3000');
});
