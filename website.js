// Navigation menu
var nav = $("#navigation a");
if (nav.length) {
  nav.on("click", function (error) {
    error.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $(this.hash).offset().top,
      },
      1000
    );
  });
}

// $('#navigation a').on('click', function (error) {
//     error.preventDefault();
//     $('html, body').animate({
//         scrollTop: $(this.hash).offset().top
//     }, 1000);
// });

$(".toggler, .nav-content a:not(#dropdown-link)").on("click", function () {
  $(".toggler").toggleClass("change");
  $(".nav-content").slideToggle();
  $("#dropdown-menu").slideUp();
  $(".menu-overlay").toggle();
});

$(".nav-content .dropdown").on("click", function () {
  $("#dropdown-menu").slideToggle();
});

$(".menu-overlay").on("click", function () {
  $(".toggler").removeClass("change");
  $(".nav-content").slideUp();
  $("#dropdown-menu").slideUp();
  $(".menu-overlay").hide();
});

//Typewriter
// set up text to print, each item in array is new line
let aText = new Array("i see no bugs in you,", "only features (´｡• ᵕ •｡`) ♡");

let iSpeed = 70; // time delay of print out
let iIndex = 0; // start printing array at this posision
let iArrLength = aText[0].length; // the length of the text array
let iScrollAt = 20; // start scrolling up at this many lines

let iTextPos = 0; // initialise text position
let sContents = ""; // initialise contents letiable
let iRow; // initialise current row

function typewriter() {
  document.getElementById("typedtext").style.visibility = "visible";

  sContents = " ";
  iRow = Math.max(0, iIndex - iScrollAt);
  let destination = document.getElementById("typedtext");

  while (iRow < iIndex) {
    sContents += aText[iRow++] + "<br />";
  }
  destination.innerHTML =
    sContents + aText[iIndex].substring(0, iTextPos) + "|";
  if (iTextPos++ == iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex != aText.length) {
      iArrLength = aText[iIndex].length;
      setTimeout("typewriter()", 100);
    }
  } else {
    setTimeout("typewriter()", iSpeed);
  }
}

setTimeout("typewriter()", 700);

// Set amount to scroll for "Scroll down" to appear/disappear

// console.log($(document).scrollTop());
let mybutton = document.getElementById("arrow_container");

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
  prevScrollpos = currentScrollPos;
};

// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
//     mybutton.style.display = "none";
//   } else {
//     mybutton.style.display = "block";
//   }
// }

// $(document).scroll(function () {
//     var y = $(this).scrollTop();
//     if (y > 800) {
//         $('.arrow_container').fadeIn();
//     } else {
//         $('.arrow_container').fadeOut();
//     }
// });

// $(window).bind('scroll', function () {
//     if ($(window).scrollTop() > document.documentElement.scrollHeight) {
//         $('.arrow_container').hide();
//     }
//     else {
//         $('.arrow_container').show();
//     }
// });

myID = document.getElementById("arrow_container");

var myScrollFunc = function () {
  var y = window.scrollY;
  if (y >= 800) {
    myID.show();
  } else {
    myID.hide();
  }
};

window.addEventListener("scroll", myScrollFunc);
