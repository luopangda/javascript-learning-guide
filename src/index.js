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
import Test from "./components";

// 原生代码开始
const Div = document.createElement("div");
Div.setAttribute("id", "root");
document.body.appendChild(Div);
// 原生代码结束

const initial = {
    number: 1
};
const store = configureStore(initial);

class App extends React.Component{
    render(){
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/test">
                            <Test />
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
