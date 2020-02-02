import '../scss/style.scss';

const mobileWidth = 320;
const miniDesktopWidth = 768;
const desktopWidth = 1440;

//var swiperList = document.querySelector('.swiper-container').swiper;
let slidesCountFunction = function(count){
  let slides = document.querySelectorAll('.brands__item'); 
  for(let i = 6; i <= slides.length-count; ++i){
    if(slides[i].classList.contains('none')){
      slides[i].classList.remove('none');
    } else {
      slides[i].classList.add('none');
    }

  }
}
let slidesCountFunctionType = function(count){
  let slides = document.querySelectorAll('.type-list__item'); 
  for(let i = 3; i <= slides.length-count; ++i){
    if(slides[i].classList.contains('none')){
      slides[i].classList.remove('none');
    } else {
      slides[i].classList.add('none');
    }

  }
}

let swiperValues = {
  
    slidesPerView: 'auto',
    slidesOffsetBefore: 16,
    slidesOffsetAfter: 16,
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }

    
};
if(window.innerWidth < miniDesktopWidth){
  let menuList;
  let brandList;
let typeList;
let priceList;
 
 brandList =  new Swiper('.slider-section__brands', swiperValues);
 typeList =  new Swiper('.slider-section__type-list', swiperValues);
 priceList =  new Swiper('.slider-section__price-list', swiperValues);
 menuList =  new Swiper('.menu', swiperValues);

}





let desktopResize = function(){
if (window.innerWidth >= desktopWidth) {
  slidesCountFunction(4);
} else if(window.innerWidth < desktopWidth){
  slidesCountFunction(6);
}
}
let desktopResizeType = function(){
  if (window.innerWidth >= desktopWidth) {
    slidesCountFunctionType(5);
  } else if(window.innerWidth < desktopWidth){
    slidesCountFunctionType(6);
  }
  }
desktopResize();
window.addEventListener('resize', desktopResize);
window.addEventListener('resize', desktopResizeType);

let swiperBtn = document.querySelector('.slider-section__btn');
let swiperBtnType = document.querySelector('.slider-section__btn-type');

swiperBtn.addEventListener('click', function(){
  let sliderSection = document.querySelector('.slider-section--brand');
  if(!sliderSection.classList.contains('slider-section--active')){
    sliderSection.classList.add('slider-section--active');
    
  } else {
    sliderSection.classList.remove('slider-section--active');
    
  }
  if(!swiperBtn.classList.contains('slider-section__btn-brand--rotate')){
    swiperBtn.classList.add('slider-section__btn--rotate');
    swiperBtn.innerText = "Скрыть";
  } else {
    swiperBtn.classList.remove('slider-section__btn--rotate');
    swiperBtn.innerText = "Показать все";
  }

  slidesCountFunction(0);

});
swiperBtnType.addEventListener('click', function(){
  let sliderSection = document.querySelector('.slider-section--type');
  if(!sliderSection.classList.contains('slider-section--type--active')){
    sliderSection.classList.add('slider-section--type--active');
    
  } else {
    sliderSection.classList.remove('slider-section--type--active');
    
  }
  if(!swiperBtnType.classList.contains('slider-section__btn-type--rotate')){
    swiperBtnType.classList.add('slider-section__btn-type--rotate');
    swiperBtnType.innerText = "Скрыть";
  } else {
    swiperBtnType.classList.remove('slider-section__btn-type--rotate');
    swiperBtnType.innerText = "Показать все";
  }

  slidesCountFunctionType(0);

});
  let readNextBtn = document.querySelector('.read-next__btn');
  readNextBtn.addEventListener('click', function(){
    if(!readNextBtn.classList.contains('read-next__btn--rotate')){
      readNextBtn.classList.add('read-next__btn--rotate');
      readNextBtn.innerText = "Скрыть";
    } else {
      readNextBtn.classList.remove('read-next__btn--rotate');
      readNextBtn.innerText = "Читать далее";
    }
    let paragraphs = document.querySelectorAll('.text'); 
    for(let i = 2; i <= paragraphs.length; ++i){
    if(paragraphs[i].classList.contains('none')){
      paragraphs[i].classList.remove('none');
    } else {
      paragraphs[i].classList.add('none');
    }

  }
  
  });
  let modalCloseBtnContacts = document.querySelector('.modal__btn--contacts');
  let modalCloseBtnCall = document.querySelector('.modal__btn--call');
  
  let modalBtnContacts = document.querySelector('.circle-btn--phone-regular');
  let modalBtnCall = document.querySelector('.circle-btn--chat-regular');
  
  let modalBtnContactsModal = document.querySelector('.circle-btn--phone-modal');
  let modalBtnCallModal = document.querySelector('.circle-btn--chat-modal');
  let modalContacts = document.querySelector('.modal--contacts');
  let modalCall = document.querySelector('.modal--call');
  let body = document.querySelector('body');
  let bodyOverlay = document.querySelector('.body--overlay');
  
  let navList = document.querySelector('.nav');
  
let openNavBtn = document.querySelector('.open-nav-btn');
let navOverlay = document.querySelector('.nav-overlay');
let navCircleBtnClose = document.querySelector('.circle-btn--close-modal');
navCircleBtnClose.addEventListener('click', function(){
if (!navList.classList.contains('nav--hidden')) {
  navList.classList.add('nav--hidden');
  body.classList.remove('nav-overlay');
}

});
openNavBtn.addEventListener('click', function(){
  if (navList.classList.contains('nav--hidden')) {
    navList.classList.remove('nav--hidden');
    body.classList.add('nav-overlay');
  }

  });
  modalBtnContacts.addEventListener('click', function(){
    if (modalContacts.classList.contains('modal--contacts-closed')) {
      body.classList.add('body--overlay');
    modalContacts.classList.remove('modal--contacts-closed');
  }
  });
  modalBtnCall.addEventListener('click', function(){
    if (modalCall.classList.contains('modal--call-closed')) {
      modalCall.classList.remove('modal--call-closed');
  }
  if (!body.classList.contains('body--overlay')) {
    body.classList.add('body--overlay');
  }
  });
  modalBtnContactsModal.addEventListener('click', function(){
    if (modalContacts.classList.contains('modal--contacts-closed')) {
    modalContacts.classList.remove('modal--contacts-closed');
  }
  if (!body.classList.contains('body--overlay')) {
    body.classList.add('body--overlay');
  }
  });
  modalBtnCallModal.addEventListener('click', function(){
    if (modalCall.classList.contains('modal--call-closed')) {
      modalCall.classList.remove('modal--call-closed');
  }
  if (!body.classList.contains('body--overlay')) {
    body.classList.add('body--overlay');
  }
  });
  modalCloseBtnContacts.addEventListener('click', function(){
    if (!modalContacts.classList.contains('modal--contacts-closed')) {
      modalContacts.classList.add('modal--contacts-closed');
    }
    if (body.classList.contains('body--overlay')) {
      body.classList.remove('body--overlay');
    }
  });
  modalCloseBtnCall.addEventListener('click', function(){
    if (!modalCall.classList.contains('modal--call-closed')) {
      modalCall.classList.add('modal--call-closed');
    }
    if (body.classList.contains('body--overlay')) {
      body.classList.remove('body--overlay');
    }
  });
  
    bodyOverlay.addEventListener('click', function(){
    if (body.classList.contains('body--overlay')) {
      body.classList.remove('body--overlay');
      modalCall.classList.add('modal--call-closed');
      modalContacts.classList.add('modal--contacts-closed');
    }
  });
