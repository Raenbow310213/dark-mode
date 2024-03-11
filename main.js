let blakpink=document.getElementById("blakpink")
blakpink.onclick=function(){
    let theme= document.getElementById("theme");
if(theme.getAttribute("href")=="lihgt.css"){
    theme.href="dark.css"
}else{
    theme.href="lihgt.css"
}
}
