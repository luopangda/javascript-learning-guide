// 利用Script标签实现跨域，JSONP

function jsonp(url, jsonpCallback, success) {
    // jsonpCallbackName 绑定到全局，
    let script = document.createElement('script');
    script.url = url;
    script.async = true;
    script.type = 'text/javascript';
    window[jsonpCallback] = function (data) {
        success && success(data)
    };
    document.body.appendChild(script);
}
// 可以避免写很多callback，只需要一个callback就可以了。每次调用jsonp都会替换callback成success这个函数。
jsonp('http://', 'callback', (data)=>{
    // 获取成功以后的回调函数
    console.log(data)
});


// postMassage的方式

// 发送消息
window.parent.postMessage('message', 'http://test.com');

// 接收消息
let mc = new MessageChannel();
mc.addEventListener('message', event =>{
    let origin = event.origin || event.origin
});

