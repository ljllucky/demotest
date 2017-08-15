/*全选全不选反选*/
$(function() {

	$('input').eq(0).click(function(event) {
		$(' .tr_3 :checkbox').each(function() {
			if(this.checked){
				this.checked = false;
			}else{
				this.checked = true;
			}
					
			});
				
		});
	});
/*添加商品*/
$('.account .addshop').click(function(event) {
	
	var res = $('.tr_3').eq(0).clone(true);
	console.log(res);
	$(res).appendTo($('tbody'))	
		

	});
/*删除商品*/
$(document).on('click','.tr_3 .operate',function(event){
	console.log(768);
	//删除当前一行
	
	$(this).parent().remove();
	var num =$('.tr_3').length;
	$('first').html(num);
});
/*数量加*/
$('.tr_3 .add').click(function(){
	//获取当前件数
	var number = $(this).prev().html();
	number++;
	//新件数
	$(this).prev().html(number);
	//单价
	var singlePrice = $(this).parent().prev().find('.money').html();
	var money = $(this).parent().next().find('.qian');
	//总价
	var xiaoji = (Math.floor(number)*singlePrice).toFixed(2);
	money.html(xiaoji);
	//重新赋值总价
	$(this).parent().next().find('.subtotal').html();

	var tPrice = $('.t-price').html();

	tPrice = Number(tPrice) + Number(singlePrice);
	
	tPrices = Number(tPrice).toFixed(2);
	
	$('.t-price').html(tPrices);
	
});
/*数量减*/
$('.tr_3 .sub').click(function(){
	//获取当前件数
	var number = $(this).next().html();
	number--;
	if(number<=1){
		number = 1;
	}
	//新件数
	$(this).next().html(number);
	//单价
	
	var singlePrice = $(this).parent().prev().find('.money').html();
	var money = $(this).parent().next().find('.qian');

	//总价
	var xiaoji = (Math.floor(number)*singlePrice).toFixed(2);
	money.html(xiaoji);
	//重新赋值总价
	$(this).parent().next().find('.subtotal').html();
	var tPrice = $('.t-price').html();

	tPrice = Number(tPrice) - Number(singlePrice);
	if(tPrice<=0){
		tPrice = 0;
	}
	tPrices = Number(tPrice).toFixed(2);
	
	$('.t-price').html(tPrices);

});
//三级联动
	var pro = document.getElementById('pro');
	var city = document.getElementById('city');
	var county = document.getElementById('county');

	// 将省份的信息遍历出来
	var pro_str = '<option value="">请选择</option>';

	// 遍历address[0]对应的省份，拼接字符串
	for(var i in address[0]){
		pro_str += '<option value="0,'+i+'">'+address[0][i]+'</option>';
	}

	// 给pro进行赋值操作
	pro.innerHTML = pro_str;

	// 设置pro省份的onchange事件
	pro.onchange = function(){

		// 对于县都要隐藏
		county.style.display = 'none';

		// 如果当前用户选择的是请选择
		if(!this.value){
			// 隐藏城市
			city.style.display = 'none';

			// 直接终止程序
			return;
		}

		// 让市显示
		city.style.display = 'inline-block';


		// 定义城市的初始化字符串
		var city_str = '<option value="">请选择</option>';

		// 遍历对应的市
		for(var i in address[this.value]){
			city_str += '<option value="'+this.value+','+i+'">'+address[this.value][i]+'</option>';
		}

		// console.log(city_str);
		// 给城市赋值
		city.innerHTML = city_str;
	}

	// 城市city的onchange事件
	city.onchange = function(){
	
		// 判断用户单击的是否是请选择
		if(!this.value){
			// 将县隐藏
			county.style.display = 'none';

			// 终止执行程序
			return;
		}


		// 设置县显示
		county.style.display = 'inline-block';


		// 定义县的初始化字符串
		var county_str = '<option value="">请选择</option>';

		// 遍历县
		for(var i in address[this.value]){
			county_str += '<option value="">'+address[this.value][i]+'</option>';
		}

		// 赋值
		county.innerHTML = county_str;
	}