//引入crypto模块
const crypto = require('crypto');

//构建AES加密函数,返回数据（包含加密内容和未加密内容）
//data需要加密的数据
//key用于派生密钥和初始化向量（IV），其值为'latin1'或Buffer
function aesEncrypt(data,key){
    //构建aes192算法的cipher对象
    const cipher = crypto.createCipher('aes192',key);
    //更新数据的cipher对象，输入编码为'utf8'，输出编码为'hex'
    var crypted = cipher.update(data,'utf8','hex');
    //获取未被加密内容
    crypted += cipher.final('hex');
    //返回数据
    return crypted;
}

//构建AES解密函数,返回数据（包含已解密和未解密）
//encrypted需要解密的数据
//key为密钥
function aesDecrypt(encrypted,key){
    //构建aes192算法的decipher对象
    const decipher = crypto.createDecipher('aes192',key);
    //更新数据的decipher对象，输入编码为'hex'，输出编码为'utf8'
    var decrypted = decipher.update(encrypted,'hex','utf8');
    //获取未被解密内容
    decrypted += decipher.final('utf8');
    //返回数据
    return decrypted;
}

//测试
var data = 'Hello, this is a secret message!';
var key = 'Password!';
var encrypted = aesEncrypt(data,key);
var decrypted = aesDecrypt(encrypted,key);

console.log('Plain text: '+data);
console.log('Encrypted text: '+encrypted);
console.log('Decrypted text: '+decrypted);