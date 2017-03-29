$(function(){
    estimateCost.addTr();//表格的添加与删除
});

var estimateCost = new Object();

//表格的添加与删除
estimateCost.addTr = function(){
    $(document).on('click','.addTr',function(){
        var index = $(this).parents('.tableBox').attr('index');
        var num = $(this).siblings('table').children('tbody').children('tr').length;
        
        var target = $('.hideContainer').find('table').eq(index).find('tr').clone();
        target.children('td:eq(0)').html(num+1);
        $(this).siblings('table').append(target);        
    });
    
    $(document).on('click','.delBtn',function(){
        var index = $(this).parents('.tableBox').attr('index');        
        $(this).parents('tr').remove();
        var num = $('.tableBox').eq(index).find('tbody').find('tr').length;
        
        for(var n=0;n<num;n++){
            $('.tableBox').eq(index).find('tbody').find('tr').eq(n).children('td:eq(0)').html(n+1);
        }
    })
};