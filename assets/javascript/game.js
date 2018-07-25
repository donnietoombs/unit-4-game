$(document).ready(function () {

    var ttlScore = 0;
    var ranNum = 0;
    var wins = 0;
    var losses = 0;
    var cBlue = 0;
    var cGreen = 0;
    var cRed = 0;
    var cYellow = 0;

    var ranNumFun = function () {
        num = Math.floor(Math.random() * 12) + 1;
        return num;
    }

    var sGame = function () {

        cBlue = ranNumFun();
        cGreen = ranNumFun();
        cRed = ranNumFun();
        cYellow = ranNumFun();

        ranNum = Math.floor((Math.random() * 120) + 19);
        $("#scoreBox").text(ranNum);

        ttlScore = 0
        $("#ttlScore").text(" " + ttlScore);

        $("#blueValue").text(cBlue);
        $("#greenValue").text(cGreen);
        $("#redValue").text(cRed);
        $("#yellowValue").text(cYellow);
    };

    sGame();

    $("#redcrystal").click(function () {
        ttlScore += cRed;
        $("#ttlScore").text(ttlScore);
        chkScore();
    });

    $("#bluecrystal").click(function () {
        ttlScore += cBlue;
        $("#ttlScore").text(ttlScore);
        chkScore();
    });

    $("#yellowcrystal").click(function () {
        ttlScore += cYellow;
        $("#ttlScore").text(ttlScore);
        chkScore();
    });

    $("#greencrystal").click(function () {
        ttlScore += cGreen;
        $("#ttlScore").text(ttlScore);
        chkScore();
    });


    var chkScore = function () {
        if (ttlScore > ranNum) {
            alert("YOU BUSTED. TRY AGAIN");
            losses += 1;
            $("#gameLosses").text("LOSSES: " + losses);
            sGame();

        }
        if (ttlScore === ranNum) {
            alert("WINNER! GOOD JOB");
            wins += 1;
            $("#gameWins").text("WINS: " + wins);
            sGame();
        }
    };


});