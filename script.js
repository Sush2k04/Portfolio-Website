var crsr = document.querySelector(".cursor");
var second = document.querySelector(".last-page");

second.addEventListener("mousemove", function (ee) {
    var secondRect = second.getBoundingClientRect();
    
    // Calculate the mouse position relative to the second-page
    var x = ee.clientX - secondRect.left;
    var y = ee.clientY - secondRect.top;

    // Move the cursor element to the mouse's position
    crsr.style.left = x + "px";
    crsr.style.top = y + "px";
});

var next = document.getElementById("next1page");
next.addEventListener("click",function(){
    scrollToSection("next2");
});

var next2= document.getElementById("next2page");
next2.addEventListener("click",function(){
    scrollToSection("next3");
});
var next3 = document.getElementById("next3page");
next3.addEventListener("click",function(){
    scrollToSection("next4");
})

function scrollToSection(id) {
  const section = document.getElementById(id);

  section.scrollIntoView({ behavior: "smooth" });
  
}