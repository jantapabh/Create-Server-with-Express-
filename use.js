const express = require('express');
const expressApp = express();

expressApp.use(express.json());
const students = [
    {
        id: 1,'name': 'Jantapa'
    },
    {
        id: 2, 'name': 'Sufairee'
    },
    {
        id: 3, 'name': 'Rusnee.'
    }
] 


expressApp.post('/api/add', function(req, res){


    const studentName = req.body.name;


    if(studentName.length <= 2){

        res.status(400).send('Error can not add Status');
    }else{


        const student = {
            id: students.length + 1,
            'name': studentName
        }


        students.push(student);
        res.send(student);
    }
});

const port = process.env.PORT || 3000;

expressApp.listen(3000, function(){
    console.log('Listening pn PORT ',port);
});



