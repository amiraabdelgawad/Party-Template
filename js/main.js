/*********************************home section*********************************/
$(document).ready(function () {
    $("#loading .spinner").fadeOut(800, () => {
        $("#loading .spinner")
        .parent()
        .fadeOut(800, () => {
            $("#loading").remove();
            $("body").css("overflow", "auto");
        });
    });
});
$("#openBtn").click(function () {
    $(".header-content").css("marginLeft", "250px");
    $("#sideNav").css("width", "250px").css("transition", "all 0.5s");
    $("#sideNav a").css("display", "block");
    });

$(".closeIcon").click(function () {
    $(".header-content").css("marginLeft", "0px");
    $("#sideNav").css("width", "0").css("transition", "all 0.5s");
    $("#sideNav a").css("display", "none");
});

/*****sidenav*****/
$(".my-link").click(function (e) {
    let Href = $(e.target).attr("href");
    let offsetTop = $(Href).offset().top;
    $("body,html").animate({ scrollTop: offsetTop -50 }, 1500);
});


/*********************************details section*********************************/

$("#details h3").click(function (e) {
    $(e.target).next().slideToggle(500);
    $("#details p").not($(e.target).next()).slideUp(500);
});

/*********************************duration section*********************************/
function calcTime() {
    let myDate = new Date("Dec 30, 2021 01:00:00");
    let currentDate = new Date();
    let difference = myDate - currentDate;

    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    $("#days").text(days + "d");
    $("#hours").text(hours + "h");
    $("#mins").text(minutes + "m");
    $("#secs").text(seconds + "s");
}

setInterval(() => {
calcTime();
}, 1000);

/*********************************contact section*********************************/
let counter = Number($(".counter").html());
$("#textarea").keypress(function () {
    if (counter <= 1) {
        $(".counter").html("your available character finished");
        if (counter == 1) {
        counter--;
        }
    } else {
        counter--;
        $(".counter").html(counter);
    }
});

$("#textarea").keydown(function (e) {
    if (e.code == "Backspace" && counter < 100) {
        counter++;
        $(".counter").html(counter);
    }
});


