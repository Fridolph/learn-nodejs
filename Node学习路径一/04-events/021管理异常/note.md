# 异常处理

尽管大多数的时间处理起来差不多，但error事件比较特殊。
我们将使用两种异常处理方法，一种是通过对error事件的监听器，还有一个是通过domain来收集在这个domain之中的EventEmitter实例产生的异常。

## 管理异常

> 通过EventEmitter来处理异常需要遵守它的游戏规则。

问题：
正在使用EventEmitter，并且在异常发生时希望能够优雅地处理，但它却不断地抛出异常。

解决方案：
要在异常发生时阻止异常抛出，只要在error事件上添加一个监听器，任何从EventEmitter继承的自定义类，或者标准类都可以通过这个方法来解决。

