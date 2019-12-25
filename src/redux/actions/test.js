import { TEST } from '../constants';

// 组装action，请求访问连接。
// 依靠中间件api.js
function request(api,type,data={}) {
    return {
        [TEST]: {
            successType:type,
            endpoint: api,
            data:data
        }
    }
}

export function test() {
    return {'type': 'TEST', 'showId':1}
}

export function asyTest() {
    return (dispatch, getState) => {
        dispatch(request('data','ASY',{key: 1}))
    }
}
