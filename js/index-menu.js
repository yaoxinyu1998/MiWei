/**
 * Created by Administrator on 2018/9/14.
 */
var caidan = document.getElementsByClassName("menu1")[0];
var menu=document.getElementsByClassName("menu")[0]
console.log(menu);

menu.onclick=function(){
    if(caidan.style.display=="block"){
        caidan.style.display="none";
    }else{
        caidan.style.display="block";
    }
}

