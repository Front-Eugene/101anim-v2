// ПСЕВДО СКРОЛЛ 

// let scrollableElement = document.getElementById("scrollable");
// let resizableElement = document.getElementById("resizable");

// scrollableElement.addEventListener("scroll", function() {
//   let scrollTop = scrollableElement.scrollTop;
//   let scrollHeight = scrollableElement.scrollHeight - scrollableElement.clientHeight;
//   let scrollPercentage = (scrollTop / scrollHeight) * 100;

//   resizableElement.style.height = scrollPercentage + "%";
// });



// ПСЕВДО СКРОЛЛ
    let body = document.body;
    let resizableElement = document.getElementById("resizable");
    
    window.addEventListener("scroll", function() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let scrollHeight = body.scrollHeight - window.innerHeight;
      // let incrementalFactor = 2.35;
      let incrementalFactor = 3; 
      let scrollPercentage = ((scrollTop - 100) / scrollHeight) * 100;
      let scrollPercentageFast = ((scrollTop - 700) / scrollHeight) * 100 * incrementalFactor;
      // let arrows = document.querySelector('.arrow-wrap');
      resizableElement.style.height = 1 + "%";

      if (scrollPercentage >= 11) {
        resizableElement.style.height = scrollPercentageFast + "%";
      }

      // if (scrollPercentage >= 67) {
      //   arrows.classList.add('arrow-wrap-active')
      // } else arrows.classList.remove('arrow-wrap-active')

      // if (scrollPercentage >= 67) {
      //   arrows.style.width = scrollPercentage + "%";
      //   // arrows.style.scale = "1";
      // }

      // if (scrollPercentage >= 68) {
      //   // arrows.style.scale = "1.05";
      // } 

      // if (scrollPercentage >= 70) {
      //   // arrows.style.scale = "1.10";
      // } 

      // if (scrollPercentage >= 75) {
      //   // arrows.style.scale = "1.15";
      // } 

      // if (scrollPercentage >= 80) {
      //   // arrows.style.scale = "1.2";
      // } 

      // if (scrollPercentage >= 85) {
      //   arrows.style.scale = "2";
      // } else arrows.style.scale = "1";

      // if (scrollPercentage >= 85.1) {
      //   arrows.classList.add('arrow-wrap-none')
      // } else arrows.classList.remove('arrow-wrap-none')
    });

// ПСЕВДО СКРОЛЛ

// ИЗМЕНЕНИЕ ВЕРТИКАЛЬНОГО СЛАЙДЕРА

      document.addEventListener("DOMContentLoaded", function() {
        let body = document.body;
    
        function calculateScrollPercentage() {
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          let scrollHeight = body.scrollHeight - window.innerHeight;
          let scrollPercentage = (scrollTop / scrollHeight) * 100;
          let resizableElement = document.getElementById("resizable");
          const currentHeight = parseInt(resizableElement.style.height, 10);
          let item1 = document.querySelector('.perks-item-1');
          let item2 = document.querySelector('.perks-item-2');
          let item3 = document.querySelector('.perks-item-3');
    
          // if (scrollPercentage >= 14) {
          if (currentHeight < 33) {
            item1.classList.add('perks-item-active')
          }   

          if (currentHeight > 33) {
            item2.classList.add('perks-item-active')
            item1.classList.remove('perks-item-active')
          } 

          // if (scrollPercentage <= 14) {
          if (currentHeight < 33) {
            item2.classList.add('opacity')
            item2.classList.remove('perks-item-active');
          }

          if (currentHeight < 32) {
            item2.classList.add('opacity')
          }
    
          // if (scrollPercentage >= 20) {
            if (currentHeight > 66) {
            item3.classList.add('perks-item-active')
            setTimeout(function() {
              item2.classList.remove('perks-item-active');
            }, 500);
          }

          // if (scrollPercentage <= 20) {
          if (currentHeight < 66) {
            item3.classList.add('opacity')
            setTimeout(function() {
              item3.classList.remove('perks-item-active');
            }, 500);
          }
    
          requestAnimationFrame(calculateScrollPercentage);
        }
    
        calculateScrollPercentage();
      });
  
  // ИЗМЕНЕНИЕ ВЕРТИКАЛЬНОГО СЛАЙДЕРА



// ДОБАВЛЕНИЕ КЛАССА В УСЛУГАХ + arrows

function checkOverlap() {
  const title1 = document.querySelector(".services-item-wrap-2");
  const title2 = document.querySelector(".services-item-wrap-3");

  const title3 = document.querySelector(".title-wrap-1");
  const title4 = document.querySelector(".title-wrap-2");

  const trigger1 = document.getElementById('trigger1');
  const trigger2 = document.getElementById('trigger2');

  const rect1 = title1.getBoundingClientRect();
  const rect2 = title2.getBoundingClientRect();

  const triggerRect1 = trigger1.getBoundingClientRect();
  const triggerRect2 = trigger2.getBoundingClientRect();


  // ARROWS

    let arrows = document.querySelector('.arrow-wrap');
    let arrowsPosition = arrows.getBoundingClientRect();

    const trigText1 = document.getElementById('trigger-text-1');
    const trigText2 = document.getElementById('trigger-text-2');

    const TextPosition1 = trigText1.getBoundingClientRect();
    const TextPosition2 = trigText2.getBoundingClientRect();


    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollHeight = body.scrollHeight - window.innerHeight;    
    let scrollPercentage = ((scrollTop + 250) / scrollHeight) * 100 - 45 ;

    arrows.style.minWidth = "45rem";
    arrows.style.width = scrollPercentage+"%";

    if (
      arrowsPosition.right >= TextPosition1.left &&
      arrowsPosition.left <= TextPosition1.right &&
      arrowsPosition.bottom >= TextPosition1.top &&
      arrowsPosition.top <= TextPosition1.bottom
    ) { arrows.classList.add('arrow-wrap-active')
        arrows.style.Width = 70 + '%';
      }

      // let arrowLeft = document.querySelector('.arrow-left');
      // let arrowRight = document.querySelector('.arrow-right');

      if (
        arrowsPosition.right >= TextPosition2.left &&
        arrowsPosition.left <= TextPosition2.right &&
        arrowsPosition.bottom >= TextPosition2.top &&
        arrowsPosition.top <= TextPosition2.bottom
      ) { 
          arrows.style.scale = '1.5'
          arrows.style.opacity = '0'
        } else {
          arrows.style.scale = '1'
        arrows.style.opacity = '1'
        }
  // ARROWS

  if (
    triggerRect1.right >= rect1.left &&
    triggerRect1.left <= rect1.right &&
    triggerRect1.bottom >= rect1.top &&
    triggerRect1.top <= rect1.bottom
  ) { title3.classList.add('overlap')
      trigger1.style.height = 400 + 'px';
  } else {
    title3.classList.remove('overlap')
    trigger1.style.height = 200 + 'px';
  }

  if (
    triggerRect2.right >= rect2.left &&
    triggerRect2.left <= rect2.right &&
    triggerRect2.bottom >= rect2.top &&
    triggerRect2.top <= rect2.bottom
  ) { title4.classList.add('overlap')
      trigger2.style.height = 400 + 'px';
  } else {
    title4.classList.remove('overlap')
    trigger2.style.height = 200 + 'px';
  }
}

// Call the checkOverlap function whenever needed (e.g., on scroll, resize, etc.)
window.addEventListener('scroll', checkOverlap);
window.addEventListener('resize', checkOverlap);

// ДОБАВЛЕНИЕ КЛАССА В УСЛУГАХ  + arrows

