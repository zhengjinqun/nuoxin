$(":checkbox").click(function(){
	var $chb=$(this);
	console.log($chb);
	var $others=$("form :not(:checkbox)");
 $others.prop("disabled",!$chb.prop("checked"))
  //$others.disabled=!$chb.checked
})
$(function(){
			
            var ok1=false;
            var ok2=false;
            var ok3=false;
            var ok4=false;
            // 验证用户名
            $('input[name="username"]').focus(function(){
                $(this).next().text('用户名应该为3-20位之间').removeClass('state1').addClass('state2');
            }).blur(function(){
                if($(this).val().length >= 3 && $(this).val().length <=12 && $(this).val()!=''){
                    $(this).next().text('输入成功').removeClass('state1').addClass('state4');
                    ok1=true;
                }else{
                    $(this).next().text('用户名应该为3-20位之间').removeClass('state1').addClass('state3');
                }

            });

            //验证密码
            $('input[name="password"]').focus(function(){
                $(this).next().text('密码应该为6-20位之间').removeClass('state1').addClass('state2');
            }).blur(function(){
                if($(this).val().length >= 6 && $(this).val().length <=20 && $(this).val()!=''){
                    $(this).next().text('输入成功').removeClass('state1').addClass('state4');
                    ok2=true;
                }else{
                    $(this).next().text('密码应该为6-20位之间').removeClass('state1').addClass('state3');
                }

            });

            //验证确认密码
            $('input[name="repass"]').focus(function(){
                $(this).next().text('输入的确认密码要和上面的密码一致,规则也要相同').removeClass('state1').addClass('state2');
            }).blur(function(){
                if($(this).val().length >= 6 && $(this).val().length <=20 && $(this).val()!='' && $(this).val() == $('input[name="password"]').val()){
                    $(this).next().text('输入成功').removeClass('state1').addClass('state4');
                    ok3=true;
                }else{
                    $(this).next().text('输入的确认密码要和上面的密码一致,规则也要相同').removeClass('state1').addClass('state3');
                }
			
            });
            $('.submit').click(function(){
                if(ok1 && ok2 && ok3 && ok4){
                    $('form').submit();
                }else{
                    alert("请正确注册后登录")
                    return false;
                }
            });
            });

