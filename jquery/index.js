// Syntax of JQuery---------------------------------------------------->
// $('Selector').action();

// Code Execute when document is ready
$(document).ready(function () {
    console.log("document loaded");
});

// Selectors-------------------------------------------------------------->
// Selecting Elements by ID
$("#container");

// Selecting Elements by Class
$(".container");

// Selecting Elements by Compound CSS Selector
$("#container ul li");

// Selecting Elements by Attribute
$("input[type='number']");

// Selecting Elements with a Comma-separated List of Selectors
$("div.container, ul");

// Selecting Elements by Psuedo Selector
$("form :input");
$("div:visible");

// Enter HTML in selector----------------------------------------------->
$("h1").html("Hello sir");
$(".continue").html("JQUERY");

// Set attribute of any Selector---------------------------------------->
$("a").attr("href", "https://www.google.com/");



// Set width and height of the Selector------------------------------------------------------>
$(".container").width("70vw");
$(".container").height("30vh");

// Current Position of the Selector------------------------------------------------------>
let a = $(".container").position();
console.log(a);

// Enter Text in a Selector------------------------------------------------------>
$(".container1").text("Hello Brother");

// Want to Append a element------------------------------------------------------>
$(".container1").append("<p>Append element</p>");

// Want to Remove Selector---------------------------------------------->
$("h1").remove();

// CSS Styling
$(".container1 p").css("font-size", "50px");

// Events in jQuery--------------------------------------------------------------->
// 1. mouse events = click, dblclick, mouseenter, mouseleave
// 2. keyboard events = keypress, keydown, MediakeystatusMap
// 3. form events = Submit, change, focus, blur
// 4. document/window events = load, resize, scroll, unload

$('p').click(() => {
    console.log("You clicked on p");
    $('form').hide();
});
$('p').dblclick(() => {
    console.log("You double clicked on p");
});

// Want to attach multiple event------------------------------------------------------>
$('p').on({
    "click": () => {
        console.log("Thanks for clicking");
    },
    "dblclick": () => {
        console.log("dobule click")
    }
});

// Hide and Show Method------------------------------------------------------>
// $('.container2').hide();
$('.container2').hide(1000, () => { console.log("hide"); });

// $('.container2').show();
$('.container2').show(1000, () => { console.log("show"); });

// Use of Toggle------------------------------------------------------>
$('.btn').click(() => { $('.container2').toggle(1000); })

// Use of fadeOut, fadeTo and fadeToggle------------------------------------------------------>
$('.btn1').click(() => { $('.container2').fadeOut(1000); })

$('.btn1').click(() => { $('.container2').fadeTo(1000); })

$('.btn1').click(() => { $('.container2').fadeToggle(2000); })

// Use of slideUp, slideDown and slideToggle------------------------------------------------------>
$('.container2').slideUp(1000)

$('.container2').slideDown(1000)

$('.btn2').click(() => { $('.container2').slideToggle(1000); })

// Use of Animate Function------------------------------------------------------>
$('.container2').animate({
    opacity: 0.3, width: "50%"
}, 2000)

// Want to stop animation------------------------------------------------------>
// $('.container2').stop()
// $('.container2').stop(1000)

// Use of Empty------------------------------------------------------>
// $('.container2').empty()
