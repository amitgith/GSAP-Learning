import "./style.css";
import { gsap } from "gsap";
// gsap.to(".box", { x: 900, duration: 2 });
// const box = document.querySelectorAll(".box")

gsap.to(["#boxId1","#boxId2","#boxId3"], {
  x: 500, //move 300px right
  rotation: 360, // spin a full turn
  duration: 2, //over 2 seconds
  ease: "power2.out",
});
