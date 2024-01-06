let arr = [
  "./imgs/hero-slider-one.webp",
  "./imgs/hero-slider-two.webp",
  "./imgs/hero-slider-three.webp",
];
$(".swiper-pagination-bullet").on("click", function () {
  console.log(this);

  $(".swiper-pagination-bullet").removeClass("swiper");
  $(this).addClass("swiper");
  // console.log($(this).attr("tabindex"));
  $(".hero").css({
    "background-image": `url(${arr[$(this).attr("tabindex")]}) `,
  });
});
let count = 0;
window.setInterval(() => {
  count++;
  if (count == 3) {
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
