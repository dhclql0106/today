console.clear();

function FloorInfoBox__init() {
  $(".floor-info-box > ul > li").click(function () {
    const $this = $(this);

    // v1 : 클릭한 녀석의 부모의 자식에게 명령

    // $this.parent().find(" > .active").removeClass("active");

    // v2 : 클릭한 녀석의 부모의 자식에게 명령

    //$this.parent().children(".active").removeClass("active");

    // v3 : 나를 제외한 형제들

    $this.siblings(".active").removeClass("active");

    $this.addClass("active");
  });
}

FloorInfoBox__init();

/*
function SliderBox1__init() {
  const swiper = new Swiper(".slider-box-1 .swiper-container", {
    loop: true,
    effect: "fade",
    // If we need pagination
    pagination: {
      el: ".slider-box-1 .swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000, // 임시
    },
  });
}

SliderBox1__init();
*/

function SliderBox1__init(no) {
  const swiper = new Swiper(".slider-box-1-" + no + " .swiper-container", {
    loop: true,
    effect: "fade",
    // If we need pagination
    pagination: {
      el: ".slider-box-1-" + no + " .swiper-pagination",
      clickable: true,
    },
    observer: true,
    observeParents: true,
    autoplay: {
      delay: 3000, // 임시
    },
  });

  $(".slider-box-1-" + no).addClass("autoplay-started");
  $(".slider-box-1-" + no).removeClass("autoplay-stoped");

  $(".slider-box-1-" + no + " .slider-box-1__btn-pause").click(function () {
    $(".slider-box-1-" + no).removeClass("autoplay-started");
    $(".slider-box-1-" + no).addClass("autoplay-stoped");
    swiper.autoplay.stop();
  });

  $(".slider-box-1-" + no + " .slider-box-1__btn-resume").click(function () {
    $(".slider-box-1-" + no).addClass("autoplay-started");
    $(".slider-box-1-" + no).removeClass("autoplay-stoped");
    swiper.autoplay.start();
  });
}

SliderBox1__init(1);
SliderBox1__init(2);
SliderBox1__init(3);
SliderBox1__init(4);
