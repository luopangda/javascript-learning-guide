# 2019-12-15
脚手架工具的安装请看：[基于 npm + webpack + babel + react + antd 自己动手搭建脚手架工具](https://github.com/kurryluo/front-end-interview-guide/blob/master/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/%E5%9F%BA%E4%BA%8E%20npm%20%2B%20webpack%20%2B%20babel%20%2B%20react%20%2B%20antd%20%E8%87%AA%E5%B7%B1%E5%8A%A8%E6%89%8B%E6%90%AD%E5%BB%BA%E8%84%9A%E6%89%8B%E6%9E%B6%E5%B7%A5%E5%85%B7.md)

## 安装react-router-dom
之前的项目中没有路由（router），所以只能打开http://localhost:3000/这个界面，如果要打开想http://localhost:3000/two-columns，就得用到react-router-dom

react-router是与react配合使用的路由库，react-router提供多个包可以单独使用:

- react-router
- react-router-dom
- react-router-native
- react-router-config

react-router提供路由的核心功能，react-router-dom基于react-router提供了在浏览器运行环境下的一些功能，
例如Link组件和BrowserRouter组件。react-router-native同样基于react-router，提供了react-native运行环境下的一些功能。

这里我们只需要安装react-router-dom即可。

```
npm install react-router-dom --save
```

安装版本：
```
+ react-router-dom@5.1.2
```



静态路由：静态路由是将路由声明在一处，并在应用程序渲染前导入，这个react-router v1、v2、v3 使用的方式。

```
// 路由配置说明（你不用加载整个配置，
// 只需加载一个你想要的根路由，
// 也可以延迟加载这个配置）。
React.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
      <Route path="users" component={Users}>
        <Route path="/user/:userId" component={User}/>
      </Route>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.body)
```

动态路由:不需要将路由声明在一处，而是作为我们编写的react组件内容的一部分，Router组件就像div组件一样被使用，也就是在应用程序渲染时才发生路由。

React Router提供了三种类型的组件：
- router components，路由器组件：创建一个 history 对象
  - <BrowserRouter> ：高级组件，有一个响应请求的服务器情况下使用
  - <HashRouter> ：高级组件，使用的是静态文件的服务器情况下使用
- route components，路由组件
  - <Route>：作用是在location和path属性匹配时在此处渲染React组件。通过component、render和children三个属性来指向渲染组件，component属性通常指向一个现存的组件，render只有在需要传递参数给渲染组件时使用。如Route没有path，会一直与它最近的父级匹配
  - <Switch>：Switch不是必须的，用于将Route组件分组并选择一个与当前地址匹配的第一个Route
- navigation components，导航组件
  - <Link>：会在Html中创建一个a标签，to属性指向一个导航地址
  - <NavLink>
  - <Redirect>

React Router 的 Hooks：

- useHistory：操作 history 对象
- useLocation：操作 location 对象
- useParams：返回的是“键值对”对象，操作当前路由下的 match.params。
- useRouteMatch：代替Route去匹配URL，<Route>也有同样的功能，使用这个hooks的好处是不用渲染一个<Route>即可完成匹配。

三个重要的对象：

- match：match对象中包含了如何匹配URL的信息。
- history：history对象实现对session历史的管理。
- location：location属性代表应用程序现在在哪，你想去哪。

match、history和location对象都会在渲染Route组件时传入component、render和children指向的组件。

然后改造src文件夹中的index.js，如下：


```
import React from "react";
import ReactDom from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "./index.less";
// 加载图片
const image = require('./image.jpg');
// 原生代码开始
const Div = document.createElement("div");
Div.setAttribute("id", "root");
document.body.appendChild(Div);
// 原生代码结束

class Home extends React.Component{
    render(){
        return (
            <div>
                123
            </div>
        )
    }
}

class About extends React.Component{
    render(){
        return (
            <div>
                456
            </div>
        )
    }
}

class Users extends React.Component{
    render(){
        return (
           <div>
               789
           </div>
        )
    }
}


class App extends React.Component{
    render(){
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/users">Users</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/users">
                            <Users />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

ReactDom.render( <App/>,
    document.getElementById("root")
);

```


# 2019-12-25

## 安装Redux及相关组件

如果你不知道项目中是否需要Redux，那就是不需要。——kurryluo

Redux 的适用场景：多交互、多数据源，简单的任务单纯写 React 即可搞定。

Redux 官网：[https://redux.js.org/](https://redux.js.org/)，Redux 包含三个组件，store、action、reducers，他们三者和组件的关系如下：

![](http://www.ruanyifeng.com/blogimg/asset/2016/bg2016091802.jpg)

官方文档也对这三个东西做出了解释：The whole state of your app is stored in an object tree inside a single store. The only way to change the state tree is to emit an action, an object describing what happened. To specify how the actions transform the state tree, you write pure reducers.

安装Redux及相关组件
```
npm install redux --save-dev
npm install --save-dev react-redux
npm install --save-dev redux redux-thunk redux-logger 
npm install --save-dev redux-immutablejs immutable // 用于生成不可变对象，涉及知识点：深复制和浅复制
```

安装版本：

```
+ redux@4.0.5
+ react-redux@7.1.3
+ redux-thunk@2.3.0
+ redux-logger@3.0.6
+ redux-immutablejs@0.0.8
+ immutable@4.0.0-rc.12
```

在 src 文件夹下新建一个文件夹，命名为redux，在redux文件夹下新建四个子文件夹：actions、configureStore、constants、reducers

当前的文件结构如下

```
├── build 
├──├──webpack.base.conf.js
├──├──webpack.dev.conf.js
├──├──webpack.prod.conf.js
├── node_modules
├── public
├── src
├──├──components
├──├──redux
├──├──├──actions
├──├──├──configureStore
├──├──├──constants
├──├──├──reducers
├──├──index.js
├──├──index.less
├── .babelrc
├── .gitignore
├── package.json
├── README.md
```
在目录src/redux/constants下新建index.js，内容如下

```
export const EXAMPLE = 'EXAMPLE';
```
在目录src/redux/reducers下新建index.js，内容如下：

```
import { combineReducers } from 'redux'
import { createReducer } from 'redux-immutablejs'
import { fromJS } from 'immutable'
import {
  EXAMPLE
} from '../constants'

const example = createReducer(fromJS({
  title: "项目构建成功"
}),{
  [EXAMPLE]: (state, action) => {
    return state.merge({
          title: action.payload.title
    })
  }
})

const rootReducer = combineReducers({
  example
})

export default rootReducer
```

在目录src/redux/configureStore下新建index.js，内容如下：

```
import {
    createStore,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import createLogger from 'redux-logger';

const logger = createLogger({
    level: 'info',
    logger: console,
    collapsed: true
})
const createStoreWithMiddleware = process.env.NODE_ENV === 'development' ? applyMiddleware(
    thunk, logger
)(createStore) : applyMiddleware(
    thunk
)(createStore)

export default configureStore(initialState) {
    const store = createStoreWithMiddleware(reducer, initialState)
    return store
}
```

在src/redux/actions目录下新建example.js, 内容如下：

```
import {
  EXAMPLE
} from '../constants'

function example(val){
  return {
    type: EXAMPLE,
    payload: {
      title: val
    }
  }
}

export function changeTitle(val){
  return (dispatch, getState) => {
    dispatch(example(val))
  }
}
```

修改入口文件，即src文件夹中的index.js，内容如下：

```
import React from "react";
import ReactDom from "react-dom";
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "./index.less";
import OneColumn from "./components";

// 原生代码开始
const Div = document.createElement("div");
Div.setAttribute("id", "root");
document.body.appendChild(Div);
// 原生代码结束

const initial = {
};
const store = configureStore(initial);

class App extends React.Component{
    render(){
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/one-column">
                            <OneColumn />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

ReactDom.render( <Provider store={store}> <App/> </Provider>,
    document.getElementById("root")
);

```

入口文件干了两个事情：
1、创建一个 redux 的 store；
2、将 store 传递给 react。



### redux 和react-router连用

安装 react-router-redux：

```
npm install --save-dev react-router-redux
```

版本：

```
+ react-router-redux@4.0.8

```
