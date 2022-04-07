//倒计时
function time() {
    //获取当前时间
    var now_time = new Date();
    //创建指定时间   注意月份从0月开始  要比指定月份少一个月
    var time = new Date(2022, 4, 1);
    //接收时间差  得到毫秒数
    var count_down = time - now_time;
    //把毫秒转换为天 时  分 秒  Math.floo向下取整
    var day = Math.floor(count_down / 1000 / 60 / 60 / 24);
    day = day < 10 ? '0' + day : day
    var h = Math.floor(count_down / 1000 / 60 / 60 % 24);
    h = h < 10 ? '0' + h : h

    var m = Math.floor(count_down / 1000 / 60 % 60);
    m = m < 10 ? '0' + m : m

    var s = Math.floor(count_down / 1000 % 60);
    s = s < 10 ? '0' + s : s

    var str = '倒计时：' + day + '天' + h + '时' + m + '分' + s + '秒';
    //拼接入页面
    var div_ = document.getElementById('time');
    div_.innerText = str;
}
time();
setInterval(time, 1000);