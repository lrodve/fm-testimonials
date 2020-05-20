const $prev = document.querySelector("#prev")
const $next = document.querySelector("#next")
const $photo = document.querySelector(".card_image")
const $aboutText = document.querySelector(".about_text")
const $aboutName = document.querySelector(".about_name")
const $aboutPosition = document.querySelector(".about_position")


const people = [
    {
        photo : "./images/image-tanya.jpg",
        aboutText : `"I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future."`,
        aboutName :"Tanya Sinclair",
        aboutPosition :"UX Engineer"
    },
    {
        photo : "./images/image-john.jpg",
        aboutText: `"If you want tio lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about staring up as a professional developer"`,
        aboutName: "Jonh Tarkpor",
        aboutPosition : "Junior Front-end Developer"
    }
]

function slider({photo, aboutText, aboutName, aboutPosition}){
    $photo.src = photo
    $aboutText.textContent = aboutText
    $aboutName.textContent = aboutName
    $aboutPosition.textContent = aboutPosition
}

$prev.addEventListener("click", e => {
    e.preventDefault()
    slider(people[0])
    
})

$next.addEventListener("click", e => {
    e.preventDefault()
    slider(people[1])
})

document.addEventListener("keydown", e => {
  if(e.key == "ArrowLeft"){
    slider(people[0])
  }

  if(e.key == "ArrowRight"){
    slider(people[1])
  }
  
})

