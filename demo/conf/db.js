/**
 * User: hingbox@163.com
 * Date: 2018/5/22
 * Time: 14:01
 * Version:${1.0}
 */
// MySQL数据库联接配置
module.exports = {
    mysql: {
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database:'test', // 前面建的user表位于这个数据库中
        port: 3306
    }
};