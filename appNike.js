var express = require('express');
var app = express();
var http = require('http').Server(app);

                        //requete, resultat
app.get('/', function(req, res){
    res.sendFile(__dirname + '/nike/nikeBoots.html');
    
});

app.get('/produit', function(req, res){
    res.sendFile(__dirname + '/produit.html');
});

app.get('/contact', function(req, res){
    res.sendFile(__dirname + '/contact.html');
});

app.use('/css' , express.static(__dirname + '/nike/css'));
app.use('/js' , express.static(__dirname + '/nike/js'));
app.use('/img' , express.static(__dirname + '/nike/img'));


http.listen(1337, function(){ 
    console.log('listening on *:1337');
});





