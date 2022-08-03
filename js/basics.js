var go = document.getElementById("btn");

function myfunc(){
    console.log("Button clicked");
    var input = document.getElementsByClassName("custom");
    var message = document.getElementsByTagName("textarea");

    document.getElementById("text").innerHTML="Hello, " + input[0].value + "<br>" + "Message : "+message[0].value;
}

hobbies = ["pizza", "game", "read", "travel"];
console.log(hobbies.pop());
hobbies.push("sleep");

hobbies.forEach(function(item,index){
    console.log(index,"I like",item);
});

hobbies.shift();
hobbies.forEach(function(item,index){
    console.log(index,"I like",item);
});

hobbies.unshift("dance");
hobbies.forEach(function(item,index){
    console.log(index,"I like",item);
});

go.addEventListener('click',myfunc);