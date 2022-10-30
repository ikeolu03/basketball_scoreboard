let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

let homeScore = 0
let guestScore = 0

function incrementByOne(){
    homeScore += 1
    homeEl.textContent = homeScore
}

function incrementByTwo(){
    homeScore += 2
    homeEl.textContent = homeScore
}

function incrementByThree(){
    homeScore += 3
    homeEl.textContent = homeScore
}

function GstIncrementByOne(){
    guestScore += 1
    guestEl.textContent = guestScore
}

function GstIncrementByTwo(){
    guestScore += 2
    guestEl.textContent = guestScore
}

function GstIncrementByThree(){
    guestScore += 3
    guestEl.textContent = guestScore
}