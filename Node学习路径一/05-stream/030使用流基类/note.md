> Node的技术流类提供模版来解决流最在行的这类问题。
> 例如stream.Transform最适合解析数据，stream.Readable是对低级API的完美封装。

Node的流基类能够被用作新模块或者子类的起点。理解它们处理什么问题和如何正确地继承它们很重要。

问题：
想通过创建一个流API解决问题，但是不确定用哪个流的基类

解决方案：
决定哪个基类最适合解决手头上的问题，使用Object.prototype.call和util.inherits继承它。


所有的流基类都可以在流核心模块中找到。5个基础类为 

Readable    想要使用流API封装一个底层的IO数据源
Writable    想要从一个程序中获取输出到其他地方使用，或者在程序中发送数据
Duplex      想要以某种方式鸡西解析数据并且修改它
Transform   想要包装一个数据源，并且它也可以接受消息
PassThrough 想要从流中提取数据，从测试到分析都不修改它


从根本上说，流不是可读就是可写的，但是双工流都可以。这是很有意义的，考虑一下IO接口的行为，如一个网络链接是可读并且可写的。假设ssh只能发送数据，那么它就不是特别有用的。

转换流是基于双工流的，但是也一定程序上改变了数据。一些Node内置的模块使用了转换流，因此从根本上来说很重要。


Node包含一个工具类方法 util.inherits 可以用来替代Object.create~



### 总结

通过这个技巧可以看如何使用Node流基类创建自己的流实现。
这里涉及使用util.inherits来创建类，而且使用.call调用原构造器。