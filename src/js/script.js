import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "/src/sass/style.scss";

const burger = document.querySelector(".burger"),
  menu = document.querySelector(".header__menu"),
  body = document.querySelector("body");

burger.addEventListener("click", () => {
  menu.classList.toggle("header__menu_active");
  burger.classList.toggle("burger_active");
  body.classList.toggle("active");
});

try {
  new Swiper('.works__slider', {
    loop: true,
    navigation: {
      nextEl: ".icon-right-open",
      prevEl: ".icon-left-open"
    },
    breakpoints: {
      360: {
        slidesPerView: 1
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 5
      },
      1920: {
        spaceBetween: 35
      }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    modules: [Navigation, Pagination]
  });
} catch (e) { }

try {
  const tabs = document.querySelectorAll(".catalog__tab");
  const contents = document.querySelectorAll(".catalog__content-item");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("catalog__tab_active"));
      contents.forEach((c) => (c.classList.remove("catalog__content-item_active")));

      tab.classList.add("catalog__tab_active");
      contents[index].classList.add("catalog__content-item_active");
    });
  });

  contents.forEach((c, i) => (i === 0 ? c.classList.add("catalog__content-item_active") : c.classList.remove("catalog__content-item_active")));
} catch (e) { }