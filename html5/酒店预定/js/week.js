$(function(){	
  var obj={}
  csdy(location.search.slice(1))
  var st1,en1;
   function csdy(str){
       var arr = str.split('&')
        for(var i=0;i<arr.length;i++){
           var newarr = arr[i].split('=')
           obj[newarr[0]]=newarr[1]
        }
        st1 = (split(obj.start))
        en1 = (split(obj.end))
    }
     function split(str){  
      var obj={}
      if(str){
            obj.y=str.split('-')[0]*1;
            obj.m=str.split('-')[1]*1;
            obj.d=str.split('-')[2]*1;
      }
      return obj
    }
	var newdata = new Date()
    var newnow = {
   	   year:newdata.getFullYear(),
   	   mouse:newdata.getMonth(),
   	   data:newdata.getDate(),
   	   week:newdata.getDay()
    }
    console.log(st1)
    var obj1={
    	  y:st1.y,
    		m:st1.m,
    		d:st1.d
    }
    var obj2={
    		y:en1.y,
    		m:en1.m,
    		d:en1.d
    }
    $('#rzr b').html(obj1.y+"-"+(obj1.m)+"-"+obj1.d)
    $('#ldr b').html(obj2.y+"-"+(obj2.m)+"-"+obj2.d)
    js()
    var nowYear = newnow.year
    var nowMouse = newnow.mouse+1
    var tag = true
    var startTime,endTime,start,end;
    getNowDate(nowYear,nowMouse,1)
	function sizeDy(){//设置单元格的大小
		var win_w = $(window).width();
		var base = (win_w-14)/7;
		$('#main li').css({width:base,height:base,"lineHeight":base+"px"})
	}
	function getNowDate(y,m,d){//获取时间
	   var main = document.querySelector('#main')
	   main.innerHTML=""
       var data = new Date(y,m-1,d)
       var now = {
       	   year:data.getFullYear(),
       	   mouse:data.getMonth(),
       	   data:data.getDate(),
       	   week:data.getDay()
       }  
       var maxDate = new Date(now.year,now.mouse+1,0).getDate()
       var oneDate = new Date(now.year,now.mouse,1).getDay()
       var numDate = maxDate+oneDate
       var row = Math.ceil(numDate/7) 
       var num = 1
       for(var i=0;i<row*7;i++){
       	   var text = ""
           if(i>=oneDate&&num<=maxDate){
           	  text=num
           	  num++
           }
           var node = document.createElement('li')
           if(text){
           	  node.setAttribute('data-time',now.year+"-"+(now.mouse+1)+"-"+(num-1))
           	  if(now.year<newnow.year){
                 node.className="gq"
           	  }else if(now.year==newnow.year){
           	  	if(now.mouse+1<(newnow.mouse+1)){
                     node.className="gq"
           	  	}else if(now.mouse+1==(newnow.mouse+1)){
           	  	   if(num-1<newnow.data){
           	  	   	 node.className="gq"
           	  	   }else if(num-1==newnow.data){
           	  	   	 text="今天"
           	  	   	 node.style.color="#23aef1"
           	  	   	 node.style.fontWeight="700"
           	  	   }
           	  	}
           	  }
           	var st = split1($(start).attr('data-time'))
           	var en = split2($(end).attr('data-time'))
            if(st.y==now.year&&st.m==(now.mouse+1)&&st.d==(num-1)){
            	node.className="start"
            }
            if(tag==true){
            	if(en.y==now.year&&en.m==(now.mouse+1)&&en.d==(num-1)){
           	  	 node.className="end"
            	}
              $('#rzr b').html($(start).attr('data-time'))
           	  $('#ldr b').html($(end).attr('data-time'))
           	  if(st.y==now.year&& now.year==en.y){
           	  	 if(st.m==(now.mouse+1) && (now.mouse+1)==en.m){
           	  	 	if(st.d<(num-1)&&(num-1)<en.d){
           	  	 		node.className="even"
           	  	 	}
           	  	 }else if(st.m==(now.mouse+1)){
                    if(st.d<(num-1)){
                        node.className="even"
                    }
           	  	 }else if(en.m==(now.mouse+1)){
           	  	 	if(en.d>(num-1)){
                        node.className="even"
                    }
           	  	 }else if(st.m<(now.mouse+1) && (now.mouse+1)<en.m){
           	  	 	node.className="even"
           	  	 }
           	  }else{
           	  	if(st.y==now.year&&st.m==(now.mouse+1)&&st.d<(num-1)){
           	  		node.className="even"
           	  	}else if(st.y==now.year&&st.m<(now.mouse+1)){
                    node.className="even"
           	  	}else if(en.y==now.year&&en.m>(now.mouse+1)){
                    node.className="even"
           	  	}else if(en.y==now.year&&en.m==(now.mouse+1)&&en.d>(num-1)){
           	  		node.className='even'
           	  	}else if(st.y<now.year&&now.year<en.y){
           	  		node.className='even'
           	  	}
           	  }
           	}  
           }
           node.innerHTML=text
           main.appendChild(node)
       }
       $('#head p').html(now.year+"年"+(now.mouse+1)+"月")
       sizeDy()
	}
    $('#tab_left').click(function(){
        nowMouse--
        getNowDate(nowYear,nowMouse,1)
    })
    $('#tab_right').click(function(){
        nowMouse++
        getNowDate(nowYear,nowMouse,1)
    })
    $('#main').on('click',"li",function(){   
        if(this.className==""&&this.innerHTML!=""){
        	if(tag){
                $('.even').removeClass('even')
                $('.start').removeClass('start')
                $('.end').removeClass('end')
        		$(this).addClass('start')
        		startTime=$(this).attr('data-time')
        		start=this
        		tag=false
        	}else{
        		$(this).addClass('end')
        		endTime=$(this).attr('data-time')
        		end=this
        		tag=true;
        		tabDy()
        		getNowDate(nowYear,nowMouse,1)
        		js()
        	}    	
        }
    })
    var dt,rzr,ldr;
    function js(){
    	rzr = $('#rzr b').text()
    	var rz = split1(rzr)
    	var stT = new Date(rz.y,rz.m-1,rz.d).getTime()
    	ldr = $('#ldr b').text()
    	var ld = split2(ldr)
    	var ldT = new Date(ld.y,ld.m-1,ld.d).getTime()
    	dt = ((ldT-stT)/60/60/1000/24)
    	$('#gz b').html(dt+"天")
    }
    $('#btn').click(function(){
    	window.location.href="index.html?"+"start="+rzr+"&end="+ldr+"&gj="+dt
    })
    function split1(str){
    	if(str){
            obj1.y=str.split('-')[0]*1;
            obj1.m=str.split('-')[1]*1;
            obj1.d=str.split('-')[2]*1;
    	}
    	return obj1
    }
    function split2(str){ 
      if(str){
            obj2.y=str.split('-')[0]*1;
            obj2.m=str.split('-')[1]*1;
            obj2.d=str.split('-')[2]*1;
      }
      return obj2
    }
    function tabDy(){
    	var startNow = {
             y:startTime.split('-')[0]*1,
             m:startTime.split('-')[1]*1,
             d:startTime.split('-')[2]*1
    	}
    	var endNow = {
             y:endTime.split('-')[0]*1,
             m:endTime.split('-')[1]*1,
             d:endTime.split('-')[2]*1
    	}
    	var s = start
    	var b = end
    	startTime = startNow
    	endTime = endNow
    	if(startNow.y>endNow.y){
    		dy()
    	}else if(startNow.y==endNow.y){
            if(startNow.m>endNow.m){
            	dy()
            }else if(startNow.m==endNow.m){
                if(startNow.d>endNow.d){
                	dy()
                }
            }
    	}
    	even()
        function dy(){
        	$(start).toggleClass('start').toggleClass('end')
    		$(end).toggleClass('start').toggleClass('end')
    		startTime=endNow
    		endTime=startNow
            start=b
            end=s
        }
    }
    function even(){
    	 var arr = []
         if(startTime.y==endTime.y){
            
         }else if(startTime.y<endTime.y){
             
         }
    }
})