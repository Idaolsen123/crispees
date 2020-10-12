const sections =
    document.querySelectorAll("section");

section.forEach((section) => {
    const divs =
        section.querySelectorAll("div");

    gsap.from(divs, {
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 1,
        scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "center center",
            markers: true,
            scrub: true,
        }
    })
})
