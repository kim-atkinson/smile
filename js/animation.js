const animatedTags = document.querySelectorAll("h2, h3, p, section img, a.button")

// Fade out on load
animatedTags.forEach(tag => {
    tag.style.opacity = 0
})

const fadeIn = function  () {
// Loop through all theanimated tags and see 
// With the getBoundingClientRect if it's in the window

let delay = 0.25

animatedTags.forEach(tag => {
    const tagTop = tag.getBoundingClientRect().top
    const tagBottom =  tag.getBoundingClientRect().bottom
    console.log(tagTop, tagBottom)

    if (tagTop < window.innerHeight) {
        tag.style.animation = `fadein 1s ${delay}s both`
        delay = delay + 0.25
    }
})
}

// On load run fade in
fadeIn()

// On scroll, run fadeIn
document.addEventListener("scroll", function () {
    fadeIn()
})

// On browser resize, run fadeIn
window.addEventListener("resize", function () {
    fadeIn()
})