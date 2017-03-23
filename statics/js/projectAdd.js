$(function(){
    projectAdd.timeChose();//时间选择器
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
    })
}