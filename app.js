var getfun = document.querySelector(".one")
var startbtn = document.getElementById("start");
var closebtn = document.getElementById('stop');
var light = document.querySelector('.center');
var getlightbtn = document.getElementById("lightcolor");


startbtn.addEventListener('click',function(e){
    // console.log("hey")
    e.preventDefault();
    getfun.classList.add("turning");

});

closebtn.addEventListener("click",function(e){
    e.preventDefault();
    getfun.classList.remove("turning")
})


getlightbtn.addEventListener('click',function(){
    console.log(getlightbtn.value);
    console.log(getlightbtn.selectedIndex)

    if(getlightbtn.selectedIndex > 0){
       light.style.backgroundColor = getlightbtn.value;
    }
})