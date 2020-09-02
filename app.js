/*СЛАЙДЕР ABOUT US*/
/* Индекс слайда по умолчанию */
let itemIndexMain = 1;

showSlidesMain(itemIndexMain);

/* Устанавливает текущий слайд */
function currentSlideMain(n) {
    showSlidesMain(itemIndexMain = n);
}

/* Основная функция слайдера */
function showSlidesMain(n) {
    let i;
    const item = document.getElementsByClassName("main-slider__item");
    const dots = document.getElementsByClassName(" main-slider-dots__item--main");
    if (n > item.length) {
        itemIndexMain = 1      //переход на следующий слайд
    }
    if (n < 1) {
        itemIndexMain = item.length     //переход с последнего сдайда на первий 
    }
    for (i = 0; i < item.length; i++) {
        item[i].style.display = "none";   // убираем все слайди
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");   //замена активной точки на не активную
    }
    item[itemIndexMain - 1].style.display = "block";  // выводим слайд
    dots[itemIndexMain - 1].className += " active";   // активируем точку

}

/*СЛАЙДЕР what they says*/
let itemIndexWts = 1;

showSlidesWts(itemIndexWts);

/* Устанавливает текущий слайд */
function currentSlideWts(n) {
    showSlidesWts(itemIndexWts = n);
}
/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlidesWts(itemIndexWts += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlidesWts(itemIndexWts -= 1);
}

/* Основная функция слайдера */
function showSlidesWts(n) {
    let i;
    const item = document.getElementsByClassName("wts-slider__item");
    const dots = document.getElementsByClassName(" main-slider-dots__item--wts");
    if (n > item.length) {
        itemIndexWts = 1    //  переход на следующий слайд
    }
    if (n < 1) {
        itemIndexWts = item.length    // переход с последнего сдайда на первий 
    }
    for (i = 0; i < item.length; i++) {
        item[i].style.display = "none";   // убираем все слайди
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); //  замена активной точки на не активную
    }
    item[itemIndexWts - 1].style.display = "block"; //  выводим слайд
    dots[itemIndexWts - 1].className += " active";  //активируем точку

}

/*ДЛЯ SERVICES*/

const first = document.querySelector('.some-row__item--first');
const second = document.querySelector('.some-row__item--second');
const third = document.querySelector('.some-row__item--third');
const fourth = document.querySelector('.some-row__item--fourth');
const fifth = document.querySelector('.some-row__item--fifth');
const sixth = document.querySelector('.some-row__item--sixth');

const popup = document.querySelectorAll('.popup');

const knowMore = document.querySelectorAll('#know-more');
const close = document.querySelectorAll('#close');

/*ОТКРЫТИЕ POPUP*/
knowMore.forEach((item) => {
    item.addEventListener('click', () => {
        if (first.contains(item) == true) {      ///проверка на наличия елемента(item) в блока firts
            popup[0].style.visibility = 'visible';    ///откритие popup 
        };
        if (second.contains(item) == true) {
            popup[1].style.visibility = 'visible';
        };
        if (third.contains(item) == true) {
            popup[2].style.visibility = 'visible';
        };
        if (fourth.contains(item) == true) {
            popup[3].style.visibility = 'visible';
        };
        if (fifth.contains(item) == true) {
            popup[4].style.visibility = 'visible';
        };

        if (sixth.contains(item) == true) {
            popup[5].style.visibility = 'visible';
        };
    });
});

/*ЗАКРЫТИЕ POPUP*/
close.forEach((item) => {
    item.addEventListener('click', () => {

        if (first.contains(item) == true) {                    ///проверка на наличия елемента(item) в блока firts
            item.closest('.popup').style.visibility = 'hidden';    ///закритие popup 
        };

        if (second.contains(item) == true) {
            item.closest('.popup').style.visibility = 'hidden';
        };
        if (third.contains(item) == true) {
            item.closest('.popup').style.visibility = 'hidden';
        };
        if (fourth.contains(item) == true) {
            item.closest('.popup').style.visibility = 'hidden';
        };
        if (fifth.contains(item) == true) {
            item.closest('.popup').style.visibility = 'hidden';
        };
        if (sixth.contains(item) == true) {
            item.closest('.popup').style.visibility = 'hidden';
        };
    });
});

/*SIDE - BAR*/
function openNav() {
    if (document.documentElement.clientWidth <= 576) {
        document.getElementById("sideBar").style.width = "100%";
    }
    else {
        document.getElementById("sideBar").style.width = "300px";
    }
}

function closeNav() {
    document.getElementById("sideBar").style.width = "0";
}
