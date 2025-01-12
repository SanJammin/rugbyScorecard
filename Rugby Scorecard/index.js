let guestPoint = document.getElementById("guest-score");
let homePoint = document.getElementById("home-score");
let homeTeam = document.getElementById("home-team");
let guestTeam = document.getElementById("guest-team")

let homeScore = 0;
let guestScore = 0;

function updateLeader() {
    if (homeScore > guestScore) {
        homeTeam.style.textDecoration = "underline solid #FCD34D";
        guestTeam.style.textDecoration = "none";
    } else if (homeScore < guestScore) {
        guestTeam.style.textDecoration = "underline solid #FCD34D";
        homeTeam.style.textDecoration = "none";
    } else if (homeScore === guestScore){
        homeTeam.style.textDecoration = "none";
        guestTeam.style.textDecoration = "none";
    }
}

function homePlusTwo() {
    homeScore += 2;
    homePoint.textContent = homeScore;
    updateLeader();
}

function homePlusThree() {
    homeScore += 3;
    homePoint.textContent = homeScore;
    updateLeader();
}

function homePlusFive() {
    homeScore += 5;
    homePoint.textContent = homeScore;
    updateLeader();
    
}

function guestPlusTwo() {
    guestScore += 2;
    guestPoint.textContent = guestScore;
    updateLeader();
    
}

function guestPlusThree() {
    guestScore += 3;
    guestPoint.textContent = guestScore;
    updateLeader();
    
}

function guestPlusFive() {
    guestScore += 5;
    guestPoint.textContent = guestScore;
    updateLeader();
    
}

function newGame() {
    homeScore = 0;
    guestScore = 0;
    homePoint.textContent = homeScore;
    guestPoint.textContent = guestScore;
    updateLeader();
}

