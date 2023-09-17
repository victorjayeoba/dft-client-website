const menu_list = document.getElementById("menu_list")
const header = document.getElementById('header')
const nav = document.getElementById("nav")
const divFaq = document.querySelectorAll(".q_a > div")
const copyright = document.getElementById("copyright")

/* const email = document.getElementById("email").value
const firstName = document.getElementById("firstName").value
const LastName = document.getElementById("lastName").value
const body = document.getElementById("body").value */
//dftradingforex@gmail.com
//21f6f930-c62f-4d39-a850-4d925b550cd7 

/* 
function sendEmail() {
    Email.send({
        SecureToken: "21f6f930-c62f-4d39-a850-4d925b550cd7",
        To: "dftradingforex@gmail.com",
        From: email,
        Subject: "New Contact form enquiry",
        Body: "Name: " + firstName + LastName
            + "<br> Email: " + email
            + "<br> Message: " + body
    }).then(
        message => alert("Message Sent Succesfully")
    )
} */

function toggleClass(e) {

    e.currentTarget.classList.toggle("activeFaq")

}

const yearController = () => {
    let year = new Date().getFullYear()
    console.log(year)
    copyright.textContent += year
}
yearController()

Array.from(divFaq).map((e, id) => {
    e.addEventListener('click', (ev) => {
        Array.from(divFaq).map((elem, id) => {
            elem.classList.remove("activeFaq")

        })

        toggleClass(ev)
    })
})

var windowProgress = 0;
var headerHeight = header.offsetHeight

window.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-bars") || e.target.classList.contains("menu_links")) {
        menu_list.classList.toggle("active")

    }

})


window.addEventListener("scroll", (e) => {
    /*     console.log(windowProgress) */
    if (windowProgress > e.currentTarget.scrollY && windowProgress > headerHeight - 50) {


        nav.style.transform = "translateY(0%)"
        nav.classList.add("bg-indigo-600")

    } else if (e.currentTarget.scrollY == "0") {
        nav.style.transform = "translateY(0%)"
        nav.classList.remove("bg-indigo-600")
    }
    else {
        nav.style.transform = "translateY(-100%)"
    }
    windowProgress = e.currentTarget.scrollY
    console.log(nav)
}
)
ScrollTrigger.create({
    trigger: ".video",
    start: "top top",
    pinSpacing: false,
    scrub: true,
    pin: true,
})

let tl = gsap.timeline()



let word = "Taking time out when you have no set ups. Don't waste time staring at screens. Make time for yourself."
tl.from('.head_txt', {
    opacity: 0,
    ease: "power2.inOut",
    y: 20,

}).to('.typingQoute', {
    duration: 3,
    text: word,
}).from(".header_timeline_1", {
    opacity: 0,
    y: 20,
    stagger: .2,
})
/*
gsap.to('.nav_logo', {
    scrollTrigger: {
        scrub: 1
    },
    y: 0,
    opacity: 1

}) */


$(".slider").slick({
    dots: true,
    centerMode: false,

    centrPadding: "400px",
    infinite: true,
    arrows: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    swipeToSlide: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                infinite: true,
                arrows: true,
                dots: true,
            },
        },
        {
            breakpoint: 789,
            settings: {
                centrPadding: "0",
                centerMode: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
            },
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ],
});
//break



let text = new SplitType('.motion')
let character = document.querySelectorAll('.char')
/* for (let i = 0; i < character.length; i++) {
    character[i].classList.add('translate-y-full')
} */
gsap.from(".char", {
    scrollTrigger: {
        trigger: ".motion"
    },
    opacity: 0,
    y: 20,
    stagger: .2,
    duration: .2,
})
