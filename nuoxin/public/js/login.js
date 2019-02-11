$(":text").blur(function(){
	//this->input:text->DOM
	vali($(this),3,9,"用户名必须介于3~9位之间!")
});
function vali($txt,minlen,maxlen,errMsg){
	var value=$txt.val();//获得当前文本框的内容
	var $span=$txt.next();//找到旁边的span
	//如果文本框的内容符合条件
	if(value.length>=minlen&&value.length<=maxlen){
	 //就填充span的内容为正确的图片
	 $span.html("<img src='../img/cart/ok.png'>");
	 return true;
	}else{
		//否则,就填充span的内容为错误的图片和错误提示
	 $span.html(
		 `<img src='../img/cart/err.png'>${errMsg}`);
	 return false;
	}
}
$(":password").blur(function(){
	vali($(this),6,8,"密码必须介于6~8位之间!")
});
$("form").submit(function(e){
	if(!vali($(":text"),3,9,"用户名必须介于3~9位之间!")){//如果验证姓名文本框未通过，就取消提交
		e.preventDefault();
	}else if(!vali($(":password"),6,8,"密码必须介于6~8位之间!"))//如果验证密码框未通过，也取消提交
		e.preventDefault();
})