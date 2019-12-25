import React, { Component } from 'react';
import { connect } from 'react-redux';
import { test, asyTest } from '../redux/actions/test.js'
import { Button } from 'antd'
import "./index.less"
class Test extends React.Component{
    constructor(props, context) {
        super(props, context);
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <input type='text' name='name' value={this.props.data.example.size} />
                <Button onClick={()=>this.props.test()}>click_01</Button>
                <button onClick={()=>this.props.asyTest()}>click_02</button>
            </div>
        );
    }
}

export default connect(mapStateToProps, {test, asyTest})(Test);

// 从rootReducer的state取出数据，通过connect绑定到Test上

//这个是connect()的源码结构，可接收四个参数，我们此处只用到mapStateToProps与mapDispatchToProps，第一个参数接收一个函数，此函数作用是将redux的state绑定到react的props中，用法如上；第二个参数可以是一个函数也可以是一个对象，作用是将我们自定义的函数封装入dispatch()中，然后绑定到react的props中，我们demo里绑定了test()与asyTest()两个函数。
function mapStateToProps(state){
    console.log(state)
    return {data:state};
}
