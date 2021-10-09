Vue.config.devtools = true;

var app = new Vue(
    {
        el: "#root",
        data: {
            progetti: [
                {
                    name: "Nike App Graphic",
                    img: "./assets/img/1.jpg",
                    link: ""
                },
                {
                    name: "Nike App Graphic",
                    img: "./assets/img/1.jpg",
                    link: ""
                },
                {
                    name: "Nike App Graphic",
                    img: "./assets/img/1.jpg",
                    link: ""
                },
                {
                    name: "Nike App Graphic",
                    img: "./assets/img/1.jpg",
                    link: ""
                }
            ],
            esperienze: [
                {
                    data: "09.2021 - ",
                    azienda: "Softec spa",
                    info: "Web Developer"
                },
                {
                    data: "02.2021 - 07.2021",
                    azienda: "Boolean srl - Jr. Full-Stack Web Developer Trainee",
                    info: "Percorso formativo full-time di 700 ore che mi ha portato ad apprendere e padroneggiare diversi strumenti di lavoro, oltre a sviluppare giorno dopo giorno web-app dalle più semplici alle più complesse."
                },
            ]
        },
        methods: {}
});

/* animazione tasto nav */
$(".logo-content > ul").mouseenter(function() {
    $(".logo-content > ul").css("width", "480px")
});

$(".logo-content > ul").mouseleave(function() {
    $(".logo-content > ul").css("width", "105px")
});



/* animations */
gsap.to("#home > .container > .title", { //from muove da destra verso sinistra
    scrollTrigger: "#home", // start the animation when "#two" enters the viewport (once)
    y: 20,
    opacity: 1,
    duration: 0.5
  });

gsap.to(".about_title", { //from muove da destra verso sinistra
    scrollTrigger: ".about_title", // start the animation when "#two" enters the viewport (once)
    y: 20,
    opacity: 1,
    duration: 1
  });

gsap.to(".progetti_title", { //from muove da destra verso sinistra
    scrollTrigger: ".progetti_title", // start the animation when "#two" enters the viewport (once)
    y: 20,
    opacity: 1,
    duration: 1
});

gsap.to(".row", { //from muove da destra verso sinistra
    scrollTrigger: ".progetti_title", // start the animation when "#two" enters the viewport (once)
    y: 20,
    opacity: 1,
    duration: 1
});

gsap.to("#skills > .container", { //from muove da destra verso sinistra
    scrollTrigger: ".skills_title", // start the animation when "#two" enters the viewport (once)
    y: 20,
    opacity: 1,
    duration: 1
});

gsap.to(".contatti_text", { //from muove da destra verso sinistra
    scrollTrigger: ".contatti_text", // start the animation when "#two" enters the viewport (once)
    y: 20,
    opacity: 1,
    duration: 1
});

gsap.to(".others", { //from muove da destra verso sinistra
    scrollTrigger: ".contatti_text", // start the animation when "#two" enters the viewport (once)
    y: 20,
    opacity: 1,
    duration: 1
});