$(function(){    
    base.addHtml('http://127.0.0.1:55773/pages/basePage/baseTop.html','.topContainer');
});

var base = new Object();

base.addHtml = function(url,target){
    $.ajax({
         type: "GET",
         url: url,
         data: {},
         async:false,
         success: function(data){
//             console.log(data);
            $(target).html(data);		 
         },
         error:function(){
             alert('页面加载出错！');
         }
     });
};
