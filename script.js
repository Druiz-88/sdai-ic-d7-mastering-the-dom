// Write your JavaScipt code below this line. 
const mainTitle = document.getElementById("main-title")
mainTitle.textContent = "I Really Dislike Cats and Do Not want to do This"
const description = document.getElementById("description")
description.textContent = "Cats are the worst"

const cat1button = document.getElementById("cat-1-button")
cat1button.addEventListener("click", () => {
    const cat = document.getElementById("cat-1")
    alert("Goodbye Dumb Cat")
    cat.remove()
})

const cat2button = document.getElementById("cat-2-button")
cat2button.addEventListener("click", () => {
    const cat = document.getElementById("cat-2")
    alert("Goodbye Dumb Cat")
    cat.remove()
})

const cat3button = document.getElementById("cat-3-button")
cat3button.addEventListener("click", () => {
    const cat = document.getElementById("cat-3")
    alert("Goodbye Dumb Cat")
    cat.remove()
})