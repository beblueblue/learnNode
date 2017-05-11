'use strict'

//引入fs模块
var fs = require('fs');

//打开一个流
var rs = fs.createReadStream('sample.txt','utf-8');

//stream的data事件
rs.on('data',function(chunk){
    console.log('DATA:')
    console.log(chunk);
});

//stream的end事件
rs.on('end',function(){
    console.log('END');
});

//stream的error事件
rs.on('error',function(err){
    console.log('ERROR: '+err);
});