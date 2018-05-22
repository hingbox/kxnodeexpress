/**
 * User: hingbox@163.com
 * Date: 2018/5/22
 * Time: 14:01
 * Version:${1.0}
 */
// CRUD SQL语句
var user = {
    insert:'INSERT INTO statistics(current_system,down_load_num,start_up_num,install_num,mac_address,create_date) VALUES (?,?,?,?,?,?)',
    //update:'update t_user set name=?, age=? where id=?',
    //delete: 'delete from t_user where id=?',
    //queryById: 'select * from t_user where id=?',
    queryAll: 'select * from t_user'
};
module.exports = user;
