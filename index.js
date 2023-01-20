var string="";
$("button").on("click",function(event){
if(event.target.innerHTML== '='){
    string=eval(string);
    $("input").attr("value",string);
}
else if(event.target.innerHTML == 'C'){
    string="";
    $("input").attr("value",string);
}
else{
    string=string+event.target.innerHTML;
    $("input").attr("value",string);
}});
$(document).on("keydown",function(event){

    if(event.key== '=' || event.key === "Enter"){
        string=eval(string);
        $("input").attr("value",string);
    }
    else if(event.key == 'C' || event.key== 'c'){
        string="";
        $("input").attr("value",string);
    }
    else if(event.key==="Backspace" || event.key==="Delete") {
        string=string.slice(0,string.length-1);
        console.log(string);
        $("input").attr("value",string);
    }
    else if(event.key==="Control" || event.key==="Alt" || event.key==="AltGraph"){
        string=string;
    }
    else{
        string=string+event.key;
        $("input").attr("value",string);
    }

});
