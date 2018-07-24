var ranNum = Math.floor(Math.random() * 120) + 19;
var totalScore = 0;
var wins = 0;
var losses = 0;


function ranNumFun() {
    num = Math.floor(Math.random() * 12) + 1;
    return num;
    //  console.log(num);
}

function startGame() {
    function ranNumFun() {
        num = Math.floor(Math.random() * 12) + 1;
        return num;
        //  console.log(num);
    }

    var crystalBlueValue = ranNumFun();
    var crystalGreenValue = ranNumFun();
    var crystalRedValue = ranNumFun();
    var crystalYellowValue = ranNumFun();

    $("#buttonBlue").append(crystalBlueValue);
    $("#buttonGreen").append(crystalGreenValue);
    $("#buttonRed").append(crystalRedValue);
    $("#buttonYellow").append(crystalYellowValue);

    $("#scoreBox").text(ranNum);

    $("#buttonBlue").on("click", function () {
        console.log(crystalBlueValue);
        totalScore += crystalBlueValue;
        $("#ttlScore").text(totalScore);
        checkScore();
    });

    $("#buttonGreen").on("click", function () {
        totalScore += crystalGreenValue;
        console.log(crystalGreenValue);
        $("#ttlScore").text(totalScore);
        checkScore();
    });

    $("#buttonRed").on("click", function () {
        totalScore += crystalRedValue;
        console.log(crystalRedValue);
        $("#ttlScore").text(totalScore);
        checkScore();
    });

    $("#buttonYellow").on("click", function () {
        totalScore += crystalYellowValue;
        console.log(crystalYellowValue);
        $("#ttlScore").text(totalScore);
        checkScore();

    });
}

function checkScore() {
    if (totalScore === ranNum) {
        alert("You WIN");
        wins += 1;
        $("#gameWins").text("WINS: " + wins);

        startGame();
    }
    else if (totalScore > ranNum) {
        alert("You LOSE");
        losses += 1;
        startGame();
        $("#gameLosses").text("LOSSES: " + losses);

    }
}

window.onload(startGame())