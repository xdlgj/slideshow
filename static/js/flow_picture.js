$(function(event){
	/*$("#b04").unslider();此函数或给ul和li添加相应的样式*/
	var $unslider04 = $('#b04').unslider({
		dots:true/*是否显示指示器(图片上面的小圆点)，取值true / false*/
	});
	data04 = $unslider04.data('unslider');
    console.log(data04)
    $('.unslider-arrow04').click(function() {
    	console.log(this.className)
        var fn = this.className.split(' ')[1];
        data04[fn]();
    });
	
})
