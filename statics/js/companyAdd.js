$(function(){
    companyAdd.choseItem();//公司选择动态效果
//    companyAdd.uploadMethod1();
//    companyAdd.uploadMethod2();
    companyAdd.uploadMethod('#comThree','#comThreeList','#threeUpBtn');
    companyAdd.uploadMethod('#bill','#billList','#billUpBtn');
    companyAdd.uploadMethod('#state','#stateList','#stateUpBtn');
    companyAdd.uploadMethod('#income','#incomeList','#incomeUpBtn');
    companyAdd.uploadMethod('#house','#houseList','#houseUpBtn');
    companyAdd.uploadMethod('#mail','#mailList','#mailUpBtn');
});

var companyAdd = new Object();
var state;

//公司选择动态效果
companyAdd.choseItem = function(){
    $(document).on('click','.searchBtn',function(){
//        $.ajax({
//             type:"GET",
//             url:'',
//             data:'',
//             success:function(data){
//                 
//             }
//         });        
        $(this).parents('.comNameBox').siblings('.comPreBox').removeClass('hide');
    })
    
    $(document).on('click','.comItem',function(){
        var text = $(this).children('span').html();
        $('.inputBox input').val(text);
        $(this).parent('.comPreBox').addClass('hide');
        
//        $.ajax({
//             type:"GET",
//             url:'',
//             data:'',
//             success:function(data){
//                 
//             }
//         }); 
        
        $(this).parents('.comPreBox').siblings('.comAptitudeBox').removeClass('hide');        $(this).parents('.comPreBox').siblings('.upContainter').removeClass('hide');
        
    });
};

//文件上传效果
companyAdd.uploadMethod = function(picker,filesList,upBtn){    
    var uploader = WebUploader.create({    
           auto:false,// 选完文件后，是否自动上传。              
           swf:'../libs/webuploader/Uploader.swf',// swf文件路径
           server:'', // 文件接收服务端   
           // 内部根据当前运行是创建，可能是input元素，也可能是flash.  
           pick:picker, 
           // 只允许选择图片文件。  
           method:'POST',
    });
    
    uploader.on('fileQueued',function(file){
        var $li = $('<span class="filesBox"><span id="'+file.id+'" class="fileItem">'+file.name+'</span></span>');//创建文件列表 
        $(filesList).append( $li );
    });
    
    uploader.on( 'uploadSuccess', function( file ) {
        $( '#'+file.id ).css('color','#0f0');
    });
    
    uploader.on( 'uploadError', function( file ) {
        $( '#'+file.id ).css('color','#f00');
    });
    
    uploader.on('all',function(type){
        if (type === 'startUpload' ){
            state = 'uploading';
        } else if (type === 'stopUpload') {
            state = 'paused';
        } else if (type === 'uploadFinished') {
            state = 'done';
        }
        if (state === 'uploading') {
            $('.upBtn a').text('等待上传');
        } else {
            $('.upBtn a').text('上传');
        }
    });
    
    $(upBtn).on('click',function(){
        if(state === 'uploading'){
            uploader.stop();
        }else{
            uploader.upload();
        }
    });
};