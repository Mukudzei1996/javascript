$(document).ready(function() {
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    var currentYear = currentDate.getFullYear();

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthName = months[currentMonth];

    if (currentMonth === 11) {
        $("#slogan").after("<h3>Happy Holidays!</h3>");
    }

    $("#month").text("Tips for " + monthName);
    $("#copy").append(currentYear);

    var specials = [
        "Winter Specials: Snowdrops and Winter Jasmine - 20% off!",
        "Spring Specials: Tulips and Daffodils - Buy 2, get 1 free!",
        "Summer Specials: Roses and Sunflowers - Half price!",
        "Fall Specials: Mums and Pansies - Great deals on fall colors!"
    ];

    $("#specials p").text(specials[0]); //default to winter 

    var tips = [
        "Winter Tips: Protect plants from frost and ice.",
        "Spring Tips: Time to plant bulbs and flowering trees.",
        "Summer Tips: Water frequently and prune for best blooms.",
        "Fall Tips: Prepare for cooler weather and plant fall flowers."
    ];

    var season = "";
    var backgroundImage = "";
    var seasonColor = "";
    var seasonIndex = 0;

    switch (currentMonth) {
        case 11: // December
        case 0: // January
        case 1: // February
            season = "Winter";
            backgroundImage = "winterbg.jpg";
            seasonColor = "#00f";
            seasonIndex = 0;
            $("#specials p").text(specials[0]);
            break;
        case 2: // March
        case 3: // April
        case 4: // May
            season = "Spring";
            backgroundImage = "springbg.jpg";
            seasonColor = "#d7d";
            seasonIndex = 1;
            $("#specials p").text(specials[1]);
            break;
        case 5: // June
        case 6: // July
        case 7: // August
            season = "Summer";
            backgroundImage = "summerbg.jpg";
            seasonColor = "#006400";
            seasonIndex = 2;
            $("#specials p").text(specials[2]);
            break;
        case 8: // September
        case 9: // October
        case 10: // November
            season = "Fall";
            backgroundImage = "fallbg.jpg";
            seasonColor = "#930";
            seasonIndex = 3;
            $("#specials p").text(specials[3]);
            break;
    }

    $("body").css("background-image", "url(" + backgroundImage + ")");
    $("#seasontips p").text(tips[seasonIndex]);
    $("strong, h1, h2, h3").css("color", seasonColor);
    $("#specials").addClass(season);

});