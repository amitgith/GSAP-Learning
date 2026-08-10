import "./style.css";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// scrolltrigger
// gsap.to(".box", {
//   x: 600,
//   duration: 1.5,
//   ease: "power4.out",
//   scrollTrigger: {
//     trigger: ".box",
//     start: "center 50%",
//     end: "bottom top",
//     onEnter: () => console.log("entered"),
//     onLeave: () => console.log("left, scrolling down"),
//     onEnterBack: () => console.log("re-entered, scrolling up"),
//     onLeaveBack: () => console.log("left, scrolling up"),
//     markers: true,
//   },
// });
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

// //     btn.addEventListener("mouseleave", () => {
// //       gsap.to(btn, {
// //         boxShadow: "0 0 0px rgba(0, 150, 255, 0)",
// //         duration: 0.3,
// //         ease: "power2.in",
// //       });
// //     });
// //   }

// //   if (btn.classList.contains("btn--wiggle")) {
// //     btn.addEventListener("mouseenter", () => {
// //       gsap.to(btn, {
// //         rotation: 8,
// //         duration: 0.1,
// //         repeat: 3,
// //         yoyo: true,
// //         ease: "power1.inOut",
// //       });
// //     });

// //     btn.addEventListener("mouseleave", () => {
// //       gsap.to(btn, {
// //         rotation: 0,
// //         duration: 0.2,
// //         ease: "power2.out",
// //       });
// //     });
// //   }
// // });

// // import { CustomEase } from "gsap/CustomEase";
// // gsap.registerPlugin(CustomEase);

// // CustomEase.create(
// //   "myEase",
// //   "M0,0 C0.126,0.382 0.282,0.674 0.44,0.822 0.632,1.002 0.818,1 1,1",
// // );
// // gsap.to(".box", { x: 300, ease: "myEase" });

// // gsap.to(".box", {
// //   y: 50,
// //   duration: 1.5,
// //   delay: 2,
// //   ease: "power1.out",
// //   // stagger: 1.4,
// //   // stagger: -1.4,
// //   stagger: {
// //     each: 0.4,
// //     // from: "center",
// //     // from: "edges",
// //     // from: "end",
// //     // from: "random",
// //     // from: "start",
// //     // from: "4", //index
// //     grid: "auto",
// //   },
// // });

// const tl = gsap.timeline({ paused: true });
// tl.to(
//   ".box1",
//   {
//     x: 900,
//     duration: 1,
//     delay: 2,
//     ease: "power3.out",
//   },
//   "amit",
// )
//   .to(
//     ".box2",
//     {
//       x: 900,
//       duration: 1,
//       delay: 2,
//       ease: "power3.out",
//     },
//     "<",
//   )
//   .to(
//     ".box3",
//     {
//       x: 900,
//       duration: 1,
//       delay: 2,
//       ease: "power3.out",
//     },
//     0,
//   )
//   .to(
//     ".box4",
//     {
//       x: 900,
//       duration: 1,
//       delay: 2,
//       ease: "power3.out",
//     },
//     "-=3",
//   )
//   .to(
//     ".box5",
//     {
//       x: 900,
//       duration: 1,
//       delay: 2,
//       ease: "power3.out",
//     },
//     "amit",
//   );
// setTimeout(() => {
//   tl.play();
// }, 4000);
// setTimeout(() => {
//   tl.play();
// }, 4000);
// setTimeout(() => {
//   tl.play();
// }, 4000);

// 🎯 Practice — Part 2

// 1. Build a timeline that animates 3 boxes in sequence, then adjust the second tween to start =0.2 seconds early so they slightly overlap.

// const t1 = gsap.timeline();
// t1.to(".box1", {
//   x: 900,
//   duration: 1,
//   ease: "power3.out",
// })
//   .to(
//     ".box2",
//     {
//       x: 900,
//       duration: 0.2,
//       ease: "power3.out",
//     },
//     "-=0.2",
//   )
//   .to(".box3", {
//     x: 900,
//     duration: 0.2,
//     ease: "power3.out",
//   });

