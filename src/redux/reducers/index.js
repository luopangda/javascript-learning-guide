import { combineReducers } from 'redux'
import { createReducer } from 'redux-immutablejs'
import { fromJS } from 'immutable'
import {
    TEST
} from '../constants'
// 初始化数据,example 是一个 Map 类型
const example = createReducer(fromJS({
    title: "项目构建成功"
}),{
    [TEST]: (state, action) => {
        return state.merge({
            title: action.title
        })
    }
});

const rootReducer = combineReducers({
    example
});

export default rootReducer
