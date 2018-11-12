const express = require('express');
const app = express();
const port = 3000;

function getData(){
    return  Math.floor(Math.random() * 100);
}

// Get agents
app.get('/api/v1/agents', (req, res) => {
    let data = [
        {"user" : "Francisco","attendances":  getData(),"timeout" : getData()},
        {"user" : "José","attendances":  getData(),"timeout" :  getData()},
        {"user" : "Carlos","attendances":  getData(),"timeout" :  getData()},
        {"user" : "Andre","attendances":  getData(),"timeout" :  getData()},
        {"user" : "Bernardo","attendances":  getData(),"timeout" :  getData()},
        {"user" : "Ana Lucia","attendances":  getData(),"timeout" :  getData()},
        {"user" : "Marilia","attendances":  getData(),"timeout" :  getData()}
    ];
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data));
});

// Get contacts
app.get("/api/v1/contacts",(req,res) => {
    let data = [
        {"contact" : "Matheus","attendances": getData()},
        {"contact" : "Juliano","attendances": getData()},
        {"contact" : "Henrique","attendances": getData()},
        {"contact" : "Cauan","attendances": getData()},
        {"contact" : "Jorge","attendances": getData()},
        {"contact" : "Felipe","attendances": getData()}
    ];
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data));
});

// Status attendance
app.get("/api/v1/clients",(req,res)=>{
    let data = {"waiting" :  getData(),"attendance" :  getData(),"finish" :  getData(),"timeout" :  getData(),"tma": "01:30:00","tme":"00:00:40"};
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data));
});

// Status hours
app.get("/api/v1/hours",(req,res) => {
    let data = [
        {"hour" : "8","count" :  getData()},
        {"hour" : "9","count" :  getData()},
        {"hour" : "10","count" :  getData()},
        {"hour" : "11","count" :  getData()},
        {"hour" : "12","count" :  getData()},
        {"hour" : "13","count" : getData()},
        {"hour" : "14","count" :  getData()},
        {"hour" : "15","count" : getData()},
        {"hour" : "16","count" :  getData()},
        {"hour" : "17","count" :  getData()},
        {"hour" : "18","count" :  getData()},
    ];
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data));
});


app.listen(port, () => console.log(`App listening on port ${port}!`));