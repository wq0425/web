$(function(){
	
	if(location.search){
		var obj={}
		csdy(location.search.slice(1))
		$('#rzr p').html(obj.start)
		$('#ldr p').html(obj.gj+"晚("+obj.end+"离店)")
		$('#ldr').click(dy)
		$('#rzr').click(dy)
		function dy(){
			location.href="week.html?start="+obj.start+"&end="+obj.end
		}
	}else{
		var s =3
		var date = new Date()
		var data = {
			y:date.getFullYear(),
			m:date.getMonth()+1,
			d:date.getDate()
		}
		$('#rzr p').html(data.y+"-"+data.m+"-"+data.d)
		var date1 = new Date(data.y,data.m-1,data.d+s)
		var data1 = {
			y:date1.getFullYear(),
			m:date1.getMonth()+1,
			d:date1.getDate()
		}
		$('#ldr p').html(s+"晚("+data1.y+"-"+data1.m+"-"+data1.d+"离店)")
		$('#ldr').click(dy)
		$('#rzr').click(dy)
		function dy(){
			location.href="week.html?start="+data.y+"-"+data.m+"-"+data.d+"&end="+data1.y+"-"+data1.m+"-"+data1.d
		}
	}
	
    function csdy(str){
      var arr = str.split('&')
      
      for(var i=0;i<arr.length;i++){
      	 var newarr = arr[i].split('=')
      	 obj[newarr[0]]=newarr[1]
      }
      console.log(obj)
    }

	
})