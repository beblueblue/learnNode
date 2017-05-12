'use strict'

var fs = require('fs');

fs.readFile('002.png',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
        console.log(data.length+'bytes');
    }
});
fs.stat('002.png',function(err,stats){
    if(err){
        console.log(err);
    }else{
        //是否为文件：
        console.log('isFile: '+stats.isFile());
        //是否为目录：
        console.log('isDirectory: '+stats.isDirectory());
        if(stats.isFile()){
            //文件大小
            console.log('size: '+stats.size);
            //创建时间，Date对象
            console.log('birth time: '+stats.birthtime);
            //修改时间，Date对象
            console.log(`modified time: ${stats.mtime}`);
        }
    }
});

var url = require('url');

console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));