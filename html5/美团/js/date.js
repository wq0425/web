var date = (function($){
	var initDate = {
		get:function(m,d){
			return m+'-'+d
		},
		set:function(y,m,d){
			return new Date(y,m,d);
		}
	};
	var dateDom = function(obj){
		var num = obj.num;
		//入住日期  10-18
		var s = obj.start.split('-'),
			sm = s[0]-1,
			sd = s[1];
		//离店日期 10-19
		var e = obj.end.split('-'),
			em = e[0]-1,
			ed = e[1];
		var index = 0;
		for(var i=0;i<num;i++){
			$('.date-section').append(sethtml(i));
		}
		function sethtml(a){
			//当前月日历
			var cur = new Date(),
				m1 = cur.getMonth(),
				m = cur.getMonth()+a,
				y = cur.getFullYear(),
				d = cur.getDate(),
				//当前月第一天是周几s
				dates = new Date(y,m,1).getDay(),
				//当前月最后一天是几号
				days = new Date(y,m+1,0).getDate();
			var cur1 = new Date(y,m);
			var htmlstr = `<h3>${cur1.getFullYear()}年${cur1.getMonth()+1}月</h3><ol>`;
			//补空格
			for(var i=0;i<dates;i++){
				htmlstr += "<li></li>"
			}
			
			//一号开始
			for(var j=1;j<=days;j++){
				if(m1 === m && j < d){
					//已经过去时间
					htmlstr += '<li class="disabled">'+j+'</li>';
				}else{
					index++;
					//之后时间
					//开始
					if(m == sm && j == sd){
						htmlstr += '<li class="start" data-id="'+index+'" date="'+(m+1)+'-'+j+'">'+j+'</li>';
					//离店
					}else if(m == em && j == ed){
						htmlstr += '<li class="end" data-id="'+index+'" date="'+(m+1)+'-'+j+'">'+j+'</li>';
					//中间
					}else{
						htmlstr += '<li class="now" data-id="'+index+'" date="'+(m+1)+'-'+j+'">'+j+'</li>';
					}
					
				}
			}
			htmlstr += '</ol>';
			return htmlstr;
		}

		//取中间的line
		var sid = $('.start').data('id'),
			eid = $('.end').data('id');
		var init = {
			start:sid,
			end:eid,
			startD:$('.start').attr('date'),
			endD:$('.end').attr('date')
		}
		$('.now').each(function(i,v){
			var cid = $(this).data('id');
			if(cid > sid && cid < eid){
				$(this).removeClass('now').addClass('line');
			}
		})
		//绑定点击事件
		$('.date-section').on('tap','li:not(.disabled)',function(){
			 var s = $(this).data('id');
			 //开始和结束都存在
			 if(init.start && init.end){
			 	$('.date-section').find('li').removeClass('start').removeClass('end').removeClass('line');
			 	//设置入住
 				init.start = s;
 				init.startD = $(this).attr('date');
			 	init.end = "";
			 	init.endD = ""
			 	$(this).addClass('start');
			 }else{
			 	//start>end start
			 	//start<end  end
			 	var e = $(this).data('id');
			 	if(e > init.start){
			 		init.end = e;
			 		init.endD = $(this).attr('date');
			 		$('.date-section').find('li').removeClass('end').removeClass('line');
			 		$('.date-section').find('li').each(function(i,v){
			 			var cid = $(this).data('id');
			 			if(cid > init.start && cid < e){
			 				$(this).removeClass('now').addClass('line');
			 			}
			 		})
			 		$(this).addClass('end');
			 	}else{
			 		$('.date-section').find('li').removeClass('start').removeClass('end').removeClass('line');
			 		$(this).addClass('start');
			 		init.start = e;
			 		init.startD = $(this).attr('date');
				 	init.end = "";
				 	init.endD = ""
			 	}
			 }
		});
		//点击完成
		$('.suc').on('tap',function(){
			$('.date-mark').css('transform','translate3d(0, 100%, 0)');
			console.log(init);
			$('.start-d').html(init.startD);
			$('.end-d').html(init.endD);
		})
	}
	var show = function(obj){
		var dateBtn = $('.left'),
			cur = new Date(),
			data = $.extend({},{
				start:initDate.get(cur.getMonth()+1,cur.getDate()),
				day:1
			},obj),
			dataMark = $(data.mark);
		//渲染结构内容
		$('.start-d').html(data.start);
		var end = initDate.set(cur.getFullYear(),cur.getMonth(),cur.getDate()+data.day);
		var endstr = initDate.get(end.getMonth()+1,end.getDate());
		$('.end-d').html(endstr);
	
		//点击日历出现遮罩层
		dateBtn.on('tap',function(){
			dataMark.css('transform','translate3d(0, 0, 0)');
			dateDom({
				num:4,
				start:data.start, //10-17
				end:endstr //10-18
			})
		})
	}



	return {
		show:show
	}

})(Zepto)