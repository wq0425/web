//渲染数据

//点击出现
$('.cityAll').on('tap', function() {
    $('.cityAll-list').css({
        transform: 'translateY(0%)',
    }).find('.close').on('tap', function() {
        $(this).parents('.cityAll-list').css({
            transform: 'translateY(100%)',
        })
    })
})