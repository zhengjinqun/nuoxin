/*购物车*/
$(".jiahao").on("click",function(){
	var num=$(this).prev().val();	         //获取商品初始数量1
	$(this).prev().val(Number(num)+1);//此时已将数字直接写入标签内，是动作
	var buynum=$(this).prev().val();   //得到+1之后的商品数量，即购买数量
	var price=$(this).parent().parent().prev().find(".jszj").html();//获取商品单价    
	$(this).parent().prev().find(".xiaoji").html((buynum*Number(price)).toFixed(2));
//        console.log(smallPrice);
	allPrice();
	checkNum();
});

$(".jianhao").on("click",function(){
	var num=$(this).next().val();           //获取此时商品数量
	if(num>1){
	$(this).next().val(Number(num)-1);//此时已将数字直接写入标签内，是动作
	var buynum=$(this).next().val();   //得到-1之后的商品数量，即购买数量
	var price=$(this).parent().parent().prev().find(".jszj").html();    //获取商品单价
	$(this).parent().prev().find(".xiaoji").html((buynum*Number(price)).toFixed(2));
	}else{
		alert("再点就没了");
	}
	allPrice();
	checkNum();
});

	//全选
	$(".quanxian").click(function(){
		if(this.checked==true){
			$(".dangxuan").prop("checked",true);
		}else{
			$(".dangxuan").prop("checked",false);
		}
		allPrice();
        checkNum();
	})
 //单选
$(".dangxuan").click(function(){
	var check=$(".dangxuan").length;
	var checked=$(".dangxuan:checked").length;
	if(check==checked){
		$(".quanxian").prop("checked",true);
	}else{
		$(".quanxian").prop("checked",false);
	}
	 allPrice();
  	 checkNum();
})

function checkNum(){
	var num=0;
	$(".dangxuan").each(function(){
		if(this.checked==true){
			var b=$($(this).parent().next().children().find(".gmsl")).val();
			num+=Number(b);
		}
	})
	$(".yuxuan").html(num);
}
function allPrice(){
        var sum=0;
        $(".dangxuan").each(function(){
            if(this.checked==true){
               var a=$($(this).parent().next().children().find(".xiaoji")).html();    //单类商品数量
//                console.log($($(this).parent().next().next().next().next().next().children().children()[0]).html());
               sum+=Number(a);
            }
        });
        $(".total").html(sum);
    }
