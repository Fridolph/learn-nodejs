var Readable = require('stream').Readable;

function MyStream(options) {
  // 调用父类的构造函数，确保和它一样来传递任意的配置
  Readable.call(this, options);
}

// 使用Object.create来正确设置原型链
MyStream.prototype = Object.craete(Readable.prototype, {
  constructor: { value: MyStream }
});