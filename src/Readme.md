### 🎯 Practice - Part 0

1. Create a blank HTML file, load GSAP from the CDN, and animate a `<div>` 300px to the right over 2 seconds. Open it in a browser and confirm it works.
2. In your own words, write down two situations where you'd reach for GSAP instead of a CSS `transition`.
   <!-- Jab animation thoda complex ho aur multiple cheezein ek saath ya sequence mein animate karni ho. -->
   <!-- Jab animation scroll ya user ke action ke according control karni ho aur CSS transition se easily manage na ho. -->
3. True or false: as of 2026, you need a paid membership to use ScrollTrigger. (Explain your answer.)
<!-- 2026 mein ScrollTrigger use karne ke liye paid membership ki zarurat nahi hai. GSAP aur ScrollTrigger free mein use kiye ja sakte hain. -->

🎯 Practice - Part 1

1. Animate a box to() x: 400, rotation: 720 over 3 seconds with ease: "bounce.out".
2. Rewrite the same animation using from() instead of to(). What visually changes?
3. Use fromTo() to animate an element's opacity from 0 to 1 and scale from 0.5 to 1, over 1 second.
4. Create a plain object { score: 0 } and tween its score to 500 over 3 seconds, logging the rounded value on every update.
5. What's the difference between x: "+=50" and x: 50?

🎯 Practice — Part 2

1. Build a timeline that animates 3 boxes in sequence, then adjust the second tween to start =0.2 seconds early so they slightly overlap.
2. Add a label "reveal" to a timeline, then make a 4th tween start exactly at that label.
3. Animate 12 grid items (display: grid) with a 2D stagger using grid: "auto", from: "center". Compare it visually to from: "start".
4. Create an infinitely rotating loader using repeat: -1 and ease: "linear".
5. Build a paused timeline and wire up your own Play / Pause / Reverse buttons that call .play(), .pause(), .reverse().

### 🎯 Practice — Part 3

1. Build a section that fades and slides in a `<h2>` the first time it scrolls into view, using `toggleActions: "play none none reverse"`.
2. Build a pinned section (`pin: true`) that stays fixed for `+=800` pixels of scroll while an image scales from 1 to 1.5 via `scrub: 1`.
3. Use `ScrollTrigger.batch()` to stagger-reveal a list of 20 items as they scroll into view, instead of writing 20 separate triggers.
4. Add `markers: true` to any of the above, scroll the page, and describe in your own words what the start/end lines represent.
