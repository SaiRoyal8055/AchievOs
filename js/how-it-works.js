(function() {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.error("GSAP/ScrollTrigger not loaded");
    return;
  }
  gsap.registerPlugin(ScrollTrigger);

  document.addEventListener("DOMContentLoaded", () => {
    const hiw = document.querySelector(".how-it-works");
    console.log("how-it-works.js loaded, section found:", hiw);
    if (!hiw) {
      console.error("Could not find .how-it-works — check the class name in your HTML");
      return;
    }

    // Prep connector lines for draw-in effect
    document.querySelectorAll(".how-it-works .connector path").forEach(path => {
      const len = path.getTotalLength();
      path.style.strokeDasharray = len;
      path.style.strokeDashoffset = len;
    });

    // Initial hidden states
    gsap.set(".how-it-works .connector polygon", { opacity: 0 });
    gsap.set(".how-it-works .bolt", { opacity: 0, scale: 0 });
    gsap.set(".how-it-works .step-row .card", { opacity: 0, y: 60 });
    gsap.set(".how-it-works .step-num", { opacity: 0, scale: 0.5 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hiw,
        start: "top 80%",
        end: "bottom 40%",
        scrub: 1 // ties animation progress directly to scroll position
        // markers: true, // uncomment to see start/end lines on the page while testing
      }
    });

    const rows = gsap.utils.toArray(".how-it-works .step-row");
    const connectors = gsap.utils.toArray(".how-it-works .connector");

    rows.forEach((row, i) => {
      const rowStart = i * 0.9; // fixed, non-compounding start time per row
                                 // lower this (e.g. 0.6) to bring cards in sooner

      tl.to(row.querySelector(".step-num"), {
        opacity: 1, scale: 1, duration: 0.35, ease: "back.out(2)"
      }, rowStart);

      tl.to(row.querySelector(".card"), {
        opacity: 1, y: 0, duration: 0.5, ease: "power3.out"
      }, rowStart + 0.08);

      const connector = connectors[i];
      if (connector) {
        const path = connector.querySelector("path");
        const arrow = connector.querySelector("polygon");
        const bolt = connector.querySelector(".bolt");

        tl.to(path, {
          strokeDashoffset: 0,
          duration: 0.55,
          ease: "power2.inOut"
        }, rowStart + 0.35);

        tl.to(arrow, { opacity: 1, duration: 0.18 }, rowStart + 0.7);
        tl.to(bolt, { opacity: 1, scale: 1, duration: 0.35, ease: "back.out(3)" }, rowStart + 0.7);
      }
    });
  });
})();