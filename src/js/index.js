import '../scss/style.scss';

const miniDesktopWidth = 768;

//var swiperList = document.querySelector('.swiper-container').swiper;
let slidesCountFunction = function(startNumber, name, count){
  let slides = document.querySelectorAll(name); 
  for(let i = startNumber; i <= slides.length-count; ++i){
    if(slides[i].classList.contains('none')){
      slides[i].classList.remove('none');
    } else {
      slides[i].classList.add('none');
    }

  }
}
slidesCountFunction(6, '.brands__item');
slidesCountFunction(3, '.type-list__item');
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
let brandList =  new Swiper('.slider-section__brands', swiperValues);
let typeList =  new Swiper('.slider-section__type-list', swiperValues);
let priceList =  new Swiper('.slider-section__price-list', swiperValues);
let menuList =  new Swiper('.menu', swiperValues);
}

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
    swiperBtn.classList.add('slider-section__btn-brand--rotate');
    swiperBtn.innerText = "Скрыть";
  } else {
    swiperBtn.classList.remove('slider-section__btn--rotate');
    swiperBtn.classList.remove('slider-section__btn-brand--rotate');
    swiperBtn.innerText = "Показать все";
  }

  slidesCountFunction(6, '.brands__item', 0);

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

  slidesCountFunction(3, '.type-list__item', 0);

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
  let body = document.querySelector('.hidden-overlay');
  let bodyOverlay = document.querySelector('.body--overlay');
  
  let navList = document.querySelector('.nav');
  
let openNavBtn = document.querySelector('.open-nav-btn');
let navOverlay = document.querySelector('.nav-overlay');
let navCircleBtnClose = document.querySelector('.circle-btn--close-modal');

navCircleBtnClose.addEventListener('click', function(){
if (!navList.classList.contains('nav--hidden')) {
  navList.classList.add('nav--hidden');
  body.classList.remove('body--overlay');
}

});
openNavBtn.addEventListener('click', function(){
  if (navList.classList.contains('nav--hidden')) {
    navList.classList.remove('nav--hidden');
    body.classList.add('body--overlay');
  }

  });
  modalBtnContacts.addEventListener('click', function(){
    if (modalContacts.classList.contains('modal--contacts-closed')) {
      body.classList.add('body--overlay');
      modalContacts.classList.remove('modal--contacts-closed');
      if (!modalCall.classList.contains('modal--call-closed')) {
        modalCall.classList.add('modal--call-closed');
      }
      if (!navList.classList.contains('nav--hidden')) {
        navList.classList.add('nav--hidden');
        body.classList.add('body--overlay');
      }
  }
  });
  modalBtnCall.addEventListener('click', function(){
    if (modalCall.classList.contains('modal--call-closed')) {
      modalCall.classList.remove('modal--call-closed');
      if (!modalContacts.classList.contains('modal--contacts-closed')) {
        modalContacts.classList.add('modal--contacts-closed');
      }
      if (!navList.classList.contains('nav--hidden')) {
        navList.classList.add('nav--hidden');
        body.classList.remove('body--overlay');
      }
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
  

  
    body.addEventListener('click', function(){
      if (body.classList.contains('body--overlay')) {
        body.classList.remove('body--overlay');     
      }
      if (!modalCall.classList.contains('modal--call-closed')) {
        modalCall.classList.add('modal--call-closed');
      }
      if (!modalContacts.classList.contains('modal--contacts-closed')) {
        modalContacts.classList.add('modal--contacts-closed');
      }
      if (!navList.classList.contains('nav--hidden')) {
        navList.classList.add('nav--hidden');
      }
    });