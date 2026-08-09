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
