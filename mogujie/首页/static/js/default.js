//电梯导航
$(function() {
// 获取电梯的高度	
var h = $('.lift').height();
// 设置电梯的上外边距，实现垂直居中
$('.lift').css('margin-top',-1 * h / 2);
 // 视口的高度
var vpHeight = $(window).height();
var halfVpHeight = vpHeight/2;
// 获取各个栏目相对于文档顶部的距离
var floor1Top = $('.product1').offset().top;
var floor2Top = $('.product2').offset().top;
var floor3Top = $('.product3').offset().top;
var floor4Top = $('.product4').offset().top;
var floor5Top = $('.product5').offset().top;
var floor6Top = $('.product6').offset().top;
// 为窗口添加滚动事件响应函数 
function onScroll() {
var st = $(this).scrollTop();
// 求出栏目与视口顶部之间的距离tx
var t1 = floor1Top - st;
var t2 = floor2Top - st;
var t3 = floor3Top - st;
var t4 = floor4Top - st;
var t5 = floor5Top - st;
var t6 = floor6Top - st;
// 判断栏目1与视口顶部之间的距离t是否小于或等于视口高度的一半，
// 如果是，那么说明该栏目的顶部已经到达或超过视口中央位置，
// 那么就把电梯显示出来
if (t1 <= halfVpHeight) {
$('.lift').stop().fadeIn();
$('.lift li').eq(0).addClass('curr').siblings().removeClass('curr');
}else {
$('.lift').stop().fadeOut();
}
if (t2 <= halfVpHeight) {
$('.lift li').eq(1).addClass('curr').siblings().removeClass('curr');
}
if (t3 <= halfVpHeight) {
$('.lift li').eq(2).addClass('curr').siblings().removeClass('curr');
}
if (t4 <= halfVpHeight) {
$('.lift li').eq(3).addClass('curr').siblings().removeClass('curr');
}
if (t5 <= halfVpHeight) {
$('.lift li').eq(4).addClass('curr').siblings().removeClass('curr');
}
if (t6 <= halfVpHeight) {
$('.lift li').eq(5).addClass('curr').siblings().removeClass('curr');
}
}
$(window).scroll(onScroll);
$('.lift li').click(function(event) {
		
$(window).off('scroll');

$(this).addClass('curr').siblings().removeClass('curr');
// 判断当前被单击的按钮是不是第一个li，如果是，那么通过动画滚屏
if ($(this).index() === 0) {
$('html,body').stop().animate({
'scrollTop':floor1Top
},800,function() {
$(window).scroll(onScroll);
});
}
// 后面的若干if类似于上面的，是在判断其余楼层
if ($(this).index() === 1) {
$('html,body').stop().animate({
'scrollTop':floor2Top
},800,function() {
$(window).scroll(onScroll);
});
}
if ($(this).index() === 2) {
$('html,body').stop().animate({
'scrollTop':floor3Top
},800,function() {
$(window).scroll(onScroll);
});
}
if ($(this).index() === 3) {
$('html,body').stop().animate({
'scrollTop':floor4Top
},800,function() {
$(window).scroll(onScroll);
});
}
if ($(this).index() === 4) {
$('html,body').stop().animate({
'scrollTop':floor5Top
},800,function() {
$(window).scroll(onScroll);
});
}
if ($(this).index() === 5) {
$('html,body').stop().animate({
'scrollTop':floor6Top
},800,function() {
$(window).scroll(onScroll);
});
}
if ($(this).index() === 6) {
$('html,body').stop().animate({
'scrollTop':floor7Top
},800,function() {
$(window).scroll(onScroll);
});
}
});

});
// 广告栏
var ball = document.getElementById('ball');
var close =document.getElementById('close');
var run;
var stepX = 1;
var stepY = 1;
function advRun(){
	if(run){
		return;
	}
  run=setInterval(function(){

var cW = document.documentElement.clientWidth;
var cH = document.documentElement.clientHeight;
var newLeft = ball.offsetLeft + stepX;
var newTop = ball.offsetTop + stepY;
//判断边界
if(newLeft >= (cW-ball.offsetWidth)){
	newLeft = cW - ball.offsetWidth;
	stepX *= -1;
}
if(newLeft<=0){
	newLeft = 0;
	stepX *= -1;

}

if(newTop >= (cH-ball.offsetHeight)){
	newTop = cH - ball.offsetHeight;
	stepY *= -1;
}
if(newTop<=0){
	newTop = 0;
	stepY*=-1;
}

ball.style.left = newLeft+'px';
ball.style.top = newTop+'px';
},5);
}
advRun();

