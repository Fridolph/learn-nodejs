> Node能够轻松在同一个进程创建TCP服务端和客户端，这是一个测试网络应用程序特别有用的方法。

问题：
想要测试TCP服务器

解决方案：
使用net.connect连接服务端端口

由于TCP要和UDP的端口工作原理，完全有可能在一个进程中创建多服务端和客户端。
举个例，一个Node和HTTP服务也能够运行一个简单的TCP服务在另一个端口允许远程管理连接。


---

直接跳到213页 网络应用去了