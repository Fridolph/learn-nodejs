/* 导出模块 */
function MyClass() {

}

Myclass.prototype = {
  method: function() {
    return 'Hello'
  }
};

var myClass = new MyClass();

module.exports = myClass;
