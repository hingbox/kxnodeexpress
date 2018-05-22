/**
 * User: hingbox@163.com
 * Date: 2018/5/22
 * Time: 14:03
 * Version:${1.0}
 */

module.exports = {
    extend: function(target, source, flag) {
        for(var key in source) {
            if(source.hasOwnProperty(key))
                flag ?
                    (target[key] = source[key]) :
                    (target[key] === void 0 && (target[key] = source[key]));
        }
        return target;
    }
}