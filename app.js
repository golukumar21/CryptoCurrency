var express=require('express');var path=require('path');var app=express();console.log(__dirname);app.use('/css',express.static(__dirname+'/css'));app.use('/plugins',express.static(__dirname+'/plugins'));app.use('/js',express.static(__dirname+'/js'));app.get('/',function(rer,res){res.sendFile('index.html',{root:path.join(__dirname,'/../CryptoCurrency')});});app.listen(3000,function(){console.log('PORT 3000!')});