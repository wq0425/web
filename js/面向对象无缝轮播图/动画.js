function one(node,obj,fn){
  var flag = true;
  var speed;
  var timer = null;
	clearInterval( node.timer )
	node.timer = setInterval(function(){
		var num;
    for(var style in obj){
      if( style == "opacity" ){
        num = parseInt(parseFloat(getStyle(node,style))*100)
      }
      else{
        num = parseInt(getStyle(node,style));
      }
      speed = (obj[style]-num)/8;
      speed = obj[style]-num > 0 ? Math.ceil(speed) : Math.floor(speed);
      num+=speed;

      if( style == "opacity" ){
        node.style.opacity = num / 100;
        node.style.filter = "alpha(opacity:"+num+")"
      }
      else{
        node.style[style]=num + "px"
      }

      if( num != obj[style] ){
        flag = false
      }

      if( flag ){
        clearInterval( node.timer )
        if(fn){
          fn()
        }
      }  
    }
	},25)
}
      
function getStyle(node,style){
	if(node.currentStyle){
		return node.currentStyle[style]
	}
	else{
		return getComputedStyle(node,null)[style]
	}
}