const $prev = document.querySelector("#prev")
const $next = document.querySelector("#next")
const $photo = document.querySelector(".card_image")
const $aboutText = document.querySelector(".about_text")
const $aboutName = document.querySelector(".about_name")
const $aboutPosition = document.querySelector(".about_position")

$prev.addEventListener("click", e => {
    e.preventDefault()
    $photo.src ="./images/image-tanya.jpg"
    $aboutText.textContent = "I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future." 
    $aboutName.textContent = "Tanya Sinclair"
    $aboutPosition.textContent = "UX Engineer"
    
})

$next.addEventListener("click", e => {
    e.preventDefault()
    $photo.src ="./images/image-john.jpg"
    $aboutText.textContent = "If you want tio lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about staring up as a professional developer"
    $aboutName.textContent = "Jonh Tarkpor"
    $aboutPosition.textContent = "Junior Front-end Developer"
})