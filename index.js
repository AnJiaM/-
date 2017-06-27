window.onload = function () {
    var but = document.getElementById('but');
    var cav = document.getElementById('caver');
    var close = document.getElementById('close');
    var box = document.getElementById('box');
    var top=document.getElementById('top');
    //   显示/隐藏
    but.onclick = function () {
        cav.style.display = "block";
        box.style.display = 'block';
    }
    close.onclick = function () {
        cav.style.display = 'none';
        box.style.display='none';
    }


    //  拖拽
    box.onmousedown = function (e) {
        e = e || window.event; //为了兼容IE所以这样写
        var topX = e.clientX - box.offsetLeft; //盒子中的X坐标点
        var topY = e.clientY - box.offsetTop; //盒子中的Y坐标点
        console.log(topX);
        console.log(topY);
        document.onmousemove = function (e) {
            e = e || window.event;
            var x = e.clientX - topX; //盒子外的x坐标点
            var y = e.clientY - topY; //盒子外的Y坐标点
            box.style.left = (x+200) + 'px'; //得到盒子外的左边的宽
            box.style.top = (y-95) + 'px';  //得到盒子外的上面的高度
            // 为什么要加200 是因为样式设置了margin-left：-200px；
        }
    }
    top.onmouseup = function () {
        document.onmousemove = null;
        // 鼠标抬起 清除鼠标移动的
    }
}