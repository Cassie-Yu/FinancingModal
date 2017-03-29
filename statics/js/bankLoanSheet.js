$(function(){
    bankLoanSheet.timeChose();//时间选择器
    sheet.scrollChange('.sheetContainerA');
});

var bankLoanSheet = new Object();

//时间选择器
bankLoanSheet.timeChose = function(){
    $('.datePicker').datepicker({
        format: "yyyy-mm-dd", 
        language: 'zh-CN', 
        todayHighlight: true, 
        autoclose: true, 
        startView: 'month', 
        todayBtn:true,
    });
};