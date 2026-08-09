import "./style.css";
import { gsap } from "gsap";
// gsap.to(".box", { x: 900, duration: 2 });
// const box = document.querySelectorAll(".box")

// gsap.fromTo(
//   [".box"],
//   {
//     y: 500,
//     backgroundColor: "blue",
//     duration: 8,

//   },
//   {
//     x: 500, //move 300px right
//     rotation: 360, // spin a full turn
//     duration: 2, //over 2 seconds
//     ease: "power2.out",
//     backgroundColor: "red",
//   },
// );

// gsap.set(".box", {
//   x: 200,
//   y: 200,
//   backgroundColor: "pink",
//   opacity: 0.1,
// });

// gsap.to(".box", {
//   x: 200,
//   duration: 1.5,   // seconds
//   delay: 0.3,      // wait 0.3s before starting
//   ease: "elastic.out(1, 0.4)"
// });

// 1. Animate a box to() x: 400, rotation: 720 over 3 seconds with ease: "bounce.out".
// gsap.to(".box", {
//   x: 400,
//   rotation: 720,
//   duration: 3,
//   ease: "bounce.out",
// });

// 2. Rewrite the same animation using from() instead of to(). What visually changes?
// gsap.from(".box", {
//   x: 400,
//   rotation: 720,
//   duration: 3,
//   ease: "bounce.out",
// });

// 3. Use fromTo() to animate an element's opacity from 0 to 1 and scale from 0.5 to 1, over 1 second.
// gsap.fromTo(
//   ".box",
//   {
//     opacity: 0,
//     scale: 0.5,
//   },
//   {
//     opacity: 1,
//     scale: 1,
//     duration: 1,
//   },
// );

// 4. Create a plain object { score: 0 } and tween its score to 500 over 3 seconds, logging the rounded value on every update.
// const counter = { score: 0 };
// gsap.to(counter, {
//   score: 500,
//   duration: 3,
//   onUpdate: () => console.log(Math.round(counter.score)),
// });

// 5. What's the difference between x: "+=50" and x: 50?

// gsap.to(".box", { x: "+=50" });  // Element ki current position se 50px aur right jayega.
// gsap.to(".box", { x: 50 }); // Element ko x = 50px position par le jayega.

// document.querySelectorAll(".btn").forEach((btn) => {
//   btn.addEventListener("mouseenter", () => {
//     gsap.to(btn, { scale: 1.08, duration: 0.3, ease: "back.out(2)" });
//     gsap.to(".btn--scale", {
//       boxShadow: "green",
//       backgroundColor: "blue",
//       ease: "elastic.in",
//     });
//   });
//   btn.addEventListener("mouseleave", () => {
//     gsap.to(btn, { scale: 1, duration: 0.3, ease: "power2.out" });
//   });
// });

// document.querySelectorAll(".btn").forEach((btn) => {
//   if (btn.classList.contains("btn--scale")) {
//     btn.addEventListener("mouseenter", () => {
//       gsap.to(btn, {
//         boxShadow: "0 0 25px rgba(0, 255, 76, 0.8)",
//         duration: 0.3,
//         ease: "power2.out",
//       });
//     });

//     btn.addEventListener("mouseleave", () => {
//       gsap.to(btn, {
//         boxShadow: "0 0 0px rgba(0, 150, 255, 0)",
//         duration: 0.3,
//         ease: "power2.in",
//       });
//     });
//   }
//   if (btn.classList.contains("btn--glow")) {
//     btn.addEventListener("mouseenter", () => {
//       gsap.to(btn, {
//         boxShadow: "0 0 25px rgba(0, 150, 255, 0.8)",
//         duration: 0.3,
//         ease: "power2.out",
//       });
//     });

//     btn.addEventListener("mouseleave", () => {
//       gsap.to(btn, {
//         boxShadow: "0 0 0px rgba(0, 150, 255, 0)",
//         duration: 0.3,
//         ease: "power2.in",
//       });
//     });
//   }

//   if (btn.classList.contains("btn--wiggle")) {
//     btn.addEventListener("mouseenter", () => {
//       gsap.to(btn, {
//         rotation: 8,
//         duration: 0.1,
//         repeat: 3,
//         yoyo: true,
//         ease: "power1.inOut",
//       });
//     });

//     btn.addEventListener("mouseleave", () => {
//       gsap.to(btn, {
//         rotation: 0,
//         duration: 0.2,
//         ease: "power2.out",
//       });
//     });
//   }
// });

// import { CustomEase } from "gsap/CustomEase";
// gsap.registerPlugin(CustomEase);

// CustomEase.create(
//   "myEase",
//   "M0,0 C0.126,0.382 0.282,0.674 0.44,0.822 0.632,1.002 0.818,1 1,1",
// );
// gsap.to(".box", { x: 300, ease: "myEase" });
gsap.to(".box", {
  y: 50,
  duration: 1.5,
  delay: 2,
  ease: "power1.out",
  // stagger: 1.4,
  // stagger: -1.4,
  stagger: {
    each: 0.4,
    // from: "center",
    // from: "edges",
    // from: "end",
    // from: "random",
    // from: "start",
    // from: "4", //index
    grid: "auto",
  },
});
