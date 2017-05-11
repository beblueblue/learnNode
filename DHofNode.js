const crypto = require('crypto');

//xiaoming's keys:
//创建小明的密钥交换对象，素数长度为512bit
var ming = crypto.createDiffieHellman(512);
//生成小明的密钥，返回Buffer
var ming_keys = ming.generateKeys();

//获取小明的素数
var prime = ming.getPrime();
//获取小明的生成器
var generator = ming.getGenerator();

console.log('Prime: '+prime.toString('hex'));
console.log('Generator: '+generator.toString('hex'));

//xiaohong's keys:
var hong = crypto.createDiffieHellman(prime,generator);
var hong_keys = hong.generateKeys();

//exchange and generate secret:
var ming_secret = ming.computeSecret(hong_keys);
var hong_secret = hong.computeSecret(ming_keys);

//print secret:
console.log('Secret of Xiao Ming: '+ming_secret.toString('hex'));
console.log('Secret of Xiao Hong: '+hong_secret.toString('hex'));

