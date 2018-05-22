/**
 * User: hingbox@163.com
 * Date: 2018/5/22
 * Time: 14:01
 * Version:${1.0}
 */
// CRUD SQL语句
var user = {
    insert:'INSERT INTO t_user(name, age) VALUES (?,?)',
    update:'update t_user set name=?, age=? where id=?',
    delete: 'delete from t_user where id=?',
    queryById: 'select * from t_user where id=?',
    queryAll: 'select * from t_user'
};

module.exports = user;
