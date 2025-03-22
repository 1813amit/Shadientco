

// const locoScroll = new LocomotiveScroll({
//     el: document.querySelector("body"),
//     smooth: true
// });

document.getElementById("goToTop").addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
})


// gsap.registerPlugin();

// window.onload = () => {
//   const card = document.querySelector('#hero-section');
//   const title = document.querySelector('#hero-section .hero .title');
//   const description = document.querySelector('.hero-section .hero .description');

//   // Split text into words BEFORE animations
//   const titleWords = title.innerText.split(" ");
//   title.innerHTML = titleWords.map(word => `<span class="word">${word}</span>`).join(" ");

//   const descWords = description.innerText.split(" ");
//   description.innerHTML = descWords.map(word => `<span class="word">${word}</span>`).join(" ");

//   const titleSpans = document.querySelectorAll(".hero .title .word");
//   const descSpans = document.querySelectorAll(".hero .description .word");

//   // Initially hide only the words (not the whole title/description)
//   gsap.set(titleSpans, { opacity: 0, y: 20 });
//   gsap.set(descSpans, { opacity: 0, y: 20 });

//   // Create a timeline
//   const tl = gsap.timeline();
//   gsap.from(".heading", {
//     opacity: 0,
//     y: 50,
//     duration: 4,
//     ease: "power3.out"
// });

//   tl.to("#hero-section", {
//     // y: "50%", 
//     duration: 1,
//     width: '70%',
//     height: '70%',
//     stagger:2,
//     ease: Expo.easeinout
//   })
 
//   .to(titleSpans, {
//     opacity: 1,
//     y: 0,
//     stagger: 0.15,
//     duration: 1,
//     ease: "power3.out"
//   })
//   .to(descSpans, {
//     opacity: 1,
//     y: 0,
//     stagger: 0.15,
//     duration: 0.8,
//     ease: "power3.out"
//   }, "-=0.5")
// }




// gsap.registerPlugin();

// window.onload = () => {
//   const card = document.querySelector('.card');
//   const title = document.querySelector('.title');
//   const description = document.querySelector('.description');

//   // Split text into words BEFORE animations
//   const titleWords = title.innerText.split(" ");
//   title.innerHTML = titleWords.map(word => `<span class="word">${word}</span>`).join(" ");

//   const descWords = description.innerText.split(" ");
//   description.innerHTML = descWords.map(word => `<span class="word">${word}</span>`).join(" ");

//   const titleSpans = document.querySelectorAll(".card .title .word");
//   const descSpans = document.querySelectorAll(".card .description .word");

//   // Initially hide only the words (not the whole title/description)
//   gsap.set(titleSpans, { opacity: 0, y: 20 });
//   gsap.set(descSpans, { opacity: 0, y: 20 });

//   // Create a timeline
//   const tl = gsap.timeline();

//   tl.to(card, {
//     y: "-50%", 
//     opacity: 1,
//     duration: 1.5,
//     ease: "power3.out"
//   })
//   .to(card, {
//     width: '70%',
//     height: '70%',
//     duration: 1,
//     ease: "power3.out"
//   })
//   .to(titleSpans, {
//     opacity: 1,
//     y: 0,
//     stagger: 0.15,
//     duration: 1,
//     ease: "power3.out"
//   })
//   .to(descSpans, {
//     opacity: 1,
//     y: 0,
//     stagger: 0.15,
//     duration: 0.8,
//     ease: "power3.out"
//   }, "-=0.5"); // Overlap animation for a smoother effect
// };


const menuBtn = document.querySelector(".containers .menu-div");
const exitBtn = document.querySelector(".exit");

let t1 = gsap.timeline({ paused: true });
t1.to(".menu", { opacity: 1, duration: 1, top: 0, ease: Power2.easeInOut });
t1.to(
    ".nav",
    {
        opacity: 1,
        marginBottom: 0,
        duration: 1,
        ease: Power2.easeInOut,
        stagger: 0.3,
    },
    ">-0.5"
);

menuBtn.addEventListener("click", () => {
    t1.play().timeScale(1);
});

document.querySelector(".closebtn").addEventListener("click",()=>{
  t1.timeScale(2.5);
  t1.reverse();
})

