;(function(global) {
	//开启严格模式
	"use strict";
	//构造函数定义一个类    传参数
	function Scroll(options) {
		//some code
		  var defaultSettings = {
                text:"临兵斗者皆阵列前行乾坤震巽坎离艮兑",
				fontsize:50,
				fontcolor:"red",
				fontstyle:"华文行楷",
				time:50,
				ifflur:true
    };
         this.set1=Object.assign(defaultSettings,options)
	};

	//原型上提供方法
	Scroll.prototype = {
		//定义方法
	
		show: function() {
			//some code
			
			console.log(this.set1)
            const set=this.set1;
			const width = document.getElementById("myCanvas").width = screen.availWidth;
			const height = document.getElementById("myCanvas").height = screen.availHeight;
			const ctx = document.getElementById("myCanvas").getContext("2d");
			//因为后面一个字50px,所以用总宽度除以50恰好够用,不至于浪费资源
			if(set.ifflur){
				var dtext=set.text+"                                                "
			}else{
				var dtext=set.text
			}
				
			
			
			const str = dtext.split("");
			const size = set.fontsize;
			let fsize = size + "px"
			let fcolor=set.fontcolor
			const fstyle = set.fontstyle
			const windowWide = 8888;
			let time = set.time;
			const arr = Array(Math.ceil(width / size)).fill(0);
			//这里为了不出现下坠的视觉效果，所以加了很多空格。
			

			function rain() {
				ctx.fillStyle = "rgba(0,0,0,0.05)";
				ctx.fillRect(0, 0, width, height);
				ctx.fillStyle = fcolor;

				ctx.font = fsize + " " + fstyle;
				arr.forEach(function(value, index) {

					ctx.fillText(str[Math.floor(Math.random() * str.length)], index * size, value + size);
					arr[index] = value >= height || value > windowWide * Math.random() ? 0 : value + size;
				});
			}

			setInterval(rain, time);
		}
	};

	if(typeof module !== 'undefined' && module.exports) { //兼容CommonJs规范 
		module.exports = Scroll;
	} else if(typeof define === 'function') { //兼容AMD/CMD规范
		define(function() {
			return Scroll
		})
	} else { //注册全局变量，兼容直接使用script标签引入插件
		global.Scroll = Scroll;
	}
})(this);