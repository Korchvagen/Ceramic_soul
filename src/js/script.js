import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import JustValidate from 'just-validate';

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

try {
  const contactFormValidator = new JustValidate('.contact__form');

  contactFormValidator
    .addField('#name', [
      {
        rule: 'required',
        errorMessage: 'Please fill the name!',
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Min 2 char!',
      }
    ])
    .addField('#email', [
      {
        rule: 'required',
        errorMessage: 'Please fill the email!',
      },
      {
        rule: 'email',
      }
    ]).addField('#question', [
      {
        rule: 'required',
        errorMessage: 'Please fill the question!',
      },
      {
        rule: 'minLength',
        value: 5,
        errorMessage: 'Min 5 char!',
      }
    ], {
      errorsContainer: document.querySelector('.question-error-message'),
    })
    .addField('#checkbox', [
      {
        rule: 'required',
        errorMessage: 'Please check the checkbox!',
      },
    ], {
      errorsContainer: document.querySelector('.checkbox-error-message'),
    })
    .onSuccess((event) => {
      const form = event.currentTarget;
      const formData = new FormData(form);
      
      fetch("https://httpbin.org/post", {
        method: "POST",
        body: formData,
      })
      .then(res => res.json())
      .then(data => {
        console.log('Success', data);
        form.reset();
      });
    });
} catch (e) {

}

try {
  const footerFormValidator = new JustValidate('.footer__form');

  footerFormValidator
    .addField('#footer__email', [
      {
        rule: 'required',
        errorMessage: 'Please fill the email!',
      },
      {
        rule: 'email',
      }
    ], {
      errorsContainer: document.querySelector('.footer-email-error'),
    })
    .addField('#foote__checkbox', [
      {
        rule: 'required',
        errorMessage: 'Please check the checkbox!',
      },
    ], {
      errorsContainer: document.querySelector('.footer-checkbox-error'),
    })
    .onSuccess((event) => {
      event.currentTarget.submit();
    })
    .onSuccess((event) => {
      const form = event.currentTarget;
      const formData = new FormData(form);

      fetch("https://httpbin.org/post", {
        method: "POST",
        body: formData,
      })
        .then(res => res.json())
        .then(data => {
          console.log('Success', data);
          form.reset();
        });
    });
} catch (e) {

}