// 2. Add a label "reveal" to a timeline, then make a 4th tween start exactly at that label.
// const t1 = gsap.timeline();
// t1.to(".box1", { x: 900, duration: 1, ease: "power3.out" })
//   .to(
//     ".box2",
//     {
//       x: 900,
//       duration: 1,
//       ease: "power3.out",
//     },
//     "reveal",
//   )
//   .to(".box3", { x: 900, duration: 1, ease: "power3.out" })
//   .to(".box4", { x: 900, duration: 1, ease: "power3.out" }, "reveal");

// 3. Animate 12 grid items (display: grid) with a 2D stagger using grid: "auto", from: "center". Compare it visually to from: "start".

// gsap.to(".box", {
//   y: 40,
//   duration: 1,
//   stagger: {
//     each: 0.8,
//     // from: "center",
//     from: "start",
//     grid: "auto",
//   },
//   ease: "power2.out",
// });

// 4. Create an infinitely rotating loader using repeat: -1 and ease: "linear".
// gsap.to(".box", {
//   duration: 1,
//   rotation: 360,
//   repeat: -1,
//   ease: "linear",
// });
// 5. Build a paused timeline and wire up your own Play / Pause / Reverse buttons that call .play(), .pause(), .reverse().

// const tl = gsap.timeline({ paused: true });
// tl.to(".box", {
//   duration: 1,
//   rotation: 360,
//   repeat: -1,
//   ease: "linear",
// });

// const playBtn = document.querySelector("#play");
// playBtn.addEventListener("click", () => {
//   tl.play();
// });

// document.querySelector("#pause").addEventListener("click", () => {
//   tl.pause();
// });

// document.querySelector("#reverse").addEventListener("click", () => {
//   tl.reverse();
// });

// loading logic
// const obj = {
//   value: 0,
// };

// const counter = document.querySelector(".loader-count h2");

// gsap.to(obj, {
//   value: 100,
//   duration: 1.7,
//   ease: "none",
//   onUpdate: () => {
//     counter.textContent = `${Math.round(obj.value)}%`;
//   },
//   onComplete: () => {
//     gsap.to(counter, {
//       opacity: 0,
//       duration: 1.2,
//       ease: "power3.out",
//       onComplete: () => {
//         tl.play();
//       },
//     });
//   },
// });

// // hero section
// const tl = gsap.timeline({ paused: true });

// //text hidden
// gsap.set([".heading h1", ".sub-heading p"], {
//   yPercent: 110,
// });

// tl.to(".loader", {
//   yPercent: 100,
//   duration: 1.2,
//   ease: "expo.out",
// })
//   .from(
//     ".hero-bg img",
//     {
//       scale: 1.5,
//       duration: 1.23,
//       ease: "expo.out",
//     },
//     "-=1.1",
//   )
//   .to(
//     ".heading h1",
//     {
//       yPercent: 0,
//       duration: 1.1,
//       ease: "power3.out",
//     },
//     "-=0.9",
//   )
//   .to(
//     ".sub-heading p",
//     {
//       yPercent: 0,
//       duration: 1.1,
//       ease: "power3.out",
//     },
//     "-=0.8",
//   );

// ### 🎯 Practice — Part 3

// 1. Build a section that fades and slides in a `<h2>` the first time it scrolls into view, using `toggleActions: "play none none reverse"`.
// gsap.fromTo(
//   ".heading",
//   {
//     opacity: 0,
//     y: 100,
//   },
//   {
//     opacity: 1,
//     y: 0,
//     duration: 1,
//     ease: "power3.out",

//     scrollTrigger: {
//       trigger: ".heading",
//       start: "top 80%",
//       toggleActions: "play none none reverse",
//       markers: true,
//     },
//   },
// );
// 2. Build a pinned section (`pin: true`) that stays fixed for `+=800` pixels of scroll while an image scales from 1 to 1.5 via `scrub: 1`.

// 3. Use `ScrollTrigger.batch()` to stagger-reveal a list of 20 items as they scroll into view, instead of writing 20 separate triggers.
// 4. Add `markers: true` to any of the above, scroll the page, and describe in your own words what the start/end lines represent.

gsap.set(".img-div img", {
  clipPath: "inset(20% 20% 25% 25%)",
});

gsap.to(".img-div img", {
  clipPath: "inset(0% 0% 0% 0%)",
  scale: 1,
  scrollTrigger: {
    trigger: ".scroll-element",
    start: "top top",
    end: "bottom top",
    pin: true,
    scrub: true,
  },
});
