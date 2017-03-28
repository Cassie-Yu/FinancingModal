$(function(){
    estimateCapacity.silderBar();//滑动进度条相关
    estimateCapacity.tabChange();//屋顶类型选项
    estimateCapacity.formSub();//点击按钮提交表单
    estimateCapacity.formVal();//表单验证相关
});

var estimateCapacity = new Object();

//滑动进度条相关
estimateCapacity.silderBar = function(){
    $('#slider1').slider({
        step:0.01,
        min:0.3,
        max:0.8,
        value:0,
        handle:'triangle'
    });
    $("#slider1").on("slide", function(slideEvt) {
        $("#sliderNo1").text(slideEvt.value);
    });
    
    $('#slider2').slider({
        step:0.01,
        min:0.6,
        max:0.95,
        value:0,
        handle:'triangle'
    });
    $("#slider2").on("slide", function(slideEvt) {
        $("#sliderNo2").text(slideEvt.value);
    });
}

//屋顶类型选项
estimateCapacity.tabChange = function(){
    $(document).on('change','#roofStyle',function(){
        var index = $(this).get(0).selectedIndex;
        $('.toolBox').eq(index).removeClass('hide').siblings('.toolBox').addClass('hide');
        $('.toolBox input').val('');
    })
};

//点击按钮提交表单
estimateCapacity.formSub = function(){
    $(document).on('click','.formBtn',function(){
        $('#capacityForm').submit();
    })
}

//表单验证相关
estimateCapacity.formVal = function(){
    $('#capacityForm').validate({
        errorPlacement:function(error,element){
            var text = error.text();
            element.siblings('.errorMsg').html(text);
        },
        submitHandler:function(){
            console.log('表单提交！');
        },
        success:function(element){
            element.text('');
        },
        rules:{
            roofArea:{
                required:true,
                lrunlv:true
            },
            dipAngle:{
                required:true,
                lrunlv:true
            },
            dimensionality:{
                required:true,
                lrunlv:true
            }
        },
        messages:{
            roofArea:{
                required:'请输入有效数字'
            },
            dipAngle:{
                required:'请输入有效数字'
            },
            dimensionality:{
                required:'请输入有效数字'
            }
        }
    });
}

jQuery.validator.addMethod("lrunlv",function(value,element){ 
    var reg = new RegExp(/^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/);
    return this.optional(element) || reg.test(value);         
}, "必须为正数且保留两位小数");
