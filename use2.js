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
        id: 3, 'name': 'Rusnee'
    }
] 

expressApp.put('/api/update/:id', function(req, res){

    const id = req.params.id;
    const name = req.body.name;

    if(studentName.length <= 2 || isNaN(id)){

        res.status(400).send('Error can not add Status');
    }else{

        const student = students.find(i => i.id === parseInt(id));

      if(student){
          student.name = name;
          res.send(students);
      }else{

        res.status(400).send('Cannot find student to upadte');

      }

        
    }
});

const port = process.env.PORT || 3000;

expressApp.listen(3000, function(){
    console.log('Listening pn PORT ',port);
});