var menu = document.querySelector(".homep .navbar #menu")
var list = document.querySelector(".homep .navbar .list ul")
menu.addEventListener("click",function(){
    list.classList.toggle("show")
})


const backgroundContainer = document.getElementById("background-container")
const images = [
  "url('./assets/images/bg1.png')",
  "url('./assets/images/bg2.png')",
]
let currentImageIndex = 0

function changeBackground() {
  currentImageIndex = (currentImageIndex + 1) % images.length
  backgroundContainer.style.backgroundImage = images[currentImageIndex]
}

setInterval(changeBackground, 5000)

changeBackground()




function toggle(){
    var divDoctor = document.getElementById("doctor-show")
    if (divDoctor.style.display === "flex"){
        divDoctor.style.display = "none"
    } else {
        divDoctor.style.display = "flex"
    }
}


function show(){
    document.getElementById("result-form").innerHTML = "Thank You for your reservation , we will call you Later !"
}