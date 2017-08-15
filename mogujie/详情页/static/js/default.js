	//获取元素
	var move = document.getElementById('move');
	var show = document.getElementById('show');
	var bigImg = document.getElementById('bigImg');
	var list = document.getElementById('list');
	var smallImg = document.getElementById('smallImg');
	// 鼠标移入时元素显示
	show.onmouseover = function(){
		move.style.display = 'block';
		bigShow.style.display = 'block';
	}

	// 鼠标移出元素隐藏
	show.onmouseout = function(){
		move.style.display = 'none';
		bigShow.style.display = 'none';
	}
		// 设置show的鼠标移动事件
	show.onmousemove = function(e){

		// 计算move元素的left和top的值
		var newLeft = e.pageX - show.offsetLeft - move.offsetWidth/2;
		// console.log(newLeft);
		var newTop = e.pageY - show.offsetTop - move.offsetHeight/2;

		// 判定水平移动的最大值
		if(newLeft>=(show.offsetWidth-move.offsetWidth-1)){
			// 赋值最大值
			newLeft = show.offsetWidth - move.offsetWidth-1;
		}
		// 水平方向左侧最小值
		if(newLeft<=0){
			newLeft = 0
		}

		// 垂直方向最大值
		if(newTop>=(show.offsetHeight-move.offsetHeight-1)){
			newTop = show.offsetHeight - move.offsetHeight-1;
		}
		// 垂直方向的最小值
		if(newTop<=0){
			newTop = 0;
		}

		// 赋值
		move.style.left = newLeft+'px';
		move.style.top = newTop+'px';

		// 右侧大图的偏移left
		// 左侧滑块的偏移left / show.width = 大图的left / 大图自身的宽度
		var newBigLeft = bigImg.offsetWidth*newLeft/show.offsetWidth;
		var newBigTop = bigImg.offsetHeight*newTop/show.offsetHeight;

		// 赋值
		bigImg.style.left = -newBigLeft+'px';
		bigImg.style.top = -newBigTop+'px';
	}

	// // 获取所有的图片li列表
	var lis = list.children;
	console.log(lis);
	for(var i=0;i<lis.length;i++){
		lis[i].onclick = function(){
		
			// 将图片的地址赋值给左侧的show
			smallImg.src = this.src;
			// 右侧大图 bigImg
			bigImg.src = this.src;
		}
	}