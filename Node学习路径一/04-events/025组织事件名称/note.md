> 有些项目中存在着太多的事件，这个技巧展示了如何处理由于写错事件名造成的缺陷

问题：
现在， 对项目中事件失去控制，并且担心太容易写错一个事件名造成一个难以检查的bug

解决方案：
用一个对象来存放所有的事件名，这样在项目中创建了一个统一存放事件的地方

讨论：
很难跟踪整个项目凌乱的事件名，管理它的一个方法是将每个事件名称保持放在一个地方。



虽然EventEmitter是Node的标准库的一部分，可以优雅地解决很多问题，但它可以导致很多大型项目的缺陷，人们可能会忘记某一特定事件的名称的来源。
解决这个问题的方法是，避免用字符串来作为事件名。相反，一个对象可以被用于引用该事件名称的字符串的属性。

