$(function(){
    estimateCost.addTr();//表格的添加
    estimateCost.formSub();//点击按钮提交表单
    estimateCost.formVal();//表单验证相关
});

var estimateCost = new Object();

//表格的添加
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

//点击按钮提交表单
estimateCost.formSub = function(){
    $(document).on('click','.formBtn',function(){
        $('#costForm').submit();
    })
};

//表单验证相关
estimateCost.formVal = function(){
    $('#costForm').validate({
        errorPlacement:function(error,element){
            
        },
        submitHandler:function(){
//            console.log('表单提交！');
        },
        success:function(element){
            
        },
        rules:{
            proName:{
                required:true,
                lrunlv:true
            },
            proNum:{
                required:true,
                lrunlv:true
            },
            eqPrice:{
                required:true,
                lrunlv:true
            },
            insPrice:{
                required:true,
                lrunlv:true
            }
        },
        messages:{
            proName:{
                required:'',
                lrunlv:''
            },
            proNum:{
                required:'',
                lrunlv:''
            },
            eqPrice:{
                required:'',
                lrunlv:''
            },
            insPrice:{
                required:'',
                lrunlv:''
            }
        }
    })
};

jQuery.validator.addMethod("lrunlv",function(value,element){ 
    var reg = new RegExp(/^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/);
    return this.optional(element) || reg.test(value);         
}, "必须为正数且保留两位小数");