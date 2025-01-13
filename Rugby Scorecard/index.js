let awayPoint = document.getElementById("away-score");
let homePoint = document.getElementById("home-score");
let homeTeam = document.getElementById("home-team");
let awayTeam = document.getElementById("away-team");
let homeData = document.getElementById("home-data");
let awayData = document.getElementById("away-data");

let homeScore = 0;
let awayScore = 0;
let point = "";

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
    point = "Con, "
    homeScore += 2;
    homePoint.textContent = homeScore;
    updateLeader();
    homeData.textContent += point;
}

function homePlusThreePen() {
    point = "Pen, "
    homeScore += 3;
    homePoint.textContent = homeScore;
    updateLeader();
    homeData.textContent += point;
}

function homePlusThreeDrop() {
    point = "Drop, "
    homeScore += 3;
    homePoint.textContent = homeScore;
    updateLeader();
    homeData.textContent += point;
}

function homePlusFive() {
    point = "Try, "
    homeScore += 5;
    homePoint.textContent = homeScore;
    updateLeader();
    homeData.textContent += point;
    
}

function awayPlusTwo() {
    point = "Con, "
    awayScore += 2;
    awayPoint.textContent = awayScore;
    updateLeader();
    awayData.textContent += point;
    
}

function awayPlusThreePen() {
    point = "Pen, "
    awayScore += 3;
    awayPoint.textContent = awayScore;
    updateLeader();
    awayData.textContent += point;
    
}

function awayPlusThreeDrop() {
    point = "Drop, "
    awayScore += 3;
    awayPoint.textContent = awayScore;
    updateLeader();
    awayData.textContent += point;
    
}

function awayPlusFive() {
    point = "Try, "
    awayScore += 5;
    awayPoint.textContent = awayScore;
    updateLeader();
    awayData.textContent += point;
    
}

function newGame() {
    homeScore = 0;
    awayScore = 0;
    homePoint.textContent = homeScore;
    awayPoint.textContent = awayScore;
    updateLeader();
    homeData.textContent = "";
    awayData.textContent = "";
}

