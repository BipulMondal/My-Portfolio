//all list item page changing 
function goto1() {
    window.location.href="./index.html";
}
function goto2() {
    window.location.href = "./about.html";
}
function goto3() {
    window.location.href="./skills.html";
}
function goto4() {
    window.location.href="./projects.html";
}
function goto5() {
    window.location.href="./contact.html";
}

//homepage button function
document.querySelector(".btn_1").addEventListener("click", projects)
    function projects(){
        window.location.href="./projects.html";
    }
document.querySelector(".btn_2").addEventListener("click", contact)
    function contact(){
        window.location.href="./contact.html";
    }
//social media link function
function gotolink(link) {
    console.log(link.value);
    window.open(link.value);
}