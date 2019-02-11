function task(){
    var show=document.querySelector(".lunboiamge>img.show");
    show.className="";
    if(show.nextElementSibling!==null)
        show.nextElementSibling.className="show";
    else
        show.parentNode.children[0].className="show";
}
setInterval(task,1000);

$(".xiugai").mouseenter(function(){
		var $this=$(this);
		$this.find(".gowu").html("加入购物车+");
}).mouseleave(function(){
		var $this=$(this);
		$this.find(".gowu").html("加入购物车>");
})
