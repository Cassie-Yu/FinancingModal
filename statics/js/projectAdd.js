$(function(){
    projectAdd.timeChose();//时间选择器
    projectAdd.subForm();//点击按钮提交表单
    projectAdd.formCheck();//新增项目表单验证
});

var projectAdd = new Object();

//时间选择器
projectAdd.timeChose = function(){
    $('.datePicker').datepicker({
        format: "yyyy-mm-dd", 
        language: 'zh-CN', 
        todayHighlight: true, 
        autoclose: true, 
        startView: 'month', 
        todayBtn:true,
    });
    
    $('.datePicker').datepicker('setDate', new Date());
};

//点击按钮提交表单
projectAdd.subForm = function(){
    $(document).on('click','.addBtn',function(){
        $('#addForm').submit();
    })
};

//新增项目表单验证
projectAdd.formCheck = function(){
    $('#addForm').validate({
        errorPlacement:function(error,element){
            var text = error.text();
            element.siblings('.errorMsg').html(text);
        },
        success:function(element){
            element.text('');
        },
        rules:{
            proNo:{
                required:true
            },
            proName:{
                required:true
            },
            proMan:{
                required:true
            },
            proRman:{
                required:true
            },
            proAd:{
                required:true
            },
            proType:{
                required:true
            },
            proScale:{
                required:true
            },
            proMethod:{
                required:true
            },
            proPno:{
                required:true
            },
            proRoof:{
                required:true
            },
            proArea:{
                required:true
            },
            proRental:{
                required:true
            },
            proEprice:{
                required:true
            },
            proAstate:{
                required:true
            },
            proNeed:{
                required:true
            },
            proOther:{
                required:true
            }
        },
        messages:{
            proNo:{
                required:'必填'
            },
            proName:{
                required:'必填'
            },
            proMan:{
                required:'必填'
            },
            proRman:{
                required:'必填'
            },
            proAd:{
                required:'必填'
            },
            proType:{
                required:'必填'
            },
            proScale:{
                required:'必填'
            },
            proMethod:{
                required:'必填'
            },
            proPno:{
                required:'必填'
            },
            proRoof:{
                required:'必填'
            },
            proArea:{
                required:'必填'
            },
            proRental:{
                required:'必填'
            },
            proEprice:{
                required:'必填'
            },
            proAstate:{
                required:'必填'
            },
            proNeed:{
                required:'必填'
            },
            proOther:{
                required:'必填'
            }
        }
    });
};