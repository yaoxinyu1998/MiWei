/**
 * Created by Administrator on 2018/9/14.
 */
/**
 * Created by Administrator on 2018/9/14.
 */
var banner=document.getElementById("banner");
var banner_box=document.getElementsByClassName("banner_box");
var banner_list=document.getElementsByClassName("banner_list")[0];
var list=banner_list.getElementsByTagName("li");
var ul=document.getElementById("ul");
var timer;
var index=0;
function next_img(){
    index++;
    if(index>4){
        index=0;
    }
    count();
    var newLeft;
    if(ul.style.left=='-2800px'){
        newLeft=0;
    }else{
        newLeft=parseInt(ul.style.left)-700;
    }
    ul.style.left=newLeft+"px"
}
function prive_img(){
    index--;
    if(index<0){
        index=4
    }
    count()
    if(ul.style.left=="0px"){
        ul.style.left=-2800+"px";
    }else{
        ul.style.left=parseInt(ul.style.left)+700+"px";
    }
}

/*function autoPlay(){
 timer=setInterval(next_img,2800);
 }
 autoPlay();*/
function count(){
    for(var i=0;i<list.length;i++){
        list[i].className="";
    }
    list[index].className="active";
}
for(var i=0;i<list.length;i++){
    (function (i) {
        list[i].onclick=function(){
            var num=index-i;
            ul.style.left=(parseInt(ul.style.left)+num*700) +"px";
            index=i;
            count();
        }
    })(i)
}
banner.addEventListener("mouseover",function(e){
    clearInterval(timer);
})
banner.addEventListener("mouseout",function(e){
    autoPlay();
})
arrow_left.onclick=function(){
    next_img()
}
arrow_right.onclick=function(){
    prive_img()
}


