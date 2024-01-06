let arr = [
  "./imgs/hero-slider-one.webp",
  "./imgs/hero-slider-two.webp",
  "./imgs/hero-slider-three.webp",
];
let count = 0;
$(".swiper-pagination-bullet").on("click", function () {
  // console.log(this);
  count = $(this).attr("tabindex");
  $(".swiper-pagination-bullet").removeClass("swiper");
  $(this).addClass("swiper");
  // console.log($(this).attr("tabindex"));
  $(".hero").css({
    "background-image": `url(${arr[$(this).attr("tabindex")]}) `,
  });
});
// console.log($($(".swiper-pagination-bullet")[0]).attr("tabindex"));

window.setInterval(() => {
  // console.log($($(".swiper-pagination-bullet")[count]).attr("tabindex"));
  if (count == 3) {
    // console.log($($(".swiper-pagination-bullet")[count]).attr("tabindex"));
    count = 0;
    $(".hero").css({
      "background-image": `url(${arr[count]}) `,
    });
    // console.log(count);
  }
  $(".hero").css({
    "background-image": `url(${arr[count]}) `,
  });
  // console.log($(`.swiper-pagination-bullet[ tabindex=${count}]`));
  $($(`.swiper-pagination-bullet`)).removeClass("swiper");
  $($(`.swiper-pagination-bullet[ tabindex=${count}]`)).addClass("swiper");
  // console.log(count);
  count++;
}, 3000);
// console.log($("#day"));
let second = 60;
let minutes = 49;
let hours = 13;
let days = 358;
window.setInterval(() => {
  second--;
  if (second == 0) {
    minutes--;
    second = 60;
    $("#second").text(`${second}`);
    $("#minute").text(`${minutes}`);
    $("#hour").text(`${hours}`);
    $("#day").text(`${days}`);
  }
  if (minutes == 0) {
    minutes = 60;
    hours--;
    $("#second").text(`${second}`);
    $("#minute").text(`${minutes}`);
    $("#hour").text(`${hours}`);
    $("#day").text(`${days}`);
  }
  if (hours == 0) {
    hours = 24;
    days--;
    $("#second").text(`${second}`);
    $("#minute").text(`${minutes}`);
    $("#hour").text(`${hours}`);
    $("#day").text(`${days}`);
  }
  if (days == 0) {
    second = 60;
    minutes = 60;
    hours = 24;
    days = 365;
    $("#second").text(`${second}`);
    $("#minute").text(`${minutes}`);
    $("#hour").text(`${hours}`);
    $("#day").text(`${days}`);
  }
  $("#second").text(`${second}`);
  $("#minute").text(`${minutes}`);
  $("#hour").text(`${hours}`);
  $("#day").text(`${days}`);
}, 1000);
$(".dropdown-btn").on("click", function () {
  $(".open-dropdown").toggle(`$(".open-dropdown").css("display", "flex")`);
});
