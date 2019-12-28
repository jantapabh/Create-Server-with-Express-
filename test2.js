const express = require('express');
const app = express();
const student = [ {
    id: 1, name: "Jan"
} , {

    id: 2, name: "Fairee"
}];

app.get('/api/student', function(req,res){
    res.send(student);
});

app.get('/api/student/:id',function(req, res){
    const id = req.params.id;

    if(id == 1){
        res.send(student[0]);

    } else if(id == 2){
        res.send(student[1]);
    }else{
        res.send('Error 404 not found');

    }


});

const port = process.env.PORT || 3000;
app.listen(3000, function(){
    console.log('Listenning on PORT 3000');
});