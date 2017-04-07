$(function(){
    log.loginSub();//点击按钮提交表单
    log.loginVal();//登录表单验证
});

var log = new Object();

//点击按钮提交表单
log.loginSub = function(){
    $(document).on('click','[data-btn="login"]',function(){
        $('#loginForm').submit();
    });
    
    $(document).on('click','[data-btn="register"]',function(){
        $('#registerForm').submit();
    });
};

//登录表单验证
log.loginVal = function(){
    $('#loginForm').validate({
        errorPlacement:function(error,element){
            var text = error.text();
            element.parents('.loginDiv').next('.errorMsg').html(text).removeClass('hide');
            element.parents('.inputDiv').next('.errorMsg').html(text).removeClass('hide');
        },
        success:function(element){
            element.text('');
        },
        submitHandler:function(){
            console.log('表单提交！');
        },
        rules:{
            userName:{
                required:true,
                isphoneNo:true
            },
            passWord:{
                required:true,
                hasSpecialChar:true,
                minlength:6
            },
            codeNo:{
                required:true
            }
        },
        messages:{
            userName:{
                required:'请输入用户名',
                isphoneNo:'请输入正确的手机号'
            },
            passWord:{
                required:'请输入密码',
                hasSpecialChar:'密码不能包含特殊字符',
                minlength:'密码不能少于6位'
            },
            codeNo:{
                required:'请输入验证码'
            }
        }
    });
    
    $('#registerForm').validate({
        errorPlacement:function(error,element){
            var text = error.text();
            element.parents('.inputDiv').next('.errorMsg').html(text).removeClass('hide');
        },
        success:function(element){
            element.text('');
        },
        submitHandler:function(){
            console.log('表单提交！');
        },
        rules:{
            userName:{
                required:true,
                isphoneNo:true
            },
            firstPsd:{
                required:true,
                hasSpecialChar:true,
                minlength:6
            },
            againPsd:{
                required:true,
                equalTo:'#firstPsd'
            },
            sureNo:{
                required:true
            }
        },
        messages:{
            userName:{
                required:'请输入用户名',
                isphoneNo:'请输入正确的手机号'
            },
            firstPsd:{
                required:'请输入密码',
                hasSpecialChar:'密码不能包含特殊字符',
                minlength:'密码不能少于6位'
            },
            againPsd:{
                required:'请再次输入密码',
                equalTo:'必须与密码相同'
            },
            sureNo:{
                required:'请输入验证码'
            }
        }
    })
};


//自定义扩展验证方法
jQuery.validator.addMethod("isphoneNo", function(value, element){  
    var reg = /^1\d{10}$/;
    return this.optional(element) || (reg.test(value)); 
}, "请输入正确的手机号");

jQuery.validator.addMethod("hasSpecialChar", function(value, element){  
    var reg = new RegExp("[@/'\"#$%&^*]+");
    return this.optional(element) || (!reg.test(value)); 
}, "密码不能包含特殊字符");