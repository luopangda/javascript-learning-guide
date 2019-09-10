javascript 从一个简单的输入验证器发展成为一门强大的编程语言。

## 历史
以前我们输入一个表单，点击完提交后，服务器发送反馈给我们。比如填写姓名的时候，我们在前端不能限定人们只能输入汉字，需要服务器告诉我们：你丫错了，又输入数字了！！

Netscape 公司决定着手开发一种客户端语言，用来处理简单的验证，命名为 livescript, 后来发展成为我们的 javascript 。

那么为什么叫 javascript ？ 而不叫“张三script”、“李四script”, 导致现在有的人还以为 javescript 是 java 的小弟。请看下面分解：

在 1995 年 Sun 公司将 Oak 语言改名为 Java ，正式向市场推出。 Sun 公司大肆宣传，许诺这种语言可以"一次编写，到处运行"（ Write Once , Run Anywhere ），它看上去很可能成为未来的主宰。历史证明，到现在 java 只是处于重要的位置，编程语言百家争鸣。

总之， java 当时火得一塌糊涂，Netscape 公司内部的高管一个个像着魔一样，相信 Java 是世界上最好的语言。于是，让 livescript 改名为 javascript，有点像今天的蹭热点。

后来 javascript 发展成三个不同的版本： NetScape Navigator 中的 Javascript、Internet Explorer 中的 Jscript 以及 ScriptEase 中的 CEnvi。三足鼎立的局面缺乏标准，随着业界不断的前进，它们之间的矛盾日益加剧，急需标准化。

1997 年，有个协会叫做欧洲计算机制造商协会（ECMA，European Computer Manufacturers Association）接受了 Javascript 1.1 版本的建议，然后这个协会指定第 39 号技术委员会（TC39, Technical Committee #39）负责将 Javascript 标准化。

标准化关乎各个公司的利益，所以这个 39 号技术委员会的成员不外乎这几个主要公司的人：Netscape、Sun、微软、Borland 以及其他关心脚本语言的几个公司。

经过数月的讨论和修改，终于完成了代号为 “ECMA-262”的新脚本语言——ECMAScript。第二年，ISO/IEC 也采用了这个标准，ISO 被大家所熟知，就是国家标准化组织（International Standardization Organization），而 IEC 指的是国际电工技术委员会（International Electrotechnical Commission） 。

从此，世界各地的浏览器开发上都在这个标准的基础上做文章。目前，javascript 这个名称还在用， ECMAScript 则更多出现在标准化文件上，比如 ES6 表示的就是国际标准中的 ECMAScript 6, 它于 2015 年通过。

## 实现

Javascript 的实现需要三个部分组成：分别是 ECMAScript（核心）、DOM（Document Object Model，文档对象模型）、BOM（Browser Object Model，浏览器对象模型）。

在厘清他们之间关系之前，我们需要明白的是：

- ECMAScript 和 Web 浏览器没有任何依赖关系，Web 浏览器仅仅是实现 ECMAscript 的宿主环境之一，其他环境还有 Node （服务端）、Adnode Flash。
- DOM 是 W3C 的标准（所有浏览器公共遵守的标准），提供了访问和操作网页内容的方法和接口。
- BOM 是各个浏览器厂商根据 DOM 在各自浏览器上的实现，提供了与浏览器交互的方法和接口。
- window 是 BOM 对象，而非 JavaScript 对象，不过恰好为 EMCAScript 中所定义的 Global 对象。

ECMAScript 可以操作 BOM 中的 window 对象，而 window 对象中包含了 document （DOM 的根节点）, 那么 ECMAScript 就可以间接地操作 DOM。从而，ECMAScript 可以操作浏览器本身以及浏览器读取到的文档结构。

由于每个公司的浏览器对 ECMAScript 的兼容，以及对BOM 、DOM 的支持程度不同，很多语法特性、接口兼容程度不尽相同。所以，前端工程师面临着巨大的兼容性挑战，这里给出一个可以查看各个浏览器兼容情况的工具 [canIuse](https://caniuse.com/)，可以查询 CSS、HTML、JS、JS API 等等在各个浏览器上的兼容情况。

![can i use](../../asset/image/can%20i%20use.jpg)