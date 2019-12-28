const express = require('express');
const app = express();
const student1 = [
    {
        id: 1,
        name: "Jan"
    },
    {
        id: 2,
        name: "Fairee"
    }
];

const student2 = [{
    id: 3,
    name: "Wed"
},
{
    id: 4,
    name: "Fri"
}];

const schools = {
    'jantapa': student1,
    'sufairee': student2
};

app.get('/api/:school', function (req, res) {

    const school = req.params.school.toLowerCase();
    if (school == 'jantapa') {

        res.send(student1);

    }else if(school == 'sufairee'){

        res.send(student2);
    }else{
        console.log('Error 404 not founds');
    }
});


app.get('/api/:school/:id', function(req, res){
    const id = req.params.id;
    const schoolName = req.params.school.toLowerCase();

    if(!schools[schoolName]){
        res.send('School not found');
    }else if(schools[schoolName][id-1]){
        res.send(schools[schoolName][id-1]);
    }else{

        console.log('Not Found student');
    }
});

const port = process.env.PORT || 3000;
app.listen(3000, function(){
    console.log('Listening on PORT ',port);
});