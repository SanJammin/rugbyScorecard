let awayPoint = document.getElementById("away-score");
let homePoint = document.getElementById("home-score");
let homeTeam = document.getElementById("home-team");
let awayTeam = document.getElementById("away-team")

let homeScore = 0;
let awayScore = 0;

function updateLeader() {
    if (homeScore > awayScore) {
        homeTeam.style.textDecoration = "underline solid #FCD34D";
        awayTeam.style.textDecoration = "none";
    } else if (homeScore < awayScore) {
        awayTeam.style.textDecoration = "underline solid #FCD34D";
        homeTeam.style.textDecoration = "none";
    } else if (homeScore === awayScore){
        homeTeam.style.textDecoration = "none";
        awayTeam.style.textDecoration = "none";
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

function awayPlusTwo() {
    awayScore += 2;
    awayPoint.textContent = awayScore;
    updateLeader();
    
}

function awayPlusThree() {
    awayScore += 3;
    awayPoint.textContent = awayScore;
    updateLeader();
    
}

function awayPlusFive() {
    awayScore += 5;
    awayPoint.textContent = awayScore;
    updateLeader();
    
}

function newGame() {
    homeScore = 0;
    awayScore = 0;
    homePoint.textContent = homeScore;
    awayPoint.textContent = awayScore;
    updateLeader();
}

