$(function(){
    $.ajax({
        url:"http://127.0.0.1:3244/header.html",
        type:"get",
        success:function(res){
            $("<link rel='stylesheet' href='../css/header.css'>").appendTo("head")
            $(res)
                .replaceAll("header");
        
        // 找到input
        var $input=$("header>div>div>div input");
        //找到下一个兄弟
        var $btnSarch=$input.next();
        // 给btnsarch绑定事件
        $btnSarch.click(function(){
            if($input.val().trim().length>0)
            location.href="pro_center.html?kwords="+$input.val()
        });
        $input.keyup(function(e){
            if(e.keyCode==13){
                $btnSarch.click();
            }
        })
        if(location.search.indexOf("kwords")!=-1){
            $input.val(decodeURI(location.search.split("=")[1])
            );
        } 
        // 图片
        $("[data-trigger=weixintu]")
        .mousemove(function(){
           $(this).children(":last-child").show();
        })
        .mouseout(function(){
            $(this).children(":last-child").hide();
        }).children(":last-child").hide();
        // 企业专区隐藏
        $("[data-trigger=dropdown]").parent()
//		//绑定事件
		.mousemove(function(){
//			//查找要需要修改的元素
		$(this).children(":last-child").show();
	})//return $("[data-trigger=dropdown]")链式结构。只要主语是你想要的，就在后面继续添加事件即可
		.mouseout(function(){
		$(this).children(":last-child").hide();
		})
//		//主语一样不用在写。默认隐藏
        .children(":last-child").hide();
   

    $(function(){
        var nav=$(".fiedx_nav1");
        var win=$(window);
        var sc=$(document);
        nav.hide();
        win.scroll(function(){
            if(sc.scrollTop()>200){
                nav.addClass("dixednav");
                $(nav).show();
            }else{
                nav.removeClass("dixednav");
                $(nav).hide();
            }
        })
        })

 }
// $(function(){
//     var nav=$("nav"); //得到导航对象
//     var win=$(window); //得到窗口对象
//     var sc=$(document);//得到document文档对象。
//     win.scroll(function(){
//       if(sc.scrollTop()>=100){
//         nav.addClass("fixednav"); 
//        $(".navTmp").fadeIn(); 
//       }else{
//        nav.removeClass("fixednav");
//        $(".navTmp").fadeOut();
//       }
//     })  
});
});