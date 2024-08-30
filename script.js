document.addEventListener("DOMContentLoaded", function() {
var typed = new Typed(".auto-type",{
    strings : [
        "Discover top government and private job opportunities...",
        "AI based Matchmaking...", 
        "Explore global job openings for career growth.",
        "Access structured mentorship for career advancement...",
        "Get one-on-one guidance from industry experts...",
        "Stay updated with the latest job opportunities...",
        'Build your career with personalized guidance and tools...',
        "Enhance skills with internships and certified courses..."
    ],
    typeSpeed : 40,
    backSpeed : 25,
    loop: true,
})


var tl = gsap.timeline({
})

tl
.from(".brand-logo",{
    scale: 0,
    duration: 1.2,
})

.to(".overlay",{
    duration:1.5,
    x:'100%',
    delay:0.8,
})

tl.from(".center-part1 h1",{
    x:-300,
    opacity:0,
    duration:0.5
},"-=0.3")

tl.from(".center-part1 p",{
    x:1200,
    opacity:0,
    duration:0.4
})

tl.from(".center-part2 video",{
    opacity:0,
    delay:0.2,
    x:200
},"-=0.3")

var signupbtn = document.querySelector(".signupbtn");
var loginbtn = document.querySelector(".loginbtn");
var card = document.querySelector(".container");
var main = document.querySelector("#main");

signupbtn.addEventListener("click", function(event) {
    event.preventDefault(); 
    if (card.style.opacity === "0" || card.style.opacity === "") {
        card.style.opacity = 1;
        main.classList.add("blurred"); 
    } else {
        card.style.opacity = 0;
        main.classList.remove("blurred"); 
    }
});

loginbtn.addEventListener("click", function(event) {
    event.preventDefault(); 
    if (card.style.opacity === "0" || card.style.opacity === "") {
        card.style.opacity = 1;
        main.classList.add("blurred"); 
    } else {
        card.style.opacity = 0;
        main.classList.remove("blurred"); 
    }
});

});
