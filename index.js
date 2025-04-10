
// Ensure the DOM is fully loaded before executing any code

document.addEventListener("DOMContentLoaded", function() {
    console.log("Document is ready!");
    function clickLogo() {
        window.open("https://www.amazon.in", "_blank");
    }
    if(document.querySelector(".logo")) {

        document.querySelector(".logo").style.cursor = "pointer";

        document.querySelector(".logo").addEventListener("click",()=>{
            clickLogo();
            
        });
    }
    // alert("Document is ready!");
    // Your code here

});