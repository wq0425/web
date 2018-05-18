$(function(){
	//渲染首页结构
     $.ajax({
     	url:'json/data.json',
     	success:function(data){
     		var arr = data.data.searchresult;
     		var str = "";
     		$.each(arr,function(i,v){
     			var imgs = v.frontImg.replace(/w\.h/g,'216.0');
     			str+=`
     				<dl>
	                    <dt>
	                            <img src="${imgs}" alt="">
	                        </dt>
	                    <dd>
	                        <ul>
	                            <h3 class="tit">${v.name}</h3>
	                            <li class="message">
	                                <span>${v.scoreIntro}</span>
	                                <span>${v.poiSaleAndSpanTag}</span>
	                            </li>
	                            <li class="address">
	                               <span>${v.posdescr}</span>
	                            </li>
	                            <li class="price">
	                                <span>￥<b>${v.originalPrice}</b>起</span>
	                                <span>${v.poiLastOrderTime}</span>
	                            </li>
	                            <li class="confirm">订</li>
	                        </ul>
	                    </dd>
	                </dl>`
     		});
     		$('.main-section').html(str);
     	}
     })

     //调用显示日历
     date.show({
     	//天数
     	day:3,
     	mark:'.date-mark'
     })
     /*<ul class="city-nav">
                <li class='colorO'>附近</li>
                <li>附近</li>
                <li>附近</li>
            </ul>
            <div class="city-child-box">
                <ul class="city-child-boxAdd">
                    <li class='colorT'>北京</li>
                    <li>北京</li>
                    <li>北京</li>
                    <li>北京</li>
                    <li>北京</li>
                </ul>
            </div>
            <!--data[0].items[0].district-->
            <div class="city-child-box">
                <ul class="city-child-boxEven">
                    <li calss='colorTh'>海淀区</li>
                    <li>海淀区</li>
                    <li>海淀区</li>
                    <li>海淀区</li>
                    <li>海淀区</li>
                </ul>
            </div>*/
     //ajax请求city.josn
     var data = null;
     $.ajax({
     	url:'json/city.json',
     	async:false,
     	success:function(d){
     		data = d;
     		setCityHtml(0,0);
     	}
     });
     //省份
     function setCityHtml(sid,cid){
     	var shenStr = "<div id='shenList'><ul class='city-nav'>";
     	$.each(data,function(i,v){
     		if(i===sid){
     			shenStr += '<li class="colorO">'+v.province+'</li>';
     		}else{
     			shenStr += '<li>'+v.province+'</li>';
     		}
     		
     	})
     	shenStr += '</ul></div>';
     	$('.city-section').append(shenStr);
     	
     	//市区
     	getCityHtml(cid);

     	var myScroll = new IScroll('#shenList',{
     		scrollbars:true
     	})
     	//点击一级菜单
     	$('.city-nav').on('tap','li',function(){
     		var ind = $(this).index();
     		getCityHtml(ind,0);
     	})

     }
     function getCityHtml(ind,areaId){
     	var cityArr = data[ind].items;
     	var cityStr = '<div class="city-child-box" style="width:75%"><ul class="city-child-boxAdd">';
     	$.each(cityArr,function(i,v){
     		cityStr += '<li data-city="'+ind+'">'+v.city+'</li>';
     	})
     	cityStr += '</ul></div>';
     	//三级
     	if(data[ind].items[0].district){
	     	if(data[ind].items[areaId].district){
	     		cityStr += '<div class="city-child-area" style="width:40%"><ul>';
	     		var area = data[ind].items[areaId].district;
	     		$.each(area,function(i,v){
	     			cityStr += '<li>'+v+'</li>'
	     		})
	     		cityStr += "</ul></div>"
	     	}
     	}
     	$('.city-child-box,.city-child-area').remove();
     	$('.city-section').append(cityStr);
     	if($('.city-child-area').length){
     		$('.city-child-box').css('width','35%');
     		var areaScroll = new IScroll('.city-child-area',{
	     		scrollbars:true
	     	})
     	}
     	var cityScroll = new IScroll('.city-child-box',{
     		scrollbars:true
     	})

     	//点击二级菜单
     	$('.city-child-box').on('tap','li',function(){
     		var ind = $(this).data('city');
     		getCityHtml(ind,$(this).index());
     	})
     }
     //显示城市弹窗
     $('.cityAll').on('tap',function(){
     	$('.cityAll-list').css('transform','translateY(0)');
     })
     //关闭按钮
     $('.close').on('tap',function(){
     	$('.cityAll-list').css('transform','translateY(100%)');
     })
})