ball.onmouseover = function(){
     clearInterval(run);
     run = undefined;
}
ball.onmouseout = function(){
         advRun();
}
close.onclick = function(){
	ball.style.display = 'none';

}

//吸顶部分
var xd = document.getElementsByClassName("xd");
	// 滚动事件
	window.onscroll = function(){
		var sT = document.body.scrollTop||document.documentElement.scrollTop;		
        console.log(sT);
        if (sT >= 350) {
            xd[0].style.display = 'block';
        } else {
            xd[0].style.display = 'none';
        }
	}
//轮播图部分
	var show = document.getElementById('show');
	var left = document.getElementById('left');
	var right = document.getElementById('right');
	var lis = show.children[0].children;
	var lists = document.getElementById('circlelist').children[0].children;
	var index = 0;
	var bgArr = ['#80DDC8','#C53D31','#ADD2EF','#FE85A6','#FEB8B0']
	var run;
	function autoRun(){
		// 定时器叠加问题：多个定时器同时触发了
		// 定时器一次只启动一个
		if(run){
			// 终止程序
			return;
		}

		// 设置定时器
		run = setInterval(function(){
			lis[index].removeAttribute('class');
			lists[index].removeAttribute('class');
			index++;
			if(index==lis.length){
				index = 0;
			}
			slideshow.style.background = bgArr[index];
			lis[index].setAttribute('class','active');
			lists[index].setAttribute('class','listactive');
		},2000);
	}
	autoRun();
	//show容器的鼠标移入和移出事件	
	show.onmouseover = function(){
		clearInterval(run);
		run = undefined;
		left.style.display = 'block';
		right.style.display = 'block';
	}
	show.onmouseout = function(){
		autoRun();
		left.style.display = 'none';
		right.style.display = 'none';
	}
	//左右箭头的移入移出事件
	left.onmouseover = function(){
		this.style.background = 'rgba(0,0,0,0.6)';
	}
	left.onmouseout = function(){
		this.style.background = 'rgba(0,0,0,0.1)';
	}
	right.onmouseover = function(){
		this.style.background = 'rgba(0,0,0,0.6)';
	}
	right.onmouseout = function(){
		this.style.background = 'rgba(0,0,0,0.1)';
	}
	//左右箭头的单击事件
	left.onclick = function(){
		lis[index].removeAttribute('class');
		lists[index].removeAttribute('class');
		index--;
		if(index<0){
			index = lis.length - 1;
		}

		lis[index].setAttribute('class','active');
		lists[index].setAttribute('class','listactive');
	}
	right.onclick = function(){
		lis[index].removeAttribute('class');
		lists[index].removeAttribute('class');
		index++;
		if(index==lis.length){
			index = 0;
		}
		lis[index].setAttribute('class','active');
		lists[index].setAttribute('class','listactive');
	}
	//下面的小图标
	for(var i=0;i<lists.length;i++){
		lists[i].setAttribute('data-index',i);			
		lists[i].onmouseover = function(){
			lis[index].removeAttribute('class');
			lists[index].removeAttribute('class');
			index = this.getAttribute('data-index');
			lis[index].setAttribute('class','active');
			lists[index].setAttribute('class','listactive');
		}
	}
//二级菜单
$(function() {
	$('.nav_list').hover(function() {
        $('.nav_menu').stop().fadeIn(500);
    
    }, function() {
        $('.nav_menu').stop().fadeOut(500);

    });
